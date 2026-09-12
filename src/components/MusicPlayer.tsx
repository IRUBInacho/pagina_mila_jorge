import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<number | null>(null);

  // Soft classical romantic arpeggio notes (F major / D minor romantic waltz progression)
  // F3, A3, C4, E4, G4, A4, D4, etc.
  const notes = [
    174.61, 220.0, 261.63, 329.63, 349.23, 440.0,
    196.0, 246.94, 293.66, 392.0, 440.0, 493.88,
    146.83, 220.0, 261.63, 349.23, 440.0, 523.25,
    164.81, 196.0, 246.94, 329.63, 392.0, 493.88
  ];

  const playTone = (freq: number, duration: number = 2.2) => {
    if (!audioCtxRef.current) return;
    const ctx = audioCtxRef.current;
    
    // Main warm oscillator (sine + slight triangle for warm acoustic upright tone)
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    // Warm envelope
    gainNode.gain.setValueAtTime(0.0001, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.08);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

    // Subtle lowpass filter for silky soft felt-piano warmth
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(1200, ctx.currentTime);

    osc.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
  };

  const toggleMusic = () => {
    if (isPlaying) {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setIsPlaying(false);
    } else {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioCtx();
      }
      if (audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume();
      }

      let step = 0;
      // Play immediately
      playTone(notes[0]);
      
      intervalRef.current = window.setInterval(() => {
        step = (step + 1) % notes.length;
        playTone(notes[step], 1.8);
      }, 700);

      setIsPlaying(true);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <button
      id="music-toggle-button"
      onClick={toggleMusic}
      title={isPlaying ? "Silenciar música de fondo" : "Reproducir melodía romántica"}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/90 border border-[#DDD6C9] shadow-md hover:bg-white text-[#3E3A36] transition-all duration-300 hover:shadow-lg active:scale-95 group backdrop-blur-md"
      aria-label="Música de fondo"
    >
      <div className="relative flex items-center justify-center w-5 h-5">
        {isPlaying ? (
          <Volume2 className="w-4 h-4 text-[#8C8275] animate-pulse" />
        ) : (
          <VolumeX className="w-4 h-4 text-[#8C8275]" />
        )}
      </div>

      <span className="font-display text-[11px] tracking-[0.2em] uppercase text-[#4A453F]">
        {isPlaying ? "Música Activa" : "Música"}
      </span>

      {isPlaying && (
        <div className="flex items-end gap-[2px] h-3.5 ml-1">
          <span className="w-[2px] h-2 bg-[#8C8275] rounded-full animate-bounce [animation-delay:0ms]" />
          <span className="w-[2px] h-3.5 bg-[#8C8275] rounded-full animate-bounce [animation-delay:150ms]" />
          <span className="w-[2px] h-1.5 bg-[#8C8275] rounded-full animate-bounce [animation-delay:300ms]" />
        </div>
      )}
    </button>
  );
}

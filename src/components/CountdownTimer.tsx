import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  // Target: November 7, 2026, 16:30:00 (Chile local time UTC-3)
  const targetDate = new Date("2026-11-07T16:30:00-03:00").getTime();

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const items = [
    { label: "DÍAS", value: timeLeft.days },
    { label: "HORAS", value: timeLeft.hours },
    { label: "MINUTOS", value: timeLeft.minutes },
    { label: "SEGUNDOS", value: timeLeft.seconds },
  ];

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-8 my-6">
      {items.map((item, index) => (
        <div key={item.label} className="flex items-center">
          <div className="flex flex-col items-center min-w-[64px] sm:min-w-[80px] p-2 sm:p-3 rounded border border-[#E5E0D6] bg-white/70 shadow-xs backdrop-blur-xs">
            <span className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#2B2825] font-light tracking-tight">
              {String(item.value).padStart(2, "0")}
            </span>
            <span className="font-display text-[9px] sm:text-[10px] tracking-[0.25em] text-[#8A8174] uppercase mt-1">
              {item.label}
            </span>
          </div>
          {index < items.length - 1 && (
            <span className="font-serif text-lg sm:text-xl text-[#C8C0B2] ml-3 sm:ml-6 md:ml-8 font-light select-none">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

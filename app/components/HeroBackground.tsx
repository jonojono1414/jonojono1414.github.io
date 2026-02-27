import { useEffect, useState } from "react";
import PestSvg from "./PestSvg";
import { pests } from "../data/pests";

export default function HeroBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Select a few specific pests or random ones to display
  const bugsToDisplay = [
    { id: "kuro-gokiburi", size: 100, x: "10%", y: "20%", duration: "25s", delay: "0s", direction: 1, rotate: 45 },
    { id: "hitosujishimaka", size: 80, x: "80%", y: "30%", duration: "20s", delay: "2s", direction: -1, rotate: -20 },
    { id: "suzumebachi", size: 120, x: "25%", y: "70%", duration: "30s", delay: "5s", direction: 1, rotate: 15 },
    { id: "kamadouma", size: 90, x: "70%", y: "80%", duration: "22s", delay: "1s", direction: -1, rotate: -45 },
    { id: "ashidakagumo", size: 130, x: "40%", y: "15%", duration: "35s", delay: "4s", direction: 1, rotate: 90 },
    { id: "iebae", size: 70, x: "60%", y: "50%", duration: "18s", delay: "3s", direction: -1, rotate: 0 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay">
        {bugsToDisplay.map((bug, i) => (
          <div
            key={i}
            className="absolute pest-float"
            style={{
              left: bug.x,
              top: bug.y,
              width: bug.size,
              height: bug.size,
              // Setup CSS variables for the animation
              "--float-duration": bug.duration,
              "--float-delay": bug.delay,
              "--float-direction": bug.direction,
              "--base-rotate": `${bug.rotate}deg`,
            } as React.CSSProperties}
          >
            <PestSvg id={bug.id} size={bug.size} />
          </div>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes pestFloatAndMove {
          0% {
            transform: translate(0, 0) rotate(var(--base-rotate));
          }
          25% {
            transform: translate(calc(30px * var(--float-direction)), 20px) rotate(calc(var(--base-rotate) + 10deg));
          }
          50% {
            transform: translate(calc(60px * var(--float-direction)), -10px) rotate(calc(var(--base-rotate) - 5deg));
          }
          75% {
            transform: translate(calc(30px * var(--float-direction)), -30px) rotate(calc(var(--base-rotate) + 5deg));
          }
          100% {
            transform: translate(0, 0) rotate(var(--base-rotate));
          }
        }
        
        .pest-float {
          animation: pestFloatAndMove var(--float-duration) ease-in-out infinite;
          animation-delay: var(--float-delay);
          filter: grayscale(100%) brightness(0) invert(1);
        }
      `}</style>
    </div>
  );
}

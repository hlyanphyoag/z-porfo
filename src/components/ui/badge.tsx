import { cn } from "../../lib/utils";

export function Badge({children} : {children: React.ReactNode}) {
  return (
    <div className="relative w-16 h-16">
      {/* Main circular badge */}
      <div
        className={cn(
          "w-full h-full flex items-center justify-center rounded-full font-bold text-lg",
          "text-[rgba(213,207,229,1)]",
          "bg-[radial-gradient(circle_at_center,_#1e1e1e_0%,_#000_100%)]",
          "border-[0.84px] border-solid border-transparent",
          "backdrop-blur-[25.2px]",
          "border-image-[linear-gradient(180deg,_#7D7D7D_-11.69%,_rgba(30,30,30,0)_248.28%)]",
          "border-image-slice-[1]"
        )}
      >
        {children}
      </div>

      {/* Perfectly curved bottom arc */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 64 64"
        fill="none"
      >
        <path
          d="M16 59 A16 4 0 0 0 48 59"
          stroke="url(#arcGradient)"
          strokeWidth="2"
          fill="none"
        />
        <defs>
          <linearGradient
            id="arcGradient"
            x1="16"
            y1="56"
            x2="48"
            y2="56"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#7A87FB" />
            <stop offset="100%" stopColor="#FFD49C" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

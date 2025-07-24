import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { Spotlight } from "../ui/spotlight";

export function GridBackgroundDemo() {
  return (
<div className="relative w-full h-[34rem] overflow-hidden bg-black">
  {/* Grid background */}
  <div
    className={cn(
      "absolute inset-0 z-0",
      "[background-size:40px_40px]",
      "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
    )}
  />

  {/* Radial fade overlay (optional) */}
  <div className="pointer-events-none absolute inset-0 z-10 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />



  {/* Hero content */}
  <div className="relative z-20 flex flex-col items-center justify-center h-[34rem] text-center px-4">
  <Spotlight  
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
  />
    <h1 className="text-4xl sm:text-6xl font-bold text-white">
      I design and build clean websites
    </h1>
    <p className="mt-6 text-neutral-400 text-sm sm:text-base max-w-xl mb-4">
      Write anything here something about yourself to showcase what actually you doing or targeting etc.
    </p>

    <Button>Hire me</Button>
  </div>
</div>


  );
}

"use client";
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "../../lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    // icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);
  const [itemId, setItemId] = useState(1)

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (direction < 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "fixed top-10 inset-x-0 mx-auto z-[5000] flex justify-center items-center",
            className
          )}
        >
          {/* Gradient border wrapper */}
          <div className="relative p-[1.5px] rounded-full bg-[linear-gradient(269.57deg,_#7A87FB_0.72%,_#FFD49C_99.22%)]">
            {/* Inner black background */}
            <div className="flex items-center space-x-4 bg-black rounded-full px-8 py-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              {navItems.map((navItem: any, idx: number) => {
                const active = itemId === navItem.id
                return (
                  <div>
                    {active ? (<button onClick={() => {
                      window.location.href = navItem.link;
                      setItemId(navItem.id)
                    }} className="border cursor-pointer text-sm font-medium relative border-white/[0.2] text-white px-4 py-2 rounded-full">
                      <span>{navItem.name}</span>
                      <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
                    </button>) : <a
                      key={`link=${idx}`}
                      onClick = {() => setItemId(navItem.id)}
                      href={`${navItem.link}`}
                      className="relative text-neutral-50 items-center flex space-x-1 hover:text-neutral-300"
                    >
                      <span className="block sm:hidden">{navItem.icon}</span>
                      <span className="hidden sm:block text-sm">
                        {navItem.name}
                      </span>
                    </a>}

                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

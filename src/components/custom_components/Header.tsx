"use client";
import { useEffect } from "react";
import { Button } from "../ui/button";
import { FloatingNav } from "../ui/navbar-menu";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
export function FloatingNavDemo() {
  const navItems = [
    { 
      id: 1,
      name: "Home",
      link: "/#home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    { 
      id: 2,
      name: "About",
      link: "/#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    { 
      id: 3,
      name: "Projects",
      link: "/#projects",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    { 
      id: 4,
      name: "Contact",
      link: "/#contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  useEffect(() => {
    window.location.href = "/#home";
  },[])

  return (
    <div className="relative w-full flex items-center justify-between">
      <div className="flex gap-x-2 mt-1">
        <img src='/logo.png' alt="" className="w-6 h-6"/>
        <img src="/znisa.png" alt="" className="w-12 h-6" />
      </div>
      <FloatingNav navItems={navItems} />
      <div className="h-28"></div>
      <div className="flex space-x-2">
      <Button>Hire me</Button>
      <Button>
        <IconUser className="h-5 w-5"/>
      </Button>
      </div>
    </div>
  );
}

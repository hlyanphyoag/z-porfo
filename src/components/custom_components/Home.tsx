import { Marquee } from "../ui/movingcard";
import { FloatingNavDemo } from "./Header";
import { GridBackgroundDemo } from "./HeroSection";

const Home = () => {
  return (
    <section id="home">
      <div className="px-26">
        <FloatingNavDemo />
        <GridBackgroundDemo />
      </div>
      <div className="h-20 flex items-center border border-[#rgba(255, 255, 255, 0.25)] border-x-0 px-26">
        <ul className="flex w-full justify-between text-lg font-semibold">
          <Marquee pauseOnHover className="[--duration:20s] [--gap:6rem]">
            <li>Framer</li>
            <img src="/vector.png" alt="" className="w-6 h-6" />
            <li>Webflow</li>
            <img src="/vector.png" alt="" className="w-6 h-6" />
            <li>Figma</li>
            <img src="/vector.png" alt="" className="w-6 h-6" />
            <li>Notion</li>
            <img src="/vector.png" alt="" className="w-6 h-6" />
          </Marquee>
        </ul>
      </div>
    </section>
  );
};

export default Home;

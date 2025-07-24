import { IconSparkles } from '@tabler/icons-react';
import { BoxReveal } from '../ui/reveal';

const steps = [
  {
    step: 1,
    title: 'Product design Research',
    description:
      'This initial step involves a systematic and thorough exploration of the market landscape, user needs, and existing solutions.',
    bgColor: 'from-purple-500 to-pink-500',
    showButton: true,
  },
  {
    step: 2,
    title: 'UI design in Figma',
    description:
      'Transform insights into pixel-perfect interfaces. Wireframes, design systems, and interactive prototypes are crafted here.',
    bgColor: 'from-blue-500 to-purple-500',
    showButton: false,
  },
  {
    step: 3,
    title: 'No-code development in Webflow',
    description:
      'Bring the designs to life with clean, responsive Webflow builds—no custom code needed.',
    bgColor: 'from-orange-500 to-pink-500',
    showButton: false,
  },
];

const ProcessSection = () => {
  return (
    <section id="about" className="relative z-10 px-8 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold mb-20 flex items-center">
          My process to design
          <IconSparkles className="w-8 h-8 ml-6" />
        </h2>

        <div className="space-y-20">
          {steps.map(({ step, title, description, bgColor, showButton }) => (
            <div key={step} className="flex items-start space-x-12">
              {/* left timeline */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border-2 border-gray-600 flex items-center justify-center text-xl font-bold">
                  {step}
                </div>
                {/* vertical line (hide on last step) */}
                {step < steps.length && (
                  <div className="w-px h-40 bg-gray-600 mt-6"></div>
                )}
              </div>

              {/* content */}
              <div className="flex-1">
                <div
                  className={`w-20 h-20 rounded-full bg-gradient-to-br ${bgColor} mb-6`}
                />
                <BoxReveal boxColor={"#5046e6"} duration={0.6}>
                    <h3 className="text-3xl font-bold mb-6">{title}</h3>
                </BoxReveal>
                <BoxReveal boxColor={"#5046e6"} duration={0.6}>
                <p className="text-gray-400 mb-8 max-w-2xl text-lg leading-relaxed">
                  {description}
                </p>
                </BoxReveal>
                {showButton && (
                  <button className="border border-gray-600 hover:border-gray-500 px-8 py-3 rounded-full text-sm transition-colors">
                    See Examples
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
import { IconSparkles } from '@tabler/icons-react'
import GradientBorderCard from '../ui/GradientCard'

const Testemonial = () => {
  return (
    <section className="relative z-10 px-8 py-20">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold mb-16 flex items-center">
        Client testimonials 
        <IconSparkles className="w-8 h-8 ml-6" />
      </h2>

      <div className="p-8 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <GradientBorderCard key={item} />
          ))}
        </div>
      </div>
    </div>
  </section>
  )
}

export default Testemonial

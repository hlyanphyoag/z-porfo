import { IconSparkles } from "@tabler/icons-react"
import { Badge } from "../ui/badge"


const items = [1, 2, 3]
const ProjectSection = () => {
  return (
    <section id="projects" className="relative z-10 px-8 py-20">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-16 flex items-center">
        Some Featured projects 
        <IconSparkles className="w-8 h-8 ml-6" />
      </h2>

      <div className="flex flex-col gap-y-4 p-6">
  {items.map((i) => (
      <div key={i} className="flex bg-gray-800/30 rounded-2xl p-8">
        <div className="w-96 h-96 bg-gradient-to-br from-orange-300 via-pink-400 to-purple-400 rounded-xl" />
        <div className="flex items-center justify-between">
          <div className="h-5 text-gray-400 w-46" />
          <div className="flex flex-col gap-y-4">
            <Badge>{i}</Badge>
            <span className="text-gray-300 text-3xl font-medium">
              Project Name
            </span>
          </div>
        </div>
      </div>
  ))}
</div>
    </div>
  </section>
  )
}

export default ProjectSection

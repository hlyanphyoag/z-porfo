import { IconSparkles } from '@tabler/icons-react'
import { Button } from '../ui/button'

const ContactSection = () => {
  return (
    <section id='contact' className="flex justify-between z-10 px-20  py-20">
    <div className="max-w-6xl ml-28">
      
      <h2 className="text-5xl font-bold mb-8 flex items-center">
        Have idea about project? 
        <IconSparkles className="w-8 h-8 ml-6" />
      </h2>
      
      <div>
      <p className="text-gray-400 mb-12 max-w-2xl text-lg leading-relaxed">
        Write anything here something about yourself to showcase what actually you doing or targeting etc.
      </p>
      
      <Button>
        Send us a message
      </Button>
      </div>
    </div>
        <div className='mr-28'>
        <img src="/contact.png" alt="" className='w-64 h-64' />
        </div>
  </section>
  )
}

export default ContactSection


import { IconUser } from '@tabler/icons-react'
import { Button } from '../ui/button'
import { DockDemo } from './DemoDock'

const Footer = () => {
  return (
    <div className='flex justify-between items-center px-28 w-full mb-10 h-20'>
       <div className="flex gap-x-2 mt-1">
        <img src='/logo.png' alt="" className="w-6 h-6"/>
        <img src="/znisa.png" alt="" className="w-12 h-6" />
      </div>
      <div className='mb-8'>
        <DockDemo />
      </div>
      <div className="flex space-x-2">
      <Button>Hire me</Button>
      <Button>
        <IconUser className="h-5 w-5"/>
      </Button>
      </div>
    </div>
  )
}

export default Footer

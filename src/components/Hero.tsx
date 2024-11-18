import { Comfortaa } from 'next/font/google'
 
const comfortaa = Comfortaa({ subsets: [ 'latin' ]})

const Hero = () => {
  return (
    <div className={`${comfortaa.className} h-[calc(100vh-100px)] w-screen`}>
      <div className='mx-auto flex h-full w-10/12 items-center justify-between'>
        <div className='w-1/2'>
          <h1 className='mb-4 text-6xl'>
            Master Languages Through the Power of AI Stories
          </h1>
          <h2 className='text-xl'>
            Personalized tales in any language, tailored to your skill level. 
            Learn, practice, and grow with immersive storytelling.
          </h2>
        </div>
        <div className='flex w-1/2 items-center justify-center'>
          <img src="https://flowbite.com/docs/images/logo.svg" className="me-3 w-3/5" alt="FlowBite Logo" />
        </div>
      </div>
    </div>
  )
}

export default Hero

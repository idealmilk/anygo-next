import { Comfortaa } from 'next/font/google'
 
const comfortaa = Comfortaa({ subsets: [ 'latin' ]})

type PageHeaderProps = {
  header: string
  subheader: string
}

const PageHeader = ({ header, subheader }: PageHeaderProps) => {
  return (
    <div className={`${comfortaa.className} h-96 w-screen bg-[#1C2E3C]`}>
      <div className='mx-auto flex h-full w-10/12 max-w-screen-xl items-center justify-between'>
        <div className='w-1/2 text-white'>
          <h1 className='mb-4 text-5xl leading-snug'>
            {header}
          </h1>
          <h2 className='text-base'>
            {subheader}
          </h2>
        </div>
        <div className='flex w-1/2 items-center justify-center'>
          <img src="https://flowbite.com/docs/images/logo.svg" className="me-3 w-2/5" alt="FlowBite Logo" />
        </div>
      </div>
    </div>
  )
}

export default PageHeader

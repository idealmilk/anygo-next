import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  
  return (
    <nav className="fixed start-0 top-0 z-20 w-full border-b border-gray-200 bg-white">
      <div className="p-x4 mx-auto flex w-10/12 max-w-screen-xl flex-wrap items-center justify-between py-8">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center whitespace-nowrap text-2xl font-semibold">AnyGo</span>
        </Link>
        <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <button type="button" className="rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">Get started</button>
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex size-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="size-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto" id="navbar-sticky">
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse">
            <li>
              <Link 
                href="/about"
                className={`
                  block rounded bg-blue-700 px-3 py-2 text-gray-900 md:bg-transparent md:p-0
                  ${router.pathname.includes('/about') && 'text-blue-700'}
                `}
                aria-current="page"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/stories"
                className={`
                  block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700
                  ${router.pathname.includes('/stories') && 'text-blue-700'}
                `}
              >
                Stories
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`
                  block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700
                  ${router.pathname.includes('/blog') && 'text-blue-700'}
                `}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/forum"
                className={`
                  block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700
                  ${router.pathname.includes('/forum') && 'text-blue-700'}
                `}
              >
                Forum
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>


  )
}

export default Header

{/* <Link
            href="/about"
            classNameName={`
              rounded-2xl px-3 py-1 text-lg transition-all
              ${router.pathname.includes('/about') && 'bg-black text-white'}
            `}
          >
            About
          </Link> */}
        
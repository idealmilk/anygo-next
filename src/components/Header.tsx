import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  
  return (
    <header className="fixed top-0 z-10 w-screen border-b border-gray-400">
      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between py-10 text-sm text-black">
        <Link href="/">
          <p className="">
           AnyGo
          </p>
        </Link>
        <nav className="absolute left-1/2 flex -translate-x-1/2 items-center justify-center gap-4">
          <Link
            href="/about"
            className={`
              rounded-2xl px-3 py-1 text-lg transition-all
              ${router.pathname.includes('/about') && 'bg-black text-white'}
            `}
          >
            About
          </Link>
          <Link
            href="/stories"
            className={`
              rounded-2xl px-3 py-1 text-lg transition-all
              ${router.pathname.includes('/stories') && 'bg-black text-white'}
            `}
          >
            Stories
          </Link>
        </nav>
        <p className="">
          Login
        </p>
      </div>
    </header>

  )
}

export default Header

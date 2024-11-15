import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  
  return (
    <header className="fixed top-0 z-10 w-full border-b border-black p-3 text-sm text-black backdrop-blur-md">
      <div className="relative flex items-center justify-between">
        <Link href="/">
          <p className="">
           AnyGo
          </p>
        </Link>
        <nav className="absolute left-1/2 flex -translate-x-1/2 items-center justify-center gap-4">
          <Link href="/about" className={`rounded-2xl border border-black px-3 py-1 text-sm uppercase  transition-all hover:bg-black hover:text-white ${router.pathname.includes('/about') && 'bg-black text-white'}`}>
            About
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

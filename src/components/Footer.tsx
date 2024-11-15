import Link from 'next/link'
import { useRouter } from 'next/router'

const Footer = () => {
  const router = useRouter()
  
  return (
    <footer className="z-10 h-80 w-full bg-[#0F2D4A] p-3 text-sm text-white">
      <nav className="absolute left-1/2 flex -translate-x-1/2 items-center justify-center gap-4">
        <Link 
          href="/about"
          className={`
             text-sm uppercase  transition-all hover:text-white 
            ${router.pathname.includes('/about') && 'bg-black text-white'}
          `}
        >
          About
        </Link>
      </nav>
    </footer>

  )
}

export default Footer

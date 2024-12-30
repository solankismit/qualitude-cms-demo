import Link from 'next/link'
import Image from 'next/image'
import { SunIcon, CircuitBoardIcon } from 'lucide-react'

export default function Page() {
  return (
    <main className="min-h-screen w-full flex flex-col md:flex-row">
      <Link 
        href="/solar" 
        className="relative h-[50vh] md:h-screen md:w-1/2 group overflow-hidden border-b md:border-b-0 md:border-r border-white/10"
      >
        <Image
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1920&auto=format&fit=crop"
          alt="Solar panels field under blue sky"
          fill
          className="object-cover object-center transition-transform duration-700 ease-in-out md:group-hover:scale-110 brightness-75 md:brightness-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-transparent md:bg-gradient-to-br md:from-black/90 md:via-black/80 md:to-black/70 transition-all duration-700 ease-in-out md:group-hover:bg-black/60" />
        <div className="relative h-full flex flex-col items-center justify-center text-white p-6 text-center md:transition-transform md:duration-700 md:ease-in-out md:group-hover:scale-105">
          <div className="relative">
            <div className="absolute inset-0 blur-2xl bg-yellow-500/20 rounded-full" />
            <SunIcon className="relative w-12 h-12 md:w-16 md:h-16 mb-4 text-yellow-400 transition-all duration-700 ease-in-out md:group-hover:text-yellow-300" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">
            <span className="bg-gradient-to-r from-white to-white md:from-yellow-200 md:to-white bg-clip-text text-transparent">
              Qualitude Solar
            </span>
          </h1>
          <p className="text-base md:text-xl max-w-md text-white/90 md:opacity-80 md:group-hover:opacity-100">
            Powering a sustainable future through innovative solar solutions
          </p>
        </div>
      </Link>

      <Link 
        href="/technologies" 
        className="relative h-[50vh] md:h-screen md:w-1/2 group overflow-hidden"
      >
        <Image
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop"
          alt="Circuit board close up"
          fill
          className="object-cover object-center transition-transform duration-700 ease-in-out md:group-hover:scale-110 brightness-75 md:brightness-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent md:bg-gradient-to-br md:from-black/90 md:via-black/80 md:to-black/70 transition-all duration-700 ease-in-out md:group-hover:bg-black/60" />
        <div className="relative h-full flex flex-col items-center justify-center text-white p-6 text-center md:transition-transform md:duration-700 md:ease-in-out md:group-hover:scale-105">
          <div className="relative">
            <div className="absolute inset-0 blur-2xl bg-cyan-500/20 rounded-full" />
            <CircuitBoardIcon className="relative w-12 h-12 md:w-16 md:h-16 mb-4 text-cyan-400 transition-all duration-700 ease-in-out md:group-hover:text-cyan-300" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">
            <span className="bg-gradient-to-r from-white to-white md:from-cyan-200 md:to-white bg-clip-text text-transparent">
              Qualitude Technologies
            </span>
          </h1>
          <p className="text-base md:text-xl max-w-md text-white/90 md:opacity-80 md:group-hover:opacity-100">
            Driving digital transformation through cutting-edge technology
          </p>
        </div>
      </Link>
    </main>
  )
}


import Link from 'next/link'
import Image from 'next/image'
import { SunIcon, CircuitBoardIcon } from 'lucide-react'

export default function Page() {
  return (
    <main className="h-screen w-full flex flex-col md:flex-row">
      <Link 
        href="/solar" 
        className="relative h-1/2 md:h-full md:w-1/2 group overflow-hidden"
      >
        <Image
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1920&auto=format&fit=crop"
          alt="Solar panels field under blue sky"
          fill
          className="object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-110"
          priority
        />
        <div className="absolute inset-0 bg-blue-900/75 transition-all duration-700 ease-in-out group-hover:bg-blue-900/60" />
        <div className="relative h-full flex flex-col items-center justify-center text-white p-6 text-center transition-transform duration-700 ease-in-out group-hover:scale-105">
          <SunIcon className="w-16 h-16 mb-4 text-yellow-400 transition-transform duration-700 ease-in-out" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 transition-colors duration-700 ease-in-out group-hover:text-yellow-300">Qualitude Solar</h1>
          <p className="text-lg md:text-xl max-w-md transition-opacity duration-700 ease-in-out opacity-80 group-hover:opacity-100">
            Powering a sustainable future through innovative solar solutions
          </p>
        </div>
      </Link>

      <Link 
        href="/technologies" 
        className="relative h-1/2 md:h-full md:w-1/2 group overflow-hidden"
      >
        <Image
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop"
          alt="Circuit board close up"
          fill
          className="object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-110"
          priority
        />
        <div className="absolute inset-0 bg-blue-900/75 transition-all duration-700 ease-in-out group-hover:bg-blue-900/60" />
        <div className="relative h-full flex flex-col items-center justify-center text-white p-6 text-center transition-transform duration-700 ease-in-out group-hover:scale-105">
          <CircuitBoardIcon className="w-16 h-16 mb-4 text-cyan-400 transition-transform duration-700 ease-in-out " />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 transition-colors duration-700 ease-in-out group-hover:text-cyan-300">Qualitude Technologies</h1>
          <p className="text-lg md:text-xl max-w-md transition-opacity duration-700 ease-in-out opacity-80 group-hover:opacity-100">
            Driving digital transformation through cutting-edge technology
          </p>
        </div>
      </Link>
    </main>
  )
}


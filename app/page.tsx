import Link from 'next/link'
import Image from 'next/image'
import { SunIcon, CircuitBoardIcon, } from 'lucide-react'

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
            
            <svg className='relative w-12 h-12 md:w-16 md:h-16 mb-4 text-yellow-400 transition-all duration-700 ease-in-out md:group-hover:text-yellow-300'  xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="300" height="300" version="1.1" ><g width="100%" height="100%" transform="matrix(1,0,0,1,0,0)"><path d="m13,20h11.119l-1.86-7.024c-.464-1.754-2.052-2.976-3.867-2.976H5.607c-1.815,0-3.402,1.222-3.867,2.976L-.12,20h11.12v2h-5v2h12v-2h-5v-2Zm1.176-6h-4.352l.143-2h4.067l.143,2Zm-4.495,2h4.638l.143,2h-4.924l.143-2Zm6.909,2l-.212-2h4.614l.53,2h-4.932Zm3.872-4h-4.251l-.167-2h3.118c.454,0,.851.305.967.744l.333,1.256Zm-12.507-2l-.167,2H3.538l.332-1.256c.116-.439.513-.744.967-.744h3.118Zm-4.947,4h4.613l-.263,2H2.479l.529-2Zm5.992-8h-4.5v-2h2.601c.192-.94.658-1.775,1.298-2.443l-1.645-2.375L8.398.043l1.644,2.373c.604-.259,1.261-.416,1.958-.416s1.355.157,1.958.416L15.619.019l1.645,1.139-1.662,2.399c.639.669,1.106,1.503,1.298,2.443h2.601v2h-4.5v-1c0-1.654-1.346-3-3-3s-3,1.346-3,3v1Z" fill="#facc15" fillOpacity="1" data-original-color="#000000ff" stroke="none" strokeOpacity="1"/></g></svg>
            {/* <SunIcon className="relative w-12 h-12 md:w-16 md:h-16 mb-4 text-yellow-400 transition-all duration-700 ease-in-out md:group-hover:text-yellow-300" /> */}
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
              Qualitude IT Solutions
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


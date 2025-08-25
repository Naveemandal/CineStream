import React, { useEffect } from 'react'
import logo from '../Images/logo.svg'
import fire from '../Images/fire-fill.svg'
import trend from '../Images/bard-fill.svg'
import movie from '../Images/movie-fill.svg'
import tv from '../Images/tv-2-fill.svg'
import popular from '../Images/group-2-fill.svg'
import About from '../Images/phone-fill.svg'
import Contact from '../Images/information-fill.svg'
import { Link } from 'react-router-dom'

const SideNav = () => {



  return (
    <div className="w-[20%] min-h-screen border-r border-zinc-700 p-6 bg-[#1F1E24] flex flex-col">
      
      <h1 className='text-2xl font-black text-white flex items-center mb-8'>
        <img src={logo} alt="logo" className='w-7 h-7 mr-3'/>
        <span>SCSDB.</span>        
      </h1>

      <nav className='flex flex-col text-zinc-400 text-lg gap-2 flex-1'>
        <h2 className='text-white font-semibold text-lg mt-4 mb-3'>New things</h2>
        
        <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-3 flex items-center'>
          <img src={fire} alt="fire" className='w-5 h-5 mr-2 invert' />
          Trending
        </Link>

        <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-3 flex items-center'>
          <img src={trend} alt="trend" className='w-5 h-5 mr-2 invert' />
          Popular
        </Link>

        <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-3 flex items-center'>
          <img src={tv} alt="tv" className='w-6 h-6 mr-2 invert' />
          Tv Shows
        </Link>

        <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-3 flex items-center'>
          <img src={movie} alt="movie" className='w-6 h-6 mr-2 invert' />            
          Movie
        </Link>

        <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-3 flex items-center'>
          <img src={popular} alt="people" className='w-6 h-6 mr-2 invert' />
          People
        </Link>

        <hr className='border-none bg-zinc-700 h-[1px] my-5'/>

        <h2 className='text-white font-semibold text-lg mb-3'>Web Information</h2>
        <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-3 flex items-center'>
          <img src={Contact} alt="about" className='w-5 h-5 mr-2 invert' />
          About
        </Link>

        <Link className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-3 flex items-center'>
          <img src={About} alt="contact" className='w-5 h-5 mr-2 invert' />
          Contact
        </Link>
      </nav>
    </div>
  )
}

export default SideNav

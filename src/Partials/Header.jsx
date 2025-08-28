import React from 'react'
import { Link } from 'react-router-dom';
import megaphone from '../Images/megaphone-fill.svg'
import album from '../Images/album-fill.svg'

const Header = ({ data }) => {

  const imageUrl = data.backdrop_path
    ? `https://image.tmdb.org/t/p/original${data.backdrop_path}`
    : `https://image.tmdb.org/t/p/w500${data.poster_path || data.profile_path}`;

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.7), rgba(0,0,0,.9)), url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-[70vh]  flex flex-col justify-end items-start p-[7%]"
    >
        <h1 className='w-[70%] text-5xl font-black text-white'>{data.name || data.title || data.original_name || data.original_title}</h1>
        <p className='text-white w-[70%]  mb-3'>{data.overview.slice(0,200)}...<Link className='text-blue-400'>more</Link></p>

        <p className=' text-white  flex gap-3'>
            <img src={megaphone} alt="" className='w-5 h-5 invert ml-4 '/>           
            {data.release_date || "No Information"}
               <img src={album} alt="" className='w-5 h-5 invert ml-4 ' />           
            {data.media_type.toUpperCase()}
            </p>
            <Link className='bg-[#6556cd] p-3 rounded text-white font-semibold mt-5'>Watch Trailer</Link>
    </div>
  );
};

export default Header;

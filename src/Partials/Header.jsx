import React from 'react'
import { Link } from 'react-router-dom';

const Header = ({ data }) => {
  console.log(data);

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
      className="w-full h-[70vh]  flex flex-col justify-end  p-[7%]"
    >
        <h1 className='w-[70%] text-5xl font-black text-white'>{data.name || data.title || data.original_name || data.original_title}</h1>
        <p className='text-white w-[70%]'>{data.overview.slice(0,200)}...<Link className='text-blue-400'>more</Link></p>
    </div>
  );
};

export default Header;

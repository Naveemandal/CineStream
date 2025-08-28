import React, { useEffect, useState } from "react";
import search from "../Images/search-line.svg";
import close from "../Images/close-fill.svg";
import { Link } from "react-router-dom";
import axios from '../utils/Axios'
import noimage from '../Images/img.png'

const TopNav = () => {
const [query , setQuery] = useState("");
const [searches , setSearches] = useState([]);

    const getSearches = async() => {
      try {
        const {data} = await axios.get(`/search/multi?query=${query}`)
           setSearches(data.results);
      } catch (error) {
        console.log("Error :" , error);        
      }
    }

    useEffect(() => {
      getSearches();

    },[query])






  return (
    <div className="w-full h-[10vh] flex relative justify-start items-center ml-[15%]" >
      <img src={search} alt="search" className="w-7 h-7 text-zinc-400 invert" />
      <input onChange={(e)=> setQuery(e.target.value)}
      value={query}
        type="text"
        placeholder="Search anything"
        className="w-[50%] mx-5 text-xl outline-none border-none bg-white p-1 rounded"
      />
      {query.length > 0 &&  (<img onClick={()=> setQuery("")} src={close} alt="Close" className="w-7 h-7 text-zinc-400 invert" /> )}
     

      <div className="absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[90%] ml-[4.5%] rounded overflow-y-scroll">

        {searches.map((s,i)=> (
          
          
          <Link key={i} className="hover:text-black hover:bg-zinc-300 duration-100 font-semibold text-zinc-600 w-[100%] p-5 flex justify-start items-center border border-zinc-100">


             {/* {s.poster_path || s.profile_path ? ( */}
      <img
        src={
           s.backdrop_path ||
          s.profile_path ? `https://image.tmdb.org/t/p/w92${s.poster_path || s.profile_path}` : noimage
        
        }
        alt={s.title || s.name}
        className="w-[10vh] h-[10vh] object-cover mr-3 rounded shadow-lg"
      />
    {/* ) : null} */}


          <span>{s.name || s.title || s.original_name || s.original_title}</span>
        </Link> 
      
      ))}

        
      </div>
    </div>
  );
};

export default TopNav;

import React, { useEffect, useState } from 'react'
import SideNav from '../Partials/SideNav'
import TopNav from '../Partials/TopNav'
import axios from '../utils/Axios';
import Header from '../Partials/Header';

const Home = () => {

  const [wallpaper , setWallpaper] = useState(null);

  const GetHeaderWallpaper =  async() => {
      try {
        const {data} = await axios.get(`/trending/all/day`)
      let randomdata = data.results[(Math.random() * data.results.length).toFixed()];
           setWallpaper(randomdata);
      } catch (error) {
        console.log("Error :" , error);        
      }
    }

    useEffect(() => {
      !wallpaper && GetHeaderWallpaper();
    },[])

  return  wallpaper ? (
   <>
   <SideNav />
   <div className="w-[80%] h-full bg-[#1F1E24]">
    <TopNav />
    <Header data={wallpaper}/>
   </div>
   </>
  ) : (
    <h1>Loading...</h1>
  );
}

export default Home;
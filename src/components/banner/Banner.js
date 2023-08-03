import React, { useEffect, useState } from 'react';
import './banner.css';
import axios from "../../helpers/axios";
import requests from "../../helpers/requests"
const Banner = () => {
    const [movie,setMovie]=useState([]);

useEffect(()=>{
    const fetchData= async ()=>{
        const request= await axios.get(requests.fetchNetflixOriginals);
        console.log(request)
        setMovie(request.data.results[
            Math.floor(Math.random() * request.data.results.length-1)
            
        ]);
        return request;
    };
    fetchData();
    
},[]);
function truncate(string,n){
    return string?.length>n?string.substr(0,n-1)+"...":string;

}

  return (
    <div className='banner' style={{backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    backgroundSize:"cover",
    backgroundPosition:"center"}}>
        <div className='banner-contents'>
         <h1 className='banner-title'>{movie?.name||movie?.title||movie?.original_name}</h1>
         <div className='banner-btns'>
            <button className='banner-btn' type='button'>Play</button>
            <button className='banner-btn' type='button'>My List</button>

         </div>
         <div className='banner-desc'>
            {truncate(movie?.overview,150)}

         </div>
      
        </div>
        <div className='banner-fadebottom'/>
    </div>
  )
}

export default Banner
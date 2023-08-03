import React, { useEffect ,useState} from 'react';

import axios from '../../helpers/axios.js';
import "../row/Row.css";

const Row = ({title,fetchURL,isLargeRow=false}) => {
    const base_url="https://image.tmdb.org/t/p/original/";

    const [movies,setMovies]=useState([]);
    useEffect(()=>{
        const fetchData= async ()=>{
            const request= await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchURL]);
    console.log(movies);
  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row-posters'>
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                key={movie.id}
                className={`row-poster ${isLargeRow && "row-posterLarge"}`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt=""
              />
            )
        )}

        </div>
    </div>
  )
}

export default Row
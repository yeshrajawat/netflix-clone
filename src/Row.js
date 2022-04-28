import React, { useEffect, useState } from 'react'
import './Row.css';
import axios from './axios';

function Row(props) {

    const BASE_URL = "https://image.tmdb.org/t/p/original/";

    const [movies,setMovies] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(props.fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    },[props.fetchUrl])

// console.log(movies);


  return (
    <div className='row'>

        <h2>{props.title}</h2>
       <div className='row__posters'>

       {movies.map(movie => {

    if((props.isLargeRow && movie.poster_path )|| (!props.isLargeRow && movie.backdrop_path))
   {             
return (  <img className={`row__poster ${props.isLargeRow && "row__posterLarge"}`}
  src= {`${BASE_URL}${
      props.isLargeRow ? movie.poster_path : movie.backdrop_path
  }`} alt={movie.name} />
)
   }


})}


       </div>
        
    </div>
  )
}

export default Row
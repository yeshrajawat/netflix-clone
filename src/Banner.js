import './Banner.css'
import React,{useState,useEffect} from 'react';
import axios from './axios';
import requests from './Requests';


function Banner() {



const [movie,setMovie] = useState([]);


useEffect(()=>{
       
    
    
     async function fetchData(){   
    
    const request = await axios.get(requests.fetchNetflixOriginals);

        setMovie(

            
            request.data.results[ Math.floor(Math.random() * request.data.results.length-1)]

        );

        return request;
}

fetchData();
},[]);
console.log(movie);






const truncate = (string,n)=> {

    return string?.length > n ? string.substring(0,n-1)+"..." : string

}




  return (
    <header className='banner'  >
        <div className='banner__image' style={
          {
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`,
            backgroundSize: 'cover',
                  backgroundPosition: 'center center'
            
            }
        }></div>
        <div className='banner__contents'>

        <h1 className='banner__title'>{movie?.name || movie?.title || movie?.original_name}</h1>

        <div className='banner__buttons' >

        <button className='banner__button'>Play</button>
        <button className='banner__button'>My List</button>


        </div>

        <p className='banner__description'>{truncate(movie.overview,150)}</p>

        </div>
    
        </header>
   
  )
}

export default Banner;
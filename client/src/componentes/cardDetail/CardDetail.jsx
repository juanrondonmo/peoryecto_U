import React from 'react'
import "./cardDetail.css"
import { useParams } from "react-router-dom"
import { useSelector } from 'react-redux';

export const CardDetail = () => {

    const { idmovie } = useParams();
    const { movies } = useSelector(state => state.reducer)

    const movie = movies.find(e =>  e.id === parseInt(idmovie));

    console.log(movie)

  return (
    <div className='movie-description'>
        <div className="image-container">
            <img src={ movie.img } alt="" />
        </div>
        <div className="movie-info">
            <h1>{ movie.title }</h1>
            <h3>Genero: { movie.category }</h3>
            <h4>Año: { movie.year }</h4>
            <h4>Sinopsis:</h4>
            <p>{ movie.sinopsis }</p>
            <div className='video-container'>
            <iframe 
                src={ movie.trailer }
                    title="YouTube video player" 
                frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen  
                    ></iframe>
            </div>
        </div>
    </div>
  )
}

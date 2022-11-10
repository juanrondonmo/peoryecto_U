import React from 'react'
import { useSelector } from "react-redux"
import { Card } from '../card/Card';

import "./home.css";

export const Home = () => {
   
    const { movies } = useSelector(state => state.reducer)
    

  return (
    <div className='movies-container'>
        <h1 className='movies-title'>Welcome to Movies</h1>
        <hr />
        <div className='cards-container'>
            {
                movies.map((movie, i) => (
                    <Card 
                        key={ i }
                        { ...movie }
                    />
                ))
            }
        </div>
    </div>
  )
}

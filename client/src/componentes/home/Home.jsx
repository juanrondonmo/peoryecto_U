import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { loadMovies } from '../../redux/userSlice';

export const Home = () => {
    const dispatch = useDispatch();
    const { movies } = useSelector(state => state.reducer)
    
    useEffect(() => {
        dispatch(loadMovies())
    },[])

  return (
    <div>
        <h1>Welcome to Movies!!!!!</h1>

        <div>
            {
                movies.map((movie, i) => (
                    <div>
                        <h1>{ movie.title }</h1>
                        <h4>{ movie.year }</h4>
                        <div>
                            <img src={movie.img} alt="" />
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

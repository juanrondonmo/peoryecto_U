import React from 'react';
import "./card.css";
import { Link, useParams } from "react-router-dom"

export const Card = ({
id,
title,
year,
img
}) => {

    
  return (
    <Link to={`/home/${id}`}>
        <div className='movie-card'>
            <h1>{ title }</h1>
            <h4>{ year }</h4>
            <div>
                <img src={img} alt="" />
            </div>
        </div>
    </Link>
  )
}

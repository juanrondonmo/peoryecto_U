import React from 'react'
import {Route, Routes } from 'react-router-dom'
import { CardDetail } from '../componentes/cardDetail/CardDetail'
import { Home } from '../componentes/home/Home'
import { Login } from '../componentes/login/login'
import { Register } from '../componentes/login/Register'

export const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={ <Register /> } />
            <Route path='/home' element={<Home />} />
            <Route path='/home/:idmovie' element={<CardDetail />} />

        </Routes>
    </div>
  )
}
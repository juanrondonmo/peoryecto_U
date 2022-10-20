import React from 'react'
import {Route, Routes } from 'react-router-dom'
import { Login } from '../componentes/login/login'
import { Register } from '../componentes/login/Register'

export const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Login />} />

            <Route path='/register' element={ <Register /> } />
        </Routes>
    </div>
  )
}
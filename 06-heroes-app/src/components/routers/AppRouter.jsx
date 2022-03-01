import { DcScreen } from '../dc/DcScreen';
import { Login } from '../login/Login';
import { MarvelScreen } from '../marvel/MarvelScreen';
import { SearchScreen } from '../Search/SearchScreen';
import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'


export const AppRouter = () => {
  return (
    <BrowserRouter>
        <h1>Welcome AppRouter</h1>
        <Routes>
            <Route path='/dc' element={<DcScreen/>} exact />
            <Route path='/marvel' element={<MarvelScreen/>} exact/>
            <Route path='/search' element={<SearchScreen/>} exact/>
            <Route path='/login' element={<Login/>} exact/>
            <Route path='/' element={<MarvelScreen/>} exact/>
        </Routes>
    </BrowserRouter>
  )
}

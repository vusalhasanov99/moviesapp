import React, { Component } from 'react'
import AddMovies from './components/AddMovies'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import EditMovies from './components/EditMovies';

export default class App extends Component {



  render() {


    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddMovies/>} />
          <Route path="/edit/:id" element={<EditMovies/>} />
        </Routes>
      </BrowserRouter>
    )
  }
}

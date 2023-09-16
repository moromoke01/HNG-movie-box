import React from 'react'
import NavBar from "../navbar/NavBar"
import Featured from "../featured/Featured"
import Movie from "../movies/Movie"

const Homepage = () => {
  return (
    <>
        <div className='home'>
        <NavBar />     
        <Featured />
        <Movie />
       
     
        </div>
     </>   
  )
}

export default Homepage
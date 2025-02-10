import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Agents from './components/Agents'
import Solution from './components/Solution'
import Technology from './components/Technology'
import Blog from './components/Blog'
import Contact from './components/Contact'
const page = () => {
  return (
    <div>
      <Navbar/>
       <Home/>
      <Agents/>
      <Solution/>
      <Technology/>
      <Blog/>
      <Contact/>
      </div>
  )
}

export default page

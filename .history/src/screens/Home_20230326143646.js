import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
export default function Home() {

const [foodCat, setFoodCat] = useState([])
const [foodItem, setFoodItem] = useState([])

  return (
    <div>
    <div><Navbar/></div>
    <div><Carousel/></div>
    <div className='m-3'><Card/></div>
    <div><Footer/></div>
    </div>
  )
}

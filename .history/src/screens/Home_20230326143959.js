import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import { json } from 'react-router-dom'
export default function Home() {

const [foodCat, setFoodCat] = useState([])
const [foodItem, setFoodItem] = useState([])
const loadData = async()=>{
  let response = await fetch("http://localhost:5000/api/foodData",{
    method:"POST",
    header: {
      'content-Type': 'application/json'
    }
  })
  response = await response.json();
  console.log(response);
}

  return (
    <div>
    <div><Navbar/></div>
    <div><Carousel/></div>
    <div className='m-3'><Card/></div>
    <div><Footer/></div>
    </div>
  )
}

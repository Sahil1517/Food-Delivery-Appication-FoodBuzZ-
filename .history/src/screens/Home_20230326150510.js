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
  //console.log(response[0],response[1])
  setFoodItem(response[0]);
  setFoodCat(response[1]);
}

useEffect(() => {
  loadData()
},[])
 

  return (
    <div>
    <div><Navbar/></div>
    <div><Carousel/></div>
    <div className='container'>
        {
          foodCat !==[]
          ? foodCat.map((data)=>{
            return( <div>
            <div key={data._id} className="fs-3 m-3"
            >{data.CategoryName}
            </div>
            <hr/>
            
           </div>
            )
          })
          :""
        }
      <Card/>
      </div>
    <div><Footer/></div>
    </div>
  )
}

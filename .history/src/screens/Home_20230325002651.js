import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <div>
      <Navbar/>
      <div>
      <div className="card mt-3" style={{"width": "18rem", ""}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
      </div>
    <div><Footer/></div>
    </div>
  )
}

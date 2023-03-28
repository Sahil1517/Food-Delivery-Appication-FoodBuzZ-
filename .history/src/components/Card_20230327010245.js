import React from 'react'
import { useDispatchCart, useCart } from './ContextReducer';
export default function Card(props) {

  let options = props.options;
  let priceOptions = Object.keys(options);
  let foodItem = props.foodItems;
  const handleAddToCart = ()=>{

  }
  return (
    <div>
      <div>
      <div className="card mt-3" style={{"width": "18rem", "maxHeight":"360px"}}>
  <img src={props.foodItem.img}className="card-img-top" alt="..." style={{height:"120px", objectFit:"fill"}}/>
  <div className="card-body">
    <h5 className="card-title">{props.foodItem.name}</h5>
    {/* <p className="card-text"> and make up the bulk of the card's content.</p> */}
    <div className='container w-100'>
      <select className='m-2 h-100  bg-success rounded'>
        {Array.from(Array(6), (e,i)=>{
          return(
            <option key={i + 1} value={i + 1}>{i + 1}</option>
          )
        })}
      </select>
      <select className='m-2 h-100 bg-success rounded'>
        {priceOptions.map((data)=>{
          return <option key={data} value={data}>{data}</option>
        })}
      </select>
      <div className='d-inline h-100 fs-5'>
        Total Price
      </div>
    </div>
    <hr></hr>
    <button className="btn btn-success justify-center ms-2" onClick={handleAddToCart}> Add to Cart</button>
  </div>
</div>
      </div>
    </div>
  )
}

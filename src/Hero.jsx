import React, { useState } from 'react'
import Heroarray from './Heroarray'
import './App.css'
import { useDispatch , useSelector} from 'react-redux'
import { addItem } from './components/Cartslice'
import Sign from './components/Header/Sign'
import { useNavigate } from 'react-router-dom'

function Hero(prop) {
  const dispatch=useDispatch();
  const select=useSelector((store)=>store.user. Islogedin)
  const navigate=useNavigate();
  const click=(vap)=>{
    if(select)
    dispatch(addItem(vap))
  else navigate("/Sign")
  }
  
  return (
    <>
      <div className='hero'>
        <div className='img'><img className='heropic' src={prop.src}></img></div>
        <div className='product'><ul><li>Product Name: {prop.productname}</li><li>Price: {prop.price} Rs</li><li>{prop.discount} Discount</li><li> <button id='addtocart' onClick={()=>click(Heroarray[prop.state])} >Add To Cart</button> </li></ul></div>
      </div>
    </>
  )
}

export default Hero

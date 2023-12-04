import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItem } from './Cartslice'
import { add } from './Checkoutslice';
import { Link } from 'react-router-dom';

function Cartchild(props) {
    const dispatch=useDispatch();
    const click=(vap)=>{
        dispatch(removeItem(vap))
    }
    const bclick=(sap)=>{
      dispatch(add(sap))
      //dispatch(removeItem(sap))
    }
  return (
    <>
    
    <div className='propcart'>
    <ul><li>
    <img className='prodimg' src={props.src}/></li>
 <li> {props.productname}</li><li>{props.price} Rs.</li><li><button onClick={()=>click(props.vap)} id='removefromcart'>Remove from cart</button> </li><li><Link to="/Checkout" ><button id='buythisitem'onClick={()=>bclick(props.vap)} >Buy this item</button></Link> </li></ul>
  </div>
    </>
  )
}

export default Cartchild

import React from 'react'
import { useSelector } from 'react-redux'
import Cartchild from '../Cartchild';
import { useDispatch } from 'react-redux';
import { clearAll } from '../Cartslice';
import { addall } from '../Checkoutslice';
import { Link } from 'react-router-dom';

function Cart() {
  const cartitems=useSelector((store)=>store.cart.items);
  const total=cartitems.reduce((accum,first)=>accum+parseInt(first.price),0)
        
  const Dispatch=useDispatch()
  const click=()=>{
    Dispatch(clearAll());
  }
  const buyall=(sap)=>{
    Dispatch(addall(sap))
   // Dispatch(clearAll());
  }
  if(cartitems.length===0) return (<><h1 className='emptycart'>Your Cart is Empty, Do some shopping</h1> <div className='returnerror'> <Link to="/" style={{textDecoration:"none"}}><button id='returnerror'>Return to home page</button></Link></div></>);
  return (
   
    <>
      <div className='cartpage'>Cart Items</div>
      <div className='topcart'><ul><li>Product image</li><li>Product</li><li>Price</li><li>Remove item</li><li>Buy item</li></ul></div>
      {
        cartitems.map((vap)=>{
          return(
            <>
              <Cartchild key={vap.id}
              id={vap.id}
              price={vap.price}
              productname={vap.productname}
              src={vap.src}
              Discount={vap.discount}
                vap={vap}

              />
               
            </>
          )
          
          
        })
      }
      <div className='totaldiv'>
      <ul id='total'><li>Total amount: {total}</li>
      <li className="clearall"><button id='clearall' onClick={click}>Clear the cart</button></li>
      <li className='buyall'><Link to="/Checkout"> <button id='buyall' onClick={()=>buyall(cartitems)} >Buy All</button></Link></li></ul> 
      </div>
    </>)
}

export default Cart

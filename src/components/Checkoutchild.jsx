import React from 'react'

function Checkoutchild(props) {
  return (
    <div className='checkoutitems'>
       <ul><li><img className='checkimg' src={props.src}/></li><li>productname {props.productname}</li><li>price {props.price} Rs.</li></ul>
    </div>
  )
}

export default Checkoutchild

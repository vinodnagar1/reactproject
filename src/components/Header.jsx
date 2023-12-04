import React from 'react'
import {cartlogo,searchpic} from './constants';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Header() {
  const cartitems=useSelector((store=>store.cart.items));
  const select=useSelector((store)=>store.user. Islogedin)
  return (<>
    <div className='div1'>
    <div className='shopcart'>Shopcart</div>
    <div className='placeholder'><span className='span2'>

   <input type='text' id='placeholder' placeholder='search products here'/>
    </span><span className='span3'><img id='searchpic' src="https://www.citypng.com/public/uploads/preview/orange-search-icon-button-free-png-11640084033bejkv14r2i.png?v=2023080918"/></span>
    <div className='list'><ul><li><Link to='/'  style={{ textDecoration: 'none' }}>Home</Link></li><li>Catagories</li><li id='cart'><Link to={ select?"/Cart":"/sign"}  style={{ textDecoration: 'none' }}><img id='cartlogo' src='https://cdn-icons-png.flaticon.com/512/649/649931.png'/><span id="count">{cartitems.length}</span> </Link></li><li id='sign'><Link to="/Sign"  style={{ textDecoration: 'none', }}>Sign In</Link></li><li><Link to="/Contact"  style={{ textDecoration: 'none' }}>Contact us</Link></li><li><Link to={ select?"/Checkout":"/sign"}  style={{ textDecoration: 'none' }}>Checkout</Link></li></ul></div>

    </div>
      
    </div>
</>
  )
}

export default Header

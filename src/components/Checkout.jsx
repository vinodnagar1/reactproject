import React from 'react'
import { useSelector } from 'react-redux'
import Checkoutchild from './Checkoutchild';

function Checkout() {
    const cartitems=useSelector((store)=>store.Checkout.checkarray);
    const total=cartitems.reduce((accum,first)=>accum+parseInt(first.price),0)
        

    

  return (
    <>
    <>
  <header id="header__container" />
  <div id="sidebar__content-wrap"></div>
  {/* header end */}
  <h1 id="payment-header">CHOOSE A PAYMENT METHOD</h1>
  <div id="warning">
    Please note that only cards that use 3D Secure are accepted. Contact your
    bank to activate it or for further instructions.
  </div>
  <div id="pay-option">
    <div className="pay-option-item">
      <img
        id="payment-img"
        src="https://static.zara.net/static/images/payment/payment/icon-payment-visa.svg"
        alt=""
      />
      <p id="pay-name">VISA</p>
    </div>
    <div id="pay-option-item2">
      <img
        id="payment-img2"
        className="hover"
        src="https://static.zara.net/static/images/payment/payment/icon-payment-mastercard.svg"
        alt=""
      />
      <p id="pay-name">MASTERCARD</p>
    </div>
    <div className="pay-option-item">
      <img
        id="payment-img"
        src="https://static.zara.net/static/images/payment/payment/icon-payment-amex_2.svg"
        alt=""
      />
      <p id="pay-name">AMERICAN EXPRESS</p>
    </div>
    <div className="pay-option-item">
      <img
        id="payment-img"
        src="https://static.zara.net/static/images/payment/payment/ru-pay.svg"
        alt=""
      />
      <p id="pay-name">RUPAY</p>
    </div>
    <div className="pay-option-item">
      <img
        id="payment-img"
        src="https://static.zara.net/static/images/payment/payment/net-banking.svg"
        alt=""
      />
      <p id="pay-name">NETBANKING</p>
    </div>
    <div className="pay-option-item">
      <img
        id="payment-img"
        src="https://static.zara.net/static/images/payment/payment/upi.svg"
        alt=""
      />
      <p id="pay-name">UNIFIED PAYMENTS INTERFACE</p>
    </div>
  </div>
  <div id="gift">
    <img
      id="cod-img"
      src="	https://static.zara.net/static/images/payment/payment/IcoBank-GiftCard.svg"
      alt=""
    />
    <p id="pay-name">GIFT CARD</p>
  </div>
  <div id="cod">
    <img
      id="cod-img"
      src="	https://static.zara.net/static/images/payment/payment/co-djpen.svg"
      alt=""
    />
    <p id="pay-name">CASH ON DELIVERY</p>
  </div>
  <div id="cod">
    <img
      id="cod-img"
      src="   https://static.zara.net/static/images/payment/payment/in.svg"
      alt=""
    />
    <p id="pay-name">IN CARD</p>
  </div>
  <div id="footer" />
  <div id="ending"></div>
  <div id="continue">
  {cartitems.map((vap)=>{
        return(
            <><div className='propcheck'>
            <Checkoutchild price={vap.price}
            productname={vap.productname}
              src={vap.src}
            />
            </div>
            </>
        )
    })}
   
    <div>
    </div>
    <p className="total-price"></p>
    <div>
      <p id="price">Total {total} Rs.</p>
      <p id="gst">Including gst</p>
    </div>
    <a href="./card.html">
      <button id="continue-button">CONTINUE</button>
    </a>
  </div>
</>

    {/*<div className='checkout'>
     First name:<input type='text' name='firstname' id='firstname'></input><br/><br/>
      Last name:<input type='text' name='lastname' id='lastname'></input><br/><br/>
      Email:<input type='email' name='email'></input><br/><br/>
      Address:<input type='text' name='address'></input>
    </div>

    <div className='orderlist'>
    {cartitems.map((vap)=>{
        return(
            <>
            <Checkoutchild price={vap.price}
            productname={vap.productname}/>
            </>
        )
    })}
   
    <div>Total {total}
    </div>
    <div>Checkout</div>

    </div>*/}
    </>
  )
}

export default Checkout

import React from 'react'
import Hero from '../Hero'
import Heroarray from '../Heroarray'
import { useState,useEffect } from 'react'
import Testi from '../Testi'
import Testiarray from '../Testiarray'

function Body() {
  
  const[state,setstate]= useState(0)
  const[tstate,settstate]= useState(0)
  
  useEffect(() => { 
  
    //Implementing the setInterval method 
    const interval = setInterval(() => { 
        setstate(state===(Heroarray.length-1)?0:state+1); 
    }, 4000); 
    return () => clearInterval(interval);
    
  

    //Clearing the interval 
    
}, [state]); 
useEffect(() => { 
  
  //Implementing the setInterval method 
  const tinterval = setInterval(() => { 
      settstate(tstate===(Testiarray.length-1)?0:tstate+1); 
  }, 2000); 
  return () => clearInterval(tinterval);
  


  //Clearing the interval 
  
}, [tstate]); 
  

 
  return (
    <>
    <Hero src={Heroarray[state].src}
    productname={Heroarray[state].productname}
    price={Heroarray[state].price}
    discount={Heroarray[state].discount}
    state={state}
    

    />
    <Testi src={Testiarray[tstate].src}/>
    </>
  )
}

export default Body

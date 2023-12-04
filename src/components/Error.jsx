import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (<>
    <div className='oops'>
      OOPS!!! Something went wrong </div>
     <div className='returnerror'> <Link to="/" style={{textDecoration:"none"}}><button id='returnerror'>Return to home page</button></Link></div>
   
    </>
  )
}

export default Error

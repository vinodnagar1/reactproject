
import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Contact from './components/Header/Contact'
import Cart from './components/Header/Cart';
import Sign from './components/Header/Sign';
import appStore from './components/appstore';
import { Provider } from 'react-redux';
import Checkout from './components/Checkout';
import Error from './components/Error';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Footer from './components/Footer';
import BoFoot from './components/BoFoot';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
     
  {
    path: "/Home",
    element:<App/>,
    
  },
      
  {
    path: "/",
    element:<BoFoot/>,
    
  },
  {
    path: "/Contact",
    element:<Contact/>,
    
  },
  {
    path: "/Cart",
    element:<Cart/>,
    
  },
  {
    path: "/Sign",
    element:<Sign/>,
    
  },
  {
    path: "/Checkout",
    element:<Checkout/>,
    
  },
  {
    path: "/footer",
    element:<Footer/>,
    
  },
  
      
]}
]);



function App() {
  return (
  <>
<Header/>
<Outlet/>
</>
  );
}

export default App;
export {router};

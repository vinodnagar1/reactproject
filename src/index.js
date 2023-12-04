import React from 'react'
import  ReactDOM from 'react-dom/client';
import Header from './components/Header';
import App ,{router}from './App';
import appStore from './components/appstore';
import { Provider } from 'react-redux';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom/";


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Provider store={appStore}> <RouterProvider router={router}/></Provider>
  
)

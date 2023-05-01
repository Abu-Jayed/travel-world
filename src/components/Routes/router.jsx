import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from '../../App';
import NavigationBar from '../Shared/NavigationBar';
import Home from '../Home/Home';
import Layout from '../Layout/Layout';
import Blog from '../Blog/Blog';
import Destination from '../Destination/Destination';
import Booking from '../Booking/Booking';
import Login from '../Login/Login/Login';
import Register from '../Login/Register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },{
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'allDestination',
        element: <Destination></Destination>,
        loader: ()=> fetch('http://localhost:3000/allDestination')
      },
      {
        path: 'destination/:id',
        element: <Booking></Booking>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }
    ]
  },
]);

export default router;
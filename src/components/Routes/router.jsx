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
        path: 'destination',
        element: <Destination></Destination>
      }
    ]
  },
]);

export default router;
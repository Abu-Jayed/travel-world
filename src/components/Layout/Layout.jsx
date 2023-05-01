import React from 'react';
import NavigationBar from '../Shared/NavigationBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
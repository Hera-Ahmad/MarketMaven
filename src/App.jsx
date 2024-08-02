import React from 'react';
import Dashboard from './pages/Dashboard/Dashboard';
import * as React from "react";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Transactions from './pages/Dashboard/components/Transactions';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element:      <Dashboard/>,
    },
    {
      path: "/transaction",
      element:      <Transactions/>,
    },
    {
      path: "/Support",
      element: <Support/>,
    },
  ]);


  return (
     <>
     <RouterProvider router={router} />
     <Dashboard/>
    </>
  );
}

export default App;

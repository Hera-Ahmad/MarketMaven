import React from 'react';
import Dashboard from './pages/Dashboard/Dashboard';
import TransactionPage from './pages/Transaction/TransactionPage';
import Support from './pages/Support/Support';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Dashboard/>,
    },
    {
      path: "/transaction",
      element:<TransactionPage/>,
    },
    {
      path: "/Support",
      element:<Support/>,
    },
  ]);


  return (
     <>
     <RouterProvider router={router} />
     
    </>
  );
}

export default App;

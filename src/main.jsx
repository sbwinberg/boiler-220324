import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import PageOne from './PageOne.jsx';
import PageTwo from './PageTwo.jsx';
import Layout from './Layout.jsx';

const router = createBrowserRouter([
  {
    path: '/', 
    element: <Layout /> ,
    // errorElement: '',
    children: [
      {
        path: '/',
        element: <PageOne />
      },
      {
        path: '/two',
        element: <PageTwo />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

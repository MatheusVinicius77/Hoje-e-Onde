import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import Homepage from './pages/Homepage'
import NewEvents from './pages/NewEvent'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/home",
    element: <Homepage />
  },
  {
    path: '/newevent',
    element: <NewEvents />
  },
  {
    path: '/cadastro',
    element: <Cadastro />
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>
);

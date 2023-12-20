import { React, createContext, useState } from 'react';
import Favoritos from './pages/Favorites/index'
import Homepage from './pages/Homepage'
import NewEvents from './pages/NewEvent'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';


const appContext = createContext();

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
  },
  {
    path: '/favoritos',
    element: <Favoritos />
  }

])

function App() {
  const [value, setValue] = useState([]);
  const updateValue = (data) => {
    setValue(() => {
      if (!value.includes(data)) {
        return [data, ...value]
      } else {
        return [...value.filter((e) => e != data)]

      }

    })
  }
  return (
    <appContext.Provider value={{ value, updateValue }}>
      <RouterProvider router={router}>

      </RouterProvider>
    </appContext.Provider>
  );
}

export default App;
export { appContext };
import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Menus from './Pages/Menus/Menus';
import PriveteRoute from './Pages/PriveteRoute/PriveteRoute';

function App() {
  const router=createBrowserRouter([
      {
        path:'/',
        element:<Main></Main>,
        children:[
          {
            path:'/',
            element:<Home></Home>
          },
          {
            path:'/login',
            element:<Login></Login>
          },
          {
            path:'/signUp',
            element:<SignUp></SignUp>
          },
          {
            path:"/menu",
            element:<PriveteRoute>
              <Menus></Menus>
            </PriveteRoute>
          }
        ]
      }
  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

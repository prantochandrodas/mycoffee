import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Home from './Pages/Home/Home';

function App() {
  const router=createBrowserRouter([
      {
        path:'/',
        element:<Main></Main>,
        children:[
          {
            path:'/',
            element:<Home></Home>
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

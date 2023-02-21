import Header from './Components/Header';
import NavBar from './Components/NavBar';
import MainBody from './Components/MainBody';
import Test from './Components/Test';
import Register from './Components/Register';
import Login from './Components/Login';
import DashBoard from './Components/DashBoard';
import Error from './Components/Error';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import './App.css';

const router = createBrowserRouter([
  {path: '/', element :<Test />},
  {path:'/Register' , element : <Register />},
  {path:'/Login',element: <Login/>},
 {path:'/DashBoard',element: <DashBoard/>},
 {path:'/InvalidUserLogin',element: <Error msg="Invalid User"/>}

])

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <RouterProvider router={router}/>
      <MainBody />
    </div>
  );
}

export default App;


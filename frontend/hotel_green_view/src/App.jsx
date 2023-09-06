import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import './App.scss'


//import components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

//import pages
import Home from "./pages/Home/Home";


function App() {
  const Layout = () => {
    return (
      <div className="layout">
        <Navbar />
        <Outlet />
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
      ]
    }
  ])

  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  )
}

export default App

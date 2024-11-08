import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home"
import DashBoard from "../pages/DashBoard"
import Statistics from "../pages/Statistics"

const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout/>,
      children:[
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>,
        },
        {
          path: '/dashboard',
          element: <DashBoard></DashBoard>,
        },
      ]
    },
  ])

export default routes
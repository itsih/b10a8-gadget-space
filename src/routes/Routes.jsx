import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home"
import DashBoard from "../pages/DashBoard"
import Statistics from "../pages/Statistics"
import ProductCards from "../components/ProductCards"
import ProductDetails from "../pages/ProductDetails"
import Error from "../components/Error"
import AllCarts from "../components/AllCarts"
import Wishlist from "../components/Wishlist"



const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout/>,
      errorElement:<Error></Error>,
      children:[
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('../categories.json'),
          children:[
            {
              path: '/',
              element: <ProductCards/>,
              loader: () => fetch('../products.json'),
            },
            {
              path: '/category/:category',
              element: <ProductCards/>,
              loader: () => fetch('../products.json'),
            },
          ],
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>,
        },
        {
          path: '/dashboard',
          element: <DashBoard></DashBoard>,
          children: [
            {
              path:"",
              element:<AllCarts/>
            },
            {
              path:"cart",
              element:<AllCarts/>
            },
            {
              path:"wishlist",
              element:<Wishlist/>
            }

 

          ],
        },
        {
          path: '/gadget/:id',
          element: <ProductDetails/>,
          loader: () => fetch('../products.json'),
        },
      ]
    },
  ])

export default routes
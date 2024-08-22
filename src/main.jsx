import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import App, {loader as appLoader} from './App.jsx'
import ProductList from './routes/ProductList.jsx';
import ProductDetail,
 {loader as detailLoader} 
 from './routes/ProductDetail.jsx';

import {action as addToCart} from './components/AmountInput.jsx'
import CartCheckOut,
{ loader as checkoutLoader } from './routes/CartCheckOut.jsx';
import { action as changeAmount } from './components/ChangeAmount.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: appLoader,
    children: [
      {
        path: "products",
        element: <ProductList />,
        action: addToCart
      },
      {
        path: "products/:productId",
        element: <ProductDetail />,
        loader: detailLoader,
        action: addToCart
      },
      {
        path: "checkout",
        element: <CartCheckOut />,
        loader: checkoutLoader,
        action: changeAmount,
      }
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

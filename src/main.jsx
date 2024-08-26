import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import App, {loader as appLoader} from './App.jsx'
import ProductList from './routes/ProductList.jsx';
import ErrorPage from './Errorpage.jsx';
import ProductDetail,
 {loader as detailLoader} 
 from './routes/ProductDetail.jsx';

import {action as addToCart} from './components/AmountInput.jsx'
import CartCheckOut,
{ loader as checkoutLoader } from './routes/CartCheckOut.jsx';
import { action as changeAmount } from './components/ChangeAmount.jsx';
import Index from './routes/Index.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: appLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "products",
        element: <ProductList />,
        action: addToCart,
        errorElement: <div>Oops! There was an error.</div>,
      },
      {
        path: "products/:productId",
        element: <ProductDetail />,
        loader: detailLoader,
        action: addToCart,
        errorElement: <div>Oops! There was an error.</div>,
      },
      {
        path: "checkout",
        element: <CartCheckOut />,
        loader: checkoutLoader,
        action: changeAmount,
        errorElement: <div>Oops! There was an error.</div>,
      }
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

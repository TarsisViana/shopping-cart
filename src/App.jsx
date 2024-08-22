import { Outlet, useLoaderData } from 'react-router-dom'

import './App.css'
import Header from './components/Header'
import getProducts from './products'

import { getCartData } from './cart'

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const productData = await getProducts()
  const cart = getCartData()
  return {productData, cart}
}

function App() {
  const { productData, cart } = useLoaderData()
  
  
  return (
    <>
      <Header cart={cart}/>
      <Outlet context={[productData, cart]} />
    </>
  )
}

export default App

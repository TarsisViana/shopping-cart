import { Outlet, useLoaderData } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import getProducts from './products'

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const productData = await getProducts()
  return {productData}
}

function App() {
  const { productData } = useLoaderData()
  return (
    <>
      <Header/>
      <Outlet context={productData} />
    </>
  )
}

export default App

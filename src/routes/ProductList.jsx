import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"
import getProducts from "../products"


export default function ProductList() {
  const [data, setData] = useState()

  useEffect(() => {
    async function getData() {
      const data = await getProducts()
      setData(data);
    }

    getData()
  },[])


  if(!data){
    return "loading"
  }
  return (
    
      <div className="">
        <h2 className="">Products</h2>

        <div className="">
          {data.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    
  )
}

import ProductCard from "../components/ProductCard"

import { useOutletContext } from "react-router-dom"


export default function ProductList() {
  const data = useOutletContext()


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

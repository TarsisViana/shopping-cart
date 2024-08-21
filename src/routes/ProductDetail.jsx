import { useLoaderData, useOutletContext } from "react-router-dom"

import AmountInput from "../components/AmountInput"

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }) {
  return params.productId
}

export default function ProductDetail() {
  const productData = useOutletContext();
  const id = useLoaderData();
  
  const [product] = productData.filter(value => {
    return value.id == id;
  }) 
  console.log(product)
    
  return (
    <div>
      <span className="">
        {product.category}
      </span>
      <div className="">
        
          <img
            src={product.image}
            className=""
            style = {{width:"300px"}}
          />
        
        
      </div>
      
      <h2 className="">{product.title}</h2>
      <p>{product.description}</p>
      <p className="">{product.price}</p>
      <div>
        <span>{product.rating.rate} stars</span>
        <span>{product.rating.count} reviews</span>
      </div>
      <AmountInput />
    </div>
    
  )
}
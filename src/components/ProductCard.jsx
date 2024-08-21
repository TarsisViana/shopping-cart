
import AmountInput from "./AmountInput";
import {product} from "../products"



export default function ProductCard() {
  return (
    <div key={product.id} className="product-card">
      <span className="">
        {product.category}
      </span>
      <div className="">
        <a href="/">
          <img
            src={product.image}
            className=""
            style = {{width:"200px"}}
          />
        </a>
        
      </div>
      
        <a href="" className=""> 
          <h3 className="">{product.title}</h3>
        </a>
      
      <p className="">{product.price}</p>
      <AmountInput />
    </div>
  )
}

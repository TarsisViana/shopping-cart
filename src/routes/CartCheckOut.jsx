import { Link, useLoaderData } from "react-router-dom";
import { getCartData } from "../cart"
import ProductBanner from "../components/ProductBanner";


// eslint-disable-next-line react-refresh/only-export-components
export async function loader(){
  const orderArray = getCartData();
  const orderDetails = await Promise.all(orderArray.map( async order => {
        const response = await fetch(
          `https://fakestoreapi.com/products/${order.id}`
        )
        const obj = await response.json()
        return {...obj , amount : order.amount}
      }))
  return orderDetails; 
}

export default function CartCheckOut(){
  const orderData = useLoaderData();
  

  if (orderData) {
    var subtotal = orderData.reduce((total, order) => {
    return total + order.amount * order.price
  }, 0)
  }
  


  return(
    <div>
      <h2>Cart Checkout</h2>
      {
        !orderData ? "loading"
          : orderData.length === 0
            ? "Cart is empty"
            : orderData.map( product => {
              return <ProductBanner 
                key={product.id}
                product={product}
              />
          })
      }
      <div>
        <h3>Order Summary</h3>
        <p>Subtotal: {subtotal}</p>
        <p>Delivery fee: 0</p>
        <p>Total:  {subtotal}</p>
        <Link to>
          <div>
            Order
          </div>
        </Link>
      </div>
      
    </div>
  )
}
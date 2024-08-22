import { useState } from "react"
import { Form, redirect } from "react-router-dom"
import PropTypes from 'prop-types'
import {cartData, addToCart} from "../cart";

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }) {
  const formData = await request.formData();
  const order = Object.fromEntries(formData);
  addToCart([order])
  console.log(cartData)
  return redirect("/products");
}

export default function AmountInput({id}) {
  const [amount, setAmount] = useState(1)

  return (
    <Form method="post">
      <input 
        type="text"
        value= {id}
        name= "id"
        style={{display: "none"}}
      />
      <button
      type="button"
        onClick= {()=>setAmount(amount - 1)}
      >-
      </button>
      <input
        name="amount"
        type="number"
        placeholder="0"
        value={amount}
        onChange = {(e)=> setAmount(e.target.value)}
      
      />
      <button
      type="button"
        onClick={() => setAmount(amount + 1)}
      >+
      </button>
      <button type="submit">Add to cart</button>
    </Form>
    
  )
}



AmountInput.propTypes = {
  id: PropTypes.number
} 
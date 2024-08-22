import { useState } from "react"
import { Form, redirect, useOutletContext } from "react-router-dom"
import PropTypes from 'prop-types'
import {cartData, addToCart} from "../cart";

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }) {
  

  const formData = await request.formData();
  const order = Object.fromEntries(formData);
  order.amount = parseInt(order.amount)
  addToCart(order)
  console.log(cartData)
  return redirect("/products");
}

export default function AmountInput({id, inicialAmount = 1}) {
  const [amount, setAmount] = useState(inicialAmount)
  const [...setMessage] = useOutletContext()

  function handleSubtract() {
    
    if (amount === 0) return
    else setAmount(amount - 1)
  }

  function handleSubmit() {
    setAmount(1);
    const func = setMessage[2];
    func(true)
  }

  return (
    <Form method="post" onSubmit={handleSubmit}>
      <input 
        type="text"
        value= {id}
        name= "id"
        style={{ display: "none" }}
        readOnly={true}
      />
      <button
      type="button"
        onClick= {(e) => handleSubtract(e)}
      >-
      </button>
      <input
        name="amount"
        type="number"
        placeholder="0"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        min="1"  
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
  id: PropTypes.number,
  inicialAmount: PropTypes.number,
} 
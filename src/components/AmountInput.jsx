import { useState } from "react"

export default function AmountInput() {
  const [amount, setAmount] = useState(1)

  return (
    <>
      <button
        onClick= {()=>setAmount(amount + 1)}
      >+</button>
      <input
        name="amount"
        type="number"
        placeholder=""
        value={amount}
        onChange = {(e)=> setAmount(e.target.value)}
        
      />
      <button
        onClick={() => setAmount(amount - 1)}
      >-</button>
      <button>Add to cart</button>
    </>
  )
}




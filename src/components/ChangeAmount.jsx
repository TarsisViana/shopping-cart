import { useState } from "react"
import { Form, useSubmit } from "react-router-dom"
import PropTypes from 'prop-types'
import { changeAmount } from "../cart";

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }) {
  const formData = await request.formData();
  const order = Object.fromEntries(formData);
  order.amount = parseInt(order.amount)
  changeAmount(order)

  return null
}

function ChangeAmount({id, inicialAmount = "1"}) {
  const [amount, setAmount] = useState(inicialAmount)
  let submit = useSubmit()


  function handleSubmitOnChange(e){
    setAmount(e.target.value)
    submit(e.target.parentElement)
  }

  return (
    <Form method="POST" >
      <input 
        type="text"
        value= {id}
        name= "id"
        style={{ display: "none" }}
        readOnly={true}
      />
      <input
        name="amount"
        type="number"
        placeholder="0"
        value={amount}
        onChange={(e) => handleSubmitOnChange(e)}
        min="1"  
      />
    </Form>
    
  )
}



ChangeAmount.propTypes = {
  id: PropTypes.number,
  inicialAmount: PropTypes.number,
} 


export default ChangeAmount
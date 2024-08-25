import { useState } from "react"
import { Form, redirect, useOutletContext } from "react-router-dom"
import PropTypes from 'prop-types'
import {cartData, addToCart} from "../cart";
import styled from "styled-components";

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }) {
  

  const formData = await request.formData();
  const order = Object.fromEntries(formData);
  order.amount = parseInt(order.amount)
  addToCart(order)
  console.log(cartData)
  return redirect("/products");
}


const InputWrapper = styled.div`
  display:flex;
  align-items:center;
  justify-content: center;

  
`
const SmallInput = styled.input`
  box-sizing:border-box;
  appearance:none;
  border: 1px solid #e5e7eb;

  height: 2rem;
  width: 2rem;

  text-align: center;
  font-size: .8rem;
  font-family: inherit;
  color: #404040;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button{
    -webkit-appearance: none;
    margin: 0;
  }
`
const SmallButton = styled.button`
  height: 2rem;
  width: 2rem;

  border: 1px solid #e5e5e5;
  border-radius: 5px 0 0 5px;
  background-color: #e5e7eb;

  font-weight: bold;
  font-size: 1rem;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover{
    background-color: #d4d4d4;
  }
` 
const PlusButton = styled(SmallButton)`
  border-radius: 0 5px 5px 0;
`
const StyledSvg = styled.svg`
  width: 1rem;
  height: 1rem;
`
const BigButton = styled.button`
  display: block;

  margin:auto;
  margin-top: .5rem;
  
  width: 200px;
  height: 2rem;

  background-color: #262626;
  border: none;
  border-radius: 10px;

  color: white;
  font-size: 1.2rem;

  cursor:pointer;
  transition: transform 400ms;

  &:hover{
    background-color: #171717df;
    transform: scale(1.05) translateY(2px);
    transition: transform 150ms;
  }
`

export default function AmountInput({
  id,
  inicialAmount = 1
}) {
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
    <Form
      method="post"
      onSubmit={handleSubmit}
    >
      <input 
        type="text"
        value= {id}
        name= "id"
        style={{ display: "none" }}
        readOnly={true}
      />
      <InputWrapper>
        <SmallButton
        type="button"
          onClick= {(e) => handleSubtract(e)}
        >
          <StyledSvg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </StyledSvg>
        </SmallButton>
        <SmallInput
          name="amount"
          type="number"
          placeholder="0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="1"
        />
        <PlusButton
        type="button"
          onClick={() => setAmount(amount + 1)}
        >
          <StyledSvg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </StyledSvg>
        </PlusButton>
      </InputWrapper>
      <BigButton type="submit">Add to cart</BigButton>
    </Form>
    
  )
}



AmountInput.propTypes = {
  id: PropTypes.number,
  inicialAmount: PropTypes.number,
  displaystyle: PropTypes.string,
} 


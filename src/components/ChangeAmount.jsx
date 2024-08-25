import { useRef, useState } from "react"
import { Form, useSubmit } from "react-router-dom"
import PropTypes from 'prop-types'
import { changeAmount, deleteOrder } from "../cart";
import styled from "styled-components";

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }) {
  const formData = await request.formData();
  let intent = formData.get("intent");
  const order = Object.fromEntries(formData);

  if (intent === "delete") {
    deleteOrder(order.id);
    return null;
  }
  changeAmount(order)
  return null;
}

const FlexForm = styled(Form)`
  display:flex;
  align-items:center;
  gap: 1rem;
`

const InputWrapper = styled.div`
  display:inline-flex;
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
const DeleteButton = styled.button`
  display: flex;
  align-items:center;
  justify-content:center;
  
  width: 2.5rem;
  height: 2rem;

  background-color:#b91c1c;
  border: none;
  border-radius: 10px;

  color: white;
  font-size: 1.2rem;

  cursor:pointer;
  transition: transform 400ms;

  &:hover{
    background-color: #991b1b;
    transform: scale(1.05);
    transition: transform 150ms;
  }
`
const StyledSvg = styled.svg`
  width: 1rem;
  height: 1rem;
` 

//set manual event
const event = new Event('input', { bubbles: true })

function ChangeAmount({id, inicialAmount = "1"}) {
  const [amount, setAmount] = useState(inicialAmount)
  const inputRef = useRef(null);
  const submit = useSubmit();
  

  function handleSubmitOnChange(e) {
    if (e.target.value !== amount) {
      setAmount(parseInt(e.target.value))
    } 
    submit(e.target.parentElement)
  }

  function handleClickPlus() {
    setAmount((oldAmount) => oldAmount + 1)
    //trigger onChange manually
    inputRef.current.dispatchEvent(event);
  }

  function handleClickMinus() {
    setAmount((oldAmount) => oldAmount - 1)
    //trigger onChange manually
    inputRef.current.dispatchEvent(event);
  }

  return (
    <FlexForm method="POST" >
      <input 
        type="text"
        value= {id}
        name= "id"
        style={{ display: "none" }}
        readOnly={true}
      />
      <InputWrapper>
        <SmallButton onClick={handleClickMinus}>
          <StyledSvg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </StyledSvg>
        </SmallButton>
        <SmallInput
          name="amount"
          type="number"
          placeholder="0"
          value={amount}
          onChange={(e) => handleSubmitOnChange(e)}
          min="1"
          ref={inputRef}
        />
        <PlusButton onClick={handleClickPlus} name="plus">
          <StyledSvg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </StyledSvg>
        </PlusButton>
      </InputWrapper>
      <DeleteButton name="intent" value="delete">
        <StyledSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
        <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
        </StyledSvg>
      </DeleteButton>
    </FlexForm>
    
  )
}



ChangeAmount.propTypes = {
  id: PropTypes.number,
  inicialAmount: PropTypes.number,
} 


export default ChangeAmount


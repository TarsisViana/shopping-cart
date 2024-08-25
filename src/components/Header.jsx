import { Link } from "react-router-dom";
import PropTypes from "prop-types"
import styled from "styled-components";
import { useState } from "react";

const HeaderWrapper = styled.div`
  display:flex;
  gap :1.5rem;

  height: 72px;
  box-sizing: border-box;

  z-index:1;
  position: sticky;
  top: 0;
  padding: 1rem 2rem;

 
  background-color: #171717;

  color: white;
`
const LogoH1 = styled(Link)`
  all:unset;
  
  font-size: 2rem;
  font-weight: bold;

  flex-grow: 1;

  cursor: pointer;
`
const HeaderLink = styled(Link)`
  all: unset;

  display:flex;
  align-items: center;
  position: relative;

  cursor: pointer;

  transition: transform 200ms, border-bottom 500ms;
  /* when its selected it stays scaled */
  transform: ${props => props.selected == true ? "scale(1.1);": ""};

  &::after{
    content: '';
    position: absolute;
    width: 100%;
    /* when its selected the underline stays */
    transform: ${props => props.selected == true ? "scaleX(1);": "scaleX(0)"};
    height: 2px;
    bottom: 2px;
    left: 0;
    background-color: white;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
    
  &:hover{
    transform: scale(1.1);
    
  }
  &:hover::after{
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  
`

const Icon = styled.svg`
  height: 1rem;
  width: 1rem;
  margin: 0 .3rem;
`
function Header({cart}) {
  
  const [index, setIndex] = useState(0)

  return (
    <HeaderWrapper className="Header">
      
      <LogoH1
        onClick={() => setIndex(0)}
      >Shopping cart</LogoH1>
      <HeaderLink
        to="products"
        selected={index === 1 ? true : false}
        onClick= {() => setIndex(1)}
      >Products</HeaderLink>
      <HeaderLink
        to="/"
        selected={index === 2 ? true : false}
        onClick= {() => setIndex(2)}
      >Home</HeaderLink>
      <HeaderLink
        to="checkout"
        selected={index === 3 ? true : false}
        onClick= {() => setIndex(3)}
      >
        <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
          <path d="M1 1.75A.75.75 0 0 1 1.75 1h1.628a1.75 1.75 0 0 1 1.734 1.51L5.18 3a65.25 65.25 0 0 1 13.36 1.412.75.75 0 0 1 .58.875 48.645 48.645 0 0 1-1.618 6.2.75.75 0 0 1-.712.513H6a2.503 2.503 0 0 0-2.292 1.5H17.25a.75.75 0 0 1 0 1.5H2.76a.75.75 0 0 1-.748-.807 4.002 4.002 0 0 1 2.716-3.486L3.626 2.716a.25.25 0 0 0-.248-.216H1.75A.75.75 0 0 1 1 1.75ZM6 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
        </Icon>
        <span>{cart.length}</span>
      </HeaderLink>
      
    </HeaderWrapper>
  )
}

Header.propTypes = {
  cart: PropTypes.array
}

export default Header
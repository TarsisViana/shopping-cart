import { Link } from "react-router-dom";
import PropTypes from "prop-types"
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display:flex;
  gap :1rem;

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

  cursor: pointer;
`
const Icon = styled.svg`
  height: 1rem;
  width: 1rem;
  margin: 0 .3rem;
`
function Header({cart}) {
  
  return (
    <HeaderWrapper className="Header">
      
      <LogoH1>Shopping cart</LogoH1>
      <HeaderLink to="products">Products</HeaderLink>
      <HeaderLink to="/">Home</HeaderLink>
      <HeaderLink to="checkout">
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
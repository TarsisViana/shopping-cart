import { Link } from "react-router-dom";
import PropTypes from "prop-types"

function Header({cart}) {
  
  return (
    <div className="Header">
      <h1>Shopping cart</h1>
      <Link to="products">Products</Link>
      <Link to="/">Home</Link>
      <Link to="checkout">cart</Link>
      <span>{cart.length}</span>
    </div>
  )
}

Header.propTypes = {
  cart: PropTypes.array
}

export default Header
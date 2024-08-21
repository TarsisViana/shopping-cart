import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="Header">
      <h1>Shopping cart</h1>
      <Link to="products">Products</Link>
      <Link to="/">Home</Link>
    </div>
  )
}
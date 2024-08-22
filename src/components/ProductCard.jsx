import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

import AmountInput from "./AmountInput";


function ProductCard({ product }) {
  return (
    <div key={product.id} className="product-card">
      <span className="">
        {product.category}
      </span>
      <div className="">
        <Link to={`/products/${product.id}`}>
          <img
            src={product.image}
            className=""
            style = {{width:"200px"}}
          />
        </Link>
        
      </div>
      
        <Link to={`/products/${product.id}`}> 
          <h3 className="">{product.title}</h3>
        </Link>
      
      <p className="">{product.price}</p>
      <AmountInput id={product.id}/>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.object
  }).isRequired
}

export default ProductCard


 import PropTypes from 'prop-types'

import AmountInput from "./AmountInput";


function ProductCard({ product }) {
  return (
    <div key={product.id} className="product-card">
      <span className="">
        {product.category}
      </span>
      <div className="">
        <a href="/">
          <img
            src={product.image}
            className=""
            style = {{width:"200px"}}
          />
        </a>
        
      </div>
      
        <a href="" className=""> 
          <h3 className="">{product.title}</h3>
        </a>
      
      <p className="">{product.price}</p>
      <AmountInput />
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

// {"id": 1, "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", "price": 109.95, "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", "category": "men's clothing", "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", "rating": {
//         "rate": 3.9,
//         "count": 120
//     }
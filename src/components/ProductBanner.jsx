import PropTypes from 'prop-types'
import { Rating } from 'react-simple-star-rating'

import ChangeAmount from './ChangeAmount'

export default function ProductBanner({ product }) {
  return (
    <div>
      <div>
        <span className="">
          {product.category}
        </span>
        <div className="">
          <img
            src={product.image}
            className=""
            style = {{width:"100px"}}
          />
        </div>
      
        <h3 className="">{product.title}</h3>
        <p className="">{product.price}</p>
        <div>
          <Rating
            inicialValue={5}
            readonly={true}
            allowFraction={true}
          />
          <span>{product.rating.count} reviews</span>
        </div>
        <ChangeAmount id={product.id} inicialAmount={product.amount}/>
      </div>
      <span>SubTotal: { product.price * product.amount }</span>
    </div>
  )
}


ProductBanner.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.object,
    amount: PropTypes.number.isRequired
  }).isRequired
}
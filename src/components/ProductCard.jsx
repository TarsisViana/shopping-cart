import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

import AmountInput from "./AmountInput";

const StyledCard = styled.div`
  width: 250px;
  border-radius: 10px;

  display:flex;
  flex-direction: column;
  position: relative;

  padding: 1rem .5rem; 

  background-color: white;

  box-shadow: 0 0 10px 0 #d4d4d4;
`

const ProductTitle = styled(Link)`
  all: unset;
  height: 2.5rem;
  max-width: inherit;
  margin-top: 1em;
  padding: 0 .8rem;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  font-size: 1rem;
  font-weight: 500;
  color: #404040;

  cursor: pointer;
`
const StyledImgWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center; 
`

const StyledImg = styled.img`
  height: 280px;
  max-width: 250px;
  object-fit: contain;
`
const CategorySpan = styled.span`
  position: absolute;
  right: 5px;
  top:5px;

  background-color: #e5e5e59e;
  border-radius: 10px;
  border: 1px solid #e5e5e5;

  padding: .2rem .5rem;

  font-size: .7rem;
  color: #737373;

`

const PriceP = styled.p`
  margin: .5rem 0 1rem 0;
  padding: 0 .8rem;
  text-align: right;

  color: #404040;
`

function ProductCard({ product }) {
  return (
    <StyledCard key={product.id}>
      <CategorySpan className="">
        {product.category}
      </CategorySpan>
     
      <StyledImgWrapper
        to={`/products/${product.id}`}
        
      >
          <StyledImg
            src={product.image}
          />
        </StyledImgWrapper>
        
      
      
        <ProductTitle to={`/products/${product.id}`}> 
          {product.title}
        </ProductTitle>
      
      <PriceP>{numberFormatter.format(product.price)} €</PriceP>
      <AmountInput id={product.id}/>
    </StyledCard>
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


const numberFormatter = new Intl.NumberFormat('en-US', {
  style: 'decimal',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});
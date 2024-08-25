import PropTypes from 'prop-types'
import styled from 'styled-components'

import ChangeAmount from './ChangeAmount'

const BannerWrapper = styled.div`
  width: 700px;
  margin-bottom: 20px;

  border: 1px solid #e5e5e5;
  border-radius: 10px;

  overflow: hidden;
`

const FlexWrapper = styled.div`
  display:flex;
  gap: 1rem;
`
const QuantityWrapper = styled(FlexWrapper)`
  position:absolute;
  bottom: 20px;
`

const InfoWrapper =  styled.div`
  flex-grow: 1;
  padding: 1rem 0 0 1.5rem;

  position: relative;
`
const StyledImg = styled.img`
  height: 150px;
  max-width: 100px;
  object-fit: contain;

  margin-left: 1rem;
`
const ProductTitle = styled.h3`
  margin: 0;
  color: #18181b;

  flex-grow: 1;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`
const PriceP = styled.p`
  margin: 0;
  padding: 0 1.5rem 0 0;
  text-align: right;
  white-space: nowrap;

  font-size: 1.5rem;
  font-weight: bold;
  color: #18181b;

  justify-self: flex-end;
  flex-grow: 2;
`
const SubtotalP = styled.p`
  margin: 0;
  padding: .3rem 1rem;

  background-color: #e5e5e5;

  font-size: .8rem;
  text-align: right;
`
export default function ProductBanner({ product }) {
  return (
    <BannerWrapper>
      <FlexWrapper>
        <div>
          <StyledImg
            src={product.image}
            className=""
            style = {{width:"100px"}}
          />
        </div>
      
        <InfoWrapper>
          <FlexWrapper>
            <ProductTitle className="">{product.title}</ProductTitle>
            <PriceP className="">{product.price.toFixed(2)} €</PriceP>
          </FlexWrapper>
          <QuantityWrapper>
            <p>Quantity: </p>
            <ChangeAmount id={product.id} inicialAmount={product.amount}/>
          </QuantityWrapper>
        </InfoWrapper>
      </FlexWrapper>
      <SubtotalP>
        SubTotal: {numberFormatter.format(product.price * product.amount)} €
      </SubtotalP>
    </BannerWrapper>
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

const numberFormatter = new Intl.NumberFormat('en-US', {
  style: 'decimal',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});
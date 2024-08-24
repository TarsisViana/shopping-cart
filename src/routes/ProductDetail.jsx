import { useLoaderData, useOutletContext,Link } from "react-router-dom"
import { Rating } from "react-simple-star-rating";
import styled from "styled-components";

import AmountInput from "../components/AmountInput"

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }) {
  return params.productId
}

const SectionWrapper = styled.div`
  max-width:1200px;
  margin: auto;
  padding: 2rem;
`
const ProductsLink = styled(Link)`
  all: unset;
  font-size: .8rem;

  cursor:pointer;
`

const CategorySpan = styled.span`
  font-size: .8rem;
`
const FlexWrapper = styled.div`
  display:flex;
  gap:3rem;
  max-width: 1100px;

  margin: 2rem auto 0;
`

const ProductTitleH2 = styled.h2`
  margin:0;
  margin-bottom: 1rem;

  color: #171717;
`

const DescriptionP = styled.p`
  margin: 0;
  margin-bottom: 1rem;
  padding-right: 2rem;

  font-size: .8rem;
  color: #262626;
`

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
`

const RateSpan = styled.span`
  margin-right:.4rem;

  font-size: .8rem;
`
const ReviewsSpan = styled.span`
  margin-left: 0.4rem;

  font-size: .8rem;
  color: #525252;
`
const PriceWrapper = styled.div`
  display:flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 4rem auto;
  padding: 1rem 1.5rem;

  align-items:center;
  justify-content:center;

  width: 230px;
  border: 1px solid #525252;
  border-radius: 10px;

  
`



const PriceSpan = styled.span`
  font-size: 2rem;

  grid-column-start: 2;
`
const StyledButtons = styled(AmountInput)`
  grid-column: 2;
`



export default function ProductDetail() {
  const [productData] = useOutletContext();
  const id = useLoaderData();
  
  const [product] = productData.filter(value => {
    return value.id == id;
  }) 
    
  return (
    <SectionWrapper>
      <ProductsLink to="/products">products </ProductsLink>
      <CategorySpan>
        &gt; {product.category}
      </CategorySpan>
      
      <FlexWrapper>
        <img
          src={product.image}
          className=""
          style={{
            height: "500px"
          }}
        />
        
        
        <div style={{position:"relative"}}>
          <ProductTitleH2>
            {product.title}
          </ProductTitleH2>
          <DescriptionP>{product.description}</DescriptionP>
          
          <RatingWrapper>
            <RateSpan>{product.rating.rate}</RateSpan>
            <Rating
              initialValue={product.rating.rate}
              readonly={true}
              allowFraction={true}
              size={16}
              />
            <ReviewsSpan>({product.rating.count} reviews)</ReviewsSpan>
          </RatingWrapper>
          <PriceWrapper>
            <PriceSpan className="">{product.price} €</PriceSpan>
            
            <StyledButtons id={id} />
          </PriceWrapper>
        </div>
        
      </FlexWrapper>
    </SectionWrapper>
    
  )
}
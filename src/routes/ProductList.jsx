import styled from "styled-components"
import ProductCard from "../components/ProductCard"

import { useOutletContext } from "react-router-dom"

const ShopSection = styled.div`
  padding: 2rem 4rem;
`

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, calc(250px + 1rem));
  grid-gap: 1.5rem;
  justify-content: space-around;

  max-width: 100%;
`

export default function ProductList() {
  const [productData] = useOutletContext()

  if(!productData){
    return "loading"
  }
  return (
    
      <ShopSection>
        <h2>Products</h2>
        <ListWrapper className="">
          {productData.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </ListWrapper>
      </ShopSection>
    
  )
}

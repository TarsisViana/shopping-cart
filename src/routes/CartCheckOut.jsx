import { useLoaderData } from "react-router-dom";
import { getCartData } from "../cart"
import ProductBanner from "../components/ProductBanner";
import styled from "styled-components";


// eslint-disable-next-line react-refresh/only-export-components
export async function loader(){
  const orderArray = getCartData();
  const orderDetails = await Promise.all(orderArray.map( async order => {
        const response = await fetch(
          `https://fakestoreapi.com/products/${order.id}`
        )
        const obj = await response.json()
        return {...obj , amount : order.amount}
      }))
  return orderDetails; 
}

const SectionWrapper = styled.div`
  box-sizing:border-box;
  height: calc(100vh - 72px);
  padding-top: 4rem;

`
const SectionTitle = styled.h2`
  margin: 0 0 2rem 4rem;
`
const FlexWrapper = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-evenly;
  gap: 2rem;

  position:relative;
  margin: auto;

  max-width: 1200px;

`

const ListWrapper = styled.div`
  
`
const OrderSumWrapper = styled.div`
  width: 300px;
  box-sizing: border-box;
  border: 1px solid #e5e5e5;
  border-radius: 10px;

  overflow: hidden;
  position: sticky;
  top: 100px;

  align-self: flex-start;
`

const OrderSumTitle = styled.h3`
  margin:0;
  padding: 1rem 1rem .8rem 1rem;
  background-color: #e5e5e5;

  font-size: 1.4rem;
`
const GreyText = styled.p`
  display: flex;
  justify-content:space-between;

  color: #404040;

  margin:0;
  padding: 0 1rem .5rem 1.5rem;

  background-color: #e5e5e5;
`
const DeliveryFee = styled(GreyText)`
  padding-bottom: 1rem;
`

const OrderTotal = styled.p`
  display:flex;
  justify-content: space-between;

  margin: 1rem;
  margin-bottom: 1.5rem;

  font-weight: bold;
`
const OrderButton = styled.button`
  display:block;
  margin: 0 auto 1rem;
  width: 200px;
  height: 2rem;

  background-color:#171717;
  border: none;
  border-radius: 10px;

  color: white;
  font-size: 1.2rem;

  cursor:pointer;
  transition: transform 400ms;

  &:hover{
    background-color: #262626;
    transform: scale(1.05);
    transition: transform 150ms;
  }
`
export default function CartCheckOut(){
  const orderData = useLoaderData();
  

  if (orderData) {
    var subtotal = orderData.reduce((total, order) => {
    return (total + order.amount * order.price)
  }, 0)
  }
  


  return (
    <SectionWrapper>
    <SectionTitle>Cart Checkout</SectionTitle>
    <FlexWrapper>
      
      <ListWrapper>
        {
          !orderData ? "loading"
            : orderData.length === 0
              ? "Cart is empty"
              : orderData.map(product => {
                return <ProductBanner
                  key={product.id}
                  product={product}
                />
            })
        }
      </ListWrapper>
      <OrderSumWrapper>
        <OrderSumTitle>Order Summary</OrderSumTitle>
          <GreyText>
            <span>Subtotal: </span>
            <span>{numberFormatter.format(subtotal)} €</span>
          </GreyText>
          <DeliveryFee>
            <span>Delivery fee:</span>
            <span>{numberFormatter.format(0)} €</span> 
          </DeliveryFee>
          <OrderTotal>
            <span>Total: </span>
            <span>{numberFormatter.format(subtotal)} €</span>
          </OrderTotal>
        <OrderButton>
            Place order
        </OrderButton>
      </OrderSumWrapper>
      
      </FlexWrapper>
      </SectionWrapper>
  )
}

const numberFormatter = new Intl.NumberFormat('en-US', {
  style: 'decimal',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});
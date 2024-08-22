const cartData = []

function addToCart(product){
  const repeatedOrder = cartData.findIndex((item) => item.id === product.id)
  if(repeatedOrder >= 0){
    cartData[repeatedOrder].amount += product.amount; 
  }else {
    cartData.push(product)
  }
  
}

function changeAmount(product){
  const repeatedOrder = cartData.findIndex((item) => item.id === product.id)
  if(repeatedOrder >= 0){
    cartData[repeatedOrder].amount = product.amount; 
  }
}

function getCartData() {
  return cartData
}

export {cartData, addToCart, getCartData, changeAmount}
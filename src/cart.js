const cartData = [{id: '2', amount: 1}]

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

function deleteOrder(id) {
  const index = cartData.findIndex((item) => item.id === id);

  cartData.splice(index, 1);
}

export {cartData, addToCart, getCartData, changeAmount, deleteOrder}
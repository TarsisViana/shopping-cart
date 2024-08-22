const cartData = []

function addToCart(value){
  cartData.push(value)
}

function getCartData() {
  return cartData
}

export {cartData, addToCart, getCartData}
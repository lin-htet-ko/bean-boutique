let cart = JSON.parse(localStorage.getItem("cartItems")) || (new Map());

function getCartItemSize() {
    let total = 0
    for (const key in cart) {        
        const element = cart[key];
        total += element.quantity;
    }
    return total;
}

function clearCart() {
  localStorage.setItem("cartItems", "")
}

function getQuantity(itemKey) {
  return cart[itemKey]?.quantity || 0;
}

function addCoffeeItemToCart(itemKey, weight) {
  addToCart(`${itemKey}$${weight}`);
}

function reduceCoffeeItemFromCart(itemKey, weight) {
  reduceFromCart(`${itemKey}$${weight}`);
}

function addBrewingItemToCart(itemKey, variant) {
  addToCart(`${itemKey}$${variant}`);
}

function reduceBrewingItemFromCart(itemKey, variant) {
  reduceFromCart(`${itemKey}$${variant}`);
}


function addToCart(itemKey) {
    
  const existingItem = cart[itemKey];

  if (existingItem) {
    cart[itemKey].quantity += 1;
  } else {
    cart[itemKey] = { quantity: 1 };
  }

  localStorage.setItem("cartItems", JSON.stringify(cart));
}

function reduceFromCart(itemKey) {
  const existingItem = cart[itemKey];

  if (existingItem && existingItem.quantity >= 1) {
    existingItem.quantity -= 1;
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }
}

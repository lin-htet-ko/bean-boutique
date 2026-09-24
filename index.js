let coffees = [];
fetch("../assests/json/coffee.json")
  .then((response) => response.json())
  .then((response) => {    
    coffees = response;
    bindCoffeeBeanItemClickListener();
  });

let equipments = [];
fetch("../assests/json/equipment.json")
  .then((response) => response.json())
  .then((response) => {
    equipments = response;
    bindBrewingMachineItemClickListener()
  });

function retrieveSelectedCoffeeWeight(id) {
  return coffees.filter((value) => value.id == id)[0]?.weight.filter(value => value.isSelected)[0].name;
}

function retrieveSelectedBrewingVariant(id) {
  return equipments.filter((value) => value.id == id)[0]?.variant.filter(value => value.isSelected)[0].name;
}

const cartItemCount = document.getElementById("cart-item-count");
const cartItemCountText = document.getElementById("cart-item-count-text");

function onDomLoaded() {
  document.addEventListener("DOMContentLoaded", () => {
    let total = getCartItemSize();
    if (total > 0) {
      cartItemCount.textContent = total;
      cartItemCount.style.display = "inline-block";
      cartItemCountText.textContent = total;
    } else {
      cartItemCount.style.display = "none";
      cartItemCountText.textContent = 0;
    }
  });
}
onDomLoaded();

document.querySelector("nav h3").addEventListener("click", () => {
  window.location.href = "/index.html";
});

function bindCoffeeBeanItemClickListener() {
  for (
    let coffeeBeanItemIndex = 1;
    coffeeBeanItemIndex <= 20;
    coffeeBeanItemIndex++
  ) {
    const coffeeId = `coffee-bean-item-${coffeeBeanItemIndex}`
    const coffeeBeanItem = document.getElementById(coffeeId);

    if (coffeeBeanItem) {
      const navigateToCoffeeDetail = (event) => {
        event.preventDefault();
        window.location.href = `/pages/coffee_detail.html?item=coffee-bean-item-${coffeeBeanItemIndex}`;
      };

      const getItemKey = (index) => `#coffee-bean-item-${index}`;
      const itemKey = getItemKey(coffeeBeanItemIndex);

      const cartQuantityDisplay = coffeeBeanItem.querySelector(
        `#coffee-bean-item-${coffeeBeanItemIndex} #cart-quantity`,
      );
      const updateCartUI = (itemKey) => {
        const totalCount = getCartItemSize();

        cartItemCount.style.display = totalCount > 0 ? "inline-block" : "none";
        cartItemCount.textContent = totalCount;
        cartItemCountText.textContent = totalCount;
        
        cartQuantityDisplay.textContent = getQuantity(`${itemKey}$${retrieveSelectedCoffeeWeight(coffeeId)}`);
      };

      updateCartUI(itemKey);

      coffeeBeanItem
        .querySelector("#coffee-bean-item-img")
        .addEventListener("click", navigateToCoffeeDetail);

      const addToCartButton = coffeeBeanItem.querySelector(
        `#coffee-bean-item-${coffeeBeanItemIndex} #btn-add-to-cart`,
      );
      const reduceFromCartButton = coffeeBeanItem.querySelector(
        `#coffee-bean-item-${coffeeBeanItemIndex} #btn-reduce-from-cart`,
      );

      addToCartButton.addEventListener("click", () => {
        addCoffeeItemToCart(itemKey, retrieveSelectedCoffeeWeight(coffeeId));
        updateCartUI(itemKey);
      });

      reduceFromCartButton.addEventListener("click", () => {
        reduceCoffeeItemFromCart(itemKey, retrieveSelectedCoffeeWeight(coffeeId));
        updateCartUI(itemKey);
      });
    }
  }
}

function bindBrewingMachineItemClickListener() {
  for (
    let brewingMethodIndex = 1;
    brewingMethodIndex <= 20;
    brewingMethodIndex++
  ) {
    let brewingId = `brewing-equipment-item-${brewingMethodIndex}`;
    const brewingMethodItem = document.getElementById(brewingId);

    if (brewingMethodItem) {
      const navigateToBrewingDetail = (event) => {
        event.preventDefault();
        window.location.href = `/pages/equipment_detail.html?item=brewing-equipment-item-${brewingMethodIndex}`;
      };

      const cartQuantityDisplay = brewingMethodItem.querySelector(
        `#brewing-equipment-item-${brewingMethodIndex} #cart-quantity`,
      );

      const getItemKey = (index) => `#brewing-equipment-item-${index}`;
        const itemKey = getItemKey(brewingMethodIndex);

      const updateCartUI = (itemKey) => {
        const totalCount = getCartItemSize();
        cartItemCount.style.display = totalCount > 0 ? "inline-block" : "none";
        cartItemCount.textContent = totalCount;
        cartItemCountText.textContent = totalCount;

        cartQuantityDisplay.textContent = getQuantity(`${itemKey}$${retrieveSelectedBrewingVariant(brewingId)}`);
      };

      updateCartUI(itemKey)

      brewingMethodItem
        .querySelector("#equipment-item-img")
        .addEventListener("click", navigateToBrewingDetail);

      const addToCartButton = brewingMethodItem.querySelector(
        `#brewing-equipment-item-${brewingMethodIndex} #btn-add-to-cart`,
      );
      const reduceFromCartButton = brewingMethodItem.querySelector(
        `#brewing-equipment-item-${brewingMethodIndex} #btn-reduce-from-cart`,
      );

      addToCartButton.addEventListener("click", () => {
        addBrewingItemToCart(itemKey, retrieveSelectedBrewingVariant(brewingId));
        updateCartUI(itemKey);
      });

      reduceFromCartButton.addEventListener("click", () => {
        reduceBrewingItemFromCart(itemKey, retrieveSelectedBrewingVariant(brewingId));
        updateCartUI(itemKey);
      });
    }
  }
}

document.querySelectorAll(".home-cart").forEach((element) => {
  element.addEventListener('click', (event) => {
    event.preventDefault();
    if (getCartItemSize() <= 0) {
      let status = document.getElementById("site-status");
      if (!status) {
        status = document.createElement("div");
        status.id = "site-status";
        status.className = "visually-hidden";
        status.setAttribute("role", "status");
        status.setAttribute("aria-live", "polite");
        document.body.append(status);
      }
      status.textContent = "Your cart is empty. Add an item before placing an order.";
    } else {
      window.location.replace("./pages/checkout.html")
    }
  })
});
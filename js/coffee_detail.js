onDomLoaded();

const urlParams = new URLSearchParams(window.location.search);

const queryItemId = urlParams.get("item");
const queryWeight = urlParams.get("weight");

const cartQuantityDisplay = document.querySelector("#title-add-to-cart-section #cart-quantity");

// fetch("../assests/json/coffee.json")
//   .then((response) => response.json())
//   .then((coffee) => {
    coffees
      .filter((item) => item.id === queryItemId)
      .forEach((item) => {
        const image = document.getElementById("coffee_detail_image");
        const name = document.getElementById("coffee-name");
        const brandName = document.getElementById("coffee-detail-brand-name");
        const description = document.querySelector(
          ".coffee-detail-item-section #description-value",
        );
        const finalPrice = document.querySelector(
          ".coffee-detail-price #price",
        );
        const originalPrice = document.querySelector(
          ".coffee-detail-price #value-save",
        );
        const savedPrice = document.querySelector(
          ".coffee-detail-price .save-price",
        );
        const origins = document.querySelector(
          ".coffee-detail-item-section #coffee-origins",
        );
        const tastingNotesChips = document.getElementById(
          "tasting-notes-chips",
        );
        const brewingMethodsChips = document.getElementById(
          "brewing-methods-chips",
        );
        const weight = document.querySelector(
          ".coffee-detail-item-section #weight-items",
        );

        image.src = item.image;
        name.textContent = item.title;
        brandName.textContent = item.brandName;
        description.textContent = item.description;
        cartQuantityDisplay.textContent = getQuantity(`#${item.id}$${queryWeight || retrieveSelectedCoffeeWeight(item.id)}`)

        origins.textContent = item.coffeeOrigins;
        tastingNotesChips.innerHTML = item.tastingNotes
          .split(",")
          .map(
            (note) =>
              `<span class="chip coffee-detail-fact">${note.trim()}</span>`,
          )
          .join("");
        brewingMethodsChips.innerHTML = item.brewingMethods
          .split(",")
          .map(
            (method) =>
              `<span class="chip coffee-detail-fact">${method.trim()}</span>`,
          )
          .join("");
        weight.innerHTML = item.weight
          .map((weightItem) => {
            weightItem.isSelected = queryWeight
              ? weightItem.name === queryWeight
              : weightItem.isSelected;
            return weightItem;
          })
          .map(
            (weightItem) =>
              {
                let isActive = weightItem.name == queryWeight || weightItem.isSelected;

                return `<a href="../pages/coffee_detail.html?item=${queryItemId}&weight=${weightItem.name}" class="${isActive ? "weight-active" : ""}">${weightItem.name}</a>`}
          )
          .join("");

          item.weight
      .filter((weightItem) => {
        return weightItem.isSelected = queryWeight
          ? weightItem.name === queryWeight
          : weightItem.isSelected;
      })
      .forEach((weightItem) => {
        finalPrice.textContent = weightItem.finalPrice;
        if (weightItem.originalPrice == weightItem.finalPrice) {
          savedPrice.style.display = "none";
        }
        originalPrice.textContent = `${weightItem.originalPrice}`;
      });
      });

    
  // });

const addToCartButton = document.querySelector("#title-add-to-cart-section #btn-add-to-cart");
const reduceFromCartButton = document.querySelector("#title-add-to-cart-section #btn-reduce-from-cart");

const getItemKey = (itemId) => `#${itemId}`;

const updateCartUI = (cart, itemKey) => {
  const totalCount = getCartItemSize();

  const cartItemCount = document.getElementById("cart-item-count");
  const cartItemCountText = document.getElementById("cart-item-count-text");

  cartItemCount.style.display = totalCount > 0 ? "inline-block" : "none";
  cartItemCount.textContent = totalCount;
    cartItemCountText.textContent = totalCount;

  cartQuantityDisplay.textContent = getQuantity(`${itemKey}$${queryWeight || retrieveSelectedCoffeeWeight(queryItemId)}`);
};

addToCartButton.addEventListener("click", () => {
  const itemKey = getItemKey(queryItemId);
  addCoffeeItemToCart(itemKey, queryWeight || retrieveSelectedCoffeeWeight(queryItemId));
  updateCartUI(cart, itemKey);
});

reduceFromCartButton.addEventListener("click", () => {
  const itemKey = getItemKey(queryItemId);
  reduceFromCartButton(itemKey, queryWeight || retrieveSelectedCoffeeWeight(queryItemId));
  updateCartUI(cart, itemKey);
});
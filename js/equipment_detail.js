onDomLoaded();

const urlParams = new URLSearchParams(window.location.search);

const queryItemId = urlParams.get("item");
const queryVariant = urlParams.get("variant");

const cartQuantityDisplay = document.querySelector(
  "#title-add-to-cart-section #cart-quantity",
);

// fetch("../assests/json/equipment.json")
//   .then((response) => response.json())
//   .then((equipment) => {
    equipments
      .filter((item) => item.id === queryItemId)
      .forEach((item) => {
        const image = document.getElementById("equipment_detail_image");
        const name = document.getElementById("equipment-name");
        const brandName = document.getElementById(
          "equipment-detail-brand-name",
        );
        const description = document.querySelector(
          ".equipment-detail-item-section #description-value",
        );
        const finalPrice = document.querySelector(
          ".equipment-detail-price #price",
        );
        const originalPrice = document.querySelector(
          ".equipment-detail-price #value-save",
        );
        const savedPrice = document.querySelector(
          ".equipment-detail-price .save-price",
        );
        const variants = document.querySelector(
          ".equipment-detail-item-section #variant-items",
        );
        const whtIncludes = document.getElementById(
          "whtIncludes",
        );
        const warranty = document.getElementById("warranty");
        const category = document.getElementById("category");
        const material = document.getElementById("material");
        const dimensions = document.getElementById("dimensions");
        const filterType = document.getElementById("filter-type");
        const modelNo = document.getElementById("model-no");

        image.src = item.image;
        name.textContent = item.title;
        brandName.textContent = item.brandName;
        description.textContent = item.description;
        warranty.textContent = item.warranty;
        category.textContent = item.category;
        material.textContent = item.material;
        dimensions.textContent = item.dimensions;
        filterType.textContent = item.filterType;
        modelNo.textContent = item.modelNo;
        cartQuantityDisplay.textContent = getQuantity(`#${item.id}$${queryVariant || retrieveSelectedBrewingVariant(item.id)}`);

        whtIncludes.innerHTML = sanitizeHTML(
          item.whatWillIncludeInTheBox
            .split(",")
            .map(
              (whtIncl) =>
                `<span class="chip equipment-detail-fact">${whtIncl.trim()}</span>`,
            )
            .join(""),
        );

        variants.innerHTML = sanitizeHTML(
          item.variant
            .map((variant) => {
              variant.isSelected = queryVariant
                ? variant.name === queryVariant
                : variant.isSelected;
              return variant;
            })
            .map((variant) => {
              let isActive = variant.name == queryVariant || variant.isSelected;

              return `<a href="../pages/equipment_detail.html?item=${queryItemId}&variant=${variant.name}" class="${isActive ? "variant-active" : ""}">${variant.name}</a>`;
            })
            .join(""),
        );

        item.variant
          .filter((variant) => {
            return (variant.isSelected = queryVariant
              ? variant.name === queryVariant
              : variant.isSelected);
          })
          .forEach((variant) => {
            finalPrice.textContent = variant.finalPrice;
            if (variant.originalPrice == variant.finalPrice) {
              savedPrice.style.display = "none";
            }
            originalPrice.textContent = `${variant.originalPrice}`;
          });
      });
  // });

const addToCartButton = document.querySelector(
  "#title-add-to-cart-section #btn-add-to-cart",
);
const reduceFromCartButton = document.querySelector(
  "#title-add-to-cart-section #btn-reduce-from-cart",
);

const getItemKey = (itemId) => `#${itemId}`;

const updateCartUI = (cart, itemKey) => {
  const totalCount = getCartItemSize();

  const cartItemCount = document.getElementById("cart-item-count");
  const cartItemCountText = document.getElementById("cart-item-count-text");

  cartItemCount.style.display = totalCount > 0 ? "inline-block" : "none";
  cartItemCount.textContent = totalCount;
  cartItemCountText.textContent = totalCount;

  cartQuantityDisplay.textContent = getQuantity(`${itemKey}$${queryVariant || retrieveSelectedBrewingVariant(queryItemId)}`);
};

addToCartButton.addEventListener("click", () => {
  const itemKey = getItemKey(queryItemId);
  addBrewingItemToCart(itemKey, queryVariant || retrieveSelectedBrewingVariant(queryItemId));
  updateCartUI(cart, itemKey);
});

reduceFromCartButton.addEventListener("click", () => {
  const itemKey = getItemKey(queryItemId);
  reduceBrewingItemFromCart(itemKey, queryVariant || retrieveSelectedBrewingVariant(queryItemId));
  updateCartUI(cart, itemKey);
});

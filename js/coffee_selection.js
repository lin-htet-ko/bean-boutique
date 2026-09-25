const btnApplyFilter = document.querySelector("#btn-coffee-filter-apply");
const btnClearFilter = document.querySelector("#btn-coffee-filter-clear");
const coffeeContent = document.querySelector("#coffee-selection-items");
const filterSections = document.querySelectorAll(".filter-items-section");
// const dropdowns = document.querySelectorAll(".dropdown");

document.addEventListener("DOMContentLoaded", () => {
  btnClearFilter.style.display = "none";
  btnApplyFilter.style.display = "block";
});

onDomLoaded();

filterSections.forEach((element) => {
  const dropdown = element.querySelector(".dropdown");
  if (dropdown) {
    const icon = element.querySelector("#ic-brand-dropdown");
    icon.src = "../assests/imgs/icons/ic_arrow_down.svg";
    element.querySelectorAll(".filter-item").forEach((value, _) => {
      value.style.display = "none";
    });

    dropdown.addEventListener("click", () => {
      const isExpanded = dropdown.getAttribute("aria-expanded") === "true";
      dropdown.setAttribute("aria-expanded", String(!isExpanded));

      if (!isExpanded) {
        icon.src = "../assests/imgs/icons/ic_arrow_up.svg";
        element.querySelectorAll(".filter-item").forEach((value, _) => {
          value.style.display = "block";
        });
      } else {
        icon.src = "../assests/imgs/icons/ic_arrow_down.svg";
        element.querySelectorAll(".filter-item").forEach((value, _) => {
          value.style.display = "none";
        });
      }
    });
  }
});

let modifiedCoffees = [];

btnApplyFilter.addEventListener("click", () => {
  let selectedBrands = Array.from(
    document.querySelectorAll("input[name='brand']:checked"),
  ).map((item) => item.value.toLowerCase());
  let selectedWeights = Array.from(
    document.querySelectorAll("input[name='weight']:checked"),
  ).map((item) => item.value.toLowerCase());
  let selectedBrewingMethods = Array.from(
    document.querySelectorAll("input[name='brewingMethods']:checked"),
  ).map((item) => item.value.toLowerCase());
  let selectedOrigins = Array.from(
    document.querySelectorAll("input[name='coffeeOrigins']:checked"),
  ).map((item) => item.value.toLowerCase());
  let selectedTastingNotes = Array.from(
    document.querySelectorAll("input[name='tastingNotes']:checked"),
  ).map((item) => item.value.toLowerCase());

  modifiedCoffees = coffees.filter((item) => {
    let weights = item.weight.filter(we => selectedWeights.includes(we.name.toLowerCase()))[0]?.name.toLowerCase();
    return (
      selectedBrands.includes(item.brandName.toLowerCase()) ||
      selectedBrewingMethods.includes(item.brewingMethods.toLowerCase()) ||
      selectedOrigins.includes(item.coffeeOrigins.toLowerCase()) ||
      selectedTastingNotes.includes(item.tastingNotes.toLowerCase()) ||
      selectedWeights.includes(weights)
    );
  });

  let content = mapCoffeeItemToHTML(modifiedCoffees);

  coffeeContent.innerHTML = sanitizeHTML(content);
  bindCoffeeBeanItemClickListener();
  btnClearFilter.style.display = "block";
});

btnClearFilter.addEventListener("click", () => {
  document
    .querySelectorAll("input[name='brand']:checked")
    .forEach((checkbox) => (checkbox.checked = false));
  document
    .querySelectorAll("input[name='weight']:checked")
    .forEach((checkbox) => (checkbox.checked = false));
  document
    .querySelectorAll("input[name='brewingMethods']:checked")
    .forEach((checkbox) => (checkbox.checked = false));
  document
    .querySelectorAll("input[name='coffeeOrigins']:checked")
    .forEach((checkbox) => (checkbox.checked = false));
  document
    .querySelectorAll("input[name='tastingNotes']:checked")
    .forEach((checkbox) => (checkbox.checked = false));

  let content = mapCoffeeItemToHTML(coffees);

  coffeeContent.innerHTML = sanitizeHTML(content);
  bindCoffeeBeanItemClickListener();
  btnClearFilter.style.display = "none";
});

const searchBar = document.querySelector("#coffee-search-bar");
searchBar.addEventListener("input", (event) => {
  let keyword = event.target.value.toLowerCase();

  let filterCoffees = coffees.filter(
    (coffee) =>
      coffee.title.toLowerCase().includes(keyword) ||
      coffee.brandName.toLowerCase().includes(keyword) ||
      coffee.description.toLowerCase().includes(keyword) ||
      coffee.coffeeOrigins.toLowerCase().includes(keyword) ||
      coffee.tastingNotes.toLowerCase().includes(keyword) ||
      coffee.brewingMethods.toLowerCase().includes(keyword),
  );

  modifiedCoffees = filterCoffees;

  let content = mapCoffeeItemToHTML(modifiedCoffees);

  coffeeContent.innerHTML = sanitizeHTML(content);
  bindCoffeeBeanItemClickListener();
});

function mapCoffeeItemToHTML(coffees) {
  return coffees.map((coffee) => {
    let notes = coffee.tastingNotes
      .split(",")
      .map((note) => `<span>${note}</span>`)
      .join("");

    let brewingMethods = coffee.brewingMethods
      .split(",")
      .map((note) => `<span>${note}</span>`)
      .join("");

    let weightItem = coffee.weight.filter((weight) => weight.isSelected)[0];
    let qty = cart[`#${coffee.id}`];
    qty = qty ? qty.quantity : 0;

    let savePrice = weightItem.finalPrice != weightItem.originalPrice ?
    `<div class="save-price">
                        <p id="title-save">Was</p>
                        <p id="value-save">${weightItem.originalPrice}</p>
                      </div>` : ''

    return `
    <div id="${coffee.id}" class="coffee-bean-item">
              <img
                id="coffee-bean-item-img"
                src="${coffee.image}"
                alt="${coffee.title}"
              />
              <div id="body">
                <h5>${coffee.title}</h5>
                <p id="desc">${coffee.description}</p>
                <div id="origin">
                  <img
                    src="../assests/imgs/icons/ic_world.svg"
                    alt="Origin icon"
                  />
                  <p>${coffee.coffeeOrigins}</p>
                </div>
                <div class="coffee-bean-item-footer">
                  <div class="coffee-bean-item-facts">
                    <div id="coffee-bean-item-fact">
                      <h6>Tasting Notes</h6>
                      ${notes}
                    </div>
                    <div id="coffee-bean-item-fact">
                      <h6>Brewing Methods</h6>
                      ${brewingMethods}
                    </div>
                  </div>

                  <div class="coffee-bean-item-prprice-action">
                    <div class="coffee-bean-item-price">
                      <h4 id="price">${weightItem.finalPrice}</h4>
                      ${savePrice}
                    </div>
                    <div class="btn-secondary btn-add-to-cart-container">
                      <button id="btn-reduce-from-cart" class="">-</button>
                      <span id="cart-quantity">${qty}</span>
                      <button id="btn-add-to-cart" class="">+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    `.trim();
  });
}

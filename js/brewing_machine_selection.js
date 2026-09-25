const btnApplyFilter = document.querySelector("#btn-equipment-filter-apply");
const btnClearFilter = document.querySelector("#btn-equipment-filter-clear");
const equipmentContent = document.querySelector("#equipment-selection-items");
const filterSections = document.querySelectorAll(".filter-items-section");
// const dropdowns = document.querySelectorAll(".dropdown");

document.addEventListener("DOMContentLoaded", () => {
  btnClearFilter.style.display = "none";
});
onDomLoaded();

filterSections.forEach((element) => {
  const dropdown = element.querySelector(".dropdown");
  if (dropdown) {
    icon.src = "../assests/imgs/icons/ic_arrow_down.svg";
    element.querySelectorAll(".filter-item").forEach((value, _) => {
      value.style.display = "none";
    });

    dropdown.addEventListener("click", () => {
      let icon = element.querySelector("#ic-brand-dropdown");

      if (icon.src.endsWith("ic_arrow_down.svg")) {
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

let modifiedEquipments = [];

btnApplyFilter.addEventListener("click", () => {
  let selectedBrands = Array.from(
    document.querySelectorAll("input[name='brand']:checked"),
  ).map((item) => item.value.toLowerCase());
  let selectedWarranty = Array.from(
    document.querySelectorAll("input[name='warranty']:checked"),
  ).map((item) => item.value.toLowerCase());
  let selectedCategory = Array.from(
    document.querySelectorAll("input[name='category']:checked"),
  ).map((item) => item.value.toLowerCase());
  let selectedVaraints = Array.from(
    document.querySelectorAll("input[name='variant']:checked"),
  ).map((item) => item.value.toLowerCase());

  if (
    selectedBrands.length >0 ||
    selectedWarranty.length >0 ||
    selectedCategory.length >0 ||
    selectedVaraints.length >0
  ) {

    modifiedEquipments = equipments.filter((item) => {
      let variants = item.variant.filter(vari => selectedVaraints.includes(vari.name.toLowerCase()))[0]?.name.toLowerCase();
      return (
        selectedBrands.includes(item.brandName.toLowerCase()) ||
        selectedWarranty.includes(item.warranty.toLowerCase()) ||
        selectedCategory.includes(item.category.toLowerCase()) ||
        selectedVaraints.includes(variants)
      );
    });

    let content = mapEquipmentItemToHTML(modifiedEquipments);

    equipmentContent.innerHTML = content;
    bindBrewingMachineItemClickListener();
    btnClearFilter.style.display = "block";
  }
});

btnClearFilter.addEventListener("click", () => {
  document
    .querySelectorAll("input[name='brand']:checked")
    .forEach((checkbox) => (checkbox.checked = false));
  document
    .querySelectorAll("input[name='warranty']:checked")
    .forEach((checkbox) => (checkbox.checked = false));
  document
    .querySelectorAll("input[name='category']:checked")
    .forEach((checkbox) => (checkbox.checked = false));
  document
    .querySelectorAll("input[name='variant']:checked")
    .forEach((checkbox) => (checkbox.checked = false));

  let content = mapEquipmentItemToHTML(equipments);

  equipmentContent.innerHTML = content;
  bindBrewingMachineItemClickListener();
  btnClearFilter.style.display = "none";
});

const searchBar = document.querySelector("#equipment-search-bar");
searchBar.addEventListener("input", (event) => {
  let keyword = event.target.value.toLowerCase();

  let filterEquipments = equipments.filter((equipment) => {
    let variant = equipment.variant.map((eq) => eq.name).join(",");
    return (
      equipment.title.toLowerCase().includes(keyword) ||
      equipment.brandName.toLowerCase().includes(keyword) ||
      equipment.description.toLowerCase().includes(keyword) ||
      equipment.warranty.toLowerCase().includes(keyword) ||
      equipment.category.toLowerCase().includes(keyword) ||
      equipment.material.toLowerCase().includes(keyword) ||
      variant.toLowerCase().includes(keyword)
    );
  });

  modifiedEquipments = filterEquipments;

  let content = mapEquipmentItemToHTML(modifiedEquipments);

  equipmentContent.innerHTML = content;
  bindBrewingMachineItemClickListener();
});

function mapEquipmentItemToHTML(brewingEquipments) {
  return brewingEquipments.map((equipment) => {
    let variant = equipment.variant.filter((variant) => variant.isSelected)[0];
    let qty = cart[`#${equipment.id}`];
    qty = qty ? qty.quantity : 0;

    let savePrice =
      variant.originalPrice != variant.finalPrice
        ? `
      <div class="save-price">
        <p id="title-save">Save</p>
        <p id="value-save">$100.00</p>
      </div>
      `
        : "";

    return `
    <div class="equipment-item" id="${equipment.id}">
              <img
                id="equipment-item-img"
                src="${equipment.image}"
                alt="${equipment.title}"
              />
              <div class="equipment-item-body">
                <div class="equipment-item-content">
                  <p id="title">${equipment.title}</p>
                  <p id="brand">${equipment.brandName}</p>
                  <p id="desc">${equipment.description}</p>
                </div>
                <hr class="divider" />
                <div class="equipment-item-footer">
                  <div class="equipment-item-price">
                    <h4 id="price">${variant.finalPrice}</h4>
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
    `.trim();
  });
}

const ordersSectionContent = document.querySelector("#orders");
const btnPlaceOrder = document.querySelector("#btn-place-order");
const dialogPlaceOrderSuccess = document.querySelector(
  "#place_order_success_dialog",
);
const btnCloseOnPlaceOrderSuccess =
  dialogPlaceOrderSuccess.querySelector("#btn-close");

const fullname = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const address = document.querySelector("#deli-address");
const deliveryInstruction = document.querySelector("#deli_instruction");
const paymentInfos = document.querySelectorAll("input[name='payment_method']");
const saveInfo = document.querySelector("#save-info");
const memberCode = document.querySelector("#member_code");
const couponCode = document.querySelector("#coupon_code");

document.addEventListener("DOMContentLoaded", () => {
    let info = getUserInfo();
    
    if(info) {
        fullname.value = info.name;
        email.value = info.email;
        phone.value = info.phone;
        address.value = info.address;
        paymentInfos.forEach(payment => {
            payment.checked = info.paymentInfo == payment.value;
        });
    }
});

fetch("../assests/json/coffee.json")
  .then((response) => response.json())
  .then((coffeeBeans) =>
    fetch("../assests/json/equipment.json")
      .then((response) => response.json())
      .then((equipments) => {
        let modifiedCartItems = [];
        for (key in cart) {
          let [id, variant] = key.split("$");
          if (id.includes("coffee-bean-item")) {
            let item = coffeeBeans.filter((bean) => `#${bean.id}` == id)[0];
            let selectedWeight = "";
            item.weight = item.weight.map((weight) => {
              if (weight.name == variant) {
                weight.isSelected = true;
                selectedWeight = weight.name;
              } else {
                weight.isSelected = false;
              }
              return weight;
            });
            let unitPrice = item.weight.filter((weight) => weight.isSelected)[0]
              .finalPrice;
            let qty = cart[key].quantity;

            modifiedCartItems.push({
              image: item.image,
              title: item.title,
              brand: item.brandName,
              variant: selectedWeight,
              quantity: qty,
              unitPrice: unitPrice,
              total: qty * Number.parseFloat(unitPrice.replace("$", "")),
            });
          } else if (id.includes("brewing-equipment-item")) {
            let item = equipments.filter(
              (equipment) => `#${equipment.id}` == id,
            )[0];
            let selectedVariant = "";
            item.variant = item.variant.map((vari) => {
              if (vari.name == variant) {
                vari.isSelected = true;
                selectedVariant = vari.name;
              } else {
                vari.isSelected = false;
              }
              return vari;
            });
            let unitPrice = item.variant.filter((vari) => vari.isSelected)[0]
              .finalPrice;
            let qty = cart[key].quantity;

            modifiedCartItems.push({
              image: item.image,
              title: item.title,
              brand: item.brandName,
              variant: selectedVariant,
              quantity: qty,
              unitPrice: unitPrice,
              total: qty * Number.parseFloat(unitPrice.replace("$", "")),
            });
          }

          let content = modifiedCartItems
            .map((item) => {
              return `
                <div class="order-item">
              <img src="${item.image}" alt="" />
              <div class="info">
                <p id="name">${item.title}</p>
                <p id="brand">${item.brand}</p>
                <p id="variant">${item.variant}</p>
              </div>
              <div class="price">
                <p><span id="qty">${item.quantity} </span> x <span id="value">${item.unitPrice}</span></p>
                <p>
                  <span id="total-text">Total: </span
                  ><span id="price-value">$${item.total}</span>
                </p>
              </div>
            </div>
                `.trim();
            })
            .join("");

          ordersSectionContent.innerHTML = content;
        }
      }),
  );

btnPlaceOrder.addEventListener("click", () => {
  if (
    !(
      fullname.value.length > 0 ||
      email.value.length > 0 ||
      phone.value.length > 0 ||
      address.value.length > 0
    )
  ) {
    alert("You need to fill the required information to place order.");
    return;
  }

  const isReadTAC = document.querySelector("#check-read-tc").checked;
  if (!isReadTAC) {
    alert(
      "You need to commit that you have read Terms & Conditions, Privacy Policies & Return Policies.",
    );
    return;
  }

const paymentInfo = document.querySelector("input[name='payment_method']:checked");

  if (saveInfo.checked) {
    saveUserinfo({
      name: fullname.value,
      email: email.value,
      phone: phone.value,
      address: address.value,
      paymentInfo: paymentInfo.value,
    });
  }

  dialogPlaceOrderSuccess.showModal();
});

btnCloseOnPlaceOrderSuccess.addEventListener("click", () => {
  dialogPlaceOrderSuccess.close();
  clearCart();
  window.location.replace("/");
});

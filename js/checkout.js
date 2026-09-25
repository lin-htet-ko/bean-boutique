const ordersSectionContent = document.querySelector("#orders");
const btnPlaceOrder = document.querySelector("#btn-place-order");
const dialogPlaceOrderSuccess = document.querySelector(
  "#place_order_success_dialog",
);
const btnCloseOnPlaceOrderSuccess =
  dialogPlaceOrderSuccess.querySelector("#btn-close");
const totalPrice = document.querySelector("#total-value");

const fullname = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const address = document.querySelector("#deli-address");
const deliveryInstruction = document.querySelector("#deli_instruction");
const paymentInfos = document.querySelectorAll("input[name='payment_method']");
const saveInfo = document.querySelector("#save-info");
const memberCode = document.querySelector("#member_code");
const couponCode = document.querySelector("#coupon_code");
const checkoutError = document.querySelector("#checkout-error");
const checkoutErrorContainer = document.querySelector("#checkout-error-container");

document.addEventListener("DOMContentLoaded", () => {

  checkoutErrorContainer.style.display = "none";
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

// fetch("../assests/json/coffee.json")
//   .then((response) => response.json())
//   .then((coffeeBeans) =>
//     fetch("../assests/json/equipment.json")
//       .then((response) => response.json())
//       .then((equipments) => {
        let modifiedCartItems = [];
        for (key in cart) {
          let [id, variant] = key.split("$");
          if (id.includes("coffee-bean-item")) {
            let item = coffees.filter((bean) => `#${bean.id}` == id)[0];
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

          let total = 0
          let content = modifiedCartItems
          .filter(item => item.quantity >= 1)
            .map((item) => {
              total += item.total;

              return `
                <div class="order-item">
              <img src="${item.image}" alt="" />
              <div class="info">
                <p class="name">${item.title}</p>
                <p class="brand">${item.brand}</p>
                <p class="variant">${item.variant}</p>
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
          totalPrice.textContent = `$${total}`;
        }
  //     }),
  // );

btnPlaceOrder.addEventListener("click", () => {
  checkoutError.textContent = "";
  if (
    !(
      fullname.value.trim().length > 0 &&
      email.checkValidity() &&
      phone.value.trim().length > 0 &&
      address.value.trim().length > 0
    )
  ) {
    checkoutErrorContainer.style.display = "flex";
    checkoutError.textContent = "Enter your name, a valid email, phone number, and delivery address.";
    fullname.focus();
    return;
  }

  const isReadTAC = document.querySelector("#check-read-tc").checked;
  if (!isReadTAC) {
    checkoutErrorContainer.style.display = "flex";
    checkoutError.textContent = "Agree to the terms, privacy, and return policies before placing the order.";
    document.querySelector("#check-read-tc").focus();
    return;
  }

const paymentInfo = document.querySelector("input[name='payment_method']:checked");

  if (saveInfo.checked && paymentInfo) {
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

onDomLoaded();

const dialogMemberRegister = document.querySelector("#member_register_dialog");
const dialogMemberRegisterSuccess = document.querySelector("#member_register_success_dialog");

document.querySelector("#member-register").addEventListener('click', () => {
    dialogMemberRegister.showModal();
});
dialogMemberRegister.querySelector(".btn-close").addEventListener('click', () => {
    dialogMemberRegister.close();
});
dialogMemberRegister.querySelector("#btn-register-memeber").addEventListener('click', (event) => {
    event.preventDefault();
    const name = dialogMemberRegister.querySelector("#name");
    const email = dialogMemberRegister.querySelector("#email");
    const phone = dialogMemberRegister.querySelector("#phone");
    const payment = dialogMemberRegister.querySelector("input[name='payment_method']:checked");

    if(name.value && email.value && phone.value && payment.value) {
        dialogMemberRegisterSuccess.showModal();
        dialogMemberRegister.close();
    }

});


document.querySelectorAll(".deal-item-coupon-code-wrapper").forEach((couponWrapper) => {
  const couponCodeElement = couponWrapper.querySelector(".deal-item-coupon-code");

  couponWrapper.addEventListener("click", () => {
    const couponCode = couponCodeElement.textContent.trim();
    navigator.clipboard.writeText(couponCode).then(() => {
      alert(`Coupon code "${couponCode}" copied to clipboard!`);
    }).catch((err) => {
      console.error('Failed to copy coupon code: ', err);
    });
  });
});
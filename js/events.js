onDomLoaded();

const registerSuccessDialog = document.querySelector(
  "#event_register_success_dialog",
);
const eventRegisterDialog = document.querySelector("#event_register_dialog");
eventRegisterDialog
  .querySelector(".btn-close")
  .addEventListener("click", () => {
    eventRegisterDialog.close();
  });

const btnRegisterEvent = eventRegisterDialog.querySelector(
  "#btn-register-event",
);
const btnCloseSuccessDialog = registerSuccessDialog.querySelector(
  "#btn-close-success-dialog",
);

btnCloseSuccessDialog.addEventListener("click", () => {
  registerSuccessDialog.close();
});

btnRegisterEvent.addEventListener("click", (event) => {
  event.preventDefault();
  const name = eventRegisterDialog.querySelector("#name");
  const email = eventRegisterDialog.querySelector("#email");
  const phone = eventRegisterDialog.querySelector("#phone");

  if (!name.value || !email.value || !phone.value) {
    return;
  }

  const membershipNumber =
    eventRegisterDialog.querySelector("#membership_number");
  const message = eventRegisterDialog.querySelector("#message");

  name.value = "";
  email.value = "";
  phone.value = "";
  membershipNumber.value = "";
  message.value = "";

  eventRegisterDialog.close();
  registerSuccessDialog.showModal();
});

document.querySelectorAll(".event-item").forEach((eventItem) => {
  const registerButton = eventItem.querySelector("#btn-event-register");
  registerButton.addEventListener("click", () => {
    const eventName = eventItem.querySelector(".event-item-name").textContent;
    const eventDescription =
      eventItem.querySelector(".event-item-desc").innerHTML;

    eventRegisterDialog.querySelector("#event_name").textContent = eventName;
    eventRegisterDialog.querySelector("#event_desc").innerHTML =
      eventDescription;

    eventRegisterDialog.showModal();
  });
});

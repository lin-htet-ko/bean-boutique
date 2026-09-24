const carousel_track = document.querySelector(".home-carousel-track");
const carousel_items = document.querySelectorAll(".home-corousel-item");

let current_carousel_index = 0;

function moveToNextSlide() {
  current_carousel_index++;

  if (current_carousel_index >= carousel_items.length) {
    current_carousel_index = 0;
  }

  carousel_track.style.transform = `translateX(-${current_carousel_index * 100}%)`;
}

let carouselAutoPlayerTimer = setInterval(moveToNextSlide, 2000);

const carouselContainer = document.getElementById("home-carousels");
carouselContainer.addEventListener("mouseenter", () =>
  clearInterval(carouselAutoPlayerTimer),
);
carouselContainer.addEventListener("mouseleave", () => {
  carouselAutoPlayerTimer = setInterval(moveToNextSlide, 3000);
});

const firstTimeEligibilityDialog = document.querySelector("#first_time_eligibility_dialog");
const firstTimeEligibilitySuccessDialog = document.querySelector("#first_time_eligibility_success_dialog");
const btnSubscribefirstTimeEligibility = firstTimeEligibilityDialog.querySelector("#btn-subscribe");
const btnClosefirstTimeEligibilitySuccess = firstTimeEligibilitySuccessDialog.querySelector("#btn-close");
const firstTimeEmail = firstTimeEligibilityDialog.querySelector("#first-visit-email");

btnSubscribefirstTimeEligibility.addEventListener("click", () => {
  if(firstTimeEmail.value.length > 0) {
    markAsVisited();
    firstTimeEligibilityDialog.close();
    firstTimeEligibilitySuccessDialog.showModal();
  } else {
    alert("You need to fill email to subscribe.")
  }
});

btnClosefirstTimeEligibilitySuccess.addEventListener("click", () => {
  firstTimeEligibilitySuccessDialog.close();
});

document.addEventListener("DOMContentLoaded", () => {
  if(isFirstTimeVisit()) {
    firstTimeEligibilityDialog.showModal();
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

const registerSuccessDialog = document.querySelector("#event_register_success_dialog");
const eventRegisterDialog = document.querySelector("#event_register_dialog");
eventRegisterDialog.querySelector(".btn-close").addEventListener("click", () => {
  eventRegisterDialog.close();
});

const btnRegisterEvent = eventRegisterDialog.querySelector("#btn-register-event");
const btnCloseSuccessDialog = registerSuccessDialog.querySelector("#btn-close-success-dialog");

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

    const membershipNumber = eventRegisterDialog.querySelector("#membership_number");
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
  eventItem.addEventListener("click", () => {
    const eventName = eventItem.querySelector(".event-item-name").textContent;
    const eventDescription = eventItem.querySelector(".event-item-desc").innerHTML;

    eventRegisterDialog.querySelector("#event_name").textContent = eventName;
    eventRegisterDialog.querySelector("#event_desc").innerHTML = eventDescription;

    const registerButton = eventItem.querySelector("#btn-event-register");
    registerButton.addEventListener("click", () => {
      eventRegisterDialog.showModal();
    });
  });
});

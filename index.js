const tourModal = document.getElementById("tourModal");
const closeTourModal = document.getElementById("closeTourModal");
const inclusionList = document.getElementById("inclusionList");
const tourTitle = document.getElementById("tourTitle");
const bookNowFromTour = document.getElementById("bookNowFromTour");

const bookingModal = document.getElementById("bookingModal");
const closeBooking = document.getElementById("closeBooking");
const bookingForm = document.getElementById("bookingForm");
const tourPackageInput = document.getElementById("tourPackage");

const tourBoxes = document.querySelectorAll(".box");

let selectedTourTitle = "";

tourBoxes.forEach((box) => {
  const inclusionBtn = box.querySelector(".inclusion-btn");
  inclusionBtn.addEventListener("click", (e) => {
    e.preventDefault();

    selectedTourTitle = box.dataset.title;
    const inclusions = JSON.parse(box.dataset.inclusions);

    tourTitle.textContent = selectedTourTitle;

    inclusionList.innerHTML = "";
    inclusions.forEach((item) => {
      const p = document.createElement("p");
      p.textContent = "✅" +item;
      inclusionList.appendChild(p);
    });

    tourModal.style.display = "flex";
  });
});

closeTourModal.addEventListener("click", () => {
  tourModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === tourModal) {
    tourModal.style.display = "none";
  }
  if (e.target === bookingModal) {
    bookingModal.style.display = "none";
  }
});

bookNowFromTour.addEventListener("click", () => {
  tourPackageInput.value = selectedTourTitle;

  bookingModal.style.display = "flex";
  tourModal.style.display = "none";
});

closeBooking.addEventListener("click", () => {
  bookingModal.style.display = "none";
});

bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const first = bookingForm.firstName.value;
  const last = bookingForm.lastName.value;
  const tour = bookingForm.tourPackage.value;

  alert(
    `Thank you, ${first} ${last}! Your booking for "${tour}" has been received. Please await our response for further questioning.`
  );

  bookingModal.style.display = "none";
  bookingForm.reset();
});

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});


function showAlert(event) {
  event.preventDefault();
  alert("Your message has been sent!");
  event.target.reset();
}

const navBtn = document.querySelector(".toggle");
const signUpBtn = document.querySelector(".cta-btn");
const closeBtn = document.querySelector(".close-btn");
const formInput = document.querySelector(".form-input");

//Add event listeners
navBtn.addEventListener("click", () =>
  document.body.classList.toggle("show-nav")
);

signUpBtn.addEventListener("click", () => modal.classList.add("show-modal"));

closeBtn.addEventListener("click", () => modal.classList.remove("show-modal"));

window.addEventListener("click", (e) =>
  e.target === modal ? modal.classList.remove("show-modal") : false
);

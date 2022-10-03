const openBtns = document.querySelectorAll(".open-btn");
const closeBtn = document.getElementById("close-btn");
const popUp = document.querySelector(".popUp");
const container = document.querySelector(".container");
const imeIPrezime = document.getElementById("IiP");
const oib = document.getElementById("OIB");
const dob = document.getElementById("DOB");

openBtns.forEach((button) => {
  button.addEventListener("click", function (e) {
    imeIPrezime.innerHTML =
      e.currentTarget.parentElement.querySelector(".imeIPrezime").innerHTML;
    oib.innerHTML =
      e.currentTarget.parentElement.querySelector(".oib").innerHTML;
    dob.innerHTML =
      e.currentTarget.parentElement.querySelector(".datumRodjenja").innerHTML;

    popUp.style.opacity = 1;
    container.style.opacity = 0;
  });
});

closeBtn.addEventListener("click", () => {
  popUp.style.opacity = 0;
  container.style.opacity = 1;
});

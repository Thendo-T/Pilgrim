const btnOpen = document.getElementById("open");
const btnClose = document.getElementById("close");
const menu = document.getElementById("menu");

btnOpen.addEventListener("click", (e) => {
  menu.classList.replace("hidden", "flex");
  btnOpen.classList.replace("block", "hidden");
  btnClose.classList.replace("hidden", "block");
});

btnClose.addEventListener("click", (e) => {
  menu.classList.replace("flex", "hidden");
  btnClose.classList.replace("block", "hidden");
  btnOpen.classList.replace("hidden", "block");
});

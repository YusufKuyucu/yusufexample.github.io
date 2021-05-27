const toggleIcon = document.querySelector("#toggleIcon");
const sideMenu = document.querySelector("#sideMenu");
const weiter = document.querySelector("#weiter");
let weiterToggle = false;

toggleIcon.addEventListener("click", toggle);
weiter.addEventListener("click", () => {
  if (!weiterToggle) {
    document.querySelector(".produkte").style.height = "120%";
    document.querySelector(".fa-chevron-down").style.transform =
      "rotate(180deg)";
    weiterToggle = true;
  } else {
    document.querySelector(".produkte").style.height = "30rem";
    document.querySelector(".fa-chevron-down").style.transform = "rotate(0deg)";
    weiterToggle = false;
  }
});

function toggle() {
  if (sideMenu.style.left == "-100%") {
    sideMenu.style.left = "0";
  } else {
    sideMenu.style.left = "-100%";
  }
}

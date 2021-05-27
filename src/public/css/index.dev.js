"use strict";

var toggleIcon = document.querySelector("#toggleIcon");
var sideMenu = document.querySelector("#sideMenu");
var weiter = document.querySelector("#weiter");
var weiterToggle = false;
toggleIcon.addEventListener("click", toggle);
weiter.addEventListener("click", function () {
  if (!weiterToggle) {
    document.querySelector(".produkte").style.height = "120%";
    document.querySelector(".fa-chevron-down").style.transform = "rotate(180deg)";
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
const toggle = document.getElementById("toggle");
let toggleControl = true;
let aside = document.getElementById("aside");
const modi = document.getElementById("modi");
let modiControl = false;
const root = document.querySelector(":root").style;
const hide = () => {
  toggleControl = !toggleControl;
  if (!toggleControl) {
    aside.classList.add("animation1");
  } else {
    aside.classList.remove("animation1");
  }
};
const modiHide = () => {
  !modiControl
    ? (document.getElementById("modi-group").style.display = "flex")
    : (document.getElementById("modi-group").style.display = "none");
  modiControl = !modiControl;
};
const darkMode = () => {
  root.setProperty("--primary2", "#11111D");
  root.setProperty("--light2", "#42414A");
  root.setProperty("--light1", "#ddd");
  root.setProperty("--dark1", "#fff");
  root.setProperty("--dark2", "#eee");
  root.setProperty("--primary3", "#bbb");
  root.setProperty("--font-color", "#fff");
};
const blueMode = () => {
  root.setProperty("--primary2", "#2E48D0");
  root.setProperty("--light2", "#eee");
  root.setProperty("--light1", "#fff");
  root.setProperty("--dark1", "#222");
  root.setProperty("--dark2", "#11111D");
  root.setProperty("--primary3", "#1531bd");
  root.setProperty("--font-color", "#111");
};
const lightMode = () => {
  root.setProperty("--primary2", "#555");
  root.setProperty("--light2", "#fefefe");
  root.setProperty("--light1", "#fff");
  root.setProperty("--dark1", "#bbb");
  root.setProperty("--dark2", "#aaa");
  root.setProperty("--primary3", "#777");
  root.setProperty("--font-color", "#111");
};
toggle.addEventListener("click", hide);
modi.addEventListener("click", modiHide);

document.querySelector("#dark").addEventListener("click", darkMode);
document.querySelector("#blue").addEventListener("click", blueMode);
document.querySelector("#light").addEventListener("click", lightMode);

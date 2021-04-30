import portfolioHtml from "./pages/portfolio.js";
import flexHtml from "./pages/flex.js";

let content = document.querySelector("#content");
let portfolio = document.querySelector("#portfolio");
let flex = document.querySelector("#flx");

content.innerHTML = portfolioHtml;
portfolio.addEventListener("click", () => (content.innerHTML = portfolioHtml));

flx.addEventListener("click", () => (content.innerHTML = flexHtml));

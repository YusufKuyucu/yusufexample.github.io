const reset = document.querySelector("#reset");
const cells = document.querySelectorAll(".cell");
const topLeft = document.querySelectorAll("#top-left");
const topCenter = document.querySelector("#top-center");
const topRight = document.querySelector("#top-right");
const middleLeft = document.querySelector("#middle-left");
const middleCenter = document.querySelector("#middle-center");
const middleRight = document.querySelector("#middle-right");
const bottomLeft = document.querySelector("#bottom-left");
const bottomCenter = document.querySelector("#bottom-center");
const bottomRight = document.querySelector("#bottom-center");
const tops = [topLeft, topCenter, topRight];

let xIsNext = true;

const winCheck = () => {
  if ((topLeft.innerHTML & topCenter.innerHTML & topRight.innerHTML) == "X") {
    console.log("win");
  }
};

// eventListeners

reset.addEventListener("click", () => {
  for (cell of cells) {
    cell.innerHTML = "&nbsp;";
  }
});

for (cell of cells) {
  cell.addEventListener("click", (e) => {
    if (e.target.innerText == "X" || e.target.innerText == "O") {
      return;
    } else if (xIsNext) {
      e.target.innerText = "X";
      winCheck();
      xIsNext = !xIsNext;
    } else {
      e.target.innerText = "O";
      winCheck();
      xIsNext = !xIsNext;
    }
  });
}

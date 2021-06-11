const reset = document.getElementById("reset");
const content = document.querySelector(".content");
const players = ["X", "O"];
let nextPlayer = document.getElementById("next-player");

let cells = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function togglePlayer() {
  nextPlayer.textContent == "X"
    ? (nextPlayer.textContent = "O")
    : (nextPlayer.textContent = "X");
}
function win() {
  content.style.display = "flex";
  content.classList.add("win");
  nextPlayer.parentElement.remove();
  reset.parentElement.style.display = "flex";
  reset.parentElement.style.justifyContent = "center";
  content.innerHTML = `<div class="win">${nextPlayer.textContent} win</div>`;
}

function wincheck() {
  switch (true) {
    case cells[0] == cells[1] && cells[0] == cells[2]:
      win();
      break;
    case cells[3] == cells[4] && cells[4] == cells[5]:
      win();
      break;
    case cells[6] == cells[7] && cells[7] == cells[8]:
      win();
      break;
    case cells[0] == cells[3] && cells[3] == cells[6]:
      win();
      break;
    case cells[1] == cells[4] && cells[4] == cells[7]:
      win();
      break;
    case cells[2] == cells[5] && cells[5] == cells[8]:
      win();
      break;
    case cells[0] == cells[4] && cells[4] == cells[8]:
      win();
      break;
    case cells[2] == cells[4] && cells[4] == cells[6]:
      win();
      break;
    default:
      break;
  }
}

class Box {
  constructor(cell) {
    this.cell = document.querySelector(`.${cell}`);
  }
  assign() {
    if (this.cell.textContent != "X" && this.cell.textContent != "O") {
      this.cell.textContent = nextPlayer.textContent;
      wincheck();
      togglePlayer();
    }
  }
}
const Box1 = new Box("box1");
const Box2 = new Box("box2");
const Box3 = new Box("box3");
const Box4 = new Box("box4");
const Box5 = new Box("box5");
const Box6 = new Box("box6");
const Box7 = new Box("box7");
const Box8 = new Box("box8");
const Box9 = new Box("box9");

Box1.cell.onclick = () => {
  cells[0] = nextPlayer.textContent;
  Box1.assign();
};
Box2.cell.onclick = () => {
  cells[1] = nextPlayer.textContent;
  Box2.assign();
};
Box3.cell.onclick = () => {
  cells[2] = nextPlayer.textContent;
  Box3.assign();
};
Box4.cell.onclick = () => {
  cells[3] = nextPlayer.textContent;
  Box4.assign();
};
Box5.cell.onclick = () => {
  cells[4] = nextPlayer.textContent;
  Box5.assign();
};
Box6.cell.onclick = () => {
  cells[5] = nextPlayer.textContent;
  Box6.assign();
};
Box7.cell.onclick = () => {
  cells[6] = nextPlayer.textContent;
  Box7.assign();
};
Box8.cell.onclick = () => {
  cells[7] = nextPlayer.textContent;
  Box8.assign();
};
Box9.cell.onclick = () => {
  cells[8] = nextPlayer.textContent;
  Box9.assign();
};

reset.addEventListener("click", () => location.reload());

// let boxes = Array.from(document.querySelector(".content").children);

// boxes.forEach((e) => {
//   e.addEventListener("click", () => {
//     console.log(e);
//   });
// });

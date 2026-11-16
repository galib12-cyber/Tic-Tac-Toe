let buttons = document.querySelectorAll(".btn");
let res_button = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnX = true;
let count = 0;

let arr = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (turnX) {
      btn.innerText = "X";
      turnX = false;
    } else {
      btn.innerText = "O";
      turnX = true;
    }
    count++;
    btn.disabled = true;
    let cw = check_Winner();

    if (count == 9 && !cw) {
      drawGame();
    }
  });
});

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner} !!!`;
  msgContainer.classList.remove("hide");
  disableButtons();
};

const check_Winner = () => {
  for (let x of arr) {
    let a = buttons[x[0]].innerText;
    let b = buttons[x[1]].innerText;
    let c = buttons[x[2]].innerText;

    if (a != "" && b != "" && c != "") {
      if (a === b && b === c) {
        showWinner(b);
      }
    }
  }
};

const disableButtons = () => {
  for (let g of buttons) {
    g.disabled = true;
  }
};

const enableButtons = () => {
  for (let h of buttons) {
    h.disabled = false;
    h.innerText = "";
  }
};
const newGame = () => {
  turnX = true;
  count = 0;
  enableButtons();
  msgContainer.classList.add("hide");
};

const drawGame = () => {
  msg.innerText = `It's a Draw!`;
  msgContainer.classList.remove("hide");
  disableButtons();
};

res_button.addEventListener("click", newGame);

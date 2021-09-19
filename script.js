const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn = document.querySelector(".btn");

const okBtn = document.querySelector(".okBtn");
const write = document.querySelector(".write");

const player1 = document.getElementById("player-0");
const player2 = document.getElementById("player-1");

const power1 = document.getElementById("power-0");
const power2 = document.getElementById("power-1");

const imgOne = document.getElementById("img-1");
const imgTwo = document.getElementById("img-2");

const winnerImg = document.getElementById("winner-img");

const mainBox = document.querySelector(".main");

const winner = document.querySelector(".winner");

const music = document.getElementById("song");

// for ok button
mainBox.classList.add("hidden");
okBtn.addEventListener("click", function () {
  write.classList.add("hidden");
  mainBox.classList.remove("hidden");
});

// main logic

function randomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// default
document.querySelector(".winner").classList.add("hidden");

const charName = [
  "",
  "Hashirama",
  "ino",
  "Kakashi",
  "Madara_Uchiha",
  "Might_Guy",
  "Naruto",
  "Sai",
  "Sakura",
  "Sasuke_Uchiha",
  "Shikamaru",
];
const charPower = [
  "null",
  100000,
  9000,
  50000,
  95000,
  49000,
  85000,
  20000,
  30000,
  84000,
  40000,
];

btn.addEventListener("click", function () {
  let random_1 = randomNumber();
  let random_2 = randomNumber();

  // change char name for player one
  let p1Name = charName[random_1];
  player1.innerHTML = p1Name;

  // change char power for player one
  let p1power = charPower[random_1];
  power1.innerHTML = p1power;

  // img change for player one
  if (random_1 !== random_2) {
    imgOne.src = `img/char-${random_1}.gif`;
  } else {
    random_1 = randomNumber();
    imgOne.src = `img/char-${random_1}.gif`;
  }
  // change char name for player two
  let p2Name = charName[random_2];
  player2.innerHTML = p2Name;

  // change char power for player one
  let p2Power = charPower[random_2];
  power2.innerHTML = p2Power;

  // img change for player two
  if (random_2 !== random_1) {
    imgTwo.src = `img/char-${random_2}.gif`;
  } else {
    random_2 = randomNumber();
    imgTwo.src = `img/char-${random_2}.gif`;
  }
  window.setTimeout(function () {
    if (p1power > p2Power) {
      winnerImg.src = `img/char-${random_1}.gif`;
      mainBox.classList.add("hidden");
      winner.classList.remove("hidden");
      music.play();
    } else {
      winnerImg.src = `img/char-${random_2}.gif`;
      mainBox.classList.add("hidden");
      winner.classList.remove("hidden");
      music.play();
    }
  }, 4000);
});

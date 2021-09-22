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
winner.classList.add("hidden");

let char = [
  { name: "null" },
  { name: "Hashirama", power: 100000 },
  { name: "ino", power: 9000 },
  { name: "Kakashi", power: 50000 },
  { name: "Madara_Uchiha", power: 95000 },
  { name: "Might_Guy", power: 49000 },
  { name: "Naruto", power: 85000 },
  { name: "Sai", power: 20000 },
  { name: "Sakura", power: 30000 },
  { name: "Sasuke_Uchiha", power: 84000 },
  { name: "Shikamaru", power: 40000 },
];

btn.addEventListener("click", function () {
  let random_1 = randomNumber();
  let random_2 = randomNumber();

  // change char name for player one
  let p1Name = char[random_1].name;
  player1.innerHTML = p1Name;

  // change char power for player one
  let p1power = char[random_1].power;
  power1.innerHTML = p1power;

  // img change for player one
  if (random_1 !== random_2) {
    imgOne.src = `img/charImg-${random_1}.jpeg`;
  } else {
    random_1 = randomNumber();
    imgOne.src = `img/charImg-${random_1}.jpeg`;
  }
  // change char name for player two
  let p2Name = char[random_2].name;
  player2.innerHTML = p2Name;

  // change char power for player one
  let p2Power = char[random_2].power;
  power2.innerHTML = p2Power;

  // img change for player two
  if (random_2 !== random_1) {
    imgTwo.src = `img/charImg-${random_2}.jpeg`;
  } else {
    random_2 = randomNumber();
    imgTwo.src = `img/charImg-${random_2}.jpeg`;
  }
  window.setTimeout(function () {
    if (p1power > p2Power) {
      winnerImg.src = `img/gif/char-${random_1}.gif`;
      mainBox.classList.add("hidden");
      winner.classList.remove("hidden");
      music.play();
    } else {
      winnerImg.src = `img/gif/char-${random_2}.gif`;
      mainBox.classList.add("hidden");
      winner.classList.remove("hidden");
      music.play();
    }
  }, 3000);
});

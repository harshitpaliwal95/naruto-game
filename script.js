const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn = document.querySelector(".btn");
const player1 = document.getElementById("player-0");
const player2 = document.getElementById("player-1");

function randomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

const char_1 = {
  power: 100000,
  charName: "madara",
};
const char_2 = {
  power: 9000,
  charName: "ino",
};
const char_3 = {
  power: 50000,
  charName: "Kakashi",
};
const char_4 = {
  power: 95000,
  charName: "Madara Uchiha",
};
const char_5 = {
  power: 49000,
  charName: "Might Guy",
};
const char_6 = {
  power: 85000,
  charName: "Naruto",
};
const char_7 = {
  power: 10000,
  charName: "Sai",
};
const char_8 = {
  power: 30000,
  charName: "Sakura",
};
const char_9 = {
  power: 84000,
  charName: "Sasuke",
};
const char_10 = {
  power: 40000,
  charName: "Shikamaru",
};

let ran = randomNumber();

btn.addEventListener("click", function () {
  let random_1 = randomNumber();
  let random_2 = randomNumber();

  if (random_1 !== random_2) {
    document.getElementById("img-1").src = `img/char-${random_1}.gif`;
  } else {
    random_1 = randomNumber();
    document.getElementById("img-1").src = `img/char-${random_1}.gif`;
  }

  if (random_2 !== random_1) {
    document.getElementById("img-2").src = `img/char-${random_2}.gif`;
  } else {
    random_2 = randomNumber();
    document.getElementById("img-2").src = `img/char-${random_2}.gif`;
  }
});

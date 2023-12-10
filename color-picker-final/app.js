const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

btn.addEventListener("click", function () {
  //   console.log(document.body);
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

// const
// var
// let

// var -> gotovo nikad necemo koristiti jer nije najbolje resenje, zastarelo je

// const ili let
// const -> ne dozvoljava da se vrednost promenljive menja -> konstanta
// let -> koristimo ako zelimo da mozemo da menjamo vrednosti promenljivih

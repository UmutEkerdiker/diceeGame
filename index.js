// generate random numbers
var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

// use random numbers to select dice images accordingly
var randomImage1 = "images/dice" + randomNumber1 + ".png";
var randomImage2 = "images/dice" + randomNumber2 + ".png";

// set selected images using querySelector
document.querySelector(".img1").setAttribute("src",randomImage1);
document.querySelector(".img2").setAttribute("src",randomImage2);

//game logic, select the higher number as winner or declare draw
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🏅 Player 1 Wins";
}

else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins 🏅";
}

else {
  document.querySelector("h1").innerHTML = "Draw";
};

var title = document.getElementById('title');

var random_number1 = Math.floor(Math.random() * 6) + 1;
var random_number2 = Math.floor(Math.random() * 6) + 1;

var random_image1 = "assets/images/dice" + random_number1 + ".png"
var random_image2 = "assets/images/dice" + random_number2 + ".png"

document.querySelectorAll("img")[0].setAttribute("src", random_image1);
document.querySelectorAll("img")[1].setAttribute("src", random_image2);

(random_number1 > random_number2) ? title.innerText = "Player 1 wins :)" :
(random_number1 < random_number2) ? title.innerText = "Player 2 wins :)" :
title.innerText = "Draw :{"
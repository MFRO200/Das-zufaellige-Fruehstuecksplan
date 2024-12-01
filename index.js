var randomNumber = Math.floor(Math.random() * 19) + 1;

var randomBild = "Bild" + randomNumber + ".jpg";

var randomSrc = "images/" + randomBild;

var image = document.querySelector("img");

image.setAttribute("src", randomSrc);




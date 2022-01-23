const body = document.querySelector("body");

const images =["apple.jpg","banana.jpg", "camel.jpg","document.jpg","ear.jpg","fox.jpg" ];
const chooseImage = images [Math.floor(Math.random() * images.length)];

const BGImage = document.createElement("img");

BGImage.src = `img/${chooseImage}`;
const setbackground = `url(img/${chooseImage})`;

document.body.style.backgroundImage = setbackground;
document.body.style.backgroundSize = "cover";

//document.body.appendChild(BGImage);


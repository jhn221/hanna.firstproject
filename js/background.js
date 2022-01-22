const body = document.querySelector("body");

const images =["apple.jpg","banana.jpg", "camel.jpg","document.jpg","ear.jpg" ];
//const IMG = 5;
const chooseImage = images [Math.floor(Math.random() * images.length)];

const BGImage = document.createElement("img");
const setbackground = "url(../Volumes/NO NAME/img)";
BGImage.src = `img/${chooseImage}`;

//document.body.style.backgroundImage = setbackground;
console.log(setbackground);
document.body.appendChild(BGImage);


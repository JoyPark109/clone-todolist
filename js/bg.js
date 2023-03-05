const images = ["1.png", "2.jpg", "3.jpg", "4.jpg"]

const imageRandom = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

document.body.style = `background-image: url("bg/${imageRandom}")`;
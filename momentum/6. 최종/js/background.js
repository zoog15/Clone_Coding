const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.id = "background";
bgImage.style.backgroundImage = "url(img/" + chosenImage + ")";

// body에 html을 추가함
document.body.appendChild(bgImage);

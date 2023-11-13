const landing = document.querySelector("#landing-page");
const backgrounds = [
  "../images/landing/firstlanding.png",
  "../images/landing/secondlanding.webp",
  "../images/landing/thirdlanding.png",
];

let currentBackgroundIndex = 0;

function changeBackground() {
  landing.style.backgroundImage = `url('${backgrounds[currentBackgroundIndex]}')`;
  currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
}

// Initial background change
changeBackground();

// Change background every 12 seconds
setInterval(changeBackground, 12000);

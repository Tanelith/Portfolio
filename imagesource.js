const images = [
    "images/Start.png",
    "images/enemies.png",
    "images/gameplay.png",
    "images/SnowWarScript.png"
];

let currentIndex = 0;

function showImage(index) {
    const imageElement = document.getElementById("main-image");
    imageElement.src = images[index];
}

function previousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}
const images1 = [
    "images/Start.png",
    "images/enemies.png",
    "images/gameplay.png",
    "images/SnowWarScript.png"
];

const images2 = [
    "images/AhRatsMovement.png",
    "images/RatFlying.png",
    "images/Indicator.png"
];

let currentIndex = 0;
let currentIndex2 = 0;

function showImage(index, imageId, ImageList) {
    const imageElement = document.getElementById(imageId);
    imageElement.src = ImageList[index];
}

function previousImage(imageId, ImageList) {
    if (imageId == "main-image") {
        currentIndex = (currentIndex - 1 + ImageList.length) % ImageList.length;
        showImage(currentIndex, imageId, ImageList);
    } else if (imageId == "main-image2") {
        currentIndex2 = (currentIndex2 - 1 + ImageList.length) % ImageList.length;
        showImage(currentIndex2, imageId, ImageList);
    }
}

function nextImage(imageId, ImageList) {
    if (imageId == "main-image") {
        currentIndex = (currentIndex + 1) % ImageList.length;
        showImage(currentIndex, imageId, ImageList);
    } else if (imageId == "main-image2") {
        currentIndex2 = (currentIndex2 + 1) % ImageList.length;
        showImage(currentIndex2, imageId, ImageList);
    }
}
const images1 = [
    "images/Start.png",
    "images/enemies.png",
    "images/gameplay.png",
    "images/SnowWarScript.png"
];

const images2 = [
    "images/AhRatsMovement.png",
    "images/RatFlying.png",
    "images/Indicator.png",
    "https://www.youtube.com/embed/erogl8Ov_2s?si=MEbQEKnM4gik6vZM"
];

let currentIndex = 0;
let currentIndex2 = 0;

function showImage(index, imageId, ImageList) {
    const container = document.getElementById(imageId);
    container.innerHTML = "";

    if (ImageList[index].includes("youtube.com")) {
        const iframe = document.createElement("iframe");
        iframe.width = "560";
        iframe.height = "315";
        iframe.src = ImageList[index];
        iframe.frameBorder = "0";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.referrerPolicy = "strict-origin-when-cross-origin";
        iframe.allowFullscreen = true;
        container.appendChild(iframe);
    } else {
        const img = document.createElement("img");
        img.src = ImageList[index];
        img.alt = "Gallery item";
        img.style.maxWidth = "748px";
        img.style.maxHeight = "431px";
        img.style.width = "auto";
        img.style.height = "auto";
        container.appendChild(img);
    }
}

function previousImage(imageId, ImageList) {
    if (imageId == "main-content1") {
        currentIndex = (currentIndex - 1 + ImageList.length) % ImageList.length;
        showImage(currentIndex, imageId, ImageList);
    } else if (imageId == "main-content2") {
        currentIndex2 = (currentIndex2 - 1 + ImageList.length) % ImageList.length;
        showImage(currentIndex2, imageId, ImageList);
    }
}

function nextImage(imageId, ImageList) {
    if (imageId == "main-content1") {
        currentIndex = (currentIndex + 1) % ImageList.length;
        showImage(currentIndex, imageId, ImageList);
    } else if (imageId == "main-content2") {
        currentIndex2 = (currentIndex2 + 1) % ImageList.length;
        showImage(currentIndex2, imageId, ImageList);
    }
}
const images = ["Images/vape1.jpg", "Images/vape2.jpg", "Images/vape3.jpg", "Images/vape4.jpg", "Images/vape5.jpg"];
let index = 0;
let img = document.getElementById("myImage");


function changeImage() {
    img.style.opacity = 0;
    setTimeout(function () {
        img.src = images[index];
        img.style.opacity = 1;
    }, 500);
    index = (index + 1) % images.length;
}


setInterval(changeImage, 1500);

let images = ["IMG_4241.jpg", "IMG_4423.jpg"];
let index = 0;

setInterval(function () {
  index = (index + 1) % images.length;
  document.getElementById("profile-pic").src = images[index];
}, 5000); // 5 seconds 
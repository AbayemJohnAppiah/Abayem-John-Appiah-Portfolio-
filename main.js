// Set the initial profile picture//
document.getElementById("profile-pic").style.backgroundImage = "url('IMG_4241.jpg')";

let images = ["IMG_4241.jpg", "IMG_4423.JPG"];
let index = 0;
// Change the profile picture every 5 seconds//
setInterval(function () {
  index = (index + 1) % images.length;
  document.getElementById("profile-pic").style.backgroundImage = "url('" + images[index] + "')";
}, 5000); // 5 seconds 
// navigation logo//
document.getElementById("logo").style.backgroundImage = "url('AJ Logo 2.png')";

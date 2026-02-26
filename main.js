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


const skills = [
  { name: "HTML", percent: 90 },
  { name: "CSS", percent: 75 },
  { name: "JavaScript", percent: 40 }
];

const container = document.getElementById("skills");

skills.forEach(skill => {

  // Create skill container
  const skillDiv = document.createElement("div");
  skillDiv.className = "skill";

  // Create header
  const header = document.createElement("div");
  header.className = "skill-header";
  header.innerHTML = `
    <span>${skill.name}</span>
    <span>${skill.percent}%</span>
  `;

  // Create progress bar
  const progress = document.createElement("div");
  progress.className = "progress";

  const progressBar = document.createElement("div");
  progressBar.className = "progress-bar";

  progress.appendChild(progressBar);
  skillDiv.appendChild(header);
  skillDiv.appendChild(progress);
  container.appendChild(skillDiv);

  // Animate bar
  setTimeout(() => {
    progressBar.style.width = skill.percent + "%";
  }, 200);
});

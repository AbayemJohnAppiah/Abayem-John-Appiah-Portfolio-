// Set the initial profile picture//
document.getElementById("profile-pic").style.backgroundImage = "url('IMG_4241.jpg')";

let images = ["IMG_4241.jpg", "football.jpg"];
let index = 0;
// Change the profile picture every 5 seconds//
setInterval(function () {
  index = (index + 1) % images.length;
  document.getElementById("profile-pic").style.backgroundImage = "url('" + images[index] + "')";
}, 5000); // 5 seconds 

//nav//
/* navigation logo */
document.getElementById("logo").style.backgroundImage = "url('AJ Logo 2.png')";
/* Nav Home*/
document.getElementById("navHome").innerHTML = 'Home';
/* Nav Skills*/
document.getElementById("navSkill").innerHTML = 'Skills';
/* NAv Projects*/
document.getElementById("navProject").innerHTML = 'Projects';
/* Nav Contact*/
document.getElementById("navContact").innerHTML = 'Contact';

//main content//
/* my name */
document.getElementById("myName").innerHTML = 'Abayem A. John';
/* subName */
document.getElementById("subName").innerHTML = 'Web Application Programmer | Football Goalkeeper';

/* About */
document.getElementById("about").innerHTML = 'I build fast, secure, and responsive web applications with clean code and modern technologies.I enjoy creating digital solutions that are simple to use and built to perform. <br> Beyond coding, I am a football goalkeeper.Just like in goal, I stay focused under pressure, react quickly, and protect what matters.These skills shape how I approach problem - solving and teamwork in technology. <br> I am driven by performance, reliability, and great user experience. I love turning ideas—on the field and on the screen—into solid results.';

/* youtube */
document.getElementById("youtubeAbout").innerHTML = 'Built a YouTube-style website using HTML for structure and CSS for styling Focused on layout positioning, clean design, and user interface development.';


/* Gallery */
document.getElementById("galleryAbout").innerHTML = 'Built a personal gallery website with HTML, CSS, and JavaScript. Implemented a light and dark mode toggle to enhance user experience.';

/* Calculator */
document.getElementById("calculatorAbout").innerHTML = 'Built a calculator using HTML, CSS, and JavaScript.Focused on clean layout, responsive design, and accurate calculation logic.';

/* Animation */
document.getElementById("animationAbout").innerHTML = 'Built an animation page using HTML and CSS.Focused on layout positioning, styling, and smooth CSS animations.';

/* Sign In */
document.getElementById("siginAbout").innerHTML = 'Built a sign-in page using HTML and CSS. Focused on clean layout, form structure, and modern styling.';

/* Scrolling */
document.getElementById("scrollingAbout").innerHTML = 'Built a scrolling page using HTML and CSS. Focused on clean layout, smooth scrolling, and user experience.';

/* Clock */
document.getElementById("clock").innerHTML = 'Built a real-time clock using HTML, CSS,and JavaScript. Used JavaScript to update the time every second. This project strengthened my skills in event timing and dynamic content updates.';

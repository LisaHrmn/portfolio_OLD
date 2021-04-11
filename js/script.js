//typewrite
let i = 0
let txt = "HELLO WORLD,"
let speed = 175

function typeWriter(){
    if (i < txt.length) {
    document.getElementById("hello-world").innerHTML += txt.charAt(i);
    i++
    setTimeout(typeWriter, speed);
  }
}

//change style
function changeStyle(){
    document.body.style.backgroundColor = "#24305E"
    document.getElementById("color-invert").style.display = "none";
    document.getElementById("color-invert-back").style.display = "inline";
    document.getElementById("name").style.color= "#F3D250";
    x = document.getElementsByClassName("color-change");
    for (i = 0; i < x.length; i++) {
        x[i].style.color = "#F3D250";
    }
    x2 = document.getElementsByClassName("color-change-2");
    for (i = 0; i < x.length; i++) {
        x2[i].style.color = "white";
    }
}

function changeStyleBack(){
    document.body.style.backgroundColor = "#F3D250"
    document.getElementById("color-invert").style.display = "inline";
    document.getElementById("color-invert-back").style.display = "none";
    document.getElementById("name").style.color= "#24305E";
    x = document.getElementsByClassName("color-change");
    for (i = 0; i < x.length; i++) {
        x[i].style.color = "#24305E";
    }
    x2 = document.getElementsByClassName("color-change-2");
    for (i = 0; i < x.length; i++) {
        x2[i].style.color = "#333333";
    }
}

//Image slide
imageContainer = document.getElementById("image-change-container"),
imageClipper = document.getElementById("image-clipper"),
clippedImage = imageClipper.getElementsByTagName("img")[0];

imageContainer.addEventListener("mousemove", trackLocation, false); 
imageContainer.addEventListener("touchstart", trackLocation, false);
imageContainer.addEventListener("touchmove", trackLocation, false);

function trackLocation(e) {
    var rect = imageContainer.getBoundingClientRect(),
        position = ((e.pageX - rect.left) / imageContainer.offsetWidth)*100;
    if (position <= 100) { 
      imageClipper.style.width = position+"%";
      clippedImage.style.width = ((100/position)*100)+"%";
      clippedImage.style.zIndex = 3;
      }
  }


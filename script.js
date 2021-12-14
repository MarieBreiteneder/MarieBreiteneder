var i = 0;
var txt = 'Hi, I`m Marie';
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("into").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

document.addEventListener("DOMContentLoaded", typeWriter);
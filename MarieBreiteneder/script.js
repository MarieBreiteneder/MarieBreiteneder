var i = 0;
var txt = 'Hi, Marie here.';
var speed = 130;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("introType").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

document.addEventListener("DOMContentLoaded", typeWriter);

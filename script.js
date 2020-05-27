let button = document.getElementsByTagName("button")[0];
document.onmousemove = function(event){button.innerText = `mouseX : ${event.clientX}
mouseY : ${event.clientY}`};
button.onmouseover = function(){button.style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`};

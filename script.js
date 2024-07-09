var button = document.querySelector("button");
var description = document.querySelector(".description");
var img = document.querySelector(".screenimg");
var icon = document.querySelector("#card i");
var body = document.querySelector("body");
var crsr = document.querySelector(".crsr");
var count = 0;
button.addEventListener("click", function(){
    if (count == 0) {
        button.style.backgroundColor = "white";
        description.innerHTML = "Friends"
        description.style.color = "green"
        button.innerHTML = "Remove";
        count = 1;
    }
    else {
        button.style.backgroundColor = "lightgreen";
        description.innerHTML = "Stranger"
        description.style.color = "#46424f"
        button.innerHTML = "Add friend";
        count = 0;
    }
})
img.addEventListener("dblclick", function(){
    icon.style.opacity = "0.8";
    setTimeout(() => {
        icon.style.opacity = "0";
    }, 800);
    setTimeout(function () {
        icon.style.transform = "translate(-50%, -50%) scale(0)";
    }, 2000);
})
body.addEventListener("mousemove",function(val){
    crsr.style.left = val.x + "px";
    crsr.style.top = val.y + "px";
})
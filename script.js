var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

color1.addEventListener("input", changeColor)

color2.addEventListener("input", changeColor)

random.addEventListener("click", function() {
    color1.value = rHex();
    color2.value = rHex();
    console.log(color1.value, color2.value);
    changeColor();
})

function changeColor() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = color1.value + " | " + color2.value;
}

function rHex() {
    return "#" + ran() + ran() + ran();
}

function ran() {
    return hex(Math.floor(255 * Math.random()));
}

function hex(num) {
    n = num.toString(16);
    if (n.length === 1) {
        n = "0" + n;
    }
    return n;
}

changeColor()
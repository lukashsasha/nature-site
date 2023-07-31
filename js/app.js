import {animateRain, stopRain} from "../libs/rain.js";

document.addEventListener("mousemove", e => {
    Object.assign(document.documentElement, {
        style: `
        --move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
        --move-y: ${(e.clientY - window.innerHeight / 2) * -.01}deg;
        `
    })
})

let button = document.getElementsByClassName("button-start")[0];
let rain = false;

function changeRainCapacity() {
    button.onclick = function () {
        if (!rain) {
            button.innerHTML = "Stop rain";
            button.classList.add('button-start__click')
            animateRain();
            rain = true;
        } else {
            button.innerHTML = "Start rain";
            button.classList.remove('button-start__click')
            stopRain();
            rain = false;
        }
    }
}

changeRainCapacity()



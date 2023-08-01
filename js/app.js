import {animateRain, stopRain} from "../libs/rain.js";

document.addEventListener("mousemove", e => {
    Object.assign(document.documentElement, {
        style: `
        --move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
        --move-y: ${(e.clientY - window.innerHeight / 2) * -.01}deg;
        `
    })
})

document.addEventListener( "touchmove", e => {
    Object.assign(document.documentElement, {
        style: `
        --move-x: ${(e.touches[0].clientX - window.innerWidth / 2) * -.005}deg;
        --move-y: ${(e.touches[0].clientY - window.innerHeight / 2) * -.01}deg;
        `
    })
})

let button = document.getElementsByClassName("button-start")[0];
let rain = false;
let rainSound = new Audio("../audio/rain.mp3");
rainSound.loop = true;

function changeRainCapacity() {
    button.onclick = function () {
        if (!rain) {
            button.innerHTML = "Stop rain";
            button.classList.add('button-start__click')
            animateRain();
            rainSound.volume = 1;
            rainSound.currentTime = 0;
            rainSound.play();
            rain = true;
        } else {
            button.innerHTML = "Start rain";
            button.classList.remove('button-start__click')
            stopRain();
            getSoundAndFadeAudio();
            rain = false;
           
        }
    }
}

function getSoundAndFadeAudio () {

    let fadeAudio = setInterval(function () {
        if (rainSound.volume > 0) {
            rainSound.volume -= 0.1;
            if(rainSound.volume < 0.15 && rainSound.volume > 0){
                rainSound.volume = 0;
            }
        }
        if (rainSound.volume === 0.0) {
            clearInterval(fadeAudio);
        }
    }, 200);

}

changeRainCapacity()





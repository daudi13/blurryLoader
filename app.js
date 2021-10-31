const background = document.getElementById('bg');
const loaderText = document.getElementById('loaderText');

let loading = 0;

let init = setInterval(blurryEffect, 30);

function blurryEffect() {
    loading++

    if (loading > 99) {
        clearInterval(init)
    }
    loaderText.innerText = `${loading}%`;
    loaderText.style.opacity = `${scale(loading, 0, 100, 1, 0)}`
    background.style.filter = `blur(${scale(loading, 0, 100, 30, 0)}px)`
}

function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
} 
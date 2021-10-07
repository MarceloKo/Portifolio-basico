let time = 5000,
    currentImageIndex = 0;
images = document.querySelectorAll(".apresentacao img");
max = images.length;
var myVar = setInterval(() => {nextImage()}, time)


function stopInteval(){
    clearInterval(myVar)
}

function nextImage() {
    images[currentImageIndex].classList.remove("selected")
    currentImageIndex++
    if (currentImageIndex >= max) {
        currentImageIndex = 0;
    }
    images[currentImageIndex].classList.add("selected")
}

function butonApresentacao(posicao){
    images[currentImageIndex].classList.remove("selected")
    currentImageIndex = posicao;
    images[currentImageIndex].classList.add("selected")
    stopInteval()
    myVar = setInterval(() => {nextImage()}, time)
}

window.addEventListener("load", myVar);
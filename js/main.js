if (window.SimpleAnime) {
    new SimpleAnime;
}

/* SLIDE  */

let time = 5000,
    currentImageIndex = 0;
images = document.querySelectorAll(".apresentacao img");
color = document.querySelectorAll(".listaButonApresentacao li")
max = images.length;
var myVar = setInterval(() => { nextImage() }, time)



function stopInteval() {
    clearInterval(myVar)
}

function nextImage() {
    images[currentImageIndex].classList.remove("selected")
    color[currentImageIndex].classList.remove("selectedColor")

    currentImageIndex++
    if (currentImageIndex >= max) {
        currentImageIndex = 0;
    }
    images[currentImageIndex].classList.add("selected")
    color[currentImageIndex].classList.add("selectedColor")
}

function butonApresentacao(posicao) {
    images[currentImageIndex].classList.remove("selected")
    color[currentImageIndex].classList.remove("selectedColor")
    currentImageIndex = posicao;
    images[currentImageIndex].classList.add("selected")
    color[currentImageIndex].classList.add("selectedColor")
    stopInteval()
    myVar = setInterval(() => { nextImage() }, time)
}
/* FIM SLIDE  */








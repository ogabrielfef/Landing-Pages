let time = 3000;
let images = document.querySelectorAll('#slider img');
let currentImage = 0;
let max = images.length;

function nextImage() {
  images[currentImage].classList.remove('selected')
  currentImage++;
  if (currentImage >= max) {
    currentImage = 0;
  }
  images[currentImage].classList.add('selected')
}

function play() {
  setInterval(() => {
    nextImage();
  }, time)
}

window.addEventListener('load', play);
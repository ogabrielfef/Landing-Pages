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

let home = document.querySelector('#home');
let gallery = document.querySelector('#gallery');
let game = document.querySelector('#game');
let serie = document.querySelector('#serie');

function renderContent(a) {
  home.style.display = 'none';
  gallery.style.display = 'none';
  game.style.display = 'none';
  serie.style.display = 'none';
  let contents = document.querySelector(`#${a}`)
  contents.style.display = 'flex';
}

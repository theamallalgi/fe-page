// Navigation
const menu = document.querySelector('.menu')
const hamburger = document.querySelector('.hamburger');
const lists = document.querySelectorAll('ul li');

hamburger.onclick = () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
}

lists.forEach((i) => {
  i.onclick = () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
  }
})

// Tool bar
const termBtn = document.querySelector('.terminal');
const codeBtn = document.querySelector('.code');
const sublBtn = document.querySelector('.sublime');
const preview = document.querySelector('.preview');

termBtn.onclick = () => {
  preview.style.backgroundImage = `url('assets/images/windows/alacritty.png')`;
  termBtn.classList.toggle('bar--active');
  codeBtn.classList.remove('bar--active');
  sublBtn.classList.remove('bar--active');
};
codeBtn.onclick = () => {
  preview.style.backgroundImage = `url('assets/images/windows/vs-code.png')`;
  codeBtn.classList.toggle('bar--active');
  termBtn.classList.remove('bar--active');
  sublBtn.classList.remove('bar--active');
};
sublBtn.onclick = () => {
  preview.style.backgroundImage = `url('assets/images/windows/windows-terminal.png')`;
  sublBtn.classList.toggle('bar--active');
  termBtn.classList.remove('bar--active');
  codeBtn.classList.remove('bar--active');
};
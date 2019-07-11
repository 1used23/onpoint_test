const slideWrapper = document.querySelector('.slide-wrapper');
const nav_0 = document.querySelector('.nav__0');
const nav_1 = document.querySelector('.nav__1');
const nav_2 = document.querySelector('.nav__2');
let touchStartY;
let touchEndY;
let currentSlide = 0;
let currentNav = document.querySelector('.nav__' + currentSlide);

const update = function(currentSlide) {
	nav_0.style.backgroundColor = 'white';
	nav_1.style.backgroundColor = 'white';
	nav_2.style.backgroundColor = 'white';
  	slideWrapper.style.transform = `translateY(-${currentSlide*768}px)`;
	currentNav.style.backgroundColor = '#f78b1f';

	 if (currentSlide == 2) {
	 	document.getElementById('scroll-down').style.opacity = 0;
	 } else if (currentSlide == 1) {
	 	document.getElementById('scroll-down').style.opacity = 1;
	 }

}

window.addEventListener('touchstart', e => {
  touchStartY = e.touches[0].clientY;
})

window.addEventListener('touchend', e => {
	touchEndY = e.changedTouches[0].clientY;
	if (touchStartY - touchEndY > 50 && currentSlide <= 1) {
	  currentSlide += 1;
	  update(currentSlide);
	}
	if (touchStartY - touchEndY < -50 && currentSlide >= 1) {
	 currentSlide -= 1;
	 update(currentSlide);
	}
  console.log(currentSlide);
})

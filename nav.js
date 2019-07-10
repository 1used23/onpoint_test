const slideWrapper = document.querySelector('.slide-wrapper');
let touchStartY;
let touchEndY;
let currentSlide = 0;

const update = function(state) {
	document.querySelector('.nav__0').style.backgroundColor = 'white';
	document.querySelector('.nav__1').style.backgroundColor = 'white';
	document.querySelector('.nav__2').style.backgroundColor = 'white';
  	slideWrapper.style.transform = `translateY(-${state*768}px)`;
	document.querySelector('.nav__' + state).style.backgroundColor = '#f78b1f';

	 if (state == 2) {
	 	document.getElementById('scroll-down').style.opacity = 0;
	 } else if (state == 1) {
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

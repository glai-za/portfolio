const hamburger = document.querySelector('.header .navbar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .navbar .nav-list ul');
const menu_item = document.querySelectorAll('.header .navbar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#4d774e';
  } else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

const sectionTitle = document.querySelector('.sectionTitle');
sectionTitle.innerHTML = sectionTitle.textContent.replace(/\S/g,'<span>$&</span>');

const letters = document.querySelectorAll('span');
for (let i=0; i<letters.length; i++){
  letters[i].addEventListener('mouseover', function(){
    letters[i].classList.add('active')
  })
}
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Dark or Light Styles
function toggleMode(theme) {
	const white = '255 255 255';
	const black = '0 0 0';
	nav.style.backgroundColor = `rgb(${theme === 'dark' ? black : white} / 50%)`;
	textBox.style.backgroundColor = `rgb(${theme === 'dark' ? white : black} / 50%)`;
	toggleIcon.children[0].textContent = `${theme[0].toUpperCase() + theme.slice(1)} Mode`;
	toggleIcon.children[1].classList.replace(
		`fa-${theme === 'dark' ? 'sun' : 'moon'}`,
		`fa-${theme === 'dark' ? 'moon' : 'sun'}`
	);
	image1.src = `img/undraw_proud_coder_${theme}.svg`;
	image2.src = `img/undraw_feeling_proud_${theme}.svg`;
	image3.src = `img/undraw_conceptual_idea_${theme}.svg`;
}

// Switch Theme Dynamically
function switchTheme(event) {
	const theme = event.target.checked ? 'dark' : 'light';
	document.documentElement.setAttribute('data-theme', theme);
	toggleMode(theme);
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);
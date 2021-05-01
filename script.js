const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Dark or Light Styles
function toggleMode(theme) {
	const isDark = theme === 'dark';
	nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
	textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
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
	localStorage.setItem('theme', theme);
	toggleMode(theme);
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage for Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
	document.documentElement.setAttribute('data-theme', currentTheme);
	if (currentTheme === 'dark') toggleSwitch.checked = true;
	toggleMode(currentTheme);
}
import './vendor';

const KEY_SPACE = 32;

$(document).on('click', '.checkbox, .radiobox', (e) => {
	e.currentTarget.focus();
});

$(document).on('keydown', '.checkbox, .radiobox', (e) => {
	if (e.keyCode === KEY_SPACE) {
		e.preventDefault();
		e.currentTarget.click();
	}
});

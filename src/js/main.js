import './vendor';

const KEY_SPACE = 32;

$(document).on('click', '.checkbox', (e) => {
	e.currentTarget.focus();
});

$(document).on('keydown', '.checkbox', (e) => {
	if (e.keyCode === KEY_SPACE) {
		e.currentTarget.click();
	}
});

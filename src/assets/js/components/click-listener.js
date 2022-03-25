import utils from '../utils/utils';

function clickListener(domElement, ...arr) {
	document.querySelector(domElement).addEventListener('click', () => {
		if (domElement === '.button_toggle-menu' || domElement === '.button_basket') {
			for (let i = 0; i < arr.length; i += 2) {
				utils.toggleClass(arr[i], arr[i + 1]);
				if (
					document.querySelector('.menu').classList.contains('menu_active') ||
					document.querySelector('.container').classList.contains('container-right-block_visible')
				) {
					utils.addClass('body', 'overflow-hidden');
				} else {
					utils.removeClass('body', 'overflow-hidden');
				}
			}
		} else {
			for (let i = 0; i < arr.length; i += 2) {
				utils.toggleClass(arr[i], arr[i + 1]);
			}
		}
	});
}

export default clickListener;

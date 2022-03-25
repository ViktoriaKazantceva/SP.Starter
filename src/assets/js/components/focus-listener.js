import utils from '../utils/utils';

function focusListener(domElement, ...arr) {
	document.querySelector(domElement).onfocus = function () {
		for (let i = 0; i < arr.length; i += 2) {
			utils.addClass(arr[i], arr[i + 1]);
		}
	};
}

export default focusListener;

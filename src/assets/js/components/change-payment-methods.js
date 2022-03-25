import utils from '../utils/utils';

function changePaymentMethods() {
	const payControls = document.querySelectorAll('.control__radio input');
	payControls.forEach(item => {
		item.addEventListener('click', evt => {
			if (evt.target.value === 'card') {
				utils.removeClass('.container-left-block__credit-cart', 'hidden');
				utils.removeClass('.container-left-block__form-card-information', 'hidden');
				utils.addClass('.container-left-block__pay-pal', 'hidden');
			} else {
				utils.addClass('.container-left-block__credit-cart', 'hidden');
				utils.addClass('.container-left-block__form-card-information', 'hidden');
				utils.removeClass('.container-left-block__pay-pal', 'hidden');
			}
		});
	});
}

export default changePaymentMethods;

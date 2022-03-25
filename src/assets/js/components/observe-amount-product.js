import utils from '../utils/utils';
import countTotalCost from './count-total-cost';

const observeAmountProduct = new MutationObserver(mutations => {
	const basketMarker = document.querySelector('.button_basket-marker');
	const total = document.querySelector('.table__td-total');
	mutations.forEach(mutation => {
		countTotalCost();
		if (mutation.target.childElementCount > 1) {
			basketMarker.textContent = mutation.target.childElementCount - 1;
		} else {
			basketMarker.style.transform = 'scale(0)';
			total.textContent = utils.formatСurrency(0);
			[...document.querySelectorAll('.table__tr-additional-expenses')].forEach(item => {
				item.remove();
			});
			observeAmountProduct.disconnect();
		}
	});
});

export default observeAmountProduct;

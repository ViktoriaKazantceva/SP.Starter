import utils from '../utils/utils';

const countTotalCost = () => {
	let totalCost = 0;
	[...document.querySelectorAll('.product-card')].forEach(item => {
		totalCost +=
			Number(item.querySelector('.product-card__amount').value) *
			Number(item.querySelector('.product-card__amount').dataset.price);
	});

	utils.setSubtotal(totalCost);
	utils.setTotal(totalCost);
};

export default countTotalCost;

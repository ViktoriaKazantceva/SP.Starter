import utils from '../utils/utils';
import { calculation } from '../utils/const';

const calculateSeparateProduct = (productCard, calculatorAction) => {
	const productCardItem = productCard.querySelector('.product-card__amount');
	const tableSubtotal = document.querySelector('.table_td-subtotal');

	switch (calculatorAction) {
		case calculation.PLUS:
			productCardItem.value++;
			utils.setSubtotal(
				Number(tableSubtotal.dataset.value) + Number(productCardItem.dataset.price)
			);
			utils.setTotal(Number(tableSubtotal.dataset.value));
			utils.fieldLength(productCardItem);
			break;
		case calculation.MINUS:
			productCardItem.value--;
			utils.setSubtotal(
				Number(tableSubtotal.dataset.value) - Number(productCardItem.dataset.price)
			);
			utils.setTotal(Number(tableSubtotal.dataset.value));
			utils.fieldLength(productCardItem);
			break;
		default:
			break;
	}
};

export default calculateSeparateProduct;

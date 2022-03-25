import utils from '../utils/utils';
import { basketBlock, calculation } from '../utils/const';
import calculateSeparateProduct from './calculate-separate-product';

const removeSeparateProduct = () => {
	basketBlock.addEventListener('click', evt => {
		if (evt.target.classList.contains('button_minus')) {
			const input = evt.target.closest('.product-card').querySelector('.product-card__amount');
			if (Number(input.value) > 1) {
				calculateSeparateProduct(evt.target.closest('.product-card'), calculation.MINUS);
			} else if (Number(input.value) === 1) {
				utils.removeItem(evt, '.product-card');
			}
		} else if (evt.target.classList.contains('button_plus')) {
			calculateSeparateProduct(evt.target.closest('.product-card'), calculation.PLUS);
		} else if (evt.target.classList.contains('button_delete')) {
			utils.removeItem(evt, '.product-card');
		}
	});
};

export default removeSeparateProduct;

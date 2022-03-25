import utils from '../utils/utils';

function changeFieldLength() {
	[...document.querySelectorAll('.product-card__amount')].forEach(item => {
		utils.fieldLength(item);
	});
}

export default changeFieldLength;

import utils from '../utils/utils';

function addMoneyFormat() {
	[...document.querySelectorAll('.money-format')].forEach(item => {
		item.textContent = utils.formatСurrency(item.textContent);
	});
}

export default addMoneyFormat;

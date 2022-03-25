import countTotalCost from './count-total-cost';
import { basketBlock, amountProductConfig } from '../utils/const';
import removeSeparateProduct from './remove-separate-product';
import observeAmountProduct from './observe-amount-product';

import clickListener from './click-listener';
import focusListener from './focus-listener';
import changePaymentMethods from './change-payment-methods';
import changeFieldLength from './change-field-length';
import addMoneyFormat from './add-money-format';
import amountProduct from './amount-product';

countTotalCost();
removeSeparateProduct();
observeAmountProduct.observe(basketBlock, amountProductConfig);

clickListener(
	'.button_toggle-menu',
	'.button_toggle-menu',
	'button_toggle-menu_active',
	'.menu',
	'menu_active'
);
clickListener('.button_basket', '.container', 'container-right-block_visible');

clickListener(
	'.form__button-search',
	'.field__input_search',
	'field__input_visible',
	'.menu',
	'menu_transform-right'
);

focusListener(
	'.header__form-search',
	'.field__input_search',
	'field__input_visible',
	'.menu',
	'menu_transform-right'
);

changePaymentMethods();
changeFieldLength();
addMoneyFormat();
amountProduct();

function amountProduct() {
	const arrLength = document.querySelectorAll('.product-card__amount').length;
	document.querySelector('.button_basket-marker').textContent = arrLength;
}

export default amountProduct;

const utils = {
	now() {
		if (window.performance && window.performance.now) {
			this.now = () => {
				return window.performance.now();
			};
		} else {
			this.now = () => {
				return +new Date();
			};
		}
		return this.now();
	},

	cubicProgress(value) {
		value = value < 0 ? 0 : value;
		value = value > 1 ? 1 : value;
		value /= 1 / 2;

		if (value < 1) {
			return (1 / 2) * value * value * value;
		}

		value -= 2;

		return (1 / 2) * (value * value * value + 2);
	},

	debounce(func, wait = 100, immediate = false) {
		let timeout;
		return function () {
			const context = this;
			const args = arguments;

			const later = () => {
				timeout = null;
				!immediate && func.apply(context, args);
			};

			const callNow = immediate && !timeout;
			clearTimeout(timeout);

			timeout = setTimeout(later, wait);

			callNow && func.apply(context, args);
		};
	},

	throttle(func, wait = 100) {
		let isThrottled = false;
		let savedArgs;
		let savedThis;

		function wrapper() {
			if (isThrottled) {
				savedArgs = arguments;
				savedThis = this;
			} else {
				func.apply(this, arguments);

				isThrottled = true;

				setTimeout(() => {
					isThrottled = false;
					if (savedArgs) {
						wrapper.apply(savedThis, savedArgs);
						savedArgs = savedThis = null;
					}
				}, wait);
			}
		}

		return wrapper;
	},

	formatNumber(number) {
		number = number.toString();
		let result = '';

		for (let k = number.length - 1, c = 0; k >= 0; k--, c++) {
			if (c === 3) {
				c = 0;
				result = number.substr(k, 1) + ' ' + result;
			} else {
				result = number.substr(k, 1) + result;
			}
		}

		return result;
	},

	declOfNum(number, titles) {
		const cases = [2, 0, 1, 1, 1, 2];
		return titles[
			number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]
		];
	},

	toggleClass(domElement, toggleClassName) {
		return document.querySelector(domElement).classList.toggle(toggleClassName);
	},

	addClass(domElement, addClassName) {
		return document.querySelector(domElement).classList.add(addClassName);
	},

	removeClass(domElement, removeClassName) {
		return document.querySelector(domElement).classList.remove(removeClassName);
	},

	formatСurrency(value) {
		return `$ ${value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ' ')}`;
	},

	fieldLength(item) {
		const inputWidth = item.value.length;
		if (inputWidth > 3) {
			item.style.maxWidth = `calc(${inputWidth} * 10px)`;
		} else {
			item.style.maxWidth = '32px';
		}
	},

	removeItem(item, domElement) {
		return item.target.closest(domElement).remove();
	},

	setSubtotal(value) {
		const tableSubtotal = document.querySelector('.table_td-subtotal');

		tableSubtotal.textContent = utils.formatСurrency(value);
		tableSubtotal.dataset.value = value;
	},

	setTotal(valueSubtotal) {
		const TAX = Number(document.querySelector('.table__td-tax').dataset.value);
		const SHIPPING = Number(document.querySelector('.table__td-shipping').dataset.value);
		const total = document.querySelector('.table__td-total');

		total.textContent = utils.formatСurrency(valueSubtotal + TAX + SHIPPING);
	},
};

export default utils;

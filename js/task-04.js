const counterEl = document.querySelector("#value");
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

const onIncrement = () => {
	counterValue += 1;
	counterEl.textContent = counterValue;
};

const onDecrement = () => {
	counterValue -= 1;
	counterEl.textContent = counterValue;
};

incrementBtn.addEventListener("click", onIncrement);
decrementBtn.addEventListener("click", onDecrement);

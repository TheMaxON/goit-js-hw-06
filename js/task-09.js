function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorChangeBtn = document.querySelector(".change-color");

colorChangeBtn.addEventListener("click", changeBackColor);

function changeBackColor() {
	const bodyEl = document.body;
	const colorName = document.querySelector(".color");
	const randomColor = getRandomHexColor();

	bodyEl.style.backgroundColor = randomColor;
	colorName.textContent = randomColor;
}

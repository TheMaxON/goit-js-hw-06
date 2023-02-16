const inputEl = document.querySelector("#validation-input");

const inputValidationHandler = (event) => {
	console.log(event.target.value.length);
	if (event.target.value.length === Number(event.target.dataset.length)) {
		event.target.classList.remove("invalid");
		return event.target.classList.add("valid");
	}
	event.target.classList.add("invalid");
};

inputEl.addEventListener("blur", inputValidationHandler);

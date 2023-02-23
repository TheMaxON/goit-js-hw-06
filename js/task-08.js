const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();

	const formElements = event.currentTarget.elements;

	const email = formElements.email.value;
	const password = formElements.password.value;

	const userData = {
		email,
		password,
	};

	if (email === "" || password === "") {
		alert("Fill all fields to continue.");
		return;
	} else {
		console.log(userData);
		event.currentTarget.reset();
		return;
	}
}

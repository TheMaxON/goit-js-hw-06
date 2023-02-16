const rangeInputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

addEventListener("input", (event) => {
	textEl.style.fontSize = event.target.value + "px";
});

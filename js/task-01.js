const categoriesList = document.querySelector("#categories");
const categoryItem = categoriesList.querySelectorAll(".item");
console.log("Number of categories:", categoryItem.length);

categoryItem.forEach((item) => {
	const categoryName = item.querySelector("h2").textContent;
	const elementsAmount = item.querySelectorAll("li").length;

	console.log("Category:", categoryName);
	console.log("Elements:", elementsAmount);
});

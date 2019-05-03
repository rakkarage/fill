document.getElementById("addButton").addEventListener("click", function (event) {
	var li = document.createElement("li");
	li.textContent = "test";
	document.getElementById("list").appendChild(li);
	updateScroll();
});

function updateScroll() {
	var element = document.getElementById("container");
	element.scrollTop = element.scrollHeight;
}

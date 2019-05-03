document.getElementById("addButton").addEventListener("click", function (event) {
	var li = document.createElement("li");
	li.textContent = uuidv4();
	document.getElementById("list").appendChild(li);
	updateScroll();
});

function updateScroll() {
	var element = document.getElementById("subMain");
	element.scrollTop = element.scrollHeight;
}

function uuidv4() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}

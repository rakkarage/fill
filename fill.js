document.getElementById("addButton").addEventListener("click", event => {
	var li1 = document.createElement("li");
	li1.textContent = uuidv4();
	document.getElementById("list1").appendChild(li1);
	var li2 = document.createElement("li");
	li2.textContent = uuidv4();
	document.getElementById("list2").appendChild(li2);
	updateScroll();
});

function updateScroll() {
	var element = document.getElementById("scroll");
	element.scrollTop = element.scrollHeight;
	var element = document.getElementById("side");
	element.scrollTop = element.scrollHeight;
}

function uuidv4() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
		var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}

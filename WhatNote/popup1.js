function onLoad() {
	var txt = document.getElementById("txt");
	txt.value = localStorage.txt;
}

function saveData() {
	localStorage.txt = txt.value;
}

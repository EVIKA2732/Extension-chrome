window.onload = function() {
	var txt = document.getElementById("txt");
	txt.value = localStorage.GetItem("txt");

	var button = document.getElementById("btn");
	button.addEventListener("click", savedata);
	function saveData() {
		localStorage.setItem("txt", txt.value);
	}
}
function saySubmit() {
	alert("Form Submitted! Thank You!");
}

(function (window, document) {
	
	window.onload = function () {
		let submitBtn = document.getElementById("submitBtn");
		submitBtn.onclick = saySubmit;
	}
	
})(window, document);
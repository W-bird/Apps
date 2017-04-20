function rem() {
	var width = window.innerWidth || document.doxumentElement.clientWidth,
		size = width/(320/2);
	document.doxumentElement.style.fontSize = size + "px";
}

rem();

window.addEventListener("resize",rem);
var pict = {
	x: 10,
	y: 10
}

function mousy(e) {

	var img = document.getElementById("picture");
	img.style.left = e.pageX + "px";
	img.style.top = e.pageY + "px";
}

function keyEvent(e) {
	if (e.keyCode === 37) { // left
		pict.x--;
	} else if (e.keyCode === 38) { // up
		pict.y--;
	} else if (e.keyCode === 39) { // right
		pict.x++;
	} else if (e.keyCode === 40) { // down
		pict.y++;
	}

	var img = document.getElementById("picture");
	img.style.left = pict.x + "px";
	img.style.top = pict.y + "px";

}

function runMouse() {
	document.addEventListener("mousemove", mousy, false);
}

document.addEventListener("keydown", keyEvent, false);

(function() {
	var clickBut = document.getElementById("but1");

	clickBut.addEventListener("click", mousy, false);

	clickBut = null;
})()
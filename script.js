var pict = {
	x: 10,
	y: 10
}

var mouse = {
	mousyStatus: false,
	mousy(e) {
		var img = document.getElementById("picture");
		img.style.left = e.pageX + "px";
		img.style.top = e.pageY + "px";
	}, 
	runMouse(e) {
		if (!this.mousyStatus) {
			document.addEventListener("mousemove", mouse.mousy, false);
			this.mousyStatus = true;
		} else {
			document.removeEventListener("mousemove", mouse.mousy, false);
			this.mousyStatus = false;
		}

		e.stopPropagation;
		
	}
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

window.onload = function() {
	var clickBut = document.getElementById("but1");
	var img = document.getElementById("picture");

	clickBut.addEventListener("click", mouse.runMouse, false);
	img.addEventListener("click", mouse.runMouse, false);

	clickBut = null;
	img = null;

	document.addEventListener("keydown", keyEvent, false);
};
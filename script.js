var pict = {
	x: 10,
	y: 10
}

var mouse = {
	mousyStatus: false,
	mousy(e) {
		var img = document.getElementById("picture");
		img.style.left = (e.pageX - img.clientWidth/2) + "px";
		img.style.top = (e.pageY - img.clientHeight/2) + "px";
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

var movement = {
	speed: 5,

	// keys is to record arrow keys pressed for simultaneous arrow keys
	keys: {37: false, 38: false, 39: false, 40: false},
	keyEvent(e) {
		var moveAmount = movement.speed;
		if (e.keyCode === 37) { // left
			pict.x -= moveAmount;
		} else if (e.keyCode === 38) { // up
			pict.y -= moveAmount;
		} else if (e.keyCode === 39) { // right
			pict.x += moveAmount;
		} else if (e.keyCode === 40) { // down
			pict.y += moveAmount;
		}

		var img = document.getElementById("picture");
		img.style.left = pict.x + "px";
		img.style.top = pict.y + "px";

	}, 

	// sets movement.keys to false upon keyup event;
	killKeys(e) {
		var loc = movement.keys;

		if (e.keyCode === 37) { // left
			loc[37] = false;
		} else if (e.keyCode === 38) { // up
			loc[38] = false;
		} else if (e.keyCode === 39) { // right
			loc[39] = false;
		} else if (e.keyCode === 40) { // down
			loc[40] = false;
		}
	}
};


window.onload = function() {
	var clickBut = document.getElementById("but1");
	var img = document.getElementById("picture");

	clickBut.addEventListener("click", mouse.runMouse, false);
	img.addEventListener("click", mouse.runMouse, false);

	clickBut = null;
	img = null;

	document.addEventListener("keydown", movement.keyEvent, false);
	document.addEventListener("keyup", movement.killKeys, false);
};
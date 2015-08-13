var movement = {
	x: 10,
	y: 10,
	speed: 10,

	// keys is to record arrow keys pressed for simultaneous arrow keys
	keys: {37: false, 38: false, 39: false, 40: false},
	moveStatus: false,
	moveID: null,
	moveEvent(){
		window.setTimeout(function() {
			clearTimeout(movement.moveID);
			if (movement.moveStatus === true) {
				movement.moveStatus = movement.mover();

				movement.moveID = window.setTimeout(arguments.callee, 100);
			}
		}, 100);
	},
	mover(){
		var loc = movement.keys,
			move = movement.move,
			moveAmount = movement.speed,
			sqrt = Math.sqrt(2);

		if (loc[37]) { // left

			if (loc[38]) { // up key
				move(-moveAmount / sqrt, -moveAmount / sqrt);
			} else if (loc[40]) { // down key
				move(-moveAmount / sqrt, moveAmount / sqrt);
			} else {
				move(-moveAmount, 0);
			}
			return true;
		} else if (loc[38]) { // up

			if (loc[37]) { // left key
				move(-moveAmount / sqrt, -moveAmount / sqrt);
			} else if (loc[39]) { // right key
				move(moveAmount / sqrt, -moveAmount / sqrt);
			} else {
				move(0, -moveAmount);
			}
			return true;
		} else if (loc[39]) { // right

			if (loc[38]) { // up key
				move(moveAmount / sqrt, -moveAmount / sqrt);
			} else if (loc[40]) { // down key
				move(moveAmount / sqrt, moveAmount / sqrt);
			} else {
				move(moveAmount, 0);
			}
			return true;
		} else if (loc[40]) { // down

			if (loc[37]) { // left key
				move(-moveAmount / sqrt, moveAmount / sqrt);
			} else if (loc[39]) { // right key
				move(moveAmount / sqrt, moveAmount / sqrt);
			} else {
				move(0, moveAmount);
			}
			return true;
		} else {
			return false;
		}
	},
	move(x, y) {
		movement.x += x;
		movement.y += y;

		var img = document.getElementById("picture");
		img.style.left = movement.x + "px";
		img.style.top = movement.y + "px";
	},
	keyEvent(e) {
		var loc = movement.keys;

		if (e.keyCode >= 37 && e.keyCode <= 40) {
			if (e.keyCode === 37) { // left
				loc[37] = true;
			} else if (e.keyCode === 38) { // up
				loc[38] = true;
			} else if (e.keyCode === 39) { // right
				loc[39] = true;
			} else if (e.keyCode === 40) { // down
				loc[40] = true;
			}

			movement.moveStatus = true;
			movement.moveEvent();
		}

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
	document.addEventListener("keydown", movement.keyEvent, false);
	document.addEventListener("keyup", movement.killKeys, false);
};
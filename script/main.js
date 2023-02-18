let theButtons = document.querySelectorAll("#buttonHolder img"),
	theHeading = document.querySelector("#headLine h1"),
	puzzleBoard = document.querySelector(".puzzle-board"),
	puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
	dropZones = document.querySelectorAll(".drop-zone"),
	draggedPiece;

// Step 3
function changeBGImage() {
	// bux fix #2 should go here nd it's most 3 lines of JS code
	
	puzzleBoard.style.backgroundImage = `url('images/backGround${this.id}.jpg')`;
	puzzleBoard.innerHTML = '';
}

function handleStartDrag() {
	console.log('Started dragging this piece:', this);
	draggedPiece = this;
}

function handleDragOver(event) {
	event.preventDefault();
	
	//bug fix #1 should go here and it's most 3 lines of JS code

	if (this.children.length === 0) {
		this.appendChild(draggedPiece);
	}
	console.log('dragged over me');
}

function handleDrop(e) {
	e.preventDefault();
	
	console.log('dropped something on me');
}
// Step 2

theButtons.forEach(button => button.addEventListener ("click", changeBGImage));
puzzlePieces.forEach(piece => piece.addEventListener('dragstart', handleStartDrag));
dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));
dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));


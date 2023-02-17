let theButtons = document.querySelectorAll("#buttonHolder img"),
	theHeading = document.querySelector("#headLine h1"),
	puzzleBoard = document.querySelector(".puzzle-board"),
	puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
	dropZones = document.querySelectorAll(".drop-zone"),
	draggedPiece;

function changeBGImage() {
	
	// Remove all dragged pieces from drop zones

	puzzleBoard.style.backgroundImage = `url('images/backGround${this.id}.jpg')`;
	console.log('Starting new puzzle background', this);
	
	// Update puzzlePieces array to contain new puzzle pieces
	puzzlePieces = document.querySelectorAll(".puzzle-pieces img");
	
}

function handleStartDrag() {
	console.log('Started dragging this piece:', this);
	draggedPiece = this;
}

function handleDragOver(event) {
	event.preventDefault();
	// Fix Bug 2
	if (this.children.length === 0) {
		this.appendChild(draggedPiece);
		console.log('dragged over me');
	}
}

function handleDrop(e) {
	e.preventDefault();
	
	console.log('dropped something on me');
}

theButtons.forEach(button => button.addEventListener ("click", changeBGImage));
puzzlePieces.forEach(piece => piece.addEventListener('dragstart', handleStartDrag));
dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));
dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));


let theButtons = document.querySelectorAll("#buttonHolder img"),
	theHeading = document.querySelector("#headLine h1"),
	puzzleBoard = document.querySelector(".puzzle-board"),
	puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
	dropZones = document.querySelectorAll(".drop-zone"),
	mainBoard = document.querySelector('.puzzle-pieces'),

    draggedPiece = null;


function changeBGImage() {
		// Remove all dragged pieces from drop zones
		// Fix Bug 2
	dropZones.forEach(zone => {
        while (zone.firstChild) {
            zone.removeChild(zone.firstChild);
        }
    });

    puzzlePieces.forEach(piece => {
        piece.classList.remove("dropped");
        mainBoard.appendChild(piece);
    });

	puzzleBoard.style.backgroundImage = `url('images/backGround${this.id}.jpg')`;
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
	}
	console.log('dragged over me');
}

function handleDrop(e) {
	e.preventDefault();
	
	console.log('dropped something on me');
}

theButtons.forEach(button => button.addEventListener ("click", changeBGImage));
puzzlePieces.forEach(piece => piece.addEventListener('dragstart', handleStartDrag));
dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));
dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));


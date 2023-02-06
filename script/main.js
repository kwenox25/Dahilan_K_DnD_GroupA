// Step 1
// variables always go at the top
// there are the connections that you're making to elements on the page
// Use CSS selectors to make connections to elements with JavaScript

// create a 1 to 1 connection with a variable
//let theButton = document.querySelector("#buttonOne");

// create a 1 to many connections with a variable

let theButtons = document.querySelectorAll("#buttonHolder img"),
	theHeading = document.querySelector("#headLine h1"),
	puzzleBoard = document.querySelector(".puzzle-board"),
	puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
	dropZones = document.querySelectorAll(".drop-zone"),
	draggedPiece;
	// theNavEl = document.querySelector("a");

// Step 3
// functionality goes in the middle => how do we want the app to behave
function changeBGImage() {
	//debugger;
	//theHeading.textContent = "Super Cool Drag and Drop Game";
	// start with the object, and then change a property
	// or run a method

	// let theNewSource = "images/backGround" + this.id + ".jpg";
	// console.log(theNewSource);
	
	// theHeading.classList.add('orange-headline');

	puzzleBoard.style.backgroundImage = `url('images/backGround${this.id}.jpg')`;
}

function handleStartDrag() {
	console.log('Started dragging this piece:', this);

	// store a reference to the puzzle piece image that we're dragging so we can use it later and move it to a drop zone
	draggedPiece = this;
}

function handleDragOver(e) {
	e.preventDefault();
	console.log('dragged over me');
	// this line is going to move the dragged piece from the left side of the board info whatever drop zone we choose. appendChild means "add element to the containter"
	this.appendChild(draggedPiece);
}

function handleDrop(e) {
	e.preventDefault();
	console.log('dropped something on me');
}
// Step 2
// event handling always go at the bottom => how do we want users to interact with our app

// 1 to 1 event handling
//theButtons.addEventListener("click", changeBGImage);

// 1 to many event handling
//add event handling to each button in the collection of buttons, one at a time
theButtons.forEach(button => button.addEventListener ("click", changeBGImage));
//puzzleBoard.addEventListener("click, ")

// add the drage event handling to the puzzle pieces
puzzlePieces.forEach(piece => piece.addEventListener('dragstart', handleStartDrag));

// add the dragover AND the drop event handling to the drop zones
dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));

// add the drop event handling
dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));

// function blockDefault(e) {
// 	// block the default behavior of certain elements (a tags. forms, etc)
// 	e.preventDefault();

// 	console.log('do whatever we want instead');
// }

// theNavEl.addEventListener('click', blockDefault);


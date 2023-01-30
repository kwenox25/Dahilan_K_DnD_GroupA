// Step 1
// variables always go at the top
// there are the connections that you're making to elements on the page
// Use CSS selectors to make connections to elements with JavaScript

// create a 1 to 1 connection with a variable
//let theButton = document.querySelector("#buttonOne");

// create a 1 to many connections with a variable

let theButtons = document.querySelectorAll("#buttonHolder img"),
	theHeading = document.querySelector("#headLine h1"),
	puzzleBoard = document.querySelector(".puzzle-board");

// Step 3
// functionality goes in the middle => how do we want the app to behave
function changeBGImage() {
	debugger;
	//theHeading.textContent = "Super Cool Drag and Drop Game";
	// start with the object, and then change a property
	// or run a method

	let theNewSource = "images/backGround" + this.id + ".jpg";
	console.log(theNewSource);
	

	theHeading.classList.add('orange-headline');
}




// Step 2
// event handling always go at the bottom => how do we want users to interact with our app

// 1 to 1 event handling
//theButtons.addEventListener("click", changeBGImage);

// 1 to many event handling
//add event handling to each button in the collection of buttons, one at a time
theButtons.forEach(button => button.addEventListener ("click", changeBGImage));
//puzzleBoard.addEventListener("click, ")
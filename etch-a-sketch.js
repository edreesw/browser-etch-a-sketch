const default_dimensions = 32; 
const gridContainer = document.querySelector("#main-grid-container"); 
const boxFilledColor = "darkgray"; 
const boxDefaultColor = "white"; 

function colorBox(e) {
	//console.log("in mouseover event function"); 
	this.style.backgroundColor = boxFilledColor; 
}

function clearGrid(e) {
	/* TODO: 
		return all boxes back to default to clear grid
	*/
	let boxes = document.querySelectorAll(".box"); 
	boxes.forEach(box => { 
		box.style.backgroundColor = boxDefaultColor 
	}); 
}

function changeGridDimensions(e) {
	/* TODO: 
		change dimension variable
		delete current grid elements
		create new grid with new dimensions by calling drawGrid(); 
	*/
	let newDimensions = prompt("Enter a number up to 128 to select a new grid size."); 
	if(newDimensions===null) {return;}
	while(isNaN(parseInt(newDimensions)) || parseInt(newDimensions) > 128 || parseInt(newDimensions) < 1) {
		console.log(newDimensions); 
		newDimensions = prompt("Incorrect entry. Enter a number up to 128 to select a new grid size."); 
		if(newDimensions===null) {return;}
	}

	let curChild = gridContainer.firstElementChild;  
    while (curChild) { 
	    gridContainer.removeChild(curChild); 
	    curChild = gridContainer.lastElementChild; 
	}

	drawGrid(newDimensions); 
}

function drawGrid(dimensions) {
	/* TODO: 
		create row (* dimensions)
		for each row, add boxes (* dimensions)
		add row to grid 
	*/
	for(let i = 0; i < dimensions; i++) {
		let row = document.createElement("div"); 
		row.classList.add("row"); 
		for(let j = 0; j < dimensions; j++) {
			let box = document.createElement("div"); 
			box.classList.add("box"); 
			row.appendChild(box); 
		}
		gridContainer.appendChild(row); 
	}

	let boxes = document.querySelectorAll(".box"); 
	boxes.forEach(box => { 
		box.addEventListener("mouseover", colorBox); 
	}); 
}

/* TODO:
	add event listeners to buttons (redraw with new dimensions)
*/



const clearBtn = document.querySelector("#clear-button"); 
const changeDimBtn = document.querySelector("#change-dimensions-button"); 

clearBtn.addEventListener("click", clearGrid); 

changeDimBtn.addEventListener("click", changeGridDimensions); 


//console.log("starting"); 
drawGrid(default_dimensions); 


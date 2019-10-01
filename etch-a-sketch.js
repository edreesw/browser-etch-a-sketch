const default_dimensions = 32; 
const gridContainer = document.querySelector("#main-grid-container"); 
const boxFilledColor = "darkgray"; 
const boxDefaultColor = "lightgray"; 

function colorBox(e) {
	//console.log("in mouseover event function"); 
	this.style.backgroundColor = boxFilledColor; 
}

function clearGrid(e) {

	let boxes = document.querySelectorAll(".box"); 
	boxes.forEach(box => { 
		box.style.backgroundColor = boxDefaultColor 
	}); 
}

function changeGridDimensions(e) {

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

function toggleGrid(e) {
	let boxes = document.querySelectorAll(".box"); 
	boxes.forEach(box => { 
		box.classList.toggle("display-grid"); 
	}); 
}

function drawGrid(dimensions) {
	/* 
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
			box.classList.add("display-grid"); 
			row.appendChild(box); 
		}
		gridContainer.appendChild(row); 
	}

	let boxes = document.querySelectorAll(".box"); 
	boxes.forEach(box => { 
		box.addEventListener("mouseover", colorBox); 
		box.style.backgroundColor=boxDefaultColor; 
	}); 
}



const clearBtn = document.querySelector("#clear-button"); 
const changeDimBtn = document.querySelector("#change-dimensions-button"); 
const gridBtn = document.querySelector("#grid-button"); 

clearBtn.addEventListener("click", clearGrid); 

changeDimBtn.addEventListener("click", changeGridDimensions); 

gridBtn.addEventListener("click", toggleGrid); 


//console.log("starting"); 
drawGrid(default_dimensions); 


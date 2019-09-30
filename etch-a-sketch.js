const gridDimensions = 32; 
const gridContainer = document.querySelector("#main-grid-container"); 
const boxColor = "darkgray"; 

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
}

/* TODO:
	add event listeners to buttons (redraw with new dimensions)
*/

function changeBoxColor(e) {
	console.log("in mouseover event function"); 
	this.style.backgroundColor = boxColor; 
}



console.log("starting"); 
drawGrid(gridDimensions); 

const boxes = document.querySelectorAll(".box"); 
boxes.forEach(box => { 
  box.addEventListener("mouseover", changeBoxColor); 
}); 
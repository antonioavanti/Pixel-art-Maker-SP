// Select color input
let selector = document.getElementById("colorpicker");
let submit = document.getElementById("sizePicker");

// Select size input

//When size is submitted by the user, call makeGrid()
submit.addEventListener("click", makeGrid());


function makeGrid() {

let row = document.getElementById("inputWidth").value;
let col = document.getElementById("inputHeight").value;
let grid = document.getElementById("pixelCanvas");

for (var c = 0; c < row; c++) {
	let row = document.createElement("tr");
	row.id = "row" + c;

	grid.appendChild(row);
	let lat = document.getElementById("row" + c);

	for (var d = 0; d < col; d++) {
		let col = document.createElement("td");
		lat.appendChild(col);
	}
  }
  event.preventDefault();
};

// painting
function setColor(color) {
	color = selector.val();
	return color;
}


// Select color input
let selector = document.getElementById("colorpicker").value;
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

/* Create rows and columns
createElement() <tr> <td>- nested loop
inserRow() insertCell() -- nested loop

//choosing a color
/* fetch color from color picker getElementById ("colorpicker").value
browser evernt called 'change'
browser event called 'click'


//updating or reseting
same rows and columns --> paint all cell white
--> diifferent rows and columns --> remove all elements and create the table again
*/


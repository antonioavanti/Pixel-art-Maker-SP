// Select color input

var height, width, color;

// Select size input

//When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function (create) {
	create.preventDefault();
	height = $('#inputHeight').val();
	width = $('#inputWidth').val();
	pixelGrid(height, width);
	console.log("height: "+height+" and width: "+width);
})

function pixelGrid (lat, long) {
	$('tr').remove();

	for (var a = 1; a <= lat; a++) {
		$('#pixelCanvas').append('<tr id=grid' + a + '></tr>');

		for (var b = 1; b <= long; b++) {
			$('#grid'+ a).append('<td></td>');
		}
	}
}






/*function makeGrid(){
	let grid = document.getElementById("pixelCanvas");

	for (var i = 1; i < 21; i++) {
		let lat = document.createElement("tr");
		lat.id = "row" + i;

		grid.appendchild(lat);
		let latW = document.getElementById("row" + i);

	for (var cell = 0; cell < 21; cell++) {
		let theCell = document.createElement("td")

		latW.appendchil(theCell);
	}


	}

}*/

/* <=400te ++ws and columns
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


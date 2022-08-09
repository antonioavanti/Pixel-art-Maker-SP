// Select color input

var height, width, color;

// Select size input

//When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function (create) {
	create.preventDefault();
	height = $('#inputHeight').val();
	width = $('#inputWidth').val();
	pixelGrid(height, width);
	/*console.log("height: "+height+" and width: "+width);*/
});

function pixelGrid (lat, long) {
	$('tr').remove();

	for (var a = 1; a <= lat; a++) {
		$('#pixelCanvas').append('<tr id=grid' + a + '></tr>');

		for (var b = 1; b <= long; b++) {
			$('#grid'+ a).append('<td></td>');
		}
	}

	$('td').click(function paint(){
		color = $('#colorPicker').val();
		if ($(this).attr('style')) {
			$(this).removeAttr('style')
		}else{
			$(this).attr('style', 'background-color:' + color);
		}
	})
}



/*let gridSize = document.getElementById('sizePicker');
let grid = document.getElementById('pixelCanvas');
let colorSelect = document.getElementById('colorPicker');


gridSize.addEventListener('click', (e) =>{
	e.preventDefault();
long = document.getElementById('inputHeight')
lat = document.getElementById('inputWidth')

	createGrid(long, lat);

});

//When size is submitted by the user, call makeGrid()

function createGrid(long, lat) {

for (var i = 0 ; i <= long; i++) {
	let row = grid.insertRow(i);

	for (var j = 0; j <= lat; j++) {
		let cell = row.insertCell(j);


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


function makeGrid(rows, columns) {
	event.preventDefault();
	const table = document.getElementById("pixelCanvas");
	var rows = document.getElementById("inputHeight").value;
	var cells = document.getElementById("inputWidth").value;
	table.innerHTML = "";
	for (let i = 0; i < rows; i++) {
		var row = document.createElement('tr');
		for (let j = 0; j < cells; j++) {
			var column = document.createElement('td');
			row.appendChild(column);
		}
		table.appendChild(row);
	}
	table.addEventListener('click', function(event) {
		event.target.style.backgroundColor = document.getElementById('colorPicker').value;
	});

}
// should find the submission button
function formSubmission() {
	var sizePicker = document.getElementById('sizePicker');
	document.getElementById('sizePicker').addEventListener('submit', function (event) {
		makeGrid();
		sizePicker.submit(function (event) {
		})
	});
}

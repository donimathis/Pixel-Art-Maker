
function makeGrid(height, width) {

  var output = "";

  for (var h = 0; h < height; h++) {

    output += "<tr>";

    for (var w = 0; w < width; w++) {
      output += "<td></td>";
    }

    output += "</tr>";

  }

  return output;

}

function changeColor(cell) {

  // Select color input
  var color = $('#colorPicker').val();

  if (cell.attr('style')) {
    cell.removeAttr('style');

  } else {
    cell.attr('style', 'background-color:' + color);

  }
}


$('form').on('submit', function(e) {
  e.preventDefault();

  var gridHeight = $('#inputHeight').val();
  var gridWidth = $('#inputWeight').val();


  $('table').html(makeGrid(gridHeight, gridWidth));
});


$('#pixelCanvas').on('click', 'td', function() {

  changeColor($( this ));

});

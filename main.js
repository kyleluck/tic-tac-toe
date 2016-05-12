var turn = true;
$('.btn').click(function() {
  var currentValue = $(this).text();
  if (currentValue === '' && turn) {
    $(this).text('O');
    turn = false;
  }
  else if (currentValue === '' && turn === false) {
    $(this).text('X');
    turn = true;
  }
});

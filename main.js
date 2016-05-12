var counter = 1;
$('.btn').click(function() {
  if (counter % 2 == 1) {
    $(this).text('X');
  }
  else {
    $(this).text('O');
  }
  counter++;
});

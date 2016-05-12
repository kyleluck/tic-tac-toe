var turn = true;
$('.btn').click(function() {
  var currentValue = $(this).text();
  if (currentValue === '' && turn) {
    $(this).text('O');
    turn = false;
    displayThinking();
    setTimeout(hideThinking, 2500);
    setTimeout(xTurn, 3000);
  }
});

function displayThinking () {
  $('.alert').show();
}
function hideThinking () {
  $('.alert').hide();
}
function xTurn () {
  //get all buttons and look for blanks
  $( ":button" ).each(function(i, obj) {
    if ($(this).text() === '') {
      $(this).text('X');
      return false;
    }
  });
  turn = true;
}

var turn = true;
$('.btn').click(function() {
  var currentValue = $(this).text();
  if (currentValue === '' && turn) {
    $(this).text('O');
    turn = false;
    displayThinking();
    setTimeout(hideThinking, 5000);
  }
  else if (currentValue === '' && turn === false) {
    $(this).text('X');
    turn = true;
  }
});

function displayThinking () {
  $('.alert').show();
}
function hideThinking () {
  $('.alert').hide();
}

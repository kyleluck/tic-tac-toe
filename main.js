var turn = true;
var boxes = {
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9"
};

$('.btn').click(function() {
  var currentValue = $(this).text();
  if (currentValue === '' && turn) {
    var thisName = $(this).attr("name");
    boxes[thisName] = "O";
    $(this).text('O');
    turn = false;
    if (checkWin()) {
      displayThinking();
      setTimeout(hideThinking, 2500);
      setTimeout(xTurn, 3000);
    }
  }
});

function displayThinking() {
  $('.thinkingmessage').show();
}

function hideThinking() {
  $('.thinkingmessage').hide();
}

function xTurn() {
  //get all buttons and look for blanks
  $( ":button" ).each(function(i, obj) {
    if ($(this).text() === '') {
      var thisName = $(this).attr("name");
      boxes[thisName] = "X";
      $(this).text('X');
      return false;
    }
  });
  turn = true;
  checkWin()
}

function checkWin() {
  //check row wins
  if ((boxes[1] === boxes[2] && boxes[1] === boxes[3]) || (boxes[4] === boxes[5] && boxes[4] === boxes[6]) || (boxes[7] === boxes[8] && boxes[7] === boxes[9])) {
    if (boxes[1] === "O") {
      showWinMessage("O");
    }
    else {
      showWinMessage("X");
    }
  }
  //check column wins
  else if ((boxes[1] === boxes[4] && boxes[1] === boxes[7]) || (boxes[2] === boxes[5] && boxes[2] === boxes[8]) || (boxes[3] === boxes[6] && boxes[3] === boxes[9])) {
    if (boxes[1] === "O") {
      showWinMessage("O");
    }
    else {
      showWinMessage("X");
    }
  }
  //check diagnol wins
  else if ((boxes[1] === boxes[5] && boxes[1] === boxes[9]) || (boxes[7] === boxes[5] && boxes[7] === boxes[3])) {
    if (boxes[1] === "O") {
      showWinMessage("O");
    }
    else {
      showWinMessage("X");
    }
  }
  else {
    return true;
  }
}

function showWinMessage (winner) {
  $('.winmessage').text(winner + " IS THE WINNER!!!").show();
}

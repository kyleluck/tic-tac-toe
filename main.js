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
      setTimeout(hideThinking, 1500);
      setTimeout(xTurn, 1700);
    }
    else {
      showPlayAgain();
    }
  }
});

$('.playagainlink').click(function() {
    location.reload();
});

function displayThinking() {
  $('.thinkingmessage').show();
}

function hideThinking() {
  $('.thinkingmessage').hide();
}

function xTurn() {
  if (boxes[1] === "O" && boxes[2] == "O" && boxes[3] !== "X") {
    boxes[3] = "X";
    $( 'button[name=3]' ).text('X');
  }
  else if (boxes[1] === "O" && boxes[4] === "O" && boxes[7] !== "X") {
    boxes[7] = "X";
    $( 'button[name=7]' ).text('X');
  }
  else if (boxes[2] === "O" && boxes[3] === "O" && boxes[1] !== "X") {
    boxes[1] = "X";
    $('button[name=1]').text('X');
  }
  else if (boxes[2] === "O" && boxes[5] === "O" & boxes[8] !== "X") {
    boxes[8] = "X";
    $('button[name=8]').text('X');
  }
  else if (boxes[5] === "O" && boxes[8] === "O" & boxes[2] !== "X") {
    boxes[2] = "X";
    $('button[name=2]').text('X');
  }
  else if (boxes[3] === "O" && boxes[6] === "O" & boxes[9] !== "X") {
    boxes[9] = "X";
    $('button[name=9]').text('X');
  }
  else if (boxes[6] === "O" && boxes[9] === "O" & boxes[3] !== "X") {
    boxes[3] = "X";
    $('button[name=3]').text('X');
  }
  else if (boxes[1] === "O" && boxes[5] === "O" & boxes[9] !== "X") {
    boxes[9] = "X";
    $('button[name=9]').text('X');
  }
  else if (boxes[7] === "O" && boxes[3] === "O" & boxes[5] !== "X") {
    boxes[5] = "X";
    $('button[name=5]').text('X');
  }
  else if (boxes[4] === "O" && boxes[5] === "O" & boxes[6] !== "X") {
    boxes[6] = "X";
    $('button[name=6]').text('X');
  }
  else {
    var go = true;
    while (go) {
      var random = Math.floor(Math.random() * 9) + 1;
      if (boxes[random] !== "O" && boxes[random] !== "X") {
        boxes[random] = 'X';
        $( 'button[name="' + random + '"]' ).text('X');
        go = false;
      }
    }
  }
  turn = true;
  checkWin()
}

function checkWin() {
  //check row wins
  if ((boxes[1] === boxes[2] && boxes[1] === boxes[3]) || (boxes[4] === boxes[5] && boxes[4] === boxes[6]) || (boxes[7] === boxes[8] && boxes[7] === boxes[9])) {
    if (turn) {
      showWinMessage("X");
    }
    else {
      showWinMessage("O");
    }
  }
  //check column wins
  else if ((boxes[1] === boxes[4] && boxes[1] === boxes[7]) || (boxes[2] === boxes[5] && boxes[2] === boxes[8]) || (boxes[3] === boxes[6] && boxes[3] === boxes[9])) {
    if (turn) {
      showWinMessage("X");
    }
    else {
      showWinMessage("O");
    }
  }
  //check diagonal wins
  else if ((boxes[1] === boxes[5] && boxes[1] === boxes[9]) || (boxes[7] === boxes[5] && boxes[7] === boxes[3])) {
    if (turn) {
      showWinMessage("X");
    }
    else {
      showWinMessage("O");
    }
  }
  else {
    //check to see if all boxes filled, but no winner
    var allDone = true;
    for (var key in boxes) {
      if (boxes[key] !== "X" && boxes[key] !== "O") {
        allDone = false;
      }
    }
    if (allDone) {
      showDrawMessage();
      return false;
    }
    else {
      return true;
    }
  }
}

function showWinMessage(winner) {
  $('.btn').addClass("easteregg");
  $('.winmessage').text(winner + " IS THE WINNER!!!").show();
  showPlayAgain();
}

function showPlayAgain() {
  $( '.playagain' ).show();
}

function showDrawMessage() {
  $( '.drawmessage' ).show();
}

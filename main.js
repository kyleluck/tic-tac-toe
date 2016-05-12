var counterObj = {
  "button1": 1,
  "button2": 1,
  "button3": 1,
  "button4": 1,
  "button5": 1,
  "button6": 1,
  "button7": 1,
  "button8": 1,
  "button9": 1
};
$('.btn').click(function() {
  var name = $(this).attr("name");
  var currentValue = $(this).text();
  if (currentValue === '') {
    if (counterObj[name] % 3 === 0) {
      $(this).text('');
    }
    else if (counterObj[name] % 2 === 1) {
      $(this).text('O');
    }
    else if (counterObj[name] % 2 === 0){
      $(this).text('X');
    }
    counterObj[name]++;
  }
});

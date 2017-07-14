
var numberToArray = function(number) {
  var countToNumber = [];
  for (var i = 0; i < number; i++) {
    countToNumber[i] = (i + 1);
  }
  return countToNumber;
}

var pingPong = function(number) {
  var countThis = numberToArray(number);

  for (var i = 0; i < countThis.length; i++) {
    if ((countThis[i] % 3) === 0 ) {
      countThis[i] = "ping";
    }
  }
  return countThis;
}

$(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();

    var inputNumber = parseInt($("#pingPongNumber").val());

    $("#output ul").append("<li>" + pingPong(inputNumber) + "</li>");
  });
});

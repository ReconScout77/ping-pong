
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
    if ((countThis[i] % 15) === 0) {
      countThis[i] = "ping-pong";
    } else if ((countThis[i] % 5) === 0) {
      countThis[i] = "pong";
    } else if ((countThis[i] % 3) === 0 ) {
      countThis[i] = "ping";
    }
  }
  return countThis;
}

$(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    $("#output ul").text("");

    var inputNumber = parseInt($("#pingPongNumber").val());
    var countedNumbers = pingPong(inputNumber);
    var ordering = $("input:radio[name=order]:checked").val();

    if (ordering === "reverse") {
      countedNumbers.forEach(function(countedNumber) {
        $("#output ul").prepend("<li>" + countedNumber + "</li>");
      });
    } else {
      countedNumbers.forEach(function(countedNumber) {
        $("#output ul").append("<li>" + countedNumber + "</li>");
      });
    }
  });
});

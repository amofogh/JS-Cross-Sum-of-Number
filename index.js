$(document).ready(function () {
  ClearInput();

  // cmt: eventlistener for use enter in inputs
  $("#Num").on("keydown", function (e) {
    if (e.key == "Enter") {
      IntChecker();
    }
  });

  // Int Checker
  function IntChecker() {
    let Num = $("#Num").val();

    if (isNaN(Num)) {
      alert("Not A Number");
      SumofNumCalc(false);
    } else if (Num == "") {
      alert("Fill the Fields !");
      SumofNumCalc(false);
    } else {
      SumofNumCalc(true);
    }
  }

  function SumofNumCalc(Status) {
    if (Status == true) {
      let Number = $("#Num").val();

      let Sum= [];
      while (Number > 0) {
        Sum.push(Number % 10);

        Number = Math.floor(Number / 10);
      }

      // calc all numbers of array
      let reducer = (accumulator, currentValue) => accumulator + currentValue;

      $(".demo").text(Sum.reduce(reducer));
      
      Sum = Sum.reverse()
      $(".Show").text(Sum.join(' + '));

      ClearInput();
    }
  }

  function ClearInput() {
    $("#Num").val("");
  }

  $(".btn").click(IntChecker);
});

function calculator() {
  let screen = document.getElementById("calculator-display");
  let digits = document.querySelectorAll(".btn");
  digits.forEach(function (digit) {
    digit.addEventListener("click", function (event) {
      const value = event.target.innerText;
      console.log(value);
      switch (value) {
        case "ac":
          screen.innerText = "";
          break;

        case "=":
          screen.innerText = eval(screen.innerText);
          break;
        case "back":
          screen.innerText = screen.innerText.slice(0, -1);
          break;

        default:
          screen.innerText += value;
          break;
      }
    });
  });
}
calculator();

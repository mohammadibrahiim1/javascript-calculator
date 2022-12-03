function calculator() {
  let screen = document.getElementById("display");
  let digits = document.querySelectorAll(".btn");
  //   let backButton = document.querySelector("back-btn");
  //   let clearButton = document.querySelector("clear-btn");
  //   let equalButton = document.querySelector("btn-equal");
  digits.forEach(function (digit) {
    digit.addEventListener("click", function (event) {
 
      const value = event.target.innerText;
      console.log(value);
    //   const screen.innerText = screen.innerText;
    
      switch (value) {
       
        case "Ac":
            screen.innerText = "";
          break;

        case "back":
          if (screen.innerText) {
            screen.innerText = screen.innerText.slice(0, -1);
          }
          break;
          case '=':
            screen.innerText = eval(screen.innerText)
            break;

        default:
            screen.innerText += value;
      }
    });
  });
}
calculator();

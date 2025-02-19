/*let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
*/

document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector("input");
    const button = document.querySelector("button");

    button.addEventListener("click", function () {
        const num = parseInt(input.value);
        if (isNaN(num)) {
            alert("Por favor, ingresa un número válido.");
            return;
        }

        let result = "";
        for (let i = 1; i <= num; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                result += "FizzBuzz ";
            } else if (i % 3 === 0) {
                result += "Fizz ";
            } else if (i % 5 === 0) {
                result += "Buzz ";
            } else {
                result += i + " ";
            }
        }

        // Mostrar el resultado en la página
        let outputDiv = document.querySelector(".output");
        if (!outputDiv) {
            outputDiv = document.createElement("div");
            outputDiv.classList.add("output");
            document.body.appendChild(outputDiv);
        }
        outputDiv.innerText = result;
    });
});

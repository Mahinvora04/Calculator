const buttons = document.querySelectorAll(".btn");
const inputDisplay = document.querySelector(".input");
const resultDisplay = document.querySelector(".result");
let currentInput = "";
let result = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent.trim();

    if (value === "C") {
      // Clear input
      currentInput = "";
      result = 0;
    } else if (value === "Del") {
      // Remove last character
      currentInput = currentInput.slice(0, -1);
      try {
        // Replace 'x' with '*' and evaluate the expression
        const formattedInput = currentInput.replace(/x/g, "*");
        result = eval(formattedInput);
      } catch (error) {
        result = "Error";
      }
    } else if (value === "=") {
      try {
        // Replace 'x' with '*' and evaluate the expression
        const formattedInput = currentInput.replace(/x/g, "*");
        result = eval(formattedInput);
      } catch (error) {
        result = "Error";
      }
    } else if (value === "+/-") {
      if (currentInput) {
        currentInput = currentInput.startsWith("-")
          ? currentInput.slice(1)
          : `-${currentInput}`;
      }
    } else if (value === "%") {
      // Percentage calculation
      if (currentInput) {
        try {
          // Convert the current input to percentage
          currentInput = (parseFloat(currentInput) / 100).toString();
        } catch (error) {
          currentInput = "Error";
        }
      }
    } else {
      // For other buttons, just append their value to the input
      currentInput += value;
    }

    // Update the display
    inputDisplay.textContent = currentInput || "0";
    resultDisplay.textContent = result || 0;
  });
});

const buttons = document.querySelectorAll(".btn");
const inputDisplay = document.querySelector(".input");
const resultDisplay = document.querySelector(".result");
let currentInput = "";
let result = 0;
let isResultDisplayed = false; // Flag to check if result is displayed

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent.trim();

    if (value === "C") {
      // Clear input
      currentInput = "";
      result = 0;
      isResultDisplayed = false;
    } else if (value === "Del") {
      // Remove last character
      currentInput = currentInput.slice(0, -1);
    } else if (value === "=") {
      try {
        result = eval(currentInput.replace("x", "*"));
        isResultDisplayed = true; // Set flag to true after calculation
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
        result = eval(currentInput.replace("x", "*")) / 100;
        isResultDisplayed = true; // Set flag to true after calculation
      }
    } else {
      // Reset input if result is displayed and a number is clicked
      if (isResultDisplayed && !isNaN(value)) {
        result=0;
        currentInput = ""; // Reset input for new calculation
        isResultDisplayed = false;
      }
      currentInput += value;
    }

    // Update the display
    inputDisplay.textContent = currentInput || "0";
    resultDisplay.textContent = result || 0;
  });
});

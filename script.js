const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let first = "";
let second = "";
let operator = "";
let isSecond = false;

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const value = btn.textContent;

        // CLEAR
        if (value === "C") {
            first = "";
            second = "";
            operator = "";
            isSecond = false;
            display.textContent = "0";
            return;
        }

        // EQUALS
        if (value === "=") {
            if (first === "" || second === "") return;

            let a = parseFloat(first);
            let b = parseFloat(second);
            let result;

            switch (operator) {
                case "+": result = a + b; break;
                case "-": result = a - b; break;
                case "×": result = a * b; break;
                case "÷": result = b === 0 ? "Error" : a / b; break;
            }

            display.textContent = result;
            first = result.toString();
            second = "";
            operator = "";
            isSecond = false;
            return;
        }

        // OPERATOR
        if (["+", "-", "×", "÷"].includes(value)) {
            if (first === "") return;
            operator = value;
            isSecond = true;
            display.textContent = first + " " + operator;
            return;
        }

        // NUMBER or DECIMAL
        if (!isSecond) {
            if (value === "." && first.includes(".")) return;
            first += value;
            display.textContent = first;
        } else {
            if (value === "." && second.includes(".")) return;
            second += value;
            display.textContent = first + " " + operator + " " + second;
        }
    });
});

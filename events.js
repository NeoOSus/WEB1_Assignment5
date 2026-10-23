// Task 5
let hoverBox = document.getElementById("hover-box");

hoverBox.addEventListener("mouseover", function () {
    hoverBox.style.backgroundColor = "lightgreen";
});

hoverBox.addEventListener("mouseout", function () {
    hoverBox.style.backgroundColor = "#eee";
});

// Task 6
let typingInput = document.getElementById("typing-input");

typingInput.addEventListener("keyup", function () {
    document.getElementById("typing-output").textContent = typingInput.value;
});

// Task 7
function calculate(operation) {
    let firstInput = document.getElementById("first-number");
    let secondInput = document.getElementById("second-number");
    let result = document.getElementById("result");

    if (firstInput.value === "" || secondInput.value === "") {
        result.textContent = "Please enter both numbers.";
        return;
    }

    let a = Number(firstInput.value);
    let b = Number(secondInput.value);
    let answer;

    if (operation === "+") {
        answer = a + b;
    } else if (operation === "-") {
        answer = a - b;
    } else if (operation === "*") {
        answer = a * b;
    } else if (operation === "/") {
        if (b === 0) {
            result.textContent = "Cannot divide by zero.";
            return;
        }
        answer = a / b;
    }

    result.textContent = "Result: " + answer;
}

document.getElementById("add").addEventListener("click", function () {
    calculate("+");
});
document.getElementById("subtract").addEventListener("click", function () {
    calculate("-");
});
document.getElementById("multiply").addEventListener("click", function () {
    calculate("*");
});
document.getElementById("divide").addEventListener("click", function () {
    calculate("/");
});

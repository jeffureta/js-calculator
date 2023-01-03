const mainContainer = document.getElementById("main-container");

const screenContainer = document.getElementById("screen-container");

const buttonsContainer = document.getElementById("buttons-container");

const clearBtn = document.getElementById("clear-button");

const btns = [
    "7", "8", "9", "+",
    "4", "5", "6", "-",
    "1", "2", "3", "*",
    "0", ".", "/", "=",
];


for (let i = 0; i < btns.length; i++) {

    buttonsContainer.innerHTML += `<button>${btns[i]}</button>`

};

// This variable declaration was put here to get the clear button.
const buttons = document.querySelectorAll("button");

let calculation = [];

let accumulativeCalculation;

function calculate(button) {

    const value = button.textContent;

    // console.log(value); 

    if (value === "CLEAR") {

        calculation = [];

        screenContainer.textContent = ".";

        console.log(screenContainer.textContent, calculation);

    } else if (value === "=") {

        screenContainer.textContent = eval(accumulativeCalculation);

    } else {


        calculation.push(value);

        accumulativeCalculation = calculation.join("");

        screenContainer.textContent = accumulativeCalculation;

    }


    // console.log(accumulativeCalculation);
}

buttons.forEach((button) => {
    button.addEventListener("click", () => { calculate(button) })
})
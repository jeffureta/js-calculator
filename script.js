const mainContainer = document.getElementById("main-container");

const buttonsContainer = document.getElementById("buttons-container");

const btns = [
    "7","8","9","+",
    "4","5","6","-",
    "1","2","3","*",
    "0",".","/","=",
];


for (let i = 0; i < btns.length; i++) {
    
    console.log(buttonsContainer.innerHTML += `<button>${btns[i]}</button>`);
    
};

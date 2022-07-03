let runningTotal = 0;
let buffer = '0';
let lastOperator = null;

const screen = document.querySelector('.screen');
let button = document.querySelector('.keys');


// get the value in the button, then
// pass it to the buttonClick() function
button.addEventListener("click", function(event) {
    buttonClick(event.target.innerText);
});


// finds out if the button clicked is a number or symbol and
// lead to either handleAsOperator or handleAsNumber function.

function buttonClick(value){
    // value will be a string, hence we convert it
    // to a number first using parseFloat
    if (isNaN(parseFloat(value))) {
        handleAsOperator(value);
    }
    else {
        handleAsNumber(value)
    }

    renderOutput()
};



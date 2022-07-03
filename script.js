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

// if nothing has been clicked,
//    change the 0 to what is clicked

// if there is a value in the buffer and the user 
//    wants to add to it, increment the buffer with value

function handleAsNumber(value){
    if (buffer == '0') {
        buffer = value
    }
    else {
        buffer += value
    }
};


function handleAsOperator(value){
    switch (value) {
        // reset screen value on click
        case 'AC':
            runningTotal = 0;
            buffer = '0';
            lastOperator = null;
            break;

        // 
        case '←':
            if (buffer.length === 1) {
                buffer = '0'
            }
            else {
                buffer = buffer.substring(0, buffer.length - 1)
            }
            break;

        case '=':
            break;
        
        // case '.':
        //     if (buffer === 0) {
        //         buffer = parseFloat(0.)
        //     }
        //     break;
        
        case '%':
        case '+':
        case '-':
        case '𝗑':
        case '÷':
            handleMath(value);
            break;
    };
};


// Show the output in our screen

function renderOutput(){
    screen.innerText = buffer
};
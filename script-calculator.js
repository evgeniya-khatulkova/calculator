const add = "addition";
const sub = "substraction";
const mult = "multiplication";
const div = "division";

var windowView = document.getElementById("window");
// var buttons = document.getElementById("1");
const buttons = document.querySelectorAll('button');

//to populate number on the display after pressing the button
for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (e) {
        windowView.textContent += e.target.id;
    });
}

// buttons.addEventListener('click', function (e) {
//     windowView.textContent += buttons.textContent;
// });

//simple functions to count
function addition(total, current) {
    return total + current;
}

function substract(total,current) {
    return total - current;
}

function multiple(total, current) {
    return total * current;
}

function division(total, current) {
    return total / current;
}

//one function to operate 
function operate(total, operator, current) {
    if (operator === "addition") {
        let result = addition (total,current);
        return result;
    } 
    else if (operator === "substraction") {
        let result = substract (total,current);
        return result;
    }
    else if (operator === "multiplication") {
        let result = multiple(total,current);
        return result;
    }
    else if(operator === "division") {
        let result = division(total,current);
        return result;
    }
}
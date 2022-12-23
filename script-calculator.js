const add = "addition";
const sub = "substraction";
const mult = "multiplication";
const div = "division";
const numberInUse = {
    first: '',
    operator: '',
    second: '',
};


var buttonAdd = document.getElementById("add");
var windowView = document.getElementById("window");
const buttonsNum = document.querySelectorAll('.numbers');

//to populate number on the display after pressing the button
for (i = 0; i < buttonsNum.length; i++) {
    buttonsNum[i].addEventListener('click', function (e) {
        windowView.textContent += e.target.id;
        var toInt = [];
        toInt = e.target.id;
        numberInUse.first += toInt;
    });
}

const data = new Array;

buttonAdd.addEventListener('click', function(e) {
    numberInUse.operator = add;
    var saveMe= parseInt(numberInUse.first);
    data.push(saveMe);
    numberInUse.first = '';
    const result = data.reduce(addition);
    console.log(result);
})

// const resultCount = data.reduce(addition);
// console.log(numberInUse.first);
console.log(data);

// const result = data.reduce(addition);

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
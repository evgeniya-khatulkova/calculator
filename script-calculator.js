const add = "addition";
const sub = "substraction";
const mult = "multiplication";
const divi = "division";
const numberInUse = {
    first: '',
    operator: '',
};
const operator = new Array;

var buttonAdd = document.getElementById("add");
var buttonSub = document.getElementById("sub");
var buttonMult = document.getElementById("mult");
var buttonDivi = document.getElementById("divi");

var buttonEqual = document.getElementById("equal");

var windowView = document.getElementById("window");
const buttonsNum = document.querySelectorAll('.numbers');
const buttonsOper = [...document.querySelectorAll('.operator')];

const hasIt = (element) => element.classList.contains("pressed");
console.log(buttonsOper.some(hasIt));

//to populate number on the display after pressing the button
for (i = 0; i < buttonsNum.length; i++) {
    buttonsNum[i].addEventListener('click', function (e) {
        if(buttonsOper.some(hasIt)) {
            windowView.textContent = '';
            buttonsOper.forEach(buttonO => {buttonO.classList.remove("pressed")});
        }
        // if(buttonSub.classList.contains("pressed")) {
        //     windowView.textContent = '';
        //     buttonSub.classList.remove("pressed");
        // }

        windowView.textContent += e.target.id;
        var toInt = [];
        toInt = e.target.id;
        numberInUse.first += toInt;
    });
}

const data = new Array;
console.log(data);

// for addition +
buttonAdd.addEventListener('click', function(e) {
    numberInUse.operator = add;
    var saveMe= parseInt(numberInUse.first);
    data.push(saveMe);
    numberInUse.first = '';
    const result = data.reduce(addition);
    windowView.textContent = result;
    buttonAdd.classList.add("pressed");
    console.log(result);
})

// for substraction -
buttonSub.addEventListener('click', function(e) {
    numberInUse.operator = sub;
    var saveMe= parseInt(numberInUse.first);
    data.push(saveMe);
    numberInUse.first = '';
    const result = data.reduce(substract);
    windowView.textContent = result;
    buttonSub.classList.add("pressed");
    console.log(result);
})

//for multiplication *
buttonMult.addEventListener('click', function(e) {
    numberInUse.operator = mult;
    var saveMe= parseInt(numberInUse.first);
    data.push(saveMe);
    numberInUse.first = '';
    const result = data.reduce(multiple);
    windowView.textContent = result;
    buttonMult.classList.add("pressed");
    console.log(result);
})

//for division /
buttonDivi.addEventListener('click', function(e) {
    numberInUse.operator = divi;
    var saveMe= parseInt(numberInUse.first);
    data.push(saveMe);
    numberInUse.first = '';
    const result = data.reduce(division);
    windowView.textContent = result;
    buttonDivi.classList.add("pressed");
    console.log(result);
})

//for equal
buttonEqual.addEventListener('click', function(e) {
    const result = data.reduce(operate(numberInUse));
    windowView.textContent = result;
    console.log(result);
})

console.log(data);


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
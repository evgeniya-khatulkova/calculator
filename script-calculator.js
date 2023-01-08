const add = "addition";
const sub = "substraction";
const mult = "multiplication";
const divi = "division";
const numberInUse = {
    first: '',
    operator: '',
    total: 0,
    total2: 1,
    current:'',
};
var AllButExAc = document.querySelectorAll('.numbers, .operator ,#equal');
var buttonAdd = document.getElementById("add");
var buttonSub = document.getElementById("sub");
var buttonMult = document.getElementById("mult");
var buttonDivi = document.getElementById("divi");

var buttonEqual = document.getElementById("equal");
var buttonAc = document.getElementById("reset");

var windowView = document.getElementById("window");
const buttonsNum = document.querySelectorAll('.numbers');
const buttonsOper = [...document.querySelectorAll('.operator')];

const hasIt = (element) => element.classList.contains("pressed");

//to populate number on the display after pressing the button
for (i = 0; i < buttonsNum.length; i++) {
    buttonsNum[i].addEventListener('click', function (e) {
        if(buttonsOper.some(hasIt)) {
            windowView.textContent = '';
            buttonsOper.forEach(buttonO => {buttonO.classList.remove("pressed")});
        }
        windowView.textContent += e.target.id;
        var toInt = [];
        toInt = e.target.id;
        numberInUse.first += toInt;
    });
}

// for addition +
buttonAdd.addEventListener('click', function(e) {
    // numberInUse.operator = add;
    var saveMe= parseInt(numberInUse.first);
    numberInUse.current = saveMe;
    numberInUse.first = '';
    if(numberInUse.operator === '')
    {
        var result = addition(numberInUse.total, numberInUse.current); 
        numberInUse.total = result;
        numberInUse.operator = add;
        buttonAdd.classList.add("pressed");
        return;
    }
    var result = operate(numberInUse.total, numberInUse.operator, numberInUse.current);
    // var result = addition(numberInUse.total, numberInUse.current);
    windowView.textContent = result;
    if(windowView.textContent.length > 12){
        windowView.textContent = windowView.textContent.slice(0,12); 
    }
    numberInUse.total = result;
    numberInUse.operator = add;
    buttonAdd.classList.add("pressed");
    console.log(result);
})

// for substraction -
buttonSub.addEventListener('click', function(e) {
    if(numberInUse.current === '') {
      numberInUse.operator = sub;
      var saveMe= parseInt(numberInUse.first);
      numberInUse.current = saveMe;
      numberInUse.total = saveMe;
      numberInUse.first = '';
      buttonSub.classList.add("pressed");
    return
    }
    // numberInUse.operator = sub;
    var saveMe= parseInt(numberInUse.first);
    numberInUse.current = saveMe;
    numberInUse.first = '';
    if(numberInUse.operator === '')
    {
        var result = substract(numberInUse.total, numberInUse.current); 
        numberInUse.total = result;
        numberInUse.operator = sub;
        buttonAdd.classList.add("pressed");
        return;
    }
    var result = operate(numberInUse.total, numberInUse.operator, numberInUse.current);
    // var result = substract(numberInUse.total, numberInUse.current);
    windowView.textContent = result;
    if(windowView.textContent.length > 12){
        windowView.textContent = windowView.textContent.slice(0,12); 
    }
    numberInUse.total = result;
    numberInUse.operator = sub;
    buttonSub.classList.add("pressed");
    console.log(result);
})

//for multiplication *
buttonMult.addEventListener('click', function(e) {
    // numberInUse.operator = mult;
    var saveMe= parseInt(numberInUse.first);
    numberInUse.current = saveMe;
    numberInUse.first = '';
    if(numberInUse.operator === '')
    { 
        var result = multiple(numberInUse.current, numberInUse.total2);
        numberInUse.total = result;
        numberInUse.operator = mult;
        buttonMult.classList.add("pressed");
        return;
    }
    var result = operate(numberInUse.total, numberInUse.operator, numberInUse.current);
    // var result = multiple(numberInUse.current, numberInUse.total2);
    windowView.textContent = result;
    if(windowView.textContent.length > 12){
        windowView.textContent = windowView.textContent.slice(0,12); 
    }
    numberInUse.total = result;
    numberInUse.total2 = result;
    numberInUse.operator = mult;
    buttonMult.classList.add("pressed");
    console.log(result);
})

//for division /
buttonDivi.addEventListener('click', function(e) {
    // numberInUse.operator = divi;
    var saveMe= parseInt(numberInUse.first);
    numberInUse.current = saveMe;
    numberInUse.first = '';
    if(numberInUse.operator === "division" && saveMe === 0) {
        windowView.textContent = "Don't do it, refresh please";
           for(var i = 0; i < AllButExAc.length; i++) {
            AllButExAc[i].disabled = true;
    }
        return
    }
    if(numberInUse.operator === '')
    { 
        var result = division(numberInUse.current, numberInUse.total2);
        numberInUse.total = result;
        numberInUse.operator = divi;
        buttonDivi.classList.add("pressed");
        return;
    }
     var result = operate(numberInUse.total, numberInUse.operator, numberInUse.current);
    // var result = division(numberInUse.current, numberInUse.total2);
    windowView.textContent = result;
    if(windowView.textContent.length > 12){
        windowView.textContent = windowView.textContent.slice(0,12); 
    }
    numberInUse.total = result;
    numberInUse.total2 = result;
    numberInUse.operator = divi;
    buttonDivi.classList.add("pressed");
    console.log(result);
})

//for equal =
buttonEqual.addEventListener('click', function(e) {
    if(numberInUse.operator === "division" && numberInUse.first === '0') {
        windowView.textContent = "You are crushing it, refresh please";
        for(var i = 0; i < AllButExAc.length; i++) {
            AllButExAc[i].disabled = true;
    }
        return
    }
    var numN = operate(parseInt(numberInUse.total), numberInUse.operator, parseInt(numberInUse.first));
    windowView.textContent = numN;
    if(windowView.textContent.length > 12){
        windowView.textContent = windowView.textContent.slice(0,12); 
    }
    // numberInUse.total = numN;
    numberInUse.first = numN;
    numberInUse.total = 0;
    numberInUse.total2 = 1;
    numberInUse.current = '';
})

buttonAc.addEventListener('click', function(e) {
    windowView.textContent = '';
    data = [];
    numberInUse.current = '';
    numberInUse.operator = '';
    numberInUse.first = '';
    numberInUse.total = 0;
    numberInUse.total2 = 1;
    for(var i = 0; i < AllButExAc.length; i++) {
        AllButExAc[i].disabled = false;
}
});

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
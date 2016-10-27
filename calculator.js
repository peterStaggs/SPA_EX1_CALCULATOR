var plusBTN = document.getElementById('plus'); 
var minusBTN = document.getElementById('minus');
var multBTN = document.getElementById('multiply');
var divBTN = document.getElementById('divide');
var output = document.getElementById('outputf');

//The single function that checks for input, then takes the 2 input numbers from the DOM and an operator function
function maths (num1, num2, operator) {
	if (document.getElementById('firstNum').value === '' || document.getElementById('secondNum').value === '') {
		alert("Two inputs required");
} else {
	return operator(num1, num2);
	}
}

//The operator functions defined--addition requires a parseInt because js assumes it should concatenate rather than add the two numbers
function add(num1, num2) {
	return parseInt(document.getElementById('firstNum').value) + parseInt(document.getElementById('secondNum').value); 
}

function subtract(num1, num2) {
	return document.getElementById('firstNum').value - document.getElementById('secondNum').value; 
}

function multiply(num1, num2) {
	return document.getElementById('firstNum').value * document.getElementById('secondNum').value; 
}

function divide(num1, num2) {
	return document.getElementById('firstNum').value / document.getElementById('secondNum').value; 
}

//The event listeners attached to each button, with the single maths function telling them what to output when clicked
plusBTN.addEventListener('click', function()
	{output.innerHTML = maths(document.getElementById('firstNum').value, document.getElementById('secondNum'), add)});

minusBTN.addEventListener('click', function()
	{output.innerHTML = maths(document.getElementById('firstNum').value, document.getElementById('secondNum'), subtract)});

multBTN.addEventListener('click', function()
	{output.innerHTML = maths(document.getElementById('firstNum').value, document.getElementById('secondNum'), multiply)});

divBTN.addEventListener('click', function()
	{output.innerHTML = maths(document.getElementById('firstNum').value, document.getElementById('secondNum'), divide)});




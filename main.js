document.getElementById('button').addEventListener('click', getNumbers)


function getNumbers(){
let num1 = document.getElementById('number1').value
let num2 = document.getElementById('number2').value
let theMath = document.getElementById('calculation').innerHTML = parseInt(num1 * num2)
console.log(theMath)
return theMath
}


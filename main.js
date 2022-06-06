document.getElementById('add').addEventListener('click', add)
document.getElementById('sub').addEventListener('click', sub)
document.getElementById('mult').addEventListener('click', mult)
document.getElementById('divide').addEventListener('click', divide)


function add(){
    let num1 = document.getElementById('number1').value
    let num2 = document.getElementById('number2').value
    
    document.getElementById('calculation').innerText = parseInt(Number(num1) + Number(num2))
}
function sub(){
    let num1 = document.getElementById('number1').value
    let num2 = document.getElementById('number2').value
    document.getElementById('calculation').innerText = parseInt(num1 - num2)
}

function mult(){
    let num1 = document.getElementById('number1').value
    let num2 = document.getElementById('number2').value
    document.getElementById('calculation').innerText = parseInt(num1 * num2)
}

function divide(){
    let num1 = document.getElementById('number1').value
    let num2 = document.getElementById('number2').value
    document.getElementById('calculation').innerText = parseInt(num1 / num2)
}
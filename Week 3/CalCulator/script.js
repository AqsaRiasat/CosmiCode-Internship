function getValues() {
    return [
        parseFloat(document.getElementById('num1').value),
        parseFloat(document.getElementById('num2').value)
    ];
}

function add() {
    let [n1, n2] = getValues();
    document.getElementById('result').innerText = "Result: " + (n1 + n2);
}

function subtract() {
    let [n1, n2] = getValues();
    document.getElementById('result').innerText = "Result: " + (n1 - n2);
}

function multiply() {
    let [n1, n2] = getValues();
    document.getElementById('result').innerText = "Result: " + (n1 * n2);
}

function divide() {
    let [n1, n2] = getValues();
    if (n2 === 0) {
        document.getElementById('result').innerText = "Error: Cannot divide by zero";
    } else {
        document.getElementById('result').innerText = "Result: " + (n1 / n2);
    }
}

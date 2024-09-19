
//
function sum(operation) {
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    var output;

    if (num1 === "" || num2 === "") {
        document.getElementById("output").innerText = "Please enter both numbers!";
        return;
    }

    var n1 = +num1;
    var n2 = +num2;

    if (operation === "+") {
        result = n1 + n2;
    }
    else if (operation === "-") {
        result = n1 - n2;
    }
    else if (operation === "*") {
        result = n1 * n2;
    }
    else if (operation === "/") {
        if (n2 === 0) {
            result = "Cannot divide by zero!";
        }
        else {
            result = n1 / n2;
        }
    }
    else {
        result = "Invalid operation!";
    }

    document.getElementById("output").innerText = `Result is: ${result}`;
}



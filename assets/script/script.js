function fahrenheit() {
    let x = document.getElementById("num1").value;
    let ans = parseFloat(((x) * 9) / 5) + parseFloat(32);

    document.getElementById("displayAns").innerHTML = "Fahrenheit is " + ans.toFixed(2);
}

function kelvin() {
    let x = document.getElementById("num1").value;
    let ans = parseFloat(x) + parseFloat(273.15);

    document.getElementById("displayAns").innerHTML = "Kelvin is " + ans.toFixed(2);
}

function rankine() {
    let x = document.getElementById("num1").value;
    let ans = parseFloat((((x) * 9) / 5) + 32) + parseFloat(459.67);

    document.getElementById("displayAns").innerHTML = "Rankine is " + ans.toFixed(2);
}
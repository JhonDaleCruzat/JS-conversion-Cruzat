// Fahrenheit
function fahrenheit() {
    // Getting Celcius Input from HTML
    let x = document.getElementById("num1").value;
    // Fahrenheit Formula
    let ans = parseFloat(((x) * 9) / 5) + parseFloat(32);

    // Display result of fahrenheit() back to HTML
    document.getElementById("displayAns").innerHTML = "Fahrenheit is " + ans.toFixed(2);
}

// Kelvin
function kelvin() {
    // Getting Celcius Input from HTML
    let x = document.getElementById("num1").value;
    // Kelvin Formula
    let ans = parseFloat(x) + parseFloat(273.15);

    // Display result of kelvin() back to HTML
    document.getElementById("displayAns").innerHTML = "Kelvin is " + ans.toFixed(2);
}

// Rankine
function rankine() {
    // Getting Celcius Input from HTML
    let x = document.getElementById("num1").value;
    // Rankine Formula
    let ans = parseFloat((((x) * 9) / 5) + 32) + parseFloat(459.67);

    // Display result of rankine() back to HTML
    document.getElementById("displayAns").innerHTML = "Rankine is " + ans.toFixed(2);
}
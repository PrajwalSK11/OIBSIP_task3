function convertTemperature() {
    const temperatureInput = document.getElementById("temperature").value;
    const unit = document.getElementById("unit").value;

    if (isNaN(temperatureInput)) {
        alert("Please enter a valid number for temperature.");
        return;
    }

    let convertedTemperature;
    let resultUnit;

    if (unit === "celsius") {
        convertedTemperature = (temperatureInput * 9/5) + 32;
        resultUnit = "Fahrenheit";
    } else if (unit === "fahrenheit") {
        convertedTemperature = (temperatureInput - 32) * 5/9;
        resultUnit = "Celsius";
    }

    const resultElement = document.getElementById("result");
    resultElement.textContent = `Result: ${convertedTemperature.toFixed(2)} ${resultUnit}`;
}

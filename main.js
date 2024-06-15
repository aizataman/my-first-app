function convertTemperature() {
    const inputValue = document.getElementById('inputValue').value;
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    let result;

    if (inputUnit === outputUnit) {
        result = inputValue;
    } else if (inputUnit === 'C' && outputUnit === 'F') {
        result = (inputValue * 9/5) + 32;
    } else if (inputUnit === 'F' && outputUnit === 'C') {
        result = (inputValue - 32) * 5/9;
    }

    document.getElementById('result').innerText = `${parseFloat(result).toFixed(2)}°${outputUnit}`;
}

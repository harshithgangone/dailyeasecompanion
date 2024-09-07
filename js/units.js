function toggleMenu() {
    var options = document.querySelector('.options');
    options.classList.toggle('show');
}
function convertUnit() {
    var unitValue = parseFloat(document.getElementById("unitValue").value);
    var unitType = document.getElementById("unitSelector").value;
    var result = document.getElementById("result");

    if (!isNaN(unitValue)) {
        switch (unitType) {
            case "cmToInch":
                result.innerHTML = unitValue + " cm = " + (unitValue * 0.393701).toFixed(2) + " inches";
                break;
            case "inchToCm":
                result.innerHTML = unitValue + " inches = " + (unitValue * 2.54).toFixed(2) + " cm";
                break;
            case "feetToCm":
                result.innerHTML = unitValue + " feet = " + (unitValue * 30.48).toFixed(2) + " cm";
                break;
            case "cmToFeet":
                result.innerHTML = unitValue + " cm = " + (unitValue * 0.0328084).toFixed(2) + " feet";
                break;
            case "mToKm":
                result.innerHTML = unitValue + " meters = " + (unitValue * 0.001).toFixed(2) + " km";
                break;
            case "gToKg":
                result.innerHTML = unitValue + " grams = " + (unitValue * 0.001).toFixed(2) + " kg";
                break;
            case "kgToG":
                result.innerHTML = unitValue + " kg = " + (unitValue * 1000).toFixed(2) + " grams";
                break;
            case "mileToKm":
                result.innerHTML = unitValue + " miles = " + (unitValue * 1.60934).toFixed(2) + " km";
                break;
            case "kmToMile":
                result.innerHTML = unitValue + " km = " + (unitValue * 0.621371).toFixed(2) + " miles";
                break;
            case "fToC":
                result.innerHTML = unitValue + "°F = " + ((unitValue - 32) * 5 / 9).toFixed(2) + "°C";
                break;
            case "cToF":
                result.innerHTML = unitValue + "°C = " + ((unitValue * 9 / 5) + 32).toFixed(2) + "°F";
                break;
            default:
                result.innerHTML = "Invalid option";
        }
    } else {
        result.innerHTML = "Please enter a valid number";
    }
}
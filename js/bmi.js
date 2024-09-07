function toggleMenu() {
    var options = document.querySelector('.options');
    options.classList.toggle('show');
}

function calculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value / 100; // Convert cm to meters
    var bmi = weight / (height * height);
    document.getElementById("bmiResult").innerHTML = "Your BMI is: " + bmi.toFixed(2);
}
function BMI() {
    var height = document.getElementById("height").value / 100; // convert cm to meters
    var weight = document.getElementById("weight").value;
    var result = document.getElementById("result");

    if (height > 0 && weight > 0) {
        var bmi = (weight / (height * height)).toFixed(2);

        let category = "";
        if (bmi < 18.5) {
            category = "You are underweight. Eat more of balanced diets and rest well.";
            result.style.color = "#ffc107";
        } else if (bmi < 24.9) {
            category = "You have a normal weight. You are fit";
            result.style.color = "#28a745";
        } else if (bmi < 29.9) {
            category = "You are overweight. Try to reduce your food intake and try to do some workout";
            result.style.color = "#fd7e14";
        } else {
            category = "You are obese. You need to reduce your food intake drastically and workout out regularly to avoid health issues";
            result.style.color = "#dc3545";
        }
    
        result.innerHTML = `Your BMI is ${bmi} (${category})`;
    }
    else{
        result.innerHTML = "Please enter your correct height and weight.";
    }

    
}

document.getElementById("calculate").onclick = BMI
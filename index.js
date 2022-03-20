function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

  let BMI = weight / (height / 100) ** 2;

  if (BMI < 18.5) {
    alert("BMI shows that you are Underweight");
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    alert("BMI shows that you are Healthy Weight");
  } else if (BMI >= 25 && BMI <= 29.9) {
    alert("BMI shows that you are Overweight");
  } else if (BMI >= 30) {
    alert("BMI shows that you are Obesity");
  }

  if (age >= 19 && age <= 24 && BMI >= 19 && BMI <= 24)
    alert("Based on your age you are Healthy");
  else if (age >= 25 && age <= 34 && BMI >= 20 && BMI <= 25)
    alert("Based on your age you are Healthy");
  else if (age >= 35 && age <= 44 && BMI >= 21 && BMI <= 26)
    alert("Based on your age you are Healthy");
  else if (age >= 45 && age <= 54 && BMI >= 22 && BMI <= 27)
    alert("Based on your age you are Healthy");
  else if (age >= 55 && age <= 64 && BMI >= 23 && BMI <= 28)
    alert("Based on your age you are Healthy");
  else if (age >= 65 && BMI >= 24 && BMI <= 29)
    alert("Based on your age you are Healthy");
  else alert("Based on your age you are Unhealthy");
}

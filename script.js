let convertFrom = document.getElementById("convertFrom");
let convertTo = document.getElementById("convertTo");
let convertButton = document.getElementById("convert");
let value = document.getElementById("value");
let answer = document.getElementById("answer");
let error = document.getElementById("error");
error.classList.remove("error");

let availableOption = {
  Mile: "mile",
  Kilometer: "km",
  Meter: "m",
  Centimeter: "cm",
  Foot: "f",
  Inch: "inch",
};

convertButton.addEventListener("click", () => {
  calculate();
});

getConvertFrom = () => {
  let convertFrom = document.getElementById("convertFrom").value;
  console.log(`value: ${convertFrom}`);
  return convertFrom;
};

getConvertTo = () => {
  let convertTo = document.getElementById("convertTo").value;
  console.log(`value: ${convertTo}`);
  return convertTo;
};

getInputValue = () => {
  let inputValue = document.getElementById("value").value;
  console.log(`value: ${inputValue}`);
  return inputValue;
};

setConvert = () => {
  for (let value in availableOption) {
    let createOption1 = document.createElement("option");
    createOption1.value = availableOption[value];
    createOption1.innerHTML = value;
    convertFrom.appendChild(createOption1);

    let createOption2 = document.createElement("option");
    createOption2.value = availableOption[value];
    createOption2.innerHTML = value;
    convertTo.appendChild(createOption2);
    console.log(`Inner value: ${availableOption[value]}`);
  }
};

setConvert();

const distanceValue = {
  // TODO: Make more enhance
  "mile-km": 1.60934,
  "mile-m": 1609.34,
  "mile-f": 5280,
  "mile-inch": 63360,
  "mile-cm": 160934,
  "km-mile": 0.621371,
  "km-m": 1000,
  "km-f": 3280.84,
  "km-inch": 39370.1,
  "km-cm": 100000,
  "m-mile": 0.000621371,
  "m-km": 0.001,
  "m-f": 3.28084,
  "m-inch": 39.3701,
  "m-cm": 100,
  "f-mile": 0.000189394,
  "f-km": 0.0003048,
  "f-m": 0.3048,
  "f-inch": 12,
  "f-cm": 30.48,
  "inch-mile": 1.5783e-5,
  "inch-km": 2.54e-5,
  "inch-m": 0.0254,
  "inch-f": 0.0833333,
  "inch-cm": 2.54,
  "cm-mile": 6.2137e-6,
  "cm-km": 1e-5,
  "cm-m": 0.01,
  "cm-f": 0.0328084,
  "cm-inch": 0.393701,
};

getResult = (concatString, value) => {
  for (let val in distanceValue) {
    if (concatString == val) {
      let number = distanceValue[val];
      return (value * number).toPrecision(4);
    }
  }
};

calculate = () => {
  let concatString = getConvertFrom() + "-" + getConvertTo();
  let value = getInputValue();
  if (getConvertFrom() == getConvertTo()) {
    error.classList.add("error");
    answer.value = "NULL";
    error.innerHTML = "Please select different conversion";
  } else if (value <= 0) {
    error.classList.add("error");
    answer.value = "NULL";
    error.innerHTML = "Value must be greater than zero";
  } else {
    error.classList.remove("error");
    error.innerHTML = "";
    let ans = getResult(concatString, value);
    answer.value = ans;
  }
};

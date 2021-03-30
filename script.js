var convertButton = document.getElementById("convert");
var answer = document.getElementById("answer");
const error = document.getElementById("error");

const distanceValue = {
  "mile-km": 1.60934,
  "mile-m": 1609.34,
  "km-mile": 0.621371,
  "km-m": 1000,
  "m-mile": 0.000621371,
  "m-km": 0.001,
};

/* convertButton.addEventListener("click", () => {
  calculate();
});*/

getConvertFrom = () => {
  let convertFrom = document.getElementById("convertFrom").value;
  console.log(convertFrom);
  return convertFrom;
};

getConvertTo = () => {
  let convertTo = document.getElementById("convertTo").value;
  console.log(convertTo);
  return convertTo;
};

getInputValue = () => {
  let inputValue = document.getElementById("value").value;
  console.log(inputValue);
  return inputValue;
};

getResult = (concatString, value) => {
  for (let val in distanceValue) {
    if (concatString == val) {
      let number = distanceValue[val];
      return value * number;
    }
  }
};

calculate = () => {
  let concatString = getConvertFrom() + "-" + getConvertTo();
  let value = getInputValue();
  if (getConvertFrom() == getConvertTo()) {
    answer.innerHTML = 0;
    error.innerHTML = "Please select different conversion";
  } else if (value <= 0) {
    error.innerHTML = "Value must be greater than zero";
  } else {
    error.innerHTML = "";
    let ans = getResult(concatString, value);
    answer.value = ans;
  }
};

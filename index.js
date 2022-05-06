const getValue1 = () => {
  const val = document.getElementById("numberOne").value;
  return Number(val);
};

const getValue2 = () => {
  const val = document.getElementById("numberTwo").value;
  return Number(val);
};

const add = () => {
  const num1 = getValue1();
  const num2 = getValue2();
  const result = document.getElementById("print-result");
  result.innerHTML = num1 + num2;
};

const subtract = () => {
  const num1 = getValue1();
  const num2 = getValue2();
  const result = document.getElementById("print-result");
  result.innerHTML = num1 - num2;
};

const multiply = () => {
  const num1 = getValue1();
  const num2 = getValue2();
  const result = document.getElementById("print-result");
  result.innerHTML = num1 * num2;
};

const divide = () => {
  const num1 = getValue1();
  const num2 = getValue2();
  const result = document.getElementById("print-result");
  if (num2 == 0) {
    return (result.innerHTML = "Error: Cannot divide by 0");
  }
  result.innerHTML = num1 / num2;
};

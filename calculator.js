var result = 0;

let add = () => {
  const num1 = parseFloat(document.getElementById("number1").value);
  const num2 = parseFloat(document.getElementById("number2").value);
  result = num1 + num2;
  console.log(result);
  result = parseFloat(result.toFixed(3));
  return result;
};

let subtract = () => {
  const num1 = parseFloat(document.getElementById("number1").value);
  const num2 = parseFloat(document.getElementById("number2").value);
  result = num1 - num2;
  console.log(result);
  result = parseFloat(result.toFixed(3));
  return result;
};

let multiply = () => {
  const num1 = parseFloat(document.getElementById("number1").value);
  const num2 = parseFloat(document.getElementById("number2").value);
  result = num1 * num2;
  console.log(result);
  result = parseFloat(result.toFixed(3));
  return result;
};

let divide = () => {
  const num1 = parseFloat(document.getElementById("number1").value);
  const num2 = parseFloat(document.getElementById("number2").value);
  result = num1 / num2;
  console.log(result);
  result = parseFloat(result.toFixed(3));

  return result;
};

let clearData = () => {
  container.replaceChildren();
};

let fillData = () => {
  let ele = document.getElementById("container");
  ele.innerHTML += result;
};

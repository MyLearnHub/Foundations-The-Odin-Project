function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate() {
  if (stage == 3) {
    b = Number(display.innerText);
    switch (op) {
      case "+":
        a = add(a, b);
        break;

      case "-":
        a = substract(a, b);
        break;

      case "x":
        a = multiply(a, b);
        break;

      case "÷":
        if (b == 0) {
          display.innerText = "wtf bro";
          a = 0;
          op = null;
          b = 0;
          stage = 1;
          return;
        }
        a = Math.round(divide(a, b) * 1000) / 1000;
        break;
    }
    afterCalc = true;
    b = 0;
    stage = 2;
    if (a == 69) display.innerText = String(a) + " - matty sexy yes ;)";
    else display.innerText = String(a);
  }
}

function number(event) {
  if (afterCalc) clearCalc();
  if (stage == 2) {
    dotted = false;
    display.innerText = "";
    stage = 3;
  }
  if (display.innerText != "0")
    display.innerText = display.innerText.concat(event.target.innerText);
  else display.innerText = event.target.innerText;
}

function operation(event) {
  if (stage == 1) {
    a = Number(display.innerText);
    stage = 2;
  } else if (stage == 3) operate();
  afterCalc = false;
  op = event.target.innerText;
}

function clearCalc() {
  a = 0;
  op = null;
  b = 0;
  stage = 1;
  display.innerText = "0";
  dotted = false;
  afterCalc = false;
}

function dot() {
  if (!dotted && !afterCalc) {
    dotted = true;
    display.innerText = display.innerText + ".";
  }
}

let a = 0;
let op = null;
let b = 0;
let stage = 1;
let dotted = false;
let afterCalc = false;
let display = document.querySelector("#display");

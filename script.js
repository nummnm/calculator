const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');
const btn0 = document.getElementById('btn0');
const dot = document.getElementById('dot');
const btnClear = document.getElementById('btnClear');
const btnPlus = document.getElementById('btnPlus');
const btnMinus = document.getElementById('btnMinus');
const btnMultiply = document.getElementById('btnMultiply');
const btnDivide = document.getElementById('btnDivide');
const btnEquals = document.getElementById('btnEquals');
const result = document.getElementById('result');
const backspace = document.getElementById('backspace');

backspace.addEventListener('click', () => {
  result.value = result.value.slice(0, -1);
});

btn1.addEventListener('click', () => appendToResult('1'));
btn2.addEventListener('click', () => appendToResult('2'));
btn3.addEventListener('click', () => appendToResult('3'));
btn4.addEventListener('click', () => appendToResult('4'));
btn5.addEventListener('click', () => appendToResult('5'));
btn6.addEventListener('click', () => appendToResult('6'));
btn7.addEventListener('click', () => appendToResult('7'));
btn8.addEventListener('click', () => appendToResult('8'));
btn9.addEventListener('click', () => appendToResult('9'));
btn0.addEventListener('click', () => appendToResult('0'));
dot.addEventListener('click', () => {
  if (!result.value.includes('.')) {
    appendToResult('.');
  }
});
btnClear.addEventListener('click', clearResult);
btnPlus.addEventListener('click', () => appendToResult('+'));
btnMinus.addEventListener('click', () => appendToResult('-'));
btnMultiply.addEventListener('click', () => appendToResult('*'));
btnDivide.addEventListener('click', () => appendToResult('/'));
btnEquals.addEventListener('click', calculateResult);


function appendToResult(value) {
  result.value += value;
}

function clearResult() {
  result.value = '';
}

function calculateResult() {
  try {
    result.value = eval(result.value);
  }

  catch (error) {
    result.value = 'Error';
  }
}

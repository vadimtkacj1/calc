"use strict";

function createCalculator() {
  let a = +prompt("Введите 1 число, для подсчета", "0");
  let b = prompt("Введите знак(+, -, *, /, **)", "+");
  let c = +prompt("Введите 2 число, для подсчета", "0");
  
  if (!isFinite(a) || !isFinite(c)) {
    alert("Вы ввели не цифру !!!");
    return createCalculator();
  } 

  function calcSum(a, b, c) {
    let operators = {
      '+': a + c,
      '-': a - c,
      '*': a * c,
      '/': a / c,
      '**': a ** c,
    }
     
    let sum = operators[b];
    
    if(sum === undefined) {
      alert('Вы ввели не оператор !!!');
      return createCalculator();
    } else {
      alert(sum);
    }
                
    let repeatMessage = confirm("Вы хотите ещё что-то посчитать?");

    if (repeatMessage == true) {
	    return createCalculator();
    } else if (repeatMessage == false) {
      return alert("Спасибо что пользуетесь нашим калькулятором !!!")
    }
  }

  return calcSum(a, b, c);
}

createCalculator();


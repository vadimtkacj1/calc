"use strict";

function createCalculator() {
  let a = +prompt("Введите 1 число, для подсчета", "0");
  let b = prompt("Введите знак(+, -, *, /, **)", "+");
  let c = +prompt("Введите 2 число, для подсчета", "0");

function calcSum(a, c) {
	
  if (b == "+") {
    let sum = a + c;
    alert(sum);
  } else if (b == "-") {
    let sum = a - c;
    alert(sum); 
  } else if (b == "*") {
    let sum = a * c;
    alert(sum);
  } else if (b == "/") {
    let sum = a / c;
    alert(sum);
  } else if (b == "**") {
    let sum = a ** c;
    alert(sum);
  } else {
	 return alert("Вы ввели неправельный знак !!!");
  }
  
  if (isNaN(a) || isNaN(c)) {
    alert("Вы ввели не цыфру !!!");
  } 
  
  let repeatMessage = confirm("Вы хотите ещё что-то посчитать?");
 
  if (repeatMessage == true) {
	return createCalculator();
  } else if (repeatMessage == false) {
     alert("Спасибо что пользуетесь нашим калькулятором !!!")
  }
}

  return calcSum(a, c);
}

createCalculator();


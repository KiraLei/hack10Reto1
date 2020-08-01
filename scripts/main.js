let question = parseInt(prompt(`¿Que desea realizar?
1. Sumar 2 números
2. Potencia de un número
3. Suma de potencia cubica de 3 números ingresados
4. Cálculo del área de un triángulo
5. Calculadora
`));

switch (parseInt(question)) {
  case 1:
      exercise1();
      break;
  case 2:
      exercise2();
      break;
  case 3:
      exercise3();
      break;
  case 4:
      exercise4();
      break;
  case 5:
      exercise5();
      break;

  default:
      alert("Ingrese del 1 al 5")
      break;
}


function exercise1 () {
  let number1 = parseInt(prompt("Ingresa primer número"));
  let number2 = parseInt(prompt("Ingresa segundo número"));

  let suma = number1+number2;

  alert(`La suma de los números es: ${suma}`);
}

function exercise2 () {
  let num = parseInt(prompt("Ingresa la base"));
  let pot = parseInt(prompt("Ingresa la potencia"));
  let total = Math.pow(num, pot);

  alert(`El resultado a la potencia es igual a ${total}`);
}

function exercise3 () {
  let number1 = parseFloat(prompt("Ingresa el primer número"));
  let number2 = parseFloat(prompt("Ingresa el segundo número"));
  let number3 = parseFloat(prompt("Ingresa el tercer número"));

  let suma = Math.pow(number1, 3)+Math.pow(number2, 3)+Math.pow(number3, 3);

  alert(`La suma de potencia cubica de los tres numeros ingresados es:  ${SumofCubes}`)
}

function exercise4 () {
  let base = parseFloat(prompt("Ingrese la base del triángulo"));
  let altura = parseFloat(prompt("Ingrese la altura del triángulo"));

  let area = (base*altura)/2

  alert(`El área del triángulo es: ${area}`);
}

function exercise5 () {
  let calculator = prompt(`¿Ingrese el simbolo de la operacion ha realizar?
  +  -> Sumar 2 números
  -  -> Resta 2 números
  /  -> Division 2 números
  %  -> Residuo 2 números
  *  -> Multiplicación 2 números
  `);

  
  switch(calculator) {
    case "+":
      let num1 = parseFloat(prompt("Ingresa el primer número"));
      let num2 = parseFloat(prompt("Ingresa el segundo número"));

      let suma = num1+num2;

      alert(`${num1} + ${num2} -> ${suma}`);
      break;

    case "-":
      let num3 = parseFloat(prompt("Ingrese el primer número"));
      let num4 = parseFloat(prompt("Ingrese el segundo número"));

      let resta = num3-num4;

      alert(`${num3} - ${num4} ->  ${resta}`);
      break;

    case "/":
      let num5 = parseFloat(prompt("Ingrese el primer número"));
      let num6 = parseFloat(prompt("Ingrese el segundo número"));

      let div = num5/num6;

      alert(`${num5} / ${num6} ->  ${div}`);
      break;  
      
    case "*":
      let num7 = parseFloat(prompt("Ingrese el primer número"));
      let num8 = parseFloat(prompt("Ingrese el segundo número"));

      let multiplication = num7*num8;

      alert(`${num7} * ${num8} ->  ${multiplication}`);
      break; 
      
    case "%":
      let num9 = parseFloat(prompt("Ingrese el primer número"));
      let num10 = parseFloat(prompt("Ingrese el segundo número"));

      let residuo = num9%num10;

      alert(` ${num9} % ${num10} -> ${residuo}`);
      break;
    
    default:
        alert(`El parametro no es reconocido`);        
  }
}
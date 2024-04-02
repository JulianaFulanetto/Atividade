//ex-----------ex1-------------
const exercicio1 = () => {
  document.getElementById("resposta").innerHTML =
    "<h2>Resposta da Atividade</h2>";
  for (let i = 1; i <= 10; i++)
    document.getElementById("resposta").innerHTML += `#${i}`;
};
//-------------ex2-------------
const exercicio2 = () => {
  document.getElementById("resultado").innerHTML = "";
  for (let i = 0; i <= document.getElementById("num").value; i += 2)
    document.getElementById("resultado").innerHTML += `#${i}`;
};
//-------------ex3-------------

const exercicio3 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");

  if (num <= 0) {
    error.innerText = `o número ${num} não é primo`;
    result.innerText = "";
  } else {
    error.innerText = "";
    result.innerText = "";
    let primo = true; // declarei variavel para primo
    for (let i = 2; i < num; i++) {
      if (num % i == 0) primo = false; // % resto da divisão
    }

    primo
      ? (resultado.innerText = `O numero ${num} é primo`)
      : (error.innerText = `O numero ${num} não é primo`);
  }
};

//--------------ex4--------------

const exercicio4 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");

  if (num <= 0) {
    error.innerText = "Favor informar um numero positivo";
  } else {
    result.innerText = "";
    error.innerText = "";

    for (let i = 1; i <= 10; i++) {
      // result = num * i;

      result.innerHTML += `
      ${i}x${num}=${num * i}</br>`;
      // if ((result.innerText = num * i));
      // console.log(num);
    }
  }
};

//--------------ex5--------------

const exercicio5 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let contador = 0;
  result.innerText = "";

  while (num >= contador) {
    if (contador % 2 !== 0) result.innerText += `${contador}. `;
    contador++;
  }
};

//-------------ex6-------------

const exercicio6 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let soma = 0;
  let contador = 0;
  result.innerText = "";

  while (num >= contador) {
    if (contador % 2 == 0) {
      soma += contador;
    }
    contador++;
    result.innerHTML = soma;
  }
};

//--------------ex7-------------

const exercicio7 = () => {
  let resposta = document.getElementById("resposta");
  let contador = 10;
  resposta.innerText = "";

  while (contador > 0) {
    resposta.innerHTML += `${contador}. `;
    contador--;
  }
};

//-------------ex9--------------

const exercicio9 = () => {
  let somar = 0;
  let resposta = document.getElementById("resposta");

  for (let i = 1; i <= 100; i++) {
    somar += i;
  }
  resposta.innerText = `${somar}`;
};

//-------------ex10--------------

const exercicio10 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");

  while (condition) {
    
  }
}
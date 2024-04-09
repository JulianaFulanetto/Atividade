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
  let contador = 0;
  let soma = 0;
  result.innerHTML = "";
  error.innerText = "";

  if (num <= 0) {
    error.innerText = "Favor informar um número positivo valido!";
  } else {
    while (contador <= num) {
      soma += contador;
      contador++;
    }

    let media = soma / num;
    result.innerHTML += `A soma é ${soma}<br>`;
    result.innerHTML += `A média é ${media}`;
  }
};

//-------------ex11--------------

const exercicio11 = () => {
  let result = document.getElementById("resposta");
  result.innerHTML = "";

  for (let i = 1; i < 100; i++) {
    if (i % 3 == 0) result.innerHTML += `#${i}<br`;
  }
};

//-------------ex12--------------

const exercicio12 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let soma = 0;
  result.innerHTML = "";
  error.innerText = "";

  if (num < 10) {
    error.innerHTML = "Favor informar um numero de DOIS digitos ou mais!";
  } else {
    for (let i = 0; i < num.length; i++) {
      soma += parseInt(num.charAt(i));
    }
    result.innerText = `A soma dos digitos ${num} é ${soma}`;
  }
};

//-------------ex13--------------

const exercicio13 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let maior, menor;

  if (num1 < num2) {
    menor = num1;
    maior = num2;
  } else {
    menor = num2;
    maior = num1;
  }

  result.innerText = "";
  if (num1 <= 0 || num2 <= 0) {
    error.innerText = `O numero ${num1} ou o numero ${num2} não é válido`;
    result.innerText = "";
  } else {
    error.innerText = "";
    result.innerText = "";

    for (let i = menor; i < maior; i++) {
      let teste = verificarPrimo(i);
      if (teste) {
        result.innerHTML += `#${i} `;
      }
    }
  }
};

function verificarPrimo(numero) {
  let primo = true; //declarei variavel para primo
  for (let i = 2; i < numero; i++) {
    if (numero % i == 0) primo = false; //%resto divisão
  }
  return primo;
}

//-------------ex14--------------

const exercicio14 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let area = num1 * num2;

  if (num1 <= 0 || num2 <= 0) {
    error.innerHTML = "Favor informar um número positivo";
    result.innerHTML = "";
  } else {
    error.innerText = "";
    result.innerText = `A area do retangulo é ${area}`;
  }
};

//-------------ex15--------------

const exercicio15 = () => {
  let palavra = document.getElementById("palavra").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let vogais = [];
  consoante = [];
  result.innerText = "";
  error.innerText = "";

  if (!isNaN(palavra)) {
    error.innerText = "Não aceito numeros";
  } else {
    for (let i = 0; i < palavra.length; i++) {
      let letra = palavra[i].toLowerCase();

      if (
        letra == `a` ||
        letra == `e` ||
        letra == `i` ||
        letra == `o` ||
        letra == `u`
      ) {
        vogais.push(letra);
      } else {
        consoante.push(letra);
      }
    }
    result.innerHTML = `vogais ${vogais} consoante ${consoante}<br>`;
  }
};

//-------------ex16--------------

const exercicio16 = () => {
  let num1 = document.getElementById("num1").value;
  let result = document.getElementById("resultado");
  let pi = 3.14;
  let area = pi * num1 ** 2;
  while (num1 <= 0) {
    result.innerText = "";
    error.innerText = "digite um numero positivo";
  }
  result.innerText = `a area do circulo é ${area}`;
};

//-------------ex17--------------

const exercicio17 = () => {
  let base = document.getElementById("num1").value;
  let altura = document.getElementById("num2").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let area = (base * altura) / 2;
  while (base <= 0 || altura <= 0) {
    result.innerText = "";
    error.innerText = "digite um numero positivo";
  }
  result.innerText = `a area do triangulo é ${area}`;
};

//-------------ex18--------------

const exercicio18 = () => {
  let baseMa = document.getElementById("num1").value;
  let baseMe = document.getElementById("num2").value;
  let altura = document.getElementById("num3").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let area = baseMa + (baseMe * altura) / 2;
  while (base <= 0 || altura <= 0) {
    result.innerText = "";
    error.innerText = "digite um numero positivo";
  }
  result.innerText = `a area do trapézio é ${area}`;
};

//-------------e19--------------
const exercicio19 = () => {
  let data = document.getElementById("data").value;
  let result = document.getElementById("resposta");
  let error = document.getElementById("erro");
  let atual = new Date();
  result.innerText = "";
  error.innerText = "";

  if (data == "") {
    error.innerText = "inserir data";
  } else {
    error.innerText = "";
    data = new Date(data);

    let ao = atual.getTime() - data.getTime();

    const idade = math.floor(ano / (1000 * 60 * 60 * 24 * 365.25));
    result.innerText += `${idade}`;
  }
};

//-------------ex20--------------

const exercicio20 = () => {
  let frase = document.getElementById("frase").value;
  let resposta = document.getElementById("resposta");
  let error = document.getElementById("erro");
  let inverter = " ";

  if (frase == "") {
    error.innerText = "escreva a frase";
    resposta.innerText = "";
  } else {
    for (var i = frase.length - 1; i >= 0; i--) {
      inverter += frase[i];
    }
    resposta.innerHTML = `${inverter}`;
    error.innerText = "";
  }
};

//-------------ex21--------------

const exercicio21 = () => {
  let frase = document.getElementById("frase").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  result.innerHTML = "";
  error.innerText = "";

  if (frase.length > 1) {
    result.innerHTML = frase.replace(/\s/g, " ");
  }
};

//-------------ex22--------------

let soma = 0;
const exercicio22 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  result.innerHTML = "";
  error.innerText = "";
  soma += parseInt(num);

  if (soma <= 100) {
    result.innerHTML = `A soma dos numeros é ${soma}!`;
  } else {
    error.innerText = `A soma dos digitos é invalido`;
    result.innerHTML = "";
  }
};

//-------------ex23--------------

const exercicio23 = () => {
  let frase = document.getElementById("frase").value;
  let palavra = document.getElementById("palavra").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("error");
  let contador = 0;

  if (!isNaN(frase) || !isNaN(palavra)) {
    error.innerText = "escreva a frase";
  } else {
    frase = frase.toLowerCase();
    palavra = palavra.toLowerCase();
    let palavras = frase.split(" ");

    for (var i = 0; i < palavras.length; i++) {
      if (palavras[i] == palavra) {
        contador++;
      }
    }
    result.innerHTML = `a palavra ${palavra} aparece ${contador} vezes`;
  }
};

//-------------ex24--------------

const exercicio24 = () => {
  let valor = document.getElementById("frase").value;
  let frase = valor.split(" ");
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  const letrasMaiusculas = [];
  error.innerText = "";
  result.innerHTML = "";

  if (valor == "") {
    error.innerText = "informe uma frase!";
  } else {
    const mudarFrase = frase.map((palavra) => {
      const primeiraLetraMaiuscula = palavra[0].toUpperCase();
      letrasMaiusculas.push(primeiraLetraMaiuscula);
      return primeiraLetraMaiuscula + palavra.slice(1);
    });
    result.innerHTML = `${mudarFrase.join(" ")}`;
  }
};

//--------------ex25------------
const exercicio25 = () => {
  let num1 = document.getElementById("num1").value
  let num2 = document.getElementById("num2").value
  let num3 = document.getElementById("num3").value
  let result = document.getElementById("resposta")
  let error = document.getElementById("erro")
  let array = []

  array.push(num1);
  array.push(num2);
  array.push(num3);
  array.sort((a, b) => a - b);
  console.log(array);

  if (num1 <= 0 || num2 <= 0 || num3 <= 0) {
    error.innerHTML = "apenas numeros positivos";
    result.innerText = "";
  } else {
    for (let i = 0; i <= 2; i++) {
      result.innerText += `${array[i]},`;
      error.innerHTML = "";
    }
  }
};

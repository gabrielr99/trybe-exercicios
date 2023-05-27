let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Percorra o array imprimindo todos os valores nele contidos com a função console.log();
for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index])
};

//Some todos os valores contidos no array e imprima o resultado;
let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
  soma = soma + numbers[index]
};

console.log(soma);

//Calcule e imprima a média aritmética dos valores contidos no array;
let mediaAritmetica = soma / numbers.length;

console.log(mediaAritmetica);

//Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;
if (mediaAritmetica > 20) {
  console.log("valor maior que 20")
} else {
  console.log("valor menor ou igual a 20")
}

//Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let maiorNumero = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > maiorNumero) {
    maiorNumero = numbers[index];
  }
};

console.log(maiorNumero);

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
let numbersImpar = 0
for (let index = 0; index < numbers.length; index += 1) {
  if (((numbers)[index] % 2) != 0) {
    numbersImpar = numbersImpar + 1;
  } 
};

if (numbersImpar != 0) {
  console.log("A quantidade de numeros ímpares é: " + numbersImpar)
} else {
  console.log("nenhum valor ímpar encontrado")
}

//Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let menorNumero = maiorNumero

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] < menorNumero) {
    menorNumero = numbers[index];
  }
};

console.log(menorNumero);

//Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let newArray = [];

for (let index = 1; index <= 25; index += 1) {
  newArray.push(index)
}

console.log(newArray)

//Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2
for (let index = 0; index < newArray.length; index += 1) {
  console.log(newArray[index] / 2);
}

//Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
function palindrome(palavra) {
  let reverse = palavra.split("").reverse().join("");
  if (palavra === reverse) {
    return true;
  } else {
    return false;
  }
  // return palavra1 == reverse
}

console.log(palindrome('arara'));

//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
function maiorValor(array) {
  let position = array[0];
  for (let value in array) {
    if (position < array[value]) {
      position = value;
    }
  }
  return position;
}

console.log(maiorValor([2, 3, 6, 7, 10, 1]));

//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
function menorValor(array) {
  let position = array[0];
  for (let value in array) {
    if (position > array[value]) {
      position = value;
    }
  }
  return position;
}

console.log(menorValor([2, 4, 6, 7, 10, 0, -3]));
//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
function maiorNome(array) {
  let name = array[0];
  for(let index = 0; index < array.length; index += 1) {
    if (name.length < array[index].length) {
      name = array[index];
    }
  }
  return name;
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

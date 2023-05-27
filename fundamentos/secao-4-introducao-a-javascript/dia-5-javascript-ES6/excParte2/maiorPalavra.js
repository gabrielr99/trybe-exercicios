const longestWord = (frase) => {
  let arrayPalavras = frase.split(' ');
  let maiorPalavra = arrayPalavras[0];
  for (let index = 0; index < arrayPalavras.length; index += 1) {
    if (maiorPalavra.length < arrayPalavras[index].length) {
      maiorPalavra = arrayPalavras[index];
    }
  }
  return maiorPalavra;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'))
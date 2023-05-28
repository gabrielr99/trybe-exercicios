let array = ['java', 'javascript', 'python', 'html', 'css'];
let tamanhoPalavra = array[0].length;
let maiorPalavra = '';
let menorPalavra = '';
for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > tamanhoPalavra) {
    maiorPalavra = array[index];
    tamanhoPalavra = array[index].length;
  }
}

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < tamanhoPalavra) {
    menorPalavra = array[index];
    tamanhoPalavra = array[index].length;
  }
}

console.log(maiorPalavra)
console.log(menorPalavra)
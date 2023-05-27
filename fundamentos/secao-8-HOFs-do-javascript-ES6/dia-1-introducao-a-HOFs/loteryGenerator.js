const validate = (num) => Math.floor(Math.random() * 6) + 1 === num;

const numberGenerator = (myNumber, callback) => callback(myNumber) ? 'Parabéns, você ganhou!' : 'Tente novamente.';

console.log(numberGenerator(5, validate));
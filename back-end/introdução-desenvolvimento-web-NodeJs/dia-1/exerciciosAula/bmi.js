const readline = require('readline-sync');

const qualPeso = () => readline.question('Digite seu peso: ');
const qualAltura = () => readline.questionFloat('Qual sua altura em metros: ');

const peso = qualPeso();
const altura = qualAltura();

function IMC (p, a) {
    return p / a**2
}

const IMCvalue = IMC(peso, altura).toFixed(2);

if (IMC < 18.5) {
    console.log('Abaixo do peso (magreza)', IMCvalue);
} else if (IMCvalue >= 18.5 && IMCvalue < 24.9) {
    console.log('Peso normal', IMCvalue);
} else if (IMCvalue >= 25.0 && IMCvalue < 29.9) {
    console.log('Acima do peso (sobrepeso)', IMCvalue);
} else if (IMCvalue >= 30.0 && IMCvalue < 34.9) {
    console.log('Acima do peso (sobrepeso)', IMCvalue)
} else if (IMCvalue >= 35.0 && IMCvalue < 39.9) {
    console.log('Obesidade grau I', IMCvalue)
} else if (IMCvalue >= 35.0 && IMCvalue < 39.9) {
    console.log('Obesidade grau II', IMCvalue)
} else {
    console.log('Obesidade graus III e IV', IMCvalue)
};

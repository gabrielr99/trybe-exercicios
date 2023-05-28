const a = 6;
const b = 2;
const c = -5;

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

if (a > b) {
  console.log(a +" é maior que " + b);
} else if (a < b) {
  console.log(b +" é maior que " + a);
}

if (a > b && a > c) {
  console.log("A maior variável é: " + a);
} else if (b > a && b > c) {
  console.log("A maior variável é: " + b);
} else if (c > a && c > b) {
  console.log("A maior variável é: " + c);
}

if (c < 0) {
  console.log('negative');
} else if (c > 0) {
  console.log('positive');
} else {
  console.log('variável igual a 0')
}
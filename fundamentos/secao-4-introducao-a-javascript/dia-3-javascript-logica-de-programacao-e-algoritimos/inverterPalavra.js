let word = 'tryber';
let newString = '';

for (let index = word.length-1; index >= 0; index -= 1) {
  newString += word[index]
}

console.log(newString)
// arquivo script.js

console.log(document.getElementById('elementoOndeVoceEsta'));
console.log(document.getElementById('elementoOndeVoceEsta').parentNode)
console.log(document.getElementById('elementoOndeVoceEsta').firstElementChild);

const filhoDoFilho = document.getElementById('elementoOndeVoceEsta').firstElementChild;
filhoDoFilho.innerHTML = "Olá"

console.log(document.getElementById('pai').firstElementChild);
console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling);
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling.nextElementSibling);
console.log(document.getElementById('pai').firstElementChild.nextElementSibling.nextElementSibling);
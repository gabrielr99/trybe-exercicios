let section
const creatSection = () => {
  section = document.createElement('section');
  return section
}

const sectionPai = document.getElementById('pai');
sectionPai.appendChild(creatSection());

const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
elementoOndeVoceEsta.appendChild(creatSection());

const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
const filhoDoPrimeiroFilhoDoFilho = creatSection()
filhoDoPrimeiroFilhoDoFilho.className = 'filhoDoPrimeiroFilhoDoFilho'
primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilhoDoFilho);

console.log(filhoDoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling)
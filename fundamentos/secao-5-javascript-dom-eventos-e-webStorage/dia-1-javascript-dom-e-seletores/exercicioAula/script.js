const body = document.querySelector('body');
body.style.backgroundColor = 'rgb(150, 150, 150)'

const header = document.getElementById("header-container");
header.style.backgroundColor = "green";

const divImportante = document.querySelectorAll(".emergency-tasks div");
divImportante[0].style.backgroundColor = "rgb(255, 157, 128)";
divImportante[1].style.backgroundColor = "rgb(255, 157, 128)";

const divNoImportante = document.querySelectorAll(".no-emergency-tasks div");
divNoImportante[0].style.backgroundColor = "yellow";
divNoImportante[1].style.backgroundColor = "yellow";

const h3importante = document.querySelectorAll(".emergency-tasks h3");
h3importante[0].style.backgroundColor = "purple";
h3importante[1].style.backgroundColor = "purple";

const h3NaoImportante = document.querySelectorAll(".no-emergency-tasks h3");
h3NaoImportante[0].style.backgroundColor = "black";
h3NaoImportante[1].style.backgroundColor = "black";

const footer = document.getElementById("footer-container");
footer.style.backgroundColor = "black";

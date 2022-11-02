var texto = "É julho de 1789, todos estão reunidos no palácio, o rei sentado ao trono, o clero em suas rezas, a nobreza já em luto, e em frente, o terceiro estado. Uma sensação de reviravoltas invade o local. A proclamação da Assembleia Nacional Constituinte está acontecendo."
var primeira_escolha;

var count = 0;
function digitar() {
primeira_escolha = document.getElementById("primeira_escolha");
window.setTimeout(function() { inserir(texto[count]) }, 30);
}

function inserir(letra) {
primeira_escolha.innerHTML += letra;
count++;
if(count < texto.length)
window.setTimeout(function() { inserir(texto[count]) }, 30);
}

window.onload = digitar;



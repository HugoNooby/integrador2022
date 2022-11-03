var texto = "É julho de 1789, todos estão reunidos no palácio, o rei sentado ao trono, o clero em suas rezas, a nobreza já em luto, e em frente, o terceiro estado. Uma sensação de reviravoltas invade o local. A proclamação da Assembleia Nacional Constituinte está acontecendo."
var primeira_escolha;

var textoviu = "O povo estava unido, seus instrumentos de trabalho estavam empunhados em suas cansadas mãos, um protesto, o início de uma revolução, foi o que viu através de uma janela no corredor real. Sinceramente, já esperávamos por isso. A desigualdade entre os três estados é nítida, uma grande crise econômica autora de fomes e mortes, pensamentos iluministas, influências americanas, a lista continua, tudo contribui para o momento em que nos encontramos agora. “Não há como impedir que, essas pessoas não façam o que já está consumindo seus corpos” novamente pensou o bispo. Mas você pode escolher o que elas farão. ."
var primeira_escolha2;

var count = 0;
function digitar() {
primeira_escolha = document.getElementById("primeira_escolha");
window.setTimeout(function() { inserir(texto[count]) }, 30);
primeiro_escolha2 = document.getElementById("primeira_escolha2");
window.setTimeout(function() { inserir(textoviu[count]) }, 30);
}

function inserir(letra) {
primeira_escolha.innerHTML += letra;
count++;
if(count < texto.length)
window.setTimeout(function() { inserir(texto[count]) }, 30);
primeira_escolha2.innerHTML += letra;
count++;
if(count < textoviu.length)
window.setTimeout(function() { inserir(textoviu[count]) }, 30);
}

window.onload = digitar;



var texto = "Otíma escolha usuário você agora é Emmanuel Joseph Sieyés! Vocé agora pertence ao time dos REVOLUCIONÁRIOS, não se esqueça o motivo que estamos lutando de qualquer forma sua história começa em 1 2 3. . .É julho de 1789, todos estão reunidos no palácio, o rei sentado ao trono, o clero em suas rezas, a nobreza já em luto, e em frente, o terceiro estado. Uma sensação de reviravoltas invade o local. A proclamação da Assembleia Nacional Constituinte está acontecendo. Você conhecido como o Bispo Sieyès, ou para os íntimos Emmanuel Sieyès, confronta os nobres. Onde ano passado você publicou uma obra fascinante, depondo que a nobreza seria um fardo para nossa economia, graças aos seus gastos mirabolantes. Após aos mals olhares da nobreza, você tenta escapar daquele local sombrio com a famosa desculpa: 'Vou para fora tomar um pouco de ar', pensou o você levantando-se e saindo pela porta ao fundo. Desta forma, enquanto um membro está a proclamar da assembleia, você acha divertido analisar as diferentes expressões que cada grupo realiza, alguns parecem decepcionados, outros satisfeitos e ainda outros surpresos, mas não tanto quanto você ao voltar de seu passeio, afinal parece que algo inesperado está preste acontecer... ou nem tanto assim. Afinal, o que aconteceu ?!";
var inicio;

var count = 0;
function digitar() {
result = document.getElementById("inicio");
window.setTimeout(function() { inserir(texto[count]) }, 30);
}

function inserir(letra) {
result.innerHTML += letra;
count++;
if(count < texto.length)
window.setTimeout(function() { inserir(texto[count]) }, 30);
}

window.onload = digitar;



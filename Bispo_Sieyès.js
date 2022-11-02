var texto = "Parabéns 'nome do usuário' você agora é o Bispo Emmanuel Joseph Sieyès, sua história começará em 1 2 3 . . . É julho de 1789, todos estão reunidos no palácio, o rei sentado ao trono, o clero em suas rezas, a nobreza já em luto, e em frente, o terceiro estado. Uma sensação de reviravoltas invade o local. A proclamação da Assembleia Nacional Constituinte está acontecendo, Acredito que o Bispo Sieyès, para os íntimos Emmanuel Sieyès, seja opoente aos nobres. Ano passado publicou uma obra fascinante, depondo que a nobreza seria um fardo para nossa economia, graças aos seus gastos mirabolantes, 'Vou para fora tomar um pouco de ar', pensou o bispo levantando-se e saindo pela porta ao fundo. Observe que, enquanto um membro está a proclamar da assembleia, é divertido analisar as diferentes expressões que cada grupo realiza, alguns parecem decepcionados, outros satisfeitos e ainda outros surpresos, mas não tanto quanto Emmanuel Sieyès ao voltar de seu passeio, parece que descobriu algo inesperado... ou nem tanto assim.."
var primeira_escolha;

var count = 0;
function digitar() {
primeira_escolha = document.getElementById("primeira_escolha");
window.setTimeout(function() { inserir(texto[count]) }, 3);
}

function inserir(letra) {
primeira_escolha.innerHTML += letra;
count++;
if(count < texto.length)
window.setTimeout(function() { inserir(texto[count]) }, 3;
}

window.onload = digitar;




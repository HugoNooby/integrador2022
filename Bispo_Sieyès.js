var textnum = -1;
var dialogue = ["É julho de 1789, todos estão reunidos no palácio, o rei sentado ao trono, o clero em suas rezas, a nobreza já em luto, e em frente, o terceiro estado. Uma sensação de reviravoltas invade o local. A proclamação da Assembleia Nacional Constituinte está acontecendo.", "Acredito que o Bispo Sieyès, para os íntimos Emmanuel Sieyès, seja opoente aos nobres. Ano passado publicou uma obra fascinante, depondo que a nobreza seria um fardo para nossa economia, graças aos seus gastos mirabolantes, 'Vou para fora tomar um pouco de ar', pensou o bispo levantando-se e saindo pela porta ao fundo.", "Observe que, enquanto um membro está a proclamar da assembleia, é divertido analisar as diferentes expressões que cada grupo realiza, alguns parecem decepcionados, outros satisfeitos e ainda outros surpresos, mas não tanto quanto Emmanuel Sieyès ao voltar de seu passeio, parece que descobriu algo inesperado... ou nem tanto assim.", "Escolha o rumo em que queira que a história tome (você poderá voltar caso mude de ideia):" ];
const text = document.getElementById("text");
function nextDialogue(){
  if (textnum<2){
    textnum++;
    document.getElementById("text").innerHTML = dialogue[textnum];
    typeWrite(text);
  }else{
    textnum = 0;
  }
  
}

function typeWrite(elemento){
     const textoArray = elemento.innerHTML.split("");
    elemento.innerHTML = '';
    textoArray.forEach(function(letra,i){
        setTimeout(function(){
            elemento.innerHTML += letra;
        },50*i)

    });
}

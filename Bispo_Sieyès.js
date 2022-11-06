const Ejulho = document.querySelector(".Ejulho");
const acreditoobserve = document.querySelector(".acreditoobserve");
const Opovo = document.querySelector(".Opovo");
const osguardas = document.querySelector(".osguardas");
const fechouaporta = document.querySelector(".fechouaporta");
const E1792 = document.querySelector(".E1792");

function digitacao(texto, contador){

if(contador < texto.length){
	setTimeout(()=>{
		Ejulho.textContent += texto.charAt(contador);
		contador++;
		digitacao(texto, contador);
	}, 30)

}

}

function digitacao2(texto, contador){

if(contador < texto.length){
	setTimeout(()=>{
		acreditoobserve.textContent += texto.charAt(contador);
		contador++;
		digitacao2(texto, contador);
	}, 30)

}

}

function digitacao3(texto, contador){

if(contador < texto.length){
	setTimeout(()=>{
		Opovo.textContent += texto.charAt(contador);
		contador++;
		digitacao3(texto, contador);
	}, 30)

}

}

function digitacao4(texto, contador){

if(contador < texto.length){
	setTimeout(()=>{
		osguardas.textContent += texto.charAt(contador);
		contador++;
		digitacao4(texto, contador);
	}, 30)

}

}

function digitacao5(texto, contador){

if(contador < texto.length){
	setTimeout(()=>{
		fechouaporta.textContent += texto.charAt(contador);
		contador++;
		digitacao5(texto, contador);
	}, 30)

}

}

function digitacao6(texto, contador){

if(contador < texto.length){
	setTimeout(()=>{
		E1792.textContent += texto.charAt(contador);
		contador++;
		digitacao6(texto, contador);
	}, 30)

}

}


digitacao("É julho de 1789, todos estão reunidos no palácio, o rei sentado ao trono, o clero em suas rezas, a nobreza já em luto, e em frente, o terceiro estado. Uma sensação de reviravoltas invade o local. A proclamação da Assembleia Nacional Constituinte está acontecendo.", 0);
digitacao2("Acredito que o Bispo Sieyès, para os íntimos Emmanuel Sieyès, seja opoente aos nobres. Ano passado publicou uma obra fascinante, depondo que a nobreza seria um fardo para nossa economia, graças aos seus gastos mirabolantes, 'Vou para fora tomar um pouco de ar', pensou o bispo levantando-se e saindo pela porta ao fundo. Observe que, enquanto um membro está a proclamar da assembleia, é divertido analisar as diferentes expressões que cada grupo realiza, alguns parecem decepcionados, outros satisfeitos e ainda outros surpresos, mas não tanto quanto Emmanuel Sieyès ao voltar de seu passeio, parece que descobriu algo inesperado... ou nem tanto assim.", 0);
digitacao3("O povo estava unido, seus instrumentos de trabalho estavam empunhados em suas cansadas mãos, um protesto, o início de uma revolução, foi o que viu através de uma janela no corredor real. Sinceramente, já esperávamos por isso. A desigualdade entre os três estados é nítida, uma grande crise econômica autora de fomes e mortes, pensamentos iluministas, influências americanas, a lista continua, tudo contribui para o momento em que nos encontramos agora. “Não há como impedir que, essas pessoas não façam o que já está consumindo seus corpos” novamente pensou o bispo. Mas você pode escolher o que elas farão.", 0);
digitacao4("Os guardas da entrada tentaram conter a multidão, no entanto, eram muitos os revoltosos. Invadiram o palácio e foram em direção ao salão de reuniões, no qual se encontravam os três estados. Todos se levantaram, entreolharam-se temerosos, a parte do terceiro estado que se achava a frente da assembleia se juntou ao povo, aumentando em grande proporção o volume de revolucionários. Bispo Sieyès observava tudo diante da fresta entre a parede e a porta, conseguia sentir a adrenalina deslizar em suas veias, o que fazer em um cenário como este?", 0);
digitacao5("Fechou a porta e saiu em direção a cozinha, havia uma pequena porta de madeira que levava ao lado de fora do palácio, junto com os restos de alimento desperdiçados durante as refeições reais. Por um instante parou, olhou para os despojos e, se sentiu como eles, inspirou e seguiu seu caminho.", 0);
digitacao6("É 1792, deixe-me contar o que aconteceu nos últimos três anos que se passaram. Emmanuel se tornou presidente da Assembleia Constituinte e integrante da Convenção Nacional, também um pouco arrogante, a fama como teórico sucumbiu sua mente, porém sua falta de habilidade como orador, reduziu sua competência política. Ano passado o rei Luís XVI tentou fugir de Paris, alguns estão dizendo que ele nos traiu. Amanhã é o dia da última sessão de reuniões da Convenção, estão votando a favor e contra a morte do rei, não sei o que pensar sobre isso, mas talvez eu saiba no que Bispo Sieyès votou.", 0);

function Mudarestado(el) {
        var display = document.getElementById(el).style.display;
        if(display == "block")
            document.getElementById(el).style.display = 'block';
        else
            document.getElementById(el).style.display = 'none';
    }

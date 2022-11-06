const Ejulho = document.querySelector(".Ejulho");
const acreditoobserve = document.querySelector(".acreditoobserve");
const Opovo = document.querySelector(".Opovo");

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


digitacao("É julho de 1789, todos estão reunidos no palácio, o rei sentado ao trono, o clero em suas rezas, a nobreza já em luto, e em frente, o terceiro estado. Uma sensação de reviravoltas invade o local. A proclamação da Assembleia Nacional Constituinte está acontecendo.", 0);
digitacao2("Acredito que o Bispo Sieyès, para os íntimos Emmanuel Sieyès, seja opoente aos nobres. Ano passado publicou uma obra fascinante, depondo que a nobreza seria um fardo para nossa economia, graças aos seus gastos mirabolantes, 'Vou para fora tomar um pouco de ar', pensou o bispo levantando-se e saindo pela porta ao fundo. Observe que, enquanto um membro está a proclamar da assembleia, é divertido analisar as diferentes expressões que cada grupo realiza, alguns parecem decepcionados, outros satisfeitos e ainda outros surpresos, mas não tanto quanto Emmanuel Sieyès ao voltar de seu passeio, parece que descobriu algo inesperado... ou nem tanto assim.", 0);
digitacao3("O povo estava unido, seus instrumentos de trabalho estavam empunhados em suas cansadas mãos, um protesto, o início de uma revolução, foi o que viu através de uma janela no corredor real. Sinceramente, já esperávamos por isso. A desigualdade entre os três estados é nítida, uma grande crise econômica autora de fomes e mortes, pensamentos iluministas, influências americanas, a lista continua, tudo contribui para o momento em que nos encontramos agora. “Não há como impedir que, essas pessoas não façam o que já está consumindo seus corpos” novamente pensou o bispo. Mas você pode escolher o que elas farão.", 0);


function Mudarestado(el) {
        var display = document.getElementById(el).style.display;
        if(display == "none")
            document.getElementById(el).style.display = 'block';
        else
            document.getElementById(el).style.display = 'none';
    }

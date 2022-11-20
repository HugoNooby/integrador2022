var textnum = 0;
var dialogue = ['O povo estava unido, seus instrumentos de trabalho estavam empunhados em suas cansadas mãos, um protesto, o início de uma revolução, foi o que viu através de uma janela no corredor real.', 'Sinceramente, já esperávamos por isso. A desigualdade entre os três estados é nítida, uma grande crise econômica autora de fomes e mortes, pensamentos iluministas, influências americanas, a lista continua, tudo contribui para o momento em que nos encontramos agora.', '“Não há como impedir que, essas pessoas não façam o que já está consumindo seus corpos” novamente pensou o bispo. Mas você pode escolher o que elas farão.', 'Escolha o rumo em que queira que a história tome (você poderá voltar caso mude de ideia):' ];
const text = document.getElementById("text");
function nextDialogue(){
  
  if (textnum<=2){
    $("#seta").hide();
    document.getElementById("text").innerHTML = dialogue[textnum];
    typeWrite(text);
    setTimeout(mostra(),5000);
    textnum++;
  } else if (textnum==3){
    $('#box').html('<div class="data-container"><a href="bispoatacarsalao.html" class="button">ATACAR O SALÃO REAL</a></div><div class="data-container"><a href="bispo_atacarprisao8.html" class="button">ATACAR A PRISÃO DE OITO TORRES</a></div><div class="data-container"><a href="Bispo_Sieyès.html" class="button">VOLTAR E TENTAR NOVAMENTE</a></div>');
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

function mostra(){
  $("#seta").show();
}

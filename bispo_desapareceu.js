var textnum = 0;
var dialogue = ["É 1974, Bispo Sieyès desapareceu dos meios políticos por um tempo, mas finalmente voltou para que eu possa observá-lo mais um pouco. Depois que rei Luís XVI morreu, o Grande Terror começou. Sua esposa, rainha Maria Antonieta teve o mesmo final trágico que seu marido, condenada a guilhotina. Execuções eram feitas em público e em massa, um dos líderes jacobinos, chamado Robespierre enlouqueceu, disseminando a grande matança. Mas Emmanuel apareceu como um dos apoiadores de um golpe, o 9 de Termidor. Do que você acha, que se trata esse golpe?", "Escolha o rumo em que queira que a história tome (você poderá voltar caso mude de ideia):" ];
const text = document.getElementById("text");
function nextDialogue(){
  
  if (textnum<=3){
    $("#seta").hide();
    document.getElementById("text").innerHTML = dialogue[textnum];
    typeWrite(text);
    setTimeout(mostra(),5000);
    textnum++;
  } else if (textnum==4){
    $('#box').html('<div class="data-container"><a href="bispo_apoio.html" class="button">APOIO A MATANÇA</a></div><br><div class="data-container"><a href="bispo_terror.html" class="button">FIM DO REGIME DO TERROR</a></div><br><div class="data-container"><a href="contra_viu.html" class="button">VOLTAR E TENTAR NOVAMENTE</a></div>') ;
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
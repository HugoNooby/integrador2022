var textnum = 0;
var dialogue = ["Olhou para o lado, havia uma peça delicadamente esculpida e forte, feita de metal, estava escorada em uma estátua dourada e brilhante. Segurou a peça com suas mãos tremulas e entrou ao salão, seus “colegas” o olharam assustados, Emmanuel não se importou muito, não sei o porquê, mas ele se sentia muito corajoso. “****Liberté, Egalité, Fraternité!****” exclamou o povo levantando suas armas e começando aquela revolução. Mais soldados chegaram, pode-se ouvir os sons das espadas sendo levantadas e de disparos das armas de fogo.  Sieyès lutava elegantemente para um bispo, e tinha um olhar destemido e profundo, porém por um momento de distração Sieyès foi atingido. Tudo ficou mais lento e silencioso, mas a dor era agoniante, uma lágrima escorreu de seus olhos junto com o último ar inspirado.", "'Você é livre para fazer suas escolhas, mas é prisioneiro das consequências.' — Pablo Neruda.", "Escolha o rumo em que queira que a história tome (você poderá voltar caso mude de ideia):" ];
const text = document.getElementById("text");
function nextDialogue(){
  
  if (textnum<=3){
    $("#seta").hide();
    document.getElementById("text").innerHTML = dialogue[textnum];
    typeWrite(text);
    setTimeout(mostra(),5000);
    textnum++;
  } else if (textnum==4){
    $('#box').html('<div class="data-container"><a href="bispoatacarsalao.html" class="button">VOLTAR E TENTAR NOVAMENTE</a></div>') ;
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

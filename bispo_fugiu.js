var textnum = 0;
var dialogue = ["A culpa é um dos piores sentimentos que um ser humano pode sentir, ela o faz ficar pesado, até que começas a arrastar pelo chão coberto de mágoas. Foi o que Sieyès sentiu. Foi o que fez ele ir… e nunca mais tive notícias dele.", "“A minha consciência tem milhares de vozes, / E cada voz traz-me milhares de histórias, / E de cada história sou o vilão condenado.” William Shakespeare." ];
const text = document.getElementById("text");
function nextDialogue(){
  
  if (textnum<=2){
    $("#seta").hide();
    document.getElementById("text").innerHTML = dialogue[textnum];
    typeWrite(text);
    setTimeout(mostra(),5000);
    textnum++;
  } else if (textnum==3){
    $('#box').html('<div class="data-container"><a href="favor_viu.html" class="button">VOLTAR E TENTAR NOVAMENTE</a></div>') ;
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

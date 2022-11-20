var textnum = 0;
var dialogue = ["Não, chega de mortes.", "“Cada vez que você faz uma opção está transformando sua essência em alguma coisa um pouco diferente do que era antes.” C.S. Lewis." ];
const text = document.getElementById("text");
function nextDialogue(){
  
  if (textnum<=1){
    $("#seta").hide();
    document.getElementById("text").innerHTML = dialogue[textnum];
    typeWrite(text);
    setTimeout(mostra(),5000);
    textnum++;
  } else if (textnum==2){
    $('#box').html('<div class="data-container"><a href="bispo_desapareceu.html" class="button">VOLTAR E TENTAR NOVAMENTE</a></div>') ;
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

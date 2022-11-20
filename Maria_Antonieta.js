var textnum = 0;
var texto = [, "Escolha o rumo em que queira que a história tome (você poderá voltar caso mude de ideia):" ];
const text = document.getElementById("text");
function nextDialogue(dialogue){
  
  if (textnum<=(dialogue.length)-1){
    $("#seta").hide();
   $("#text").text(dialogue[textnum]);
    typeWrite(text);
    setTimeout(mostra(),5000);
    textnum++;
  } else if (textnum==dialogue.length){
    $('#box').html('') ;
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

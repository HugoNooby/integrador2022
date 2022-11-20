var textnum = 0;
var dialogue = ["É 1792, deixe-me contar o que aconteceu nos últimos três anos que se passaram. Emmanuel se tornou presidente da Assembleia Constituinte e integrante da Convenção Nacional, também um pouco arrogante, a fama como teórico sucumbiu sua mente, porém sua falta de habilidade como orador, reduziu sua competência política. Ano passado o rei Luís XVI tentou fugir de Paris, alguns estão dizendo que ele nos traiu. Amanhã é o dia da última sessão de reuniões da Convenção, estão votando a favor e contra a morte do rei, não sei o que pensar sobre isso, mas talvez eu saiba no que Bispo Sieyès votou.", "Escolha o rumo em que queira que a história tome (você poderá voltar caso mude de ideia):" ];
const text = document.getElementById("text");
function nextDialogue(){
  
  if (textnum<=3){
    $("#seta").hide();
    document.getElementById("text").innerHTML = dialogue[textnum];
    typeWrite(text);
    setTimeout(mostra(),5000);
    textnum++;
  } else if (textnum==4){
    $('#box').html('<div class="data-container"><a href="contra_viu.html" class="button">CONTRA</a></div><br><div class="data-container"><a  href="favor_viu.html" class="button">A FAVOR</a></div><br><div class="data-container"><a href="ouviu.html" class="button">VOLTAR E TENTAR NOVAMENTE</a></div>') ;
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

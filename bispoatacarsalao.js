var textnum = 0;
var dialogue = ['Os guardas da entrada tentaram conter a multidão, no entanto, eram muitos os revoltosos. Invadiram o palácio e foram em direção ao salão de reuniões, no qual se encontravam os três estados.' , 'Todos se levantaram, entreolharam-se temerosos, a parte do terceiro estado que se achava a frente da assembleia se juntou ao povo, aumentando em grande proporção o volume de revolucionários.' , 'Bispo Sieyès observava tudo diante da fresta entre a parede e a porta, conseguia sentir a adrenalina deslizar em suas veias, o que fazer em um cenário como este?' , 'Escolha o rumo em que queira que a história tome (você poderá voltar caso mude de ideia):' ];
const text = document.getElementById("text");
function nextDialogue(){
  
  if (textnum<=3){
    $("#seta").hide();
    document.getElementById("text").innerHTML = dialogue[textnum];
    typeWrite(text);
    setTimeout(mostra(),5000);
    textnum++;
  } else if (textnum==4){
    $('#box').html('<div class="data-container"><a href="bispoesconder.html" class="button">SE ESCONDER</a></div><div class="data-container"><a  href="bispojuntar.html" class="button">SE JUNTAR AO POVO</a></div><div class="data-container"><a href="viu.html" class="button">VOLTAR E TENTAR NOVAMENTE</a></div>') ;
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
$(window).ready(function () {

  $(".main__nav-btn").click(function (){
    $(".main_nav, .main_nav-btn").toggleClass("active");
  });

});

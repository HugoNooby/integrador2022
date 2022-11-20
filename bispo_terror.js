var textnum = 0;
var dialogue = ["Dieu merci! 27 de julho de 1794, o ápice mais marcante dessa história, é o fim do período do Terror, Robespierre e seus companheiros foram guilhotinados.", "Emmanuel Joseph Sieyès, apoiou Napoleão Bonaparte em mais um golpe, conhecido como 18 de Brumário, iniciando uma nova ditadura na França. O bispo também se tornou um cônsul juntamente com Napoleão e Pierre-Roger.", "Emmanuel partiu para Bruxelas em 1815 devido à restauração da Monarquia. Somente após quinze anos voltou para Paris.", "Veja! Ele está sentado na varanda, e está bem velho também, a rua em frente à sua casa mudou bastante, enquanto o bispo envelhecia a rua rejuvenesceu, e entre as fendas do chão, brotaram belas flores, depois de tantas revoltas, esse breve momento se torna calmo, porém… BUM! Veio de dentro da casa de Emmanuel, o velho se levantou e foi ver o que era. Ufa! Ele apenas se esqueceu da chaleira no fogo.", "FIM." ];
const text = document.getElementById("text");
function nextDialogue(){
  
  if (textnum<=3){
    $("#seta").hide();
    document.getElementById("text").innerHTML = dialogue[textnum];
    typeWrite(text);
    setTimeout(mostra(),5000);
    textnum++;
  } else if (textnum==4){
    $('#box').html('<div class="data-container"><a href="index.html" class="button">VOLTAR PARA O INÍCIO</a></div>') ;
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
var textnum = 0;
var dialogue = ['Seu voto mataria o rei, e o peso em sua consciência o afligiria pelo resto da vida. Mas nem todos pensavam assim.' , 'John Mcagainst, um dos membros, não suportava a ideia de ter como rei um traidor, e chegou à conclusão de que o voto contra a morte do soberano era uma traição ainda maior, então quis acabar com todos os que votaram a favor da vida de um rei infiel. No silêncio da madrugada enquanto o fazendeiro deixava garrafas de leite as portas das casas, dirigiu-se a elas e envenenou, com um elemento conhecido como arsênico, cada uma delas.' , 'Às cinco da tarde encontraram Emmanuel Sieyès no chão de sua cozinha, não havia mais ar em seus pulmões, apena seu olhar consciente e aturdido.', '"Não posso escolher como me sinto, mas posso escolher o que fazer a respeito." — William Shakespeare.' ];
const text = document.getElementById("text");
function nextDialogue(){
  
  if (textnum<=4){
    $("#seta").hide();
    document.getElementById("text").innerHTML = dialogue[textnum];
    typeWrite(text);
    setTimeout(mostra(),5000);
    textnum++;
  } else if (textnum==5){
    $('#box').html('<div class="data-container"><a href="bispoesconder.html" class="button">VOLTAR E TENTAR NOVAMENTE</a></div>') ;
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

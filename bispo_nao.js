var textnum = 0;
var dialogue = ["Não, com certeza não. Mas nem todos pensavam assim. John Mcagainst, um dos membros da assembleia, também estava lá, e ouviu tudo, até mesmo o sussurro mais baixo já dito, de Emmanuel. John acreditava que o rei era um traidor, e chegou à conclusão de que ser contra a morte do soberano era uma traição ainda maior, então quis acabar com o bispo. No silêncio da madrugada enquanto o fazendeiro deixava suas garrafas de leite as portas das casas, envenenou as de Emmanuel com um elemento conhecido como arsênico, cada uma delas. Às cinco da tarde encontraram Emmanuel Sieyès no chão de seu quarto, não havia mais ar em seus pulmões, apena seu olhar consciente e aturdido.", "'Que suas escolhas reflitam suas esperanças, não seus medos.' Nelson Mandela.", "Escolha o rumo em que queira que a história tome (você poderá voltar caso mude de ideia):" ];
const text = document.getElementById("text");
function nextDialogue(){
  
  if (textnum<=3){
    $("#seta").hide();
    document.getElementById("text").innerHTML = dialogue[textnum];
    typeWrite(text);
    setTimeout(mostra(),5000);
    textnum++;
  } else if (textnum==4){
    $('#box').html('<div class="data-container"><a href="ouviu.html" class="button">VOLTAR E TENTAR NOVAMENTE</a></div>') ;
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
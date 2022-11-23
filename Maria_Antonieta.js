var textnum = 0;

// [,"Escolha o rumo em que queira que a história tome (você poderá voltar caso mude de ideia):"];
var antonieta = ['Mamãe vem aos meus aposentos e me bombardeia com a notícia de que me casaria com o herdeiro do trono francês Delfim Luiz Augustoem, como uma forma de aproximar a Áustria e França, e que eu teria de aprender sobre a cultura, o idioma e os costumes.', 'Collety a Empregada:” Senhora o dia se aproxima, amanhã você deixará o palácio e renunciará ao trono austríaco, sentirei sua falta...',' Muito bem, precisa de algo?”',"Escolha o rumo em que queira que a história tome (você poderá voltar caso mude de ideia):",1 ];
var antonieta_sim_pg1 = ['"Collety você sempre esteve ao meu lado me servindo, sempre com um sorriso no rosto, sinto que não posso fazer isso."','Collety: "Minha senhora o que está dizendo? A senhora pretende...”','Maria Antonieta: "Sim, exatamente o que você está imaginando, quero que me ajude a fugir".','Collety: "Mas senhora..."','Maria Antonieta: "Sem MAS Collety, não me vire as costas agora, imploro que me ajude, não desejo me casar com uma pessoa que nem conheço, mesmo que eu tenha um dever com meu lar".','Collety: "Eu a ajudarei".','Com a ajuda de Collety, Maria Antonieta consegue fugir, porém no meio do caminho a carruagem que a levava foi alvo de assaltantes, saquearam e mataram todos, inclusive Maria.',"Escolha o rumo em que queira que a história tome (você poderá voltar caso mude de ideia):",2 ];
var naoantonieta = ['"Collety obrigado por me servir por tanto tempo sentirei falta de sua companhia.”','É 20 de abril de 1770, uma manhã fria, Maria Antonieta renuncia oficialmente o trono austríaco, emocionada se despede de sua mãe com um adeus','Maria Teresa, a mãe de Maria Antonieta: "Minha filha mais querida, faça bem ao povo francês, para que digam que eu os enviei um anjo.”',"Escolha o rumo em que queira que a história tome (você poderá voltar caso mude de ideia):",3];
var insolente = ['"Sim eu irei, saiba que contra minha vontade, não se preocupe, não a prejudicarei, no entanto espero que tudo o que amas se desfaça diante seus olhos!”','Maria Antonieta nunca chegou a França, sua comitiva sumiu sem explicações e, sua mãe presenciou a Áustria entrando em colapso.',"Escolha o rumo em que queira que a história tome (você poderá voltar caso mude de ideia):",4];
var semresposta = ['Maria Antonieta entrou em sua carruagem e partiu para Versailles. O rei da França recebeu Antonieta com alegria e entusiasmo, porém ela não retornou a mesma impressão em Delfim Luiz, mesmo após o casamento não demonstrava um grande interesse por Maria Antonieta, no início ela não se preocupou.','Maria Antonieta: "Todos os dias parecem iguais, há muitos que não ficaram felizes com a aliança entre Áustria e França. Possuo inimigas, a amante do rei, Madame Du Barry."','Foi o que Maria Antonieta escreveu em sua carta para a mãe que, induziu a filha para se aproximar de madame Du Barry, uma vez que ela possuía influência política sobre o rei. Isso era um perigo para os interesses da Áustria, então Maria Teresa pressionou a filha para que fosse simpática com a amante do rei.','Maria Antonieta:” Hoje ano novo de 1771, os franceses gostam de festas, preciso me aproximar de madame Du Barry, porém o que eu digo? Não simpatizo com ela."',"Escolha o rumo em que queira que a história tome (você poderá voltar caso mude de ideia):",5];
var envenenarbebida = ['Maria Antonieta enche dois copos com vinho e em um deles coloca veneno, mas por um descuido acaba trocando os copos. Sendo assim envenenada, e morre ali mesmo.',"Escolha o rumo em que queira que a história tome (você poderá voltar caso mude de ideia):",6];
var muitagenteaqui = ['Du Barry: "Sim, você tem razão".','Aquelas poucas palavras foram o suficiente. Madame Du Barry ficou satisfeita com o reconhecimento e a situação se acalmou, os meses se passaram, Maria se sentia cada vez mais abandonada pelo marido, ele preferia se distrair caçando ou fabricando chaves (seu hobby favorito), isso frustrava a mãe de Maria, ansiosa pela notícia de um neto, mas para sua decepção recebeu a notícia de que o casamento nem sequer havia sido consumado.','Maria Antonieta: "Isto não está dando certo, mas afinal o que mais posso fazer para tornar este casamento tolerável a mim?"',"Escolha o rumo em que queira que a história tome (você poderá voltar caso mude de ideia):",7];
var ciumes = ['Não surtiu efeito e Luís arranjou outra esposa.',8];
var organizarbailes = ['Depois de se tornar rainha da França, Maria Antonieta não mudou muito e continuou organizando festas, bailes e transformando Versailles em um enorme Cassino, no qual se endividou excentricamente. Se tornou cada vez mais frívola. ','Seu estilo de vida era completamente diferente do marido, quando ele se levantava ela ia para seus aposentos dormir. Enquanto isso, sua mãe Maria Teresa estava enlouquecendo na Áustria.','Maria Teresa:” Como minha filha permite tais prazeres, e não demonstra qualquer interesse em conhecer o seu próprio reino e as necessidades do povo?"','Grande era preocupação com Maria Antonieta, dias depois o imperador austríaco José II foi a França para conversar com a rainha, sua irmã.','José II: "Como rainha você deve cuidar de assuntos importantes, deve parar com essa vida de frivolidades, pois prejudica sua reputação, seu comportamento é um assunto muito comentado dentro e fora do país, a situação está grave, um herdeiro seria o ideal para esfriar as línguas do povo.',"Escolha o rumo em que queira que a história tome (você poderá voltar caso mude de ideia):",9];
var dispensar = ['Infelizmente ainda com suas extravagâncias, Maria Antonieta afundou sua reputação, adiantando-se a revolução e posteriormente sua morte e a de Luís.',10];
var aceitar = ['Maria Antonieta: "Sim talvez esteja certo, eu não prometo, mas tentarei me portar melhor a partir de agora".','Então a rainha ficou grávida e consequentemente muito mais tranquila, jogava cada vez menos e não ia tanto as festas e bailes, começou a se cuidar e a se alimentar bem. No dia 19 de dezembro de 1778 a rainha deu à luz a uma menina, que recebeu o nome de Maria Teresa, ela veio a ser a primeira de 4 filhos. No dia 22 de outubro de 1781 nasceu o tão esperado Delfim da França, que foi chamado de Luiz José.',' Em 27 de março de 1785 nasceu o terceiro filho, Luiz Carlos, ele entrou para a história como Luiz XVII.',' No dia 9 de junho de 1787 nasceu a sua última filha, Sofia Beatriz, que faleceu semanas antes do seu primeiro aniversário.','Maria Antonieta: "Agora que me tornei mãe tenho um dever para com meus filhos, uma decisão terei que fazer".',"Escolha o rumo em que queira que a história tome (você poderá voltar caso mude de ideia):",11];
var ficar = ['Consequência de sua decisão, Maria Antonieta criou seus filhos perto de festas e luxos da corte, não beneficiando suas imagens, os afundando perante o povo.',12];
var sair = ['Agora Maria era uma mulher mais madura, passava a maior parte do tempo com seus filhos no Petit Trianon, onde ela ordenou que construissem uma vila para camponeses. Lá viveram 12 famílias pobres. Ela e os seus filhos desfrutavam da beleza dos jardins, também costumava fazer peças teatrais, nas quais participava, era um modo de vida muito diferente do rígido protocolo da corte.','Maria Antonieta: "Mesmo tendo mudado meus hábitos o povo ainda esta descontente em relação a mim.',"Escolha o rumo em que queira que a história tome (você poderá voltar caso mude de ideia):",13];
var ouvir = ['Movida por seus ideais, Maria vai contra as acusações do povo dizendo que apenas queria cuidar dos filhos, mas o povo com ódio e desprezo incendiaram a casa onde ela e seus filhos estavam, matando a família enquanto dormiam.',14];
var nouvir = ['Maria Antonieta apenas ignorou os comentários, tempos depois caiu em grande tristeza após saber da fatídica morte de sua mãe, contudo lembrou de algo que ela havia dito "Conquiste o afeto do povo!"',"Infelizmente já era tarde demais e em julho de 1785 foi acusada injustamente de comprar um colar de diamantes caríssimos, o que arrasou com a pouca dignidade e reputação que Maria Antonieta ainda pudesse ter diante dos seus súditos.','Foi aí que Maria Antonieta finalmente se deu conta do ódio e desprezo que o povo sentia, ela não pôde se defender de forma justa contra as acusações, toda a França estava absolutamente convencida de que a rainha havia comprado a joia mais cara da Europa.','Como se não bastasse Maria Antonieta mais uma vez entrou em luto com a morte de seu segundo filho, ele sempre apresentou uma saúde delicada. O que Maria faria agora?','Escolha o rumo em que queira que a história tome (você poderá voltar caso mude de ideia):",15];
var desistir = ['Maria Antonieta teve depressão, o que a fez não se alimentar e dormir, assim faleceu dois meses depois.',16];
var resistir = ['Após a morte do irmão, Luiz Carlos tornou-se o novo Delfim da França, enquanto isso a revolução ia ganhando uma força descomunal em todo o país e algumas semanas depois trabalhadores e camponeses franceses invadiram a Bastilha para pegar armas e munição, isso marcou oficialmente o início da Revolução Francesa em Paris.','Na manhã do dia 6 de outubro de 1789, os revolucionários protestaram nas portas do palácio contra o Alto Preço e a escassez do pão. Alguns','Este rumor irritou ainda mais as massas os revolucionários rapidamente se uniram a estas manifestações para exigir normas políticas liberais e uma Monarquia Constitucional para a França a fúria ia tomando conta da multidão e conseguiram entrar no palácio matando todos os guardas que encontraram pela frente e um grupo foi diretamente aos aposentos da rainha.','Maria Antonieta:” eu acho que eles entraram no palácio certamente eles estão marchando em direção aos meus aposentos, pense o que eu farei.”',"Escolha o rumo em que queira que a história tome (você poderá voltar caso mude de ideia):",17];
var esperar = ['Para sua infelicidade os guardas tinham sido mortos, foram decapitados anteriormente pelos invasores, Maria Antonieta teve a mesma sorte.',18];
var fugir = ['Quando entraram no quarto da rainha, não havia ninguém, ela conseguiu escapar através de umas de uma pequna porta de madeira encoberta, foi até os aposentos do Rei. A família foi detida e levada para o Palácio das Tulherias em Paris, lá viveram em uma espécie de prisão domiciliar. Por outro lado os monarcas não queriam aceitar a monarquia Constitucional e procuraram desesperadamente ajuda de outras casas reais, porém não tiveram sucesso.','Na noite do dia 20 de junho de 1791 a família real fugiu com ajuda do Conde Fersen, o objetivo era sair da França e pedir ajuda a outras monarquias europeias. Ao chegarem na cidade de Warren foram reconhecidos e obrigados a fazer a viagem de volta à capital francesa. Por medo Luís XVI finalmente aceitou a constituição no dia 14 de setembro de 1791.','A França entrou em guerra com Áustria e Prússia no dia 10 de agosto de 1792, uma multidão armada invadiu o Palácio das Tulherias, os revolucionários exigiam a queda definitiva da monarquia francesa. Levando a família para a prisão do templo, as condições eram muito piores.','Maria Antonieta: "dia 3 de julho de 1793 possivelmente o pior dia da minha vida de alguns homens invadiram o meu quarto levando meu filho, fui levada para Conciergerie uma antiga Fortaleza que naquele momento era a prisão da república e sede do tribunal revolucionário, mais tarde também fui separada da minha filha Maria Teresa".','Maria Antonieta: "15 de outubro de 1793 fui a julgamento onde me acusaram de conspirar contra o país de enviar milhões em dinheiro para a Áustria de fazer intrigas de todo tipo de satisfazer os seus Caprichos arruinaram as Finanças do país promover os dias no Palácio de Versailles, então fui condenada e seria morta em uma guilhotina, dia dezesseis de outubro de 1793 subi no cadafalso sem querer pisei no pé do carrasco peço desculpas não tinha sido de propósito acho que ele não me ouviu fui posicionada na guilhotina e ..."',"Escolha o rumo em que queira que a história tome (você poderá voltar caso mude de ideia):",19];

//botoes
var botoes = [0,'<div class="data-container"><a href="antonieta_sim_pg1.html" class="button">Sim</a></div><div class="data-container"><a href="naoantonieta.html" class="button">Não</a></div>','<div class="data-container"><a href="antonieta.html" class="button">VOLTAR E TENTAR NOVAMENTE</a></div>','<div class="data-container"><a href="insolente.html" class="button">Responder de forma insolente</a></div><div class="data-container"><a href="semresposta.html" class="button">Seguir sem resposta</a></div><div class="data-container"><a href="antonieta" class="button">VOLTAR E TENTAR NOVAMENTE</a></div>','<div class="data-container"><a href="naoantonieta.html" class="button">VOLTAR E TENTAR NOVAMENTE</a></div>','<div class="data-container"><a href="envenenarbebida.html" class="button">envenenar sua bebida</a></div><div class="data-container"><a href="muitagenteaqui.html" class="button">Falar que tem muita gente aqui</a></div><div class="data-container"><a href="naoantonieta.html" class="button">VOLTAR E TENTAR NOVAMENTE</a></div>','<div class="data-container"><a href="semresposta.html" class="button">VOLTAR E TENTAR NOVAMENTE</a></div>','<div class="data-container"><a href="ciumes.html" class="button">Causar ciúmes</a></div><div class="data-container"><a href="organizarbailes.html" class="button">Organizar bailes</a></div><div class="data-container"><a href=".html" class="button">VOLTAR E TENTAR NOVAMENTE</a></div>','<div class="data-container"><a href="muitagenteaqui.html" class="button">VOLTAR E TENTAR NOVAMENTE</a></div>','<div class="data-container"><a href="dispensar.html" class="button">Dispensar as ideias do irmão</a></div><div class="data-container"><a href="aceitar.html" class="button">Aceitar os conselhos</a></div><div class="data-container"><a href=".html" class="button">VOLTAR E TENTAR NOVAMENTE</a></div>','<div class="data-container"><a href="organizarbailes.html" class="button">VOLTAR E TENTAR NOVAMENTE</a></div>','<div class="data-container"><a href="ficar.html" class="button">Ficar na Cidade</a></div><div class="data-container"><a href="sair.html" class="button">Sair dos Excessos da Corte</a></div><div class="data-container"><a href=".html" class="button">VOLTAR E TENTAR NOVAMENTE</a></div>','<div class="data-container"><a href="aceitar.html" class="button">VOLTAR E TENTAR NOVAMENTE</a></div>','<div class="data-container"><a href="ouvir.html" class="button">Repreendeer Críticas</a></div><div class="data-container"><a href="nouvir.html" class="button">Deixar Passar</a></div><div class="data-container"><a href=".html" class="button">VOLTAR E TENTAR NOVAMENTE</a></div>','<div class="data-container"><a href="sair.html" class="button">VOLTAR E TENTAR NOVAMENTE</a></div>','<div class="data-container"><a href="desistir.html" class="button">Desistir de tudo</a></div><div class="data-container"><a href="resistir.html" class="button">Tentar superar</a></div><div class="data-container"><a href=".html" class="button">VOLTAR E TENTAR NOVAMENTE</a></div>','<div class="data-container"><a href="nouvir.html" class="button">VOLTAR E TENTAR NOVAMENTE</a></div>','<div class="data-container"><a href="esperar.html" class="button">Confiar nos Guardas</a></div><div class="data-container"><a href="fugir.html" class="button">Tentar Fugir</a></div><div class="data-container"><a href=".html" class="button">VOLTAR E TENTAR NOVAMENTE</a></div>','<div class="data-container"><a href="resistir.html" class="button">VOLTAR E TENTAR NOVAMENTE</a></div>','<div class="data-container"><a href="escolha_personagens.html" class="button">Sair</a></div>'];
var pag = [0,'antonieta','antonieta_sim_pg1','naoantoneta','insolente','semresposta','envenenarbebida','muitagenteaqui','ciumes','organizarbailes','dispensar','aceitar','ficar','sair','ouvir','nouvir','desisiitir','resistir','esperar','fugir'];

const text = document.getElementById("text");
function nextDialogue(dialogue){
  
  if (textnum<=(dialogue.length-2)){
    $("#seta").hide();
    $('#box').html('<div class="char_name">Maria Antonieta</div><p id="text"></p><button class="arrow"  onclick="nextDialogue('+pag[dialogue[dialogue.lenght-1]]+')" id="seta"></button>') ;
    $("#text").text(dialogue[textnum]);
    typeWrite(text);
    setTimeout(mostra(),5000);
    textnum++;
  } else if (textnum==dialogue.length-1){
    $('#box').html(botoes[dialogue[textnum]]) ;
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

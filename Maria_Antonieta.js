var textnum = 0;

// [,"Escolha o rumo em que queira que a história tome (você poderá voltar caso mude de ideia):"];
var antonieta = ['Mamãe vem aos meus aposentos e me bombardeia com a notícia de que me casaria com o herdeiro do trono francês Delfim Luiz Augustoem, como uma forma de aproximar a Áustria e França, e que eu teria de aprender sobre a cultura, o idioma e os costumes.', 'Collety a Empregada:” Senhora o dia se aproxima, amanhã a senhora deixará o palácio e renunciará ao trono austríaco, sentirei sua falta... Teria um último pedido para mim senhora? Como uma forma de despedida?”',"Escolha o rumo em que queira que a história tome (você poderá voltar caso mude de ideia):" ];
var antonieta_sim_pg1 = ['"Collety você sempre esteve ao meu lado me servindo, sempre com um sorriso no rosto, sinto que não posso fazer isso."','Collety: Minha senhora o que está dizendo? A senhora pretende...”','Maria Antonieta: "Sim, exatamente o que você está imaginando, quero que me ajude a fugir".','Collety: "Mas senhora..."','Maria Antonieta: "Sem mas Collety, não me vire as costas agora, eu imploro que me ajude, não desejo me casar com uma pessoa que nem conheço, mesmo que eu tenha um dever com meu lar".','Collety: "Eu a ajudarei senhora".','Com a ajuda de Collety, Maria Antonieta consegue fugir,porém no meio do caminho a carruagem que a levava foi alvo de assaltantes, saquearam e mataram todos, inclusive Maria.',"Escolha o rumo em que queira que a história tome (você poderá voltar caso mude de ideia):" ];
var naoantonieta = ['“Collety obrigado por me servir por tanto tempo sentirei falta de sua companhia.”','20 de abril de 1770 em uma manhã fria Maria Antonieta após ter renunciado oficialmente ao trono austríaco e seus direitos, emocionada se despede de sua mãe com um adeus','Maria Teresa (mãe):” Minha filha mais querida uma grande distância nos separar faça tanto bem ao povo francês que digam que eu os enviei um anjo.”',"Escolha o rumo em que queira que a história tome (você poderá voltar caso mude de ideia):"];
var insolente = ['“Sim eu irei saiba que contra minha vontade, não se preocupe não a prejudicarei mas quero que saiba espero que tudo que ama se desfaça diante seus olhos!”','Maria Antonieta nunca chegou a França, sua comitiva sumiu sem explicações e sua mãe, presenciou a Áustria entrando em colapso.',"Escolha o rumo em que queira que a história tome (você poderá voltar caso mude de ideia):"];
var semresposta = ['Maria Antonieta entrou na sua carruagem e Partiu para Versailles ela nunca mais veria sua mãe, O Rei da França recebeu Antonieta com alegria e entusiasmo, porém ela não causou a mesma impressão em Delfim Luiz que mesmo após o casamento não mostrava um grande desinteresse por Maria Antonieta no início não se preocupou.','Maria Antonieta: “Todos os dias parecem tão iguais há muitos esnobes aqui e muitos não ficaram muito felizes com a aliança com a Áustria, já possuo até inimigas uma sendo a amante do Rei Madame du barry ela tem influência política sobre o rei.”','Foi o que Maria Antonieta escreveu em sua carta para sua mãe que induziu sua filha a se aproximar de madame du barry uma vez que a mesma possuía influência política sobre o rei e isso era um perigo para os interesses da Áustria, então Maria Teresa pressionou a filha para que fosse simpática com a amante do rei.','Maria Antonieta:” hoje já é dia de ano novo 1771 esses franceses gostam mesmo de festas preciso me aproximar de madame du barry más o que eu digo não simpatizo com ela.',"Escolha o rumo em que queira que a história tome (você poderá voltar caso mude de ideia):"];
var envenenarbebida = ['Maria Antonieta enche dois copos com vinho e em um deles coloca veneno, mas por um descuido acaba trocando os copos. Sendo assim envenenada, e morre ali mesmo.',"Escolha o rumo em que queira que a história tome (você poderá voltar caso mude de ideia):"];
var muitagenteaqui = ['Du Barry: "Sim você tem razão".','Aquelas poucas palavras foram a suficiente Madame du barry ficou satisfeita com o reconhecimento e a situação se acalmou os meses também foram passando e Maria se sentia cada vez mais abandonada pelo marido que preferia se distrair caçando ou fabricando Chaves o seu Hobby Favorito, o que frustrava a mãe que estava ansiosa pela notícia de um neto mas para sua decepção e tristeza se intensificou quando recebeu a notícia de que o casamento nem sequer havia sido consumado.','Maria Antonieta: "Isto não está dando certo, mas afinal o que mais posso fazer para tornar este casamento tolerável a mim?"',"Escolha o rumo em que queira que a história tome (você poderá voltar caso mude de ideia):"];
var ciumes = ['Não surtiu efeito e Luís arranjou outra esposa.'];
var organizarbailes = ['Depois de se tornar Rainha Maria Antonieta não mudou muito e continuou indo e organizando festas e bailes foi pouco a pouco transformando Versailles em um enorme Cassino onde se endividou muito no jogo e cada vez mais se deixava levar pelas compras de artigos caros centenas de vestidos acessórios e sapatos. foi se tornando cada vez mais frívola. ','seu estilo de vida era completamente diferente do marido quando ele se levantava ela ia dormir e ainda sim nos 16 era muito complacente com ela ele dava todos os seus Caprichos para pagar suas enormes dívidas de jogo e inclusive ele deu o Petit Trianon um palacete de estilo neoclássico construído por Luís 15 para uma das suas amantes. Enquanto sua mãe Maria Teresa estava enlouquecendo na Áustria.','Maria Teresa:” como minha filha permite tais Prazeres e não mostrar qualquer interesse em conhecer o seu próprio reino em saber como seus súditos viviam qual eram as suas necessidades e principalmente se comprometer para ajudar a melhorar a vida do povo."','tamanha a preocupação que tempos depois o imperador austríaco Jose 2ª foi até a França para conversar sobre a rainha que era sua irmã.','Jose 2ª: "como rainha deve cuidar dos assuntos importantes, deve parar com essa vida de jogo festas e frivolidades pois prejudica sua reputação, seu comportamento já era um assunto muito comentado dentro e fora do país, a situação está muito grave um herdeiro seria o ideal para esfriar os ânimos do povo.',"Escolha o rumo em que queira que a história tome (você poderá voltar caso mude de ideia):"];
var dispensar = ['Infelizmente ainda com suas extravagâncias, Maria Antonieta afundou sua reputação, adiantando-se a revolução e posteriormente sua morte e a de Luís.'];
var aceitar = ['Maria Antonieta: "Sim talvez esteja certo, eu não prometo, mas tentarei me portar melhor a partir de agora".','Então a rainha ficou grávida e consequentemente muito mais tranquila, jogava cada vez menos e não ia tanto as festas e bailes, começou a se cuidar e a se alimentar bem. No dia 19 de dezembro de 1778 a rainha deu à luz a uma menina, que recebeu o nome de Maria Teresa, ela veio a ser a primeira de 4 filhos.22 de outubro de 1781 nasceu o tão esperado Delfim da França, que foi chamado de Luiz José.<br>27 de março de 1.785 nasceu o seu terceiro filho, Luiz Carlos, ele entrou para a história como Luiz XVII.<br>9 de junho de 1787 nasceu a sua última filha, Sofia Beatriz, que faleceu semanas antes do seu primeiro aniversário.','Maria Antonieta: "Agora que me tornei mãe tenho um dever para com meus filhos, uma decisão terei que fazer".',"Escolha o rumo em que queira que a história tome (você poderá voltar caso mude de ideia):"];
var ficar = ['Devido sua decisão, Maria Antonieta criou seus filhos perto de festas e luxos da corte, não beneficiando suas imagens, os afundando perante o povo.'];
var sair = ['agora ela era uma mulher muito mais madura e passava a maior parte do seu tempo com seus filhos em um ambiente saudável e calmo no Petit Trianon onde ela mandou construir uma vila de camponeses lá viveram 12 famílias pobres por convite da Rainha e ela e os seus desfrutavam da Beleza dos Jardins e animais do Campo costumava fazer peças teatrais nas quais ela mesma participava era um modo de vida muito diferente do rígido protocolo da corte Maria passou a usar roupas mais leves e confortáveis.','Maria Antonieta: “Mesmo tendo mudado meus hábitos o povo ainda esta descontente em relação a mim após ficar mais no campo estão dizendo que eu estou rindo dos pobres camponeses do país fingindo ser um deles porém rodeada de todo luxo e sem passar necessidades.',"Escolha o rumo em que queira que a história tome (você poderá voltar caso mude de ideia):"];
var ouvir = ['Movida por seus ideais Maria vai contra as acusações do povo dizendo que apenas queria cuidar dos filhos longe de tudo aquilo mas o povo com tamanho ódio e desprezo causaram um incêndio durante a noite matando a família enquanto dormiam.'];
var nouvir = ['Então Maria Antonieta apenas ignorou os comentarios, tempos depois caiu em grande tristeza após saber a fatídica morte de sua mãe, contudo lembrou de algo que sua mãe havia dito "conquiste o afeto do povo" algo que após tentou realizar','Infelizmente já era tarde demais e em Julho de 1.785 foi acusada injustamente de comprar um colar de diamantes caríssimos e essa foi a gota d'água que arrasou com a pouca dignidade reputação que Maria Antonieta ainda pudesse ter diante dos seus súditos ela não havia encomendado aquele colar mas continha o seu nome e o joalheiro enviou uma fatura ao palácio de um milhão e meio de libras houve um processo judicial.','Foi aí que Maria Antonieta finalmente se deu conta do ódio e desprezo que o povo sentia, ela não pode se defender de forma justa contra as acusações em toda a França estava absolutamente convencida de que a rainha havia comprado a joia mais cara da Europa um colar de 747 diamantes.','Como se não bastasse Maria Antonieta mais uma vez entrou em luto com a morte de seu segundo filho que sempre apresentou uma saúde delicada, O que Maria faria agora.',"Escolha o rumo em que queira que a história tome (você poderá voltar caso mude de ideia):"];
var desistir = ['Maria Antonieta teve depressão, o que a fez não se alimentar e dormir, assim faleceu dois meses depois.'];
var resistir = ['Após a morte do irmão Luiz Carlos tornou-se o novo Delfim da França e enquanto isso a revolução ia ganhando uma força descomunal em todo o país e algumas semanas depois trabalhadores e camponeses franceses invadiram a Bastilha para pegar armas e munição isso marcou oficialmente o início da Revolução Francesa a Paris revolucionária continuou derramando todo o seu ódio contra Maria Antonieta acusando-a de todos os males da França.','E na manhã do dia seis de outubro de 1789 o grupo protestou nas portas do palácio contra o Alto Preço escassez do pão e a falta de direitos, diz a lenda que foi neste momento que quando disseram a Maria Antonieta que o povo não tinha pão para comer ela teria dito a famosa frase pois que comam brioches.','Este rumor irritou ainda mais as massas os revolucionários rapidamente se uniram a estas manifestações para exigir normas políticas liberais e uma Monarquia Constitucional para a França a fúria ia tomando conta da multidão e conseguiram entrar no palácio matando todos os guardas que encontraram pela frente e um grupo foi diretamente aos aposentos da rainha.','Maria Antonieta:” eu acho que eles entraram no palácio certamente eles estão marchando em direção aos meus aposentos, pense o que eu farei.”',"Escolha o rumo em que queira que a história tome (você poderá voltar caso mude de ideia):"];
var esperar = ['Para sua infelicidade os guardas tinham sido mortos, foram decapitados anteriormente pelos invasores, Maria Antonieta teve a mesma sorte.'];
var fugir = ['Quando entraram no quarto da rainha, não havia ninguém, ela conseguiu escapar através de umas de uma pequna porta de madeira encoberta, foi até os aposentos do Rei. A família foi detida e levada para o Palácio das Tulherias em Paris, lá viveram em uma espécie de prisão domiciliar. Por outro lado os monarcas não queriam aceitar a monarquia Constitucional e procuraram desesperadamente ajuda de outras casas reais, porém não tiveram sucesso.','Na noite do dia 20 de junho de 1791 a família real fugiu com ajuda do Conde Fersen, o objetivo era sair da França e pedir ajuda a outras monarquias europeias. Ao chegarem na cidade de Warren foram reconhecidos e obrigados a fazer a viagem de volta à capital francesa. Por medo Luís XVI finalmente aceitou a constituição no dia 14 de setembro de 1791.','A França entrou em guerra com Áustria e Prússia no dia 10 de agosto de 1792, uma multidão armada invadiu o Palácio das Tulherias, os revolucionários exigiam a queda definitiva da monarquia francesa. Levando a família para a prisão do templo, as condições eram muito piores.','Maria Antonieta: "dia 3 de julho de 1793 possivelmente o pior dia da minha vida de alguns homens invadiram o meu quarto levando meu filho, fui levada para Conciergerie uma antiga Fortaleza que naquele momento era a prisão da república e sede do tribunal revolucionário, mais tarde também fui separada da minha filha Maria Teresa".','Maria Antonieta: "15 de outubro de 1793 fui a julgamento onde me acusaram de conspirar contra o país de enviar milhões em dinheiro para a Áustria de fazer intrigas de todo tipo de satisfazer os seus Caprichos arruinaram as Finanças do país promover os dias no Palácio de Versailles, então fui condenada e seria morta em uma guilhotina, dia dezesseis de outubro de 1793 subi no cadafalso sem querer pisei no pé do carrasco peço desculpas não tinha sido de propósito acho que ele não me ouviu fui posicionada na guilhotina e ..."',"Escolha o rumo em que queira que a história tome (você poderá voltar caso mude de ideia):"];              

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

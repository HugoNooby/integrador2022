function pesquisa() {
  var personagem = document.getElementById("Campo").value;
  if (personagem == "Emmanuel") {
    document.getElementById("resultado").innerHTML =
      "Você sabe demais... Na verdade não, Emmanuel não é o narrador, apenas um político, escritor e eclesiástico francês. Também muito simpático quando o conhece melhor. Tente de novo!";
  } else if (personagem == "Scott") {
    document.getElementById("resultado").innerHTML =
      "Uau! Se esse jovem bonito (e lobisomem) fosse o narrador, bem... não passaria despercebido. Dependendo da temporada, Scott Mccall é Técnico veterinário, Co-Capitão da Equipe Lacrosse, Assistente de Treinador de Lacrosse, Estudante universitário ou um Veterinário. Não, ele não é o narrador, tente outra vez!";
  } else if (personagem == "Josef") {
    document.getElementById("resultado").innerHTML =
      "Se eu estivesse no seu lugar, com toda a certeza teria desconfiado de Josef, você pensa como eu. Josef Auguto é graduado em Engenharia da Computação pela Pontifícia Universidade Católica de Goiás, atualmente é professor do Departamento de Informática do Instituto Federal Goiano - Campus Ceres (Lattes: http://lattes.cnpq.br/2393555810493937). Não é ele, tente novamente!";
  } else if (personagem == "Maria") {
    document.getElementById("resultado").innerHTML =
      "Achou mesmo que Maria Antonieta teria tempo para observar alguém tão peculiar como Sieyès? Não é ela o narrador, Maria é a arquiduquesa da Áustria e esposa do rei Luís XVI. Tente outra vez!";
  } else if (personagem == "Thalia") {
    document.getElementById("resultado").innerHTML =
      "Thalia é professora dos cursos de Informática do Campus Ceres do Instituto Federal Goiano (IF Goiano). Mestranda no Programa de Pós-graduação em Ciência da Computação (INF/UFG). Bacharela em Sistemas de Informação também pelo IF Goiano - Campus Ceres (2019). Concluiu o Curso Técnico em Informática Integrado ao Ensino Médio, pela mesma instituição (2014). É uma das coordenadoras do projeto Meninas Digitais no Cerrado, além de colaboradora do Núcleo de Estudos e Pesquisa em Tecnologia da Informação (NEPeTI). Ela não é o narrador, mas é uma professora muito animada e inovadora. Tente outra vez! ";
  } else if (personagem == "Jughead") {
    document.getElementById("resultado").innerHTML =
      "Hummmmmm, esse foi um ótimo chute! Jughead Jones é Escritor, consequentemente narrador da história de sua cidade, mas não é o narrador desta história. Jug também é Estudante do Ensino Médio, Operador de Estande de Projeção, Membro/Líder de Gangue (não siga este exemplo). Tente de novo!";
  } else if ((personagem == "Cobra") | (personagem == "Rattlesnacke")) {
    document.getElementById("resultado").innerHTML =
      "Infelizmente ou felizmente não é a cobra da logo, acho que ela não teria tanta criatividade e paciência para isso. Mas você pode perguntar para a grande mente criativa lara.bruna@estudante.ifgoiano.edu.br sobre como nossa logo e nome do grupo foram originadas. Tente novamente encontrar o narrador!";
  } else if (personagem == "Natália") {
    document.getElementById("resultado").innerHTML =
      "Professora no Instituto Federal de Educação Ciência Tecnologia Goiano, Campus Ceres. Doutoranda no Programa de Pós Graduação em História da Universidade Estadual de Campinas (UNICAMP), também mestre em História pela Universidade Federal de Goiás (UFG). Natália possui muito conhecimento histórico, pergunte qualquer coisa sobre o tema que ela saberá responder. Mas não é o narrrador, tente de novo!";
  } else if (personagem == "") {
    document.getElementById("resultado").innerHTML =
      "";
  } else if (personagem == ""){
    document.getElementById("resultado").innerHTML = 
    "";
  } else {
    document.getElementById("resultado").innerHTML =
      "Esse personagem ainda não foi registrado.";
  }
}

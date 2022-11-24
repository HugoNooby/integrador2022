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
  } else if (personagem == "") {
    document.getElementById("resultado").innerHTML =
      "";
  } else if (personagem == "Jughead") {
    document.getElementById("resultado").innerHTML =
      "Hummmmmm, esse foi um ótimo chute! Jughead Jones é Escritor, consequentemente narrador da história de sua cidade, mas não é o narrador desta história. Jug também é Estudante do Ensino Médio, Operador de Estande de Projeção, Membro/Líder de Gangue (não siga este exemplo). Tente de novo!";
  } else if (personagem == "") {
    document.getElementById("resultado").innerHTML =
      "";
  } else if (personagem == "") {
    document.getElementById("resultado").innerHTML =
      "";
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

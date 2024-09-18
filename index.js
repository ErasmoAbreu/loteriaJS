function lottery() { // Define a função lottery
  var inputNumbers = []; // Array para armazenar os números inseridos pelo usuário
  var generatedNumbers = []; // Array para armazenar os números gerados aleatoriamente

  // Laço para coletar 6 números do usuário
  for (var i = 0; i < 6; i++) {
    // Pede ao usuário para inserir um número e converte para inteiro
    var number = parseInt(
      prompt("Digite o " + (i + 1) + "º número entre 1 e 60:")
    );
    
    // Verifica se o número é válido (não é NaN, está entre 1 e 60, e não é repetido)
    if (
      !isNaN(number) &&
      number >= 1 &&
      number <= 60 &&
      !inputNumbers.includes(number)
    ) {
      inputNumbers.push(number); // Adiciona o número válido ao array inputNumbers
    } else {
      // Se o número não for válido, exibe um alerta e termina a função
      alert("Por favor, insira um número válido entre 1 e 60 e sem repetição.");
      return;
    }
  }

  // Laço para gerar 6 números aleatórios
  while (generatedNumbers.length < 6) {
    // Gera um número aleatório entre 1 e 60
    var randomNumber = Math.floor(Math.random() * 60) + 1;

    // Verifica se o número gerado já não foi adicionado
    if (!generatedNumbers.includes(randomNumber)) {
      generatedNumbers.push(randomNumber); // Adiciona o número gerado ao array
    }
  }

  var acertos = 0; // Inicializa a contagem de acertos
  // Laço para comparar os números inseridos com os gerados
  for (var i = 0; i < 6; i++) {
    if (inputNumbers.includes(generatedNumbers[i])) {
      acertos += 1; // Incrementa a contagem de acertos se houver coincidência
    }
  }

  // Ordena os números gerados em ordem crescente
  const generatedNumbersSorted = generatedNumbers.sort(function (a, b) {
    return a - b;
  });

  // Ordena os números inseridos em ordem crescente
  const inputNumberSorted = inputNumbers.sort(function (a, b) {
    return a - b;
  });

  let resultado; // Variável para armazenar o resultado final
  // Verifica a quantidade de acertos e define o resultado correspondente
  if (acertos === 6) {
    resultado = "Você conseguiu uma SENA!";
    alert(resultado); // Alerta o usuário sobre a SENA
  } else if (acertos === 5) {
    resultado = "Você conseguiu uma QUINA!";
    alert(resultado); // Alerta o usuário sobre a QUINA
  } else if (acertos === 4) {
    resultado = "Você conseguiu uma QUADRA!";
    alert(resultado); // Alerta o usuário sobre a QUADRA
  } else {
    resultado = "Você não ganhou nada.";
    alert(resultado); // Alerta o usuário que não ganhou
  }

  // Obtém o elemento HTML onde o resultado será exibido
  var resultadoDiv = document.getElementById("resultado");
  
  // Exibe os números sorteados na página
  resultadoDiv.innerHTML =
    "<p>Números sorteados: " + generatedNumbersSorted.join(", ") + "</p>";

  // Exibe os números escolhidos pelo usuário na página
  resultadoDiv.innerHTML +=
    "<p> Numeros Escolhidos: " + inputNumberSorted.join(", ") + "</p>";

  // Exibe a quantidade de acertos na página
  resultadoDiv.innerHTML += "<p>Você acertou " + acertos + " número(s)!</p>";

  // Exibe o resultado final na página
  resultadoDiv.innerHTML += "<p>" + resultado + "</p>";
}

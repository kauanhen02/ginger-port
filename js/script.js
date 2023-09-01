// Array de objetos representando os itens da lista
var itens = [
  { nome: "Rosa Damascena (Óleo Essencial)", cas: "8007-01-0" },
  { nome: "Lavanda (Óleo Essencial)", cas: "8000-28-0" },
  { nome: "Sândalo (Óleo Essencial)", cas: "8006-87-9" },
  { nome: "Vetiver (Óleo Essencial)", cas: "8016-96-4" },
  { nome: "Patchouli (Óleo Essencial)", cas: "8014-09-3" },
  { nome: "Baunilha (Extrato)", cas: "8024-06-4" },
  { nome: "Musk (Sintético)", cas: "N/A" }, // Musk sintético não tem um único CAS
  { nome: "Jasmim (Óleo Essencial ou Absoluto)", cas: "8022-96-6" },
  { nome: "Bergamota (Óleo Essencial)", cas: "8007-75-8" },
  { nome: "Laranja (Óleo Essencial)", cas: "8008-57-9" },
  { nome: "Limão (Óleo Essencial)", cas: "8008-56-8" },
  { nome: "Rosa Bulgária (Óleo Essencial ou Absoluto)", cas: "84604-12-6" },
  { nome: "Cedro (Óleo Essencial)", cas: "8000-27-9" },
  { nome: "Incenso (Óleo Essencial)", cas: "8016-36-2" },
  { nome: "Gengibre (Óleo Essencial)", cas: "8007-08-7" },
  { nome: "Ylang-Ylang (Óleo Essencial)", cas: "8006-81-3" },
  { nome: "Pimenta Rosa (Óleo Essencial)", cas: "8006-77-7" },
  { nome: "Gálbano (Óleo Essencial)", cas: "93165-40-3" },
  { nome: "Sálvia (Óleo Essencial)", cas: "84082-66-6" },
  { nome: "Eucalipto (Óleo Essencial)", cas: "8000-48-4" }
  // Adicione mais itens aqui conforme necessário
];

  // Função para adicionar itens à lista
  function adicionarItensNaLista() {
    var lista = document.getElementById("minha-lista");

    // Limpa a lista antes de adicionar novos itens
    lista.innerHTML = "";

    // Adiciona os itens da lista ao elemento UL
    for (var i = 0; i < itens.length; i++) {
      var novoItem = document.createElement("li");
      novoItem.textContent = `Nome: ${itens[i].nome}, CAS: ${itens[i].cas}`;
      lista.appendChild(novoItem);
    }
  }

  // Chama a função para adicionar os itens na lista
  adicionarItensNaLista();

  // Função para pesquisar um item na lista
  function pesquisarItem() {
    var termoPesquisa = document.getElementById("pesquisaItem").value.toLowerCase();
    var listaRolavel = document.getElementById("lista-rolavel");
    var resultado = document.getElementById("resultadoPesquisa");

    // Limpa o resultado da pesquisa anterior
    resultado.innerHTML = "";

    // Divide o termo de pesquisa em palavras-chave
    var palavrasChave = termoPesquisa.split(" ");

    // Oculta a lista rolável
    listaRolavel.style.display = "none";

    // Verifica se o campo de pesquisa está vazio
    if (termoPesquisa === "") {
      listaRolavel.style.display = "block";
      return; // Se o campo de pesquisa estiver vazio, saia da função sem fazer a pesquisa
    }

    // Percorre os itens da lista em busca das palavras-chave
    for (var i = 0; i < itens.length; i++) {
      var itemTexto = `${itens[i].nome.toLowerCase()} ${itens[i].cas.toLowerCase()}`;
      var todasPalavrasChavePresentes = true;

      // Verifica se todas as palavras-chave estão presentes no texto do item
      for (var j = 0; j < palavrasChave.length; j++) {
        if (!itemTexto.includes(palavrasChave[j])) {
          todasPalavrasChavePresentes = false;
          break; // Se uma palavra-chave não estiver presente, saia do loop
        }
      }

      // Se todas as palavras-chave estiverem presentes, exiba o item
      if (todasPalavrasChavePresentes) {
        resultado.innerHTML += "<p>" + `Nome da MP: ${itens[i].nome}, CAS: ${itens[i].cas}` + "</p>";
      }
    }

    // Se nenhum resultado for encontrado, exibe uma mensagem
    if (resultado.innerHTML === "") {
      resultado.innerHTML = "<p>Infelizmente ainda não trabalhamos com este produto!</p>";
    }
  }

  // Função para verificar o campo de pesquisa e mostrar a lista se estiver vazio
  function verificarCampoPesquisa() {
    var termoPesquisa = document.getElementById("pesquisaItem").value;
    var listaRolavel = document.getElementById("lista-rolavel");

    if (termoPesquisa === "") {
      listaRolavel.style.display = "block";
    }
  }

  
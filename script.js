// ============================================================
//  CineList — CP3 | Meus Filmes Favoritos
//  Lógica em JavaScript puro, seguindo as restrições da aula.
// ============================================================

// ---------- Variáveis Globais: DOM ----------
var telaLogin  = document.querySelector("#tela-login");
var telaCrud   = document.querySelector("#tela-crud");

var inputUsuario = document.querySelector("#input-usuario");
var inputSenha   = document.querySelector("#input-senha");
var btnLogin     = document.querySelector("#btn-login");
var erroLogin    = document.querySelector("#erro-login");

var btnLogout         = document.querySelector("#btn-logout");
var inputFilme        = document.querySelector("#input-filme");
var btnAdicionarFim   = document.querySelector("#btn-adicionar-fim");
var btnAdicionarInicio = document.querySelector("#btn-adicionar-inicio");
var erroFilme         = document.querySelector("#erro-filme");
var listaFilmes       = document.querySelector("#lista-filmes");

// ---------- Array Principal (strings simples) ----------
var filmes = ["Harry Potter", "Star Wars", "Vingadores"];

// ============================================================
//  FUNÇÕES DE LOGIN
// ============================================================

function fazerLogin() {
  var usuario = inputUsuario.value.trim();
  var senha    = inputSenha.value.trim();

  if (usuario === "" || senha === "") {
    erroLogin.textContent = "⚠ Preencha o usuário e a senha para continuar.";
    return;
  }

  if (usuario !== "aluno" || senha !== "fiap2025") {
    erroLogin.textContent = "✗ Usuário ou senha incorretos. Tente novamente.";
    inputSenha.value = "";
    return;
  }

  erroLogin.textContent = "";
  telaLogin.classList.add("hidden");
  telaCrud.classList.remove("hidden");
}

function fazerLogout() {
  telaCrud.classList.add("hidden");
  telaLogin.classList.remove("hidden");
  inputUsuario.value = "";
  inputSenha.value   = "";
  erroLogin.textContent = "";
}

// ============================================================
//  FUNÇÕES DE CRUD
// ============================================================

function renderizar() {
  listaFilmes.innerHTML = "";

  if (filmes.length === 0) {
    var itemVazio = document.createElement("li");
    itemVazio.classList.add("lista-vazia");
    itemVazio.innerHTML = "<span>🎬</span>Nenhum filme na lista ainda.";
    listaFilmes.append(itemVazio);
    return;
  }

  filmes.forEach(function renderizarItem(filme, indice) {
    // Elemento <li>
    var li = document.createElement("li");

    // Div de informações (número + nome)
    var divInfo = document.createElement("div");
    divInfo.classList.add("item-info");

    var spanNumero = document.createElement("span");
    spanNumero.classList.add("item-numero");
    spanNumero.textContent = indice + 1;

    var spanNome = document.createElement("span");
    spanNome.classList.add("item-nome");
    spanNome.textContent = filme;

    divInfo.append(spanNumero);
    divInfo.append(spanNome);

    // Div de ações (editar + remover)
    var divAcoes = document.createElement("div");
    divAcoes.classList.add("item-acoes");

    var btnEditar = document.createElement("button");
    btnEditar.classList.add("btn-editar");
    btnEditar.textContent = "✏ Editar";

    var btnRemover = document.createElement("button");
    btnRemover.classList.add("btn-remover");
    btnRemover.textContent = "✕ Remover";

    // Evento: Editar
    btnEditar.addEventListener("click", function editarFilme() {
      var novoNome = prompt("Editar filme:", filmes[indice]);

      if (novoNome === null || novoNome.trim() === "") {
        return;
      }

      filmes[indice] = novoNome.trim();
      renderizar();
    });

    // Evento: Remover
    btnRemover.addEventListener("click", function removerFilme() {
      filmes.splice(indice, 1);
      renderizar();
    });

    divAcoes.append(btnEditar);
    divAcoes.append(btnRemover);

    // Montar o <li>
    li.append(divInfo);
    li.append(divAcoes);

    listaFilmes.append(li);
  });
}

function adicionarAoFinal() {
  var nome = inputFilme.value.trim();

  if (nome === "") {
    erroFilme.textContent = "⚠ Digite o nome do filme antes de adicionar.";
    return;
  }

  erroFilme.textContent = "";
  filmes.push(nome);
  inputFilme.value = "";
  renderizar();
}

function adicionarAoInicio() {
  var nome = inputFilme.value.trim();

  if (nome === "") {
    erroFilme.textContent = "⚠ Digite o nome do filme antes de adicionar.";
    return;
  }

  erroFilme.textContent = "";
  filmes.unshift(nome);
  inputFilme.value = "";
  renderizar();
}

function limparErroFilme() {
  if (erroFilme.textContent !== "") {
    erroFilme.textContent = "";
  }
}

// ============================================================
//  EVENTOS GLOBAIS
// ============================================================

btnLogin.addEventListener("click", function clickLogin() {
  fazerLogin();
});

btnLogout.addEventListener("click", function clickLogout() {
  fazerLogout();
});

btnAdicionarFim.addEventListener("click", function clickAdicionarFim() {
  adicionarAoFinal();
});

btnAdicionarInicio.addEventListener("click", function clickAdicionarInicio() {
  adicionarAoInicio();
});

inputFilme.addEventListener("input", function digitandoFilme() {
  limparErroFilme();
});

// Permite pressionar Enter nos campos de login
inputUsuario.addEventListener("keydown", function enterUsuario(evento) {
  if (evento.key === "Enter") {
    fazerLogin();
  }
});

inputSenha.addEventListener("keydown", function enterSenha(evento) {
  if (evento.key === "Enter") {
    fazerLogin();
  }
});

// Permite pressionar Enter no campo de filme (adiciona ao final)
inputFilme.addEventListener("keydown", function enterFilme(evento) {
  if (evento.key === "Enter") {
    adicionarAoFinal();
  }
});

// ============================================================
//  INICIALIZAÇÃO
// ============================================================
renderizar();
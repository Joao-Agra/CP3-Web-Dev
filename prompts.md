### 1. **IAs consultadas:**

Chat GPT (OpenAI), Claude(Anthropic) e Gemini(Google)

---

### 2. **Prompt utilizado:**

Olá! Preciso que você atue como um Engenheiro de Software Sênior e desenvolva uma aplicação web completa (HTML, CSS e JavaScript puro) para um trabalho acadêmico (CP3). O tema da aplicação será uma "Lista de Filmes Favoritos". 

Siga RIGOROSAMENTE todas as regras, restrições técnicas e o estilo de código abaixo. O código precisa refletir exatamente o nível de aprendizado de uma aula inicial de JavaScript, sem usar sintaxes avançadas ou bibliotecas.


 **1. REQUISITOS DE FUNCIONALIDADE**
A aplicação deve conter duas seções principais na mesma página, controladas via visibilidade (ocultar/exibir):

1 Tela de Login:
   - Usuário correto: "aluno"
   - Senha correta: "fiap2025"
   - Se os campos forem enviados vazios ou incorretos, exiba uma mensagem de erro na tela (em uma tag HTML, nunca use alert ou apenas console.log).
   - Se os dados estiverem corretos, oculte a tela de login e exiba a tela do CRUD.

2 Lista com CRUD Completo (Tema: Filmes):
   - Deve iniciar com 3 filmes pré-cadastrados no array (ex: "Harry Potter", "Star Wars", "Vingadores").
   - Botão para adicionar o filme ao FINAL da lista.
   - Botão para adicionar o filme ao INÍCIO da lista.
   - Renderização dinâmica da lista na tela.
   - Botão/Link ao lado de cada item para EDITAR o filme (usando prompt para capturar o novo nome).
   - Botão/Link ao lado de cada item para REMOVER o filme.


 **2. RESTRIÇÕES TÉCNICAS OBRIGATÓRIAS (MUITO IMPORTANTE)**
Para que o código seja aceito pelo professor, você deve seguir estritamente estas regras de desenvolvimento baseadas nas nossas aulas:

- Sem Objetos: Os dados devem ser armazenados estritamente em um array simples de strings (ex: const filmes = ["A", "B", "C"]). É proibido usar array de objetos.
- Manipulação por Índice: A remoção e a edição de um item devem ser feitas obrigatoriamente baseadas na posição (índice) do item no array, para evitar que itens com nomes idênticos sejam afetados ao mesmo tempo.
- Funções Nomeadas: Toda a lógica deve ser estruturada em funções nomeadas tradicionais (ex: function renderizar() { ... }). Não utilize Arrow Functions ( () => { } ).
- Sem Código Solto: Não deve haver código solto fora de funções, exceto pelas declarações de variáveis globais (elementos do DOM e o array) e a chamada inicial de renderização.
- Sintaxe JS do Professor: Utilize exclusivamente as funções e métodos abaixo para manipular o DOM e o Array:
  - document.querySelector("#id")
  - array.push() (para adicionar ao fim)
  - array.unshift() (para adicionar ao início)
  - array.forEach(function nomeDaFuncao(elemento, indice) { ... }) para percorrer a lista.
  - array.splice(indice, 1) para remover.
  - document.createElement("li"), elemento.textContent = ..., elemento.append(...) e lista.innerHTML = "" para renderizar.
  - elemento.addEventListener("click", function nome() { ... }) para os eventos.


 **3. VALIDAÇÕES OBRIGATÓRIAS**
- Não permitir enviar campos de login vazios.
- Não permitir adicionar filmes com o campo de texto vazio (exibir erro na tela).
- Na Edição: Se o usuário cancelar o prompt ou deixar o campo vazio, o item original deve ser mantido intacto.


 **4. DESIGN E CSS**
Escreva um arquivo CSS externo profissional, limpo e moderno. Utilize uma paleta de cores harmoniosa (ex: tons de azul escuro, cinza moderno e branco), cantos arredondados (border-radius), transições suaves nos botões (transition), estilize a lista (remover as bolinhas padrão do 'ul') e garanta que o layout seja centralizado e visualmente agradável tanto para a tela de login quanto para a interface do CRUD.

 **RESULTADO ESPERADO**
Por favor, forneça a solução dividida em 3 arquivos limpos e prontos:
1 `index.html` (Estrutura com as duas seções: login e lista).
2 `style.css` (Design moderno e responsivo).
3 `script.js` (Lógica estrita seguindo a sintaxe solicitada).

---

### 3. **Análise Final dos Problemas Encontrados:** 


### ChatGPT
O que acertou:

Seguiu a sintaxe básica do professor: var, push, unshift, splice, forEach com função nomeada
Código limpo e direto, sem funcionalidades extras
Array simples de strings correto
Erros exibidos na tela (sem alert)

O que errou:

Sem botão de logout
Sem .trim() nas validações — um espaço em branco passa como filme válido
CSS genérico: usa Arial, sem responsividade, sem identidade visual
Renderização dividida em duas funções (renderizarItem + renderizarLista) desnecessariamente


### Claude
O que acertou:

Array simples de strings correto
splice(indice, 1) por índice correto
Todas as funções nomeadas, sem arrow functions
CSS profissional com responsividade, animações e variáveis
Validações com .trim()
Logout implementado

O que errou:

Adicionou funcionalidades não solicitadas: logout, Enter para login, Enter para filme, estado de lista vazia


### Gemini
O que acertou:

Lógica funcional correta
forEach com função nomeada
push, unshift, splice corretos
CSS com identidade visual razoável

O que errou:

Usou const em vez de var — violação direta da sintaxe do nível de aula
Sem logout
Sem .trim() nas validações
Script no <head> com defer — foge do padrão ensinado (script antes de </body>)
Funções de editar e remover separadas recebendo índice como parâmetro, desnecessariamente mais complexo

---

### 4. **Justificativa pela escolha do Claude:** 

O Claude foi a Ia escolhida.
Apesar dos pontos levantados pelo avaliador, é o único código que não tem nenhuma violação estrutural grave. O ChatGPT não tem .trim() nas validações — o que é um bug real, não uma escolha. O Gemini usou const em vez de var, que é uma violação direta da sintaxe exigida. O Claude, por sua vez, não quebrou nenhuma regra — ele fez tudo que foi pedido e foi além. As funcionalidades extras (logout, Enter, estado vazio) e os métodos mais modernos (.classList, .trim()) funcionam corretamente e melhoram a aplicação. A única ressalva é que o professor pode considerar que extrapolou o escopo — mas isso é diferente de ter violado as restrições.

---

### 5. **Prompts:** 

1. Chat GPT:

### Index.html:

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Filmes Favoritos</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <section id="login">
        <div class="container">
            <h1>Login</h1>

            <input type="text" id="usuario" placeholder="Usuário">
            <input type="password" id="senha" placeholder="Senha">

            <button id="btnLogin">Entrar</button>

            <p id="erroLogin" class="erro"></p>
        </div>
    </section>

    <section id="crud" class="oculto">
        <div class="container">
            <h1>Lista de Filmes Favoritos</h1>

            <input type="text" id="filme" placeholder="Digite um filme">

            <div class="botoes">
                <button id="btnFinal">Adicionar ao Final</button>
                <button id="btnInicio">Adicionar ao Início</button>
            </div>

            <p id="erroFilme" class="erro"></p>

            <ul id="listaFilmes"></ul>
        </div>
    </section>

    <script src="script.js"></script>
</body>
</html>

### Style.css:

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: #1e293b;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
}

.container {
    background: #ffffff;
    width: 400px;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #0f172a;
}

input {
    width: 100%;
    padding: 12px;
    margin-bottom: 12px;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    outline: none;
}

input:focus {
    border-color: #2563eb;
}

button {
    padding: 10px 15px;
    border: none;
    border-radius: 8px;
    background: #2563eb;
    color: white;
    cursor: pointer;
    transition: 0.3s;
}

button:hover {
    background: #1d4ed8;
}

.botoes {
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
}

ul {
    list-style: none;
    margin-top: 15px;
}

li {
    background: #f1f5f9;
    padding: 12px;
    margin-bottom: 10px;
    border-radius: 8px;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.acoes {
    display: flex;
    gap: 8px;
}

.link {
    color: #2563eb;
    cursor: pointer;
    font-weight: bold;
}

.link:hover {
    text-decoration: underline;
}

.erro {
    color: red;
    margin-top: 10px;
    text-align: center;
}

.oculto {
    display: none;
}

### Script.js:

// ELEMENTOS LOGIN
var secaoLogin = document.querySelector("#login");
var secaoCrud = document.querySelector("#crud");

var usuario = document.querySelector("#usuario");
var senha = document.querySelector("#senha");

var btnLogin = document.querySelector("#btnLogin");
var erroLogin = document.querySelector("#erroLogin");

// ELEMENTOS CRUD
var filme = document.querySelector("#filme");
var btnFinal = document.querySelector("#btnFinal");
var btnInicio = document.querySelector("#btnInicio");
var listaFilmes = document.querySelector("#listaFilmes");
var erroFilme = document.querySelector("#erroFilme");

// ARRAY DE FILMES
var filmes = ["Harry Potter", "Star Wars", "Vingadores"];

// LOGIN
function fazerLogin() {
    erroLogin.textContent = "";

    if (usuario.value === "" || senha.value === "") {
        erroLogin.textContent = "Preencha todos os campos.";
        return;
    }

    if (usuario.value === "aluno" && senha.value === "fiap2025") {
        secaoLogin.classList.add("oculto");
        secaoCrud.classList.remove("oculto");
    } else {
        erroLogin.textContent = "Usuário ou senha inválidos.";
    }
}

// ADICIONAR AO FINAL
function adicionarFinal() {
    erroFilme.textContent = "";

    if (filme.value === "") {
        erroFilme.textContent = "Digite um filme.";
        return;
    }

    filmes.push(filme.value);

    filme.value = "";

    renderizarLista();
}

// ADICIONAR AO INÍCIO
function adicionarInicio() {
    erroFilme.textContent = "";

    if (filme.value === "") {
        erroFilme.textContent = "Digite um filme.";
        return;
    }

    filmes.unshift(filme.value);

    filme.value = "";

    renderizarLista();
}

// REMOVER FILME
function removerFilme(indice) {
    filmes.splice(indice, 1);

    renderizarLista();
}

// EDITAR FILME
function editarFilme(indice) {
    var novoNome = prompt("Digite o novo nome do filme:");

    if (novoNome === null || novoNome === "") {
        return;
    }

    filmes[indice] = novoNome;

    renderizarLista();
}

// RENDERIZAÇÃO
function renderizarItem(item, indice) {
    var li = document.createElement("li");

    var texto = document.createElement("span");
    texto.textContent = item;

    var acoes = document.createElement("div");
    acoes.className = "acoes";

    var editar = document.createElement("span");
    editar.textContent = "Editar";
    editar.className = "link";

    var remover = document.createElement("span");
    remover.textContent = "Remover";
    remover.className = "link";

    editar.addEventListener("click", function editarEvento() {
        editarFilme(indice);
    });

    remover.addEventListener("click", function removerEvento() {
        removerFilme(indice);
    });

    acoes.append(editar);
    acoes.append(remover);

    li.append(texto);
    li.append(acoes);

    listaFilmes.append(li);
}

function renderizarLista() {
    listaFilmes.innerHTML = "";

    filmes.forEach(function percorrerLista(item, indice) {
        renderizarItem(item, indice);
    });
}

// EVENTOS
btnLogin.addEventListener("click", function eventoLogin() {
    fazerLogin();
});

btnFinal.addEventListener("click", function eventoFinal() {
    adicionarFinal();
});

btnInicio.addEventListener("click", function eventoInicio() {
    adicionarInicio();
});

// CHAMADA INICIAL
renderizarLista();

2. Claude:

### Index.html:

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CP3 — Meus Filmes Favoritos</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <!-- ======================== TELA DE LOGIN ======================== -->
  <section id="tela-login">
    <div class="login-card">
      <div class="login-logo">
        <span class="logo-icon">🎬</span>
        <h1 class="logo-title">CineList</h1>
        <p class="logo-sub">Sua lista de filmes favoritos</p>
      </div>

      <div class="form-group">
        <label for="input-usuario">Usuário</label>
        <input type="text" id="input-usuario" placeholder="Digite seu usuário" autocomplete="off" />
      </div>

      <div class="form-group">
        <label for="input-senha">Senha</label>
        <input type="password" id="input-senha" placeholder="Digite sua senha" />
      </div>

      <p id="erro-login" class="mensagem-erro"></p>

      <button id="btn-login">Entrar</button>
    </div>
  </section>

  <!-- ======================== TELA DO CRUD ======================== -->
  <section id="tela-crud" class="hidden">
    <header class="crud-header">
      <div class="header-brand">
        <span class="logo-icon-sm">🎬</span>
        <span class="header-title">CineList</span>
      </div>
      <button id="btn-logout">Sair</button>
    </header>

    <main class="crud-main">
      <div class="crud-card">
        <h2 class="crud-titulo">Meus Filmes Favoritos</h2>

        <div class="input-area">
          <input type="text" id="input-filme" placeholder="Nome do filme..." autocomplete="off" />
          <div class="btn-group">
            <button id="btn-adicionar-fim" class="btn-primario">+ Adicionar ao Final</button>
            <button id="btn-adicionar-inicio" class="btn-secundario">+ Adicionar ao Início</button>
          </div>
        </div>

        <p id="erro-filme" class="mensagem-erro"></p>

        <div class="lista-wrapper">
          <ul id="lista-filmes"></ul>
        </div>
      </div>
    </main>
  </section>

  <script src="script.js"></script>
</body>
</html>

### Style.css:

/* ============================================================
   CineList — CP3 | Meus Filmes Favoritos
   Paleta: Azul-marinho escuro, cinza grafite e dourado
   ============================================================ */

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500;600&display=swap');

/* ---------- Reset & Base ---------- */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --bg-deep:       #0d1117;
  --bg-card:       #161b22;
  --bg-card2:      #1c2330;
  --border:        #2d3748;
  --gold:          #d4a843;
  --gold-light:    #f0c96a;
  --gold-dim:      rgba(212, 168, 67, 0.15);
  --text-primary:  #e6edf3;
  --text-secondary:#8b949e;
  --text-muted:    #4d5566;
  --red-soft:      #f85149;
  --red-dim:       rgba(248, 81, 73, 0.12);
  --blue-soft:     #58a6ff;
  --blue-dim:      rgba(88, 166, 255, 0.12);
  --radius-sm:     6px;
  --radius-md:     12px;
  --radius-lg:     18px;
  --shadow-card:   0 8px 32px rgba(0,0,0,0.5);
  --shadow-btn:    0 4px 14px rgba(212,168,67,0.25);
  --transition:    0.22s ease;
}

html, body {
  min-height: 100vh;
  font-family: 'DM Sans', sans-serif;
  background-color: var(--bg-deep);
  color: var(--text-primary);
  line-height: 1.6;
}

/* ---------- Utility ---------- */
.hidden {
  display: none !important;
}

.mensagem-erro {
  color: var(--red-soft);
  font-size: 0.82rem;
  font-weight: 500;
  min-height: 1.2em;
  margin-top: 6px;
  letter-spacing: 0.01em;
}

/* ============================================================
   TELA DE LOGIN
   ============================================================ */
#tela-login {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background:
    radial-gradient(ellipse at 20% 50%, rgba(212,168,67,0.06) 0%, transparent 60%),
    radial-gradient(ellipse at 80% 20%, rgba(88,166,255,0.05) 0%, transparent 55%),
    var(--bg-deep);
}

.login-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 48px 44px;
  width: 100%;
  max-width: 400px;
  box-shadow: var(--shadow-card);
  animation: fadeSlideUp 0.45s ease both;
}

.login-logo {
  text-align: center;
  margin-bottom: 36px;
}

.logo-icon {
  font-size: 2.8rem;
  display: block;
  margin-bottom: 10px;
  filter: drop-shadow(0 0 12px rgba(212,168,67,0.4));
}

.logo-title {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: var(--gold);
  letter-spacing: 0.04em;
  line-height: 1;
}

.logo-sub {
  color: var(--text-secondary);
  font-size: 0.82rem;
  margin-top: 6px;
  font-weight: 300;
}

/* ---------- Form Groups ---------- */
.form-group {
  margin-bottom: 18px;
}

.form-group label {
  display: block;
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 7px;
}

.form-group input,
#input-filme {
  width: 100%;
  background: var(--bg-deep);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  color: var(--text-primary);
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  padding: 11px 14px;
  transition: border-color var(--transition), box-shadow var(--transition);
  outline: none;
}

.form-group input:focus,
#input-filme:focus {
  border-color: var(--gold);
  box-shadow: 0 0 0 3px var(--gold-dim);
}

.form-group input::placeholder,
#input-filme::placeholder {
  color: var(--text-muted);
}

/* ---------- Login Button ---------- */
#btn-login {
  width: 100%;
  margin-top: 10px;
  padding: 12px;
  background: var(--gold);
  color: #0d1117;
  border: none;
  border-radius: var(--radius-sm);
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition: background var(--transition), box-shadow var(--transition), transform var(--transition);
  box-shadow: var(--shadow-btn);
}

#btn-login:hover {
  background: var(--gold-light);
  box-shadow: 0 6px 20px rgba(212,168,67,0.38);
  transform: translateY(-1px);
}

#btn-login:active {
  transform: translateY(0);
}

/* ============================================================
   TELA CRUD
   ============================================================ */
#tela-crud {
  min-height: 100vh;
  background:
    radial-gradient(ellipse at 70% 80%, rgba(212,168,67,0.05) 0%, transparent 55%),
    var(--bg-deep);
  animation: fadeIn 0.35s ease both;
}

/* ---------- Header ---------- */
.crud-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  background: var(--bg-card);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 10;
}

.header-brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-icon-sm {
  font-size: 1.4rem;
}

.header-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.25rem;
  color: var(--gold);
  letter-spacing: 0.05em;
}

#btn-logout {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-secondary);
  border-radius: var(--radius-sm);
  padding: 7px 18px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.82rem;
  font-weight: 500;
  cursor: pointer;
  transition: border-color var(--transition), color var(--transition);
}

#btn-logout:hover {
  border-color: var(--red-soft);
  color: var(--red-soft);
}

/* ---------- Main Content ---------- */
.crud-main {
  display: flex;
  justify-content: center;
  padding: 40px 24px 60px;
}

.crud-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 36px 40px;
  width: 100%;
  max-width: 620px;
  box-shadow: var(--shadow-card);
}

.crud-titulo {
  font-family: 'Playfair Display', serif;
  font-size: 1.55rem;
  color: var(--text-primary);
  margin-bottom: 28px;
  padding-bottom: 18px;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  gap: 10px;
}

.crud-titulo::before {
  content: '🎥';
  font-size: 1.3rem;
}

/* ---------- Input Area ---------- */
.input-area {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 4px;
}

.btn-group {
  display: flex;
  gap: 10px;
}

.btn-primario,
.btn-secundario {
  flex: 1;
  padding: 10px 16px;
  border: none;
  border-radius: var(--radius-sm);
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: background var(--transition), transform var(--transition), box-shadow var(--transition);
  letter-spacing: 0.02em;
}

.btn-primario {
  background: var(--gold);
  color: #0d1117;
  box-shadow: var(--shadow-btn);
}

.btn-primario:hover {
  background: var(--gold-light);
  transform: translateY(-1px);
  box-shadow: 0 6px 18px rgba(212,168,67,0.35);
}

.btn-secundario {
  background: var(--bg-card2);
  color: var(--text-primary);
  border: 1px solid var(--border);
}

.btn-secundario:hover {
  background: var(--blue-dim);
  border-color: var(--blue-soft);
  color: var(--blue-soft);
  transform: translateY(-1px);
}

.btn-primario:active,
.btn-secundario:active {
  transform: translateY(0);
}

/* ---------- Lista ---------- */
.lista-wrapper {
  margin-top: 24px;
}

#lista-filmes {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* Cada item da lista */
#lista-filmes li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--bg-card2);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 14px 18px;
  transition: border-color var(--transition), transform var(--transition);
  animation: fadeSlideRight 0.3s ease both;
}

#lista-filmes li:hover {
  border-color: rgba(212,168,67,0.3);
  transform: translateX(3px);
}

/* Número de posição + nome */
.item-info {
  display: flex;
  align-items: center;
  gap: 14px;
}

.item-numero {
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--text-muted);
  background: var(--bg-deep);
  border: 1px solid var(--border);
  border-radius: 4px;
  width: 28px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  letter-spacing: 0.02em;
}

.item-nome {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-primary);
}

/* Botões de ação */
.item-acoes {
  display: flex;
  gap: 8px;
  flex-shrink: 0;
}

.btn-editar,
.btn-remover {
  border: none;
  border-radius: var(--radius-sm);
  padding: 6px 12px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
  transition: background var(--transition), color var(--transition), transform var(--transition);
  letter-spacing: 0.02em;
}

.btn-editar {
  background: var(--blue-dim);
  color: var(--blue-soft);
  border: 1px solid transparent;
}

.btn-editar:hover {
  background: var(--blue-soft);
  color: var(--bg-deep);
  transform: scale(1.05);
}

.btn-remover {
  background: var(--red-dim);
  color: var(--red-soft);
  border: 1px solid transparent;
}

.btn-remover:hover {
  background: var(--red-soft);
  color: #fff;
  transform: scale(1.05);
}

/* ---------- Estado vazio ---------- */
.lista-vazia {
  text-align: center;
  padding: 40px 0;
  color: var(--text-muted);
  font-size: 0.9rem;
}

.lista-vazia span {
  display: block;
  font-size: 2rem;
  margin-bottom: 10px;
  opacity: 0.4;
}

/* ============================================================
   ANIMAÇÕES
   ============================================================ */
@keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@keyframes fadeSlideRight {
  from { opacity: 0; transform: translateX(-12px); }
  to   { opacity: 1; transform: translateX(0); }
}

/* ============================================================
   RESPONSIVIDADE
   ============================================================ */
@media (max-width: 540px) {
  .login-card {
    padding: 36px 26px;
  }

  .crud-card {
    padding: 26px 20px;
  }

  .btn-group {
    flex-direction: column;
  }

  .crud-header {
    padding: 14px 20px;
  }

  .item-acoes {
    gap: 6px;
  }

  .btn-editar,
  .btn-remover {
    padding: 5px 9px;
    font-size: 0.73rem;
  }
}

### Script.js:

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

3. Gemini:

### Index.html:

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gerenciador de Filmes Favoritos</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>

    <main class="container">
        <section id="secaoLogin" class="box-card">
            <h2>Acesso ao Sistema</h2>
            <p class="subtitulo">Insira suas credenciais acadêmicas</p>
            
            <div class="campo-grupo">
                <label for="inputUsuario">Usuário</label>
                <input type="text" id="inputUsuario" placeholder="Digite seu usuário">
            </div>
            
            <div class="campo-grupo">
                <label for="inputSenha">Senha</label>
                <input type="password" id="inputSenha" placeholder="Digite sua senha">
            </div>
            
            <p id="erroLogin" class="mensagem-erro"></p>
            
            <button id="btnEntrar" class="btn-principal">Entrar</button>
        </section>

        <section id="secaoCrud" class="box-card ocultar">
            <header class="crud-header">
                <h2>Meus Filmes Favoritos</h2>
                <p class="subtitulo">Gerencie sua lista de reprodução</p>
            </header>

            <div class="formulario-crud">
                <div class="campo-grupo">
                    <input type="text" id="inputFilme" placeholder="Nome do filme...">
                </div>
                <p id="erroFilme" class="mensagem-erro"></p>
                
                <div class="botoes-grupo">
                    <button id="btnAdicionarFim" class="btn-acao">Adicionar ao Fim</button>
                    <button id="btnAdicionarInicio" class="btn-acao btn-secundario">Adicionar ao Início</button>
                </div>
            </div>

            <hr class="divisor">

            <div class="lista-container">
                <ul id="listaFilmes"></ul>
            </div>
        </section>
    </main>

</body>
</html>

### Style.css:

/* Definições de Cores e Reset Global */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #f0f4f8;
    color: #1a202c;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
}

.container {
    width: 100%;
    max-width: 480px;
}

/* Estrutura dos Cards */
.box-card {
    background: #ffffff;
    border-radius: 12px;
    padding: 35px;
    box-shadow: 0 8px 24px rgba(26, 32, 44, 0.08);
}

h2 {
    color: #0f2c59;
    font-size: 24px;
    margin-bottom: 6px;
    text-align: center;
}

.subtitulo {
    color: #718096;
    font-size: 14px;
    text-align: center;
    margin-bottom: 25px;
}

/* Campos de Entrada */
.campo-grupo {
    margin-bottom: 18px;
    width: 100%;
}

label {
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: #4a5568;
    margin-bottom: 6px;
}

input {
    width: 100%;
    padding: 12px 16px;
    border: 1.5px solid #cbd5e0;
    border-radius: 8px;
    font-size: 15px;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
}

input:focus {
    border-color: #10b981;
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.15);
}

/* Botões */
button {
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    transition: background-color 0.2s, transform 0.1s;
}

button:active {
    transform: scale(0.98);
}

.btn-principal {
    width: 100%;
    background-color: #0f2c59;
    color: #ffffff;
    padding: 14px;
    margin-top: 10px;
}

.btn-principal:hover {
    background-color: #1e40af;
}

.botoes-grupo {
    display: flex;
    gap: 12px;
}

.btn-acao {
    flex: 1;
    background-color: #10b981;
    color: #ffffff;
    padding: 12px;
}

.btn-acao:hover {
    background-color: #059669;
}

.btn-secundario {
    background-color: #4f46e5;
}

.btn-secundario:hover {
    background-color: #4338ca;
}

/* Mensagens de Validação */
.mensagem-erro {
    color: #e53e3e;
    font-size: 13px;
    margin-bottom: 12px;
    min-height: 18px;
    font-weight: 500;
}

/* Linha Divisória */
.divisor {
    border: 0;
    height: 1px;
    background: #e2e8f0;
    margin: 25px 0;
}

/* Renderização da Lista Estilizada */
#listaFilmes {
    list-style: none;
}

.item-filme {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 12px 16px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.texto-filme {
    font-size: 15px;
    color: #2d3748;
    word-break: break-word;
}

.acoes-item {
    display: flex;
    gap: 8px;
}

.btn-editar, .btn-remover {
    padding: 6px 12px;
    font-size: 12px;
    border-radius: 6px;
}

.btn-editar {
    background-color: #f59e0b;
    color: white;
}

.btn-editar:hover {
    background-color: #d97706;
}

.btn-remover {
    background-color: #ef4444;
    color: white;
}

.btn-remover:hover {
    background-color: #dc2626;
}

/* Estados de Visibilidade */
.ocultar {
    display: none !important;
}

### Script.js:

// Declarando variáveis globais e mapeando os elementos do DOM
const secaoLogin = document.querySelector("#secaoLogin");
const secaoCrud = document.querySelector("#secaoCrud");

const inputUsuario = document.querySelector("#inputUsuario");
const inputSenha = document.querySelector("#inputSenha");
const erroLogin = document.querySelector("#erroLogin");
const btnEntrar = document.querySelector("#btnEntrar");

const inputFilme = document.querySelector("#inputFilme");
const erroFilme = document.querySelector("#erroFilme");
const btnAdicionarFim = document.querySelector("#btnAdicionarFim");
const btnAdicionarInicio = document.querySelector("#btnAdicionarInicio");
const listaFilmes = document.querySelector("#listaFilmes");

// Banco de dados em memória utilizando array estrito de strings (conforme exigido)
const filmes = ["Harry Potter", "Star Wars", "Vingadores"];

// Função responsável por atualizar visualmente a lista na tela por meio de manipulação do DOM
function renderizar() {
    listaFilmes.innerHTML = "";

    filmes.forEach(function iterarFilmes(elementoAtual, indice) {
        // Criando a estrutura de itens da lista
        const listItem = document.createElement("li");
        listItem.className = "item-filme";

        const spanTexto = document.createElement("span");
        spanTexto.className = "texto-filme";
        spanTexto.textContent = elementoAtual;

        const containerAcoes = document.createElement("div");
        containerAcoes.className = "acoes-item";

        // Criação do botão de edição associado ao índice
        const btnEditar = document.createElement("button");
        btnEditar.className = "btn-editar";
        btnEditar.textContent = "Editar";
        btnEditar.addEventListener("click", function acaoEditar() {
            executarEdicao(indice);
        });

        // Criação do botão de remoção associado ao índice
        const btnRemover = document.createElement("button");
        btnRemover.className = "btn-remover";
        btnRemover.textContent = "Remover";
        btnRemover.addEventListener("click", function acaoRemover() {
            executarRemocao(indice);
        });

        // Montagem do elemento na hierarquia correta
        containerAcoes.append(btnEditar);
        containerAcoes.append(btnRemover);
        listItem.append(spanTexto);
        listItem.append(containerAcoes);
        
        listaFilmes.append(listItem);
    });
}

// Lógica de Autenticação da tela de login
function autenticarUsuario() {
    const usuario = inputUsuario.value;
    const senha = inputSenha.value;

    erroLogin.textContent = "";

    // Validação de campos vazios
    if (usuario === "" || senha === "") {
        erroLogin.textContent = "Por favor, preencha todos os campos.";
        return;
    }

    // Validação de credenciais corretas
    if (usuario === "aluno" && senha === "fiap2025") {
        secaoLogin.className = "box-card ocultar";
        secaoCrud.className = "box-card";
    } else {
        erroLogin.textContent = "Usuário ou senha incorretos.";
    }
}

// Adiciona um item ao final do array
function adicionarAoFinal() {
    const novoFilme = inputFilme.value;
    erroFilme.textContent = "";

    if (novoFilme === "") {
        erroFilme.textContent = "O nome do filme não pode estar vazio.";
        return;
    }

    filmes.push(novoFilme);
    inputFilme.value = "";
    renderizar();
}

// Adiciona um item ao início do array
function adicionarAoInicio() {
    const novoFilme = inputFilme.value;
    erroFilme.textContent = "";

    if (novoFilme === "") {
        erroFilme.textContent = "O nome do filme não pode estar vazio.";
        return;
    }

    filmes.unshift(novoFilme);
    inputFilme.value = "";
    renderizar();
}

// Atualiza o item por índice mantendo a validação de cancelamento e de string vazia
function executarEdicao(indiceAlvo) {
    const valorOriginal = filmes[indiceAlvo];
    const novoValor = prompt("Edite o nome do filme:", valorOriginal);

    // Validação obrigatória: cancelamento retorna 'null', inputs vazios são ignorados
    if (novoValor !== null && novoValor !== "") {
        filmes[indiceAlvo] = novoValor;
        renderizar();
    }
}

// Remove o elemento exclusivamente pelo índice para evitar remoções duplicadas indesejadas
function executarRemocao(indiceAlvo) {
    filmes.splice(indiceAlvo, 1);
    renderizar();
}

// Mapeamento dos gatilhos de eventos utilizando funções nomeadas
btnEntrar.addEventListener("click", function clicarEntrar() {
    autenticarUsuario();
});

btnAdicionarFim.addEventListener("click", function clicarFim() {
    adicionarAoFinal();
});

btnAdicionarInicio.addEventListener("click", function clicarInicio() {
    adicionarAoInicio();
});

// Inicialização segura da primeira renderização da lista na carga do script
renderizar();


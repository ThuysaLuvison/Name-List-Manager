let names = [];

function adicionarNome() {
  const input = document.getElementById("nomeInput");
  const nome = input.value.trim();

  if (nome === "") {
    PMsg.textContent = "Por favor, digite um nome válido!";
    return;
  }
  names.push(nome);
  PMsg.textContent = "Nome adicionado com sucesso!";
  input.value = "";
  input.focus();
}

function Listar() {
  const PMsg = document.getElementById("PMsg");

  PMsg.innerHTML = names.join("<br>");
  if (names.length === 0) {
    PMsg.textContent = "Nenhum nome na lista.";
    return;
  }
}

function Atualizar() {
  const input = document.getElementById("nomeInput");
  const nomeAntigo = input.value;
  const nomeNovo = prompt("Digite o novo nome:");
  const PMsg = document.getElementById("PMsg");

  if (nomeNovo == "" || !nomeAntigo) {
    PMsg.textContent = "Por favor, digite um nome valido para atualizar!";
    return;
  }

  const index = names.indexOf(nomeAntigo);

  if (index === -1) {
    PMsg.textContent = "Nome não encontrado na lista.";
  } else {
    names[index] = nomeNovo;
    PMsg.textContent = "Nome atualizado com sucesso!";
    input.value = "";
    input.focus();
    Listar();
  }
}

function Excluir() {
  const indice = prompt("Digite o número do nome que deseja excluir:");
  const pos = parseInt(indice) - 1;

  if (confirm(`Deseja realmente excluir "${names[pos]}"?`)) {
    names.splice(pos, 1);
    alert("Nome excluído com sucesso!");
    Listar();
  }
}

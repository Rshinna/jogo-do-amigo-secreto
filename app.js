let participantes = [];
function adicionarAmigo() {
  const nomeAmigo = document.getElementById("amigo").value;
  if (nomeAmigo == "") {
    alert("Por favor digite um nome!!!");
  } else if (participantes.includes(nomeAmigo)) {
    alert("Esse nome já existe na lista!!!");
  } else {
    participantes.push(nomeAmigo);
    const res = document.getElementById("listaAmigos");
    res.innerHTML = "";
    participantes.forEach((participante) => {
      const itemLista = document.createElement("li");
      itemLista.textContent = participante;
      res.appendChild(itemLista);
    });

    limparCampo();
  }
}

function limparCampo() {
  const campo = document.getElementById("amigo");
  campo.value = "";
  campo.focus();
}

document.getElementById("amigo").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    adicionarAmigo(); // Chama a função ao pressionar Enter
  }
});

function sortearAmigo() {
  if (participantes.length < 2) {
    alert("Adicione pelo ou menos dois participantes");
    return;
  }

  const sorteado = Math.floor(Math.random() * participantes.length);
  const nomeSorteado = participantes[sorteado];
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.style.display = "none";
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  const item = document.createElement("li");
  item.textContent = `Seu amigo secreto é ${nomeSorteado}`;
  resultado.appendChild(item);
}

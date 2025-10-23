const usuarios = [];

function criarCard(usuario, index) {
  const card = document.createElement('div');
  card.classList.add('user-card');
  card.innerHTML = `
    <button class="btn-excluir">Excluir</button>
    <h3>${usuario.nome}</h3>
    <p><strong>E-mail:</strong> ${usuario.email}</p>
    <p><strong>Idade:</strong> ${usuario.idade}</p>
    <p><strong>Cargo:</strong> ${usuario.cargo}</p>
  `;

  card.addEventListener('dblclick', () => {
    const confirma = confirm('Deseja remover ' + usuario.nome + '?');
    if (confirma) {
      usuarios.splice(index, 1);
      atualizarListaUsuarios(window.__filtroAtual || '');
    }
  });

  const btnExcluir = card.querySelector('.btn-excluir');
  btnExcluir.addEventListener('click', () => {
    const confirma = confirm('Remover ' + usuario.nome + '?');
    if (confirma) {
      usuarios.splice(index, 1);
      atualizarListaUsuarios(window.__filtroAtual || '');
    }
  });

  return card;
}

function atualizarListaUsuarios(filtro = '') {
  const listaUsuarios = document.getElementById('lista-usuarios');
  listaUsuarios.innerHTML = '';

  const filtroLower = filtro.toLowerCase().trim();
  const filtrados = usuarios.filter(u => u.nome.toLowerCase().includes(filtroLower));

  if (filtrados.length === 0) {
    const msg = document.createElement('p');
    msg.classList.add('no-results');
    msg.textContent = 'Nenhum usuário encontrado.';
    listaUsuarios.appendChild(msg);
    return;
  }

  filtrados.forEach((usuario, idx) => {
    const realIndex = usuarios.indexOf(usuario);
    listaUsuarios.appendChild(criarCard(usuario, realIndex));
  });
}

window.usuarios = usuarios;
window.atualizarListaUsuarios = atualizarListaUsuarios;

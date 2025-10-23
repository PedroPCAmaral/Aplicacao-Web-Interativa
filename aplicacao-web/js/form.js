document.getElementById('cadastro-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const idade = document.getElementById('idade').value.trim();
  const cargo = document.getElementById('cargo').value.trim();

  document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
  document.querySelectorAll('input').forEach(el => el.classList.remove('error'));

  let valido = true;

  if (nome.length < 3) {
    document.getElementById('nome-error').textContent = 'O nome deve ter pelo menos 3 caracteres.';
    document.getElementById('nome').classList.add('error');
    valido = false;
  }

  const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!padraoEmail.test(email)) {
    document.getElementById('email-error').textContent = 'E-mail inválido.';
    document.getElementById('email').classList.add('error');
    valido = false;
  }

  if (isNaN(idade) || idade < 18 || idade > 120) {
    document.getElementById('idade-error').textContent = 'A idade deve estar entre 18 e 120 anos.';
    document.getElementById('idade').classList.add('error');
    valido = false;
  }

  if (cargo.length < 2) {
    document.getElementById('cargo-error').textContent = 'Cargo inválido.';
    document.getElementById('cargo').classList.add('error');
    valido = false;
  }

  if (valido) {
    const usuario = { nome, email, idade, cargo };
    window.usuarios.push(usuario);
    window.atualizarListaUsuarios(window.__filtroAtual || '');
    document.getElementById('cadastro-form').reset();
  }
});

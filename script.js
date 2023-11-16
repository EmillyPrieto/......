let divLogin = document.querySelector('.container__login');
let divDash = document.querySelector('.container__dashboard');
function sair() {
  alert('Tchau!');
  divDash.style.display = 'none';
  divLogin.style.display = 'flex';
}

function logar() {
  alert(';)');
  divLogin.style.display = 'none';
  divDash.style.display = 'flex';
}

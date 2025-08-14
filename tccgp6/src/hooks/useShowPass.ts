 function mostrarSenha() {
  const senha = document.getElementById('senha');
  const icon = document.getElementById('icon');
  
  if(senha.type === 'password'){
    senha.setAttribute('type', 'text')
    icon.classList.add('show')
  }
  else{
    senha.setAttribute('type', 'password')
    icon.classList.remove('show')
  }
};

document.addEventListener('DOMContentLoaded', function () {
  const digitarInput = document.getElementById('digitar');
  const botaoEnviar = document.getElementById('enviar');
  const conversaContainer = document.getElementById('conversa');

    botaoEnviar.addEventListener('click', function (querido) {
    querido.preventDefault();

    const mensagemDigitada = digitarInput.value;

    if (mensagemDigitada.trim() !== '') {
     const novaMensagem = document.createElement('p');
     novaMensagem.innerText = "Você diz: " + mensagemDigitada;
     conversaContainer.querySelector('.lado').appendChild(novaMensagem);

     
      digitarInput.value = '';
    }
  });
});
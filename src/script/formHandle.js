console.log('entrou no form handler');

const form = document.querySelector('#form-orcamento');
const button = document.querySelector('#botaoEnviarForm');
const myModal = new bootstrap.Modal('#modalHeader')
const popupSuccess = document.querySelector('#popup-success')
const popupSuccessButton = document.querySelector('#popupCloseButton');

form.addEventListener('submit',  async function(e){
  e.preventDefault();

  const payload = new FormData(form)
  console.log([...payload])

  fetch('http://localhost:3000/', { 
    method: 'POST',
    body: payload
  }).then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error('Erro ao fazer fetch: \n', err))


/*  const elements = form.elements;
  const body = {
    nome: elements['nome'].value,
    sobrenome: elements['sobrenome'].value,
    cidade: elements['cidade'].value,
    telefone: elements['telefone'].value,
    email: elements['email'].value,
    fatura: elements['fatura'].value,
    texto: elements['texto'].value,
    newsletter: elements['newsletter'].value,
  }
  const jsonBody  = JSON.stringify(body)

    const postEmail = fetch('http://localhost:3000', {
    method: 'POST',
    headers: {
      'Content-Type':'application/json',
      'Accept':'application/json'
    },
    body: jsonBody
  }).then((success) => console.log('deu sucesso', success))
    .catch(err => console.log('error no fetch', err))
    
  myModal.hide();
  popupSuccess.classList.add('open-popup')
  
  setTimeout(()=> {
    popupSuccess.classList.remove('open-popup')
  }, 4000) */
})


  popupSuccessButton.addEventListener('click', ()=> {
    popupSuccess.classList.remove('open-popup')
  })
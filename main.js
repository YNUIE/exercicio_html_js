const form = document.getElementById('form-numero');
const numeroB = document.getElementById('numero-b');
const numeroA = document.getElementById('numero-a');
let formEValido = false;

function validaNumero(numeroMaior) {
    valida = numeroMaior > parseFloat(numeroA.value);
    return valida;
}

form.addEventListener('submit',function(e){
    let formEValido = false;
    e.preventDefault(); 

    const numeroA = document.getElementById('numero-a');
    const numeroB = document.getElementById('numero-b');
    const mensagemSucesso = `O numero <b>${numeroB.value}</b> do campo B é maior que o número <b>${numeroA.value}</b> do campo A`;

    formEValido = validaNumero(parseFloat(numeroB.value))
    if(formEValido) {
        const containerMensagemSucesso = document.querySelector('.sucess-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        numeroA.value = null;
        numeroB.value = null;

    } else {
        numeroB.style.border = '1px solid red'
        document.querySelector('.error-message').style.display = 'block';
    }
})

numeroB.addEventListener('keyup',function(e) {
    console.log(e.target.value);
    formEValido = validaNumero(e.target.value);

    if(!formEValido) {
        numeroB.classList.add('error')
        //nomeBeneficiario.style.border = '1px solid red'
        document.querySelector('.error-message').style.display = 'block';
    } else {
        numeroB.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }

});




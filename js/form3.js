'use extrict';

window.addEventListener('load', init, false);

function init() {
    let email = document.getElementById('inscriptionTxt');
    let btnEnviar = document.getElementById('btnSend');
    let expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let alerta = document.getElementById('mensajeAlert');

    btnEnviar.onclick = function() {
        email = inscriptionTxt.value;
        //condicional que valida y permite enciar el correo de suscripcion del usuario
        if (email === '') {
            alerta.textContent = 'El campo del correo electrónico esta vacio';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else if (expressionEmail.test(email) === false) {
            alerta.textContent = 'Correo electrónico invalido';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else {
            alerta.textContent = 'Su registro fue exitoso';
            alerta.classList.add('alertaVerde');
            alerta.classList.remove('alertaRoja');

            //serviceID/template ID/ID form/ úblic key cuenta
            //el id del formulario es #form
            //emailjs.sendForm('','','','');
            emailjs.sendForm('service_5uwslus', 'template_padk43h', '#form3', 'NNgTi4E_wwrk8TCyJ');
            //limpia los campos del form3
            cleanInputs();
        }
    }

    function cleanInputs() {
        inscriptionTxt.value = '';
    }
}
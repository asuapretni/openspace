

let asdf = document.getElementsByClassName('as');
let buttonLaunch = document.querySelector('.launch');
let buttonCheckboxes = document.querySelectorAll('input[type="checkbox"]');
let buttonRanges = document.querySelectorAll('input[type="range"]');
//Arranca comprobar al pulsar ok
document.getElementById('ok').addEventListener('click', comprobar);
//Desactiva todos los inputs
function disableInputs() {
    for (let asd of asdf) {
        asd.disabled = true;
    }
    buttonLaunch.setAttribute("disabled", "true");
}
disableInputs();
//Comprueba contraseña y activa los input menos launch
function comprobar () {
   let password = document.getElementById('pass').value;
    if (password === "TrustNo1") {
        for(let i = 0; i < asdf.length; i++) {
            asdf[i].disabled = false;
        }
    } else {
       alert("Password incorrect");
    }

   buttonCheckboxes.forEach( button => {
        button.onchange = checkControls;
    });
    buttonRanges.forEach( button => {
        button.onchange = checkControls;
    });
}

//Comprueba si los checked buttons están checked y os levers a tope
function checkControls() {
    let checkedButtonCheckboxes = true;
    let checkedButtonRanges = true;
    for (let i = 0; i < buttonCheckboxes.length; i++) {
        if (!buttonCheckboxes[i].checked) {
            checkedButtonCheckboxes = false;
        }
    }
    for (let i = 0; i < buttonRanges.length; i++) {
        if (buttonRanges[i].value < 100) {
            checkedButtonRanges = false;
        }
    }
    if (checkedButtonCheckboxes && checkedButtonRanges) {
        buttonLaunch.removeAttribute('disabled', 'false');
    } else {
        buttonLaunch.setAttribute('disabled', 'true');
    }

}

function launchRocket() {
    let rocket = document.getElementById('rocket');
    rocket.style.transform = 'translate(1000px, -1000px)rotate(0.3turn)scale(0.1)';
}

buttonLaunch.addEventListener('click', launchRocket);

function unCheck() {
    buttonCheckboxes.forEach(button => {
        button.checked = false;
    });
    buttonRanges.forEach(button => {
        button.value = 50;
    });
    buttonLaunch.setAttribute("disabled", "true");
}
unCheck();
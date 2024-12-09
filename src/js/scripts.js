function changeMenu() {
    const NavMenu = document.querySelector('#nav_menu');

    NavMenu.classList.toggle("hidden");
}

function toggleModal() {
    const modal = document.querySelector("#modal");
    const fade = document.querySelector("#fade");

    modal.classList.toggle("hidden");
    fade.classList.toggle("hidden");
}

// Verificação Form

const span = document.querySelectorAll(".span-modal");
const email = document.querySelector("#email");

function verificationName() {
    const name = document.querySelector("#name");

    if (name.value.length <= 1) {
        console.log("Nome inválido!");
        setError(name, span[0]);
    } else {
        console.log("Nome valido!");
        removeError(name, span[0]);
    }
}

function verificationEmail() {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (!emailRegex.test(email.value)) {
        console.log("Email inválido!");
        setError(email, span[1]);
    } else {
        console.log("Email Válido!");
        removeError(email, span[1]);
    }

}

function verificationConfirmEmail() {
    const confirmEmail = document.querySelector("#confirm-email");

    if (email.value != confirmEmail.value) {
        console.log("Os emails devem ser iguais");
        setError(confirmEmail, span[2]);
    } else {
        console.log("Os emails são iguais!");
        removeError(confirmEmail, span[2]);
    }
}

function setError(input, span) {
    input.style.border = '2px solid red';
    span.classList.remove("hidden"); 
}

function removeError(input, span) {
    input.style.border = '';
    span.classList.add("hidden"); 
}

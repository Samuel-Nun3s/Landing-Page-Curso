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
        setError(name, span[0]);
    } else {
        removeError(name, span[0]);
    }
}

function verificationEmail() {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (!emailRegex.test(email.value)) {
        setError(email, span[1]);
    } else {
        removeError(email, span[1]);
    }

}

function verificationConfirmEmail() {
    const confirmEmail = document.querySelector("#confirm-email");

    if (email.value != confirmEmail.value) {
        setError(confirmEmail, span[2]);
    } else {
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

// Envio de Email:
function ReservePlace() {
    const nameUser = document.querySelector("#name").value;
    const emailUser = document.querySelector("#email").value;
    const confirmEmailUser = document.querySelector("#confirm-email").value;

    if (nameUser.length === 0 || emailUser.length === 0 || confirmEmailUser.length === 0) {
        alert("Insira as informações corretamente!");
    } else {
        const User = {
            name : nameUser,
            email: emailUser
        }

        SendEmail(User);
    }
}

// Conectando com backend para o envio do email;
async function SendEmail(UserObj) {
    try {
        const response = await fetch('src/php/script.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(UserObj)
        })

        if (!response.ok) {
            throw new Error(`Erro ao enviar o email: $response.status`);
        }

        const data = await response.json();
        console.log(data.message);
    } catch (erro) {
        console.error('Erro:', erro);
    }
}

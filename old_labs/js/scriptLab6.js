const messageP = document.getElementById("messagePassword");
const messageV = document.getElementById("messageValidation");

const validation = () => {
    let text = passwordValidation.value;
    let messageText = "";

    if (!/[A-Z]/.test(text)) {
        messageText += "Faltan mayúsculas<br>";
    }
    if (!/[a-z]/.test(text)) {
        messageText += "Faltan minúsculas<br>";
    }
    if (!/[0-9]/.test(text)) {
        messageText += "Faltan números<br>";
    }
    if (!/[!@#$%^&*()_+={}\[\]|\\:;"'<>,.?/`~_-]/.test(text)) {
        messageText += "Faltan símbolos<br>";
    }
    if (text.length < 8){
        messageText += "Debe ser más larga";
    }
    messageP.innerHTML = messageText;

    if (messageText === "") {
        messageP.innerHTML = "";
    }
};

const confirmP = () =>{
    let text = passwordValidation.value;
    let validation = confirmPassword.value;

    if (text !== validation) {
        messageV.innerHTML = "❌ INCORRECTO, la contraseña no coincide";
    } else {
        messageV.innerHTML = "✅ CORRECTO!";
    }
};

const avoidBlank = (event) => {
    if (event.key === " ") {
        event.preventDefault();
    }
};

const nexText = () => {
    const textSection = document.querySelector(".content"); 
    textSection.style.fontFamily = "Times New Roman"; 
};
const resetText = () => {
    const textSection = document.querySelector(".content"); 
    textSection.style.fontFamily = ""; 
};

document.getElementById("passwordValidation").onkeyup = validation;
document.getElementById("confirmPassword").onkeyup = confirmP;
document.getElementById("passwordValidation").onkeydown = avoidBlank;
document.getElementById("confirmPassword").onkeydown = avoidBlank;
document.getElementById("changeText").onmouseover = nexText;
document.getElementById("changeText").onmouseleave = resetText; 

const inputBtnElem = document.querySelector('.password-input');
const generateBtnElem = document.querySelector('.generate-pwd-btn');
const copyBtnElem = document.querySelector('.copy-btn');
const alertBoxElem = document.querySelector('.alert-container');


// Password generator function
function generatePassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = 16;
    let password = "";

    for (let i = 0; i <= passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.charAt(randomNumber);
        console.log(randomNumber, password);
    }
    inputBtnElem.value = password;
}

// Alert box handler
const handleAlert = () => {
    if (inputBtnElem.value) {
        alertBoxElem.classList.remove('active');
        setTimeout(() => {
            alertBoxElem.classList.add('active');
        }, 3000);
    }
}


// Copy to clipboard function
const copyToClipboard = () => {
    const password = inputBtnElem.value;
    // select the text field
    inputBtnElem.select();
    inputBtnElem.setSelectionRange(0, 99999); // for mobile devices
    alertBoxElem.innerText = password + ' Copied!';

    // copy the text inside the text field
    navigator.clipboard.writeText(password).then(() => {
        handleAlert();
    });

    // clear the input field after 2 seconds
    setTimeout(() => {
        inputBtnElem.value = '';
    }, 3000);

}

copyBtnElem.addEventListener('click', copyToClipboard);
generateBtnElem.addEventListener('click', generatePassword);
let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");
let generateButton = document.getElementById("generateButton");
let saveButton = document.getElementById("saveButton");
let generateButtonClicked = false;
let valuePassword = "";

function generatePassword(input) {
    const lowerAlphabetic = "abcdefghijklmnopqrstuvwxyz";
    const upperAlphabetic = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeric = "0123456789";
    const symbolic = "!@#$%^&*()_+=-{}[]';:/?.,<>~`";

    const data = lowerAlphabetic + upperAlphabetic + numeric + symbolic;
    let generator = "";
    for (let index = 0; index < input; index++) {
        generator += data[~~(Math.random() * data.length)];
    }
    return generator;
}

function getPassword() {
    generateButtonClicked = true;
    const newPassword = generatePassword(passwordLength.value);
    password.value = newPassword;
    console.log("Password generated");
    if (generateButtonClicked && password.value != 0) {
        saveButton.style.pointerEvents = "auto";
    }
}

function savePassword() {
    valuePassword = password.value;
    saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`password saya: ${valuePassword}`));
    saveButton.setAttribute('download', 'mypasswordGeneratorLog.txt');
    console.log("Password saved");
}

function reload() {
    location.reload();
}


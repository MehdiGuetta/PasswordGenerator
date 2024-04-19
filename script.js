const passwordBox = document.getElementById('password');
const length = 12;
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '|£$%&/()=^*@#[]{}+-_<>';
const allChars = lowerCase + upperCase + numbers + symbols;

function createPassword(){
    let password = '';
    password += lowerCase[Math.floor(Math.random() * upperCase.length)];
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

function copyPasswword(){
    passwordBox.select();
    document.execCommand('copy');
}
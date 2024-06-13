const passwordBox = document.querySelector('#password');
const btn = document.querySelector('#btn')
const copy = document.querySelector('#copy')
const length = 12;

const upperCase = 'QWERTYUIOPASDFGHJKLZXCVBNM';
const lowerCase = 'qwertyuiopasdfghjklzxcvbnm';

const number = '1234567890';
const symbol = '!@#$%^&*()_={}|[]?:"/';

const allChars = upperCase + lowerCase + number + symbol;
const creatPassword = () => {
    let password = '';
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];

    }

    passwordBox.value = password;
}
btn.addEventListener('click', () => {
    creatPassword();
})


const copyPassword = () => {
    passwordBox.select();
    document.execCommand('copy')
}

copy.addEventListener('click', () => {
    copyPassword();
})
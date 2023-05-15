
const submitBtnEl = document.querySelector('button');

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onFormSubmit);

const loginInfo = {

};

function onFormSubmit(event) {
    event.preventDefault();
    
    const formElements = event.currentTarget.elements;

    const mail = formElements.email.value;

    const password = formElements.password.value;

    if (mail.length === 0 || password.length === 0) {
        
        const message = document.createElement('p');
        
        message.classList.add('incorect-text');

        message.textContent = 'Альо вертухай, заполни форму по-братски!';

        submitBtnEl.before(message)

        return;

    }

    const loginInfo = {};
//   loginInfo.mail = formElements.email.value;
//   loginInfo.password = formElements.password.value;
    
    loginInfo.mail = mail;
    loginInfo.password = password;

    console.log(`Я хочу плакать как маленькая девочка. Почему оно не выводит?:`, loginInfo)

}

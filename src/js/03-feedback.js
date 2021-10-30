import _ from 'lodash';

const formRef = document.querySelector('.feedback-form');
const emailInput = document.querySelector("input[name='email']");
const textareaInput = document.querySelector("textarea[name='message']");


formRef.addEventListener('input', _.throttle(() => {
 const feedback = {
        email: `${emailInput.value}`,
        message: `${textareaInput.value}`,
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(feedback));
   storageCheck()
    
}, 500));

console.log(localStorage)

function storageCheck() {
    if (localStorage.length !== 0) {
         emailInput.value = localStorage.getItem('feedback[email]');
        textareaInput.value = localStorage.getItem('feedback[message]');
    } else {
        emailInput.value = '';
        textareaInput.value = '';
    }
}  
   

// }
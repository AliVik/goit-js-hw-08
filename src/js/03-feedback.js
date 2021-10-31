import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const emailInput = document.querySelector("input[name='email']");
const textareaInput = document.querySelector("textarea[name='message']");


formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onFormInput, 1000))


const STORAGE_KEY = 'feedback-form-state';
const feedback = {};
const savedFeedback = JSON.parse(localStorage.getItem(STORAGE_KEY));


getInputBack();

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log(savedFeedback);
     evt.target.reset();
    localStorage.removeItem(STORAGE_KEY);
  
}

function onFormInput() {
    
    feedback.email = `${emailInput.value}`;
    feedback.message = `${textareaInput.value}`;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedback));
    
}


function getInputBack() {
    if (savedFeedback) {
        emailInput.value = savedFeedback.email;
        textareaInput.value = savedFeedback.message;
    }
}  
   


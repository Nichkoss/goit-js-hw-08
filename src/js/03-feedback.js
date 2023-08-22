import throttle from 'lodash.throttle';

const key = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const textArea = document.querySelector('textarea');
const input = document.querySelector('input');

const throttleMeth = throttle(setValue, 500);

form.addEventListener('input', throttleMeth)
form.addEventListener('submit', onFormSubmit)


function setValue() {
    localStorage.setItem(key, JSON.stringify({
        email: input.value,
        message: textArea.value
    }))
}

function onFormSubmit(e) {
    e.preventDefault();
    const object = localStorage.getItem(key);
    console.log(JSON.parse(object))
    e.currentTarget.reset();

    localStorage.removeItem(key);
    
}

function getStorageValue() { 
    const value = localStorage.getItem(key);

    if (value) {
        const parse = JSON.parse(value)
        input.value = parse.email;
        textArea.value = parse.message;
    }
    // console.log(value, JSON.parse(value))
}

getStorageValue();

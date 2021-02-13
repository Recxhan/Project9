const userName = document.getElementById('exampleInputName');
const email = document.getElementById('exampleInputEmail');
const send = document.getElementById('send');

send.addEventListener('click', () => {
    if(userName.value === '' && email.value === ''){
        alert('Please fill out the name and email fields before sending')
    } else if (userName.value === ''){
        alert('Please fill out the name field before sending')
    } else if (email.value === ''){
        alert('Please fill out the email field before sending')
    } else {
        alert(`Your info has been successfully sent`)
    }
});
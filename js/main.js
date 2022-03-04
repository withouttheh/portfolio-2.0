 // Smooth scroll down

 $('#services-button').on('click', function(e) {
     const services = $('#services').position().top //Get the  position

     $('html, body').animate({
         scrollTop: services
     }, 800);
 });

 $('#projects-button').on('click', function() {
     const projects = $('#projects').position().top //Get the  position

     $('html, body').animate({
         scrollTop: projects
     }, 800);
 });

 // Form validation
 const form = document.getElementsByTagName('form')[0];

 const email = document.getElementById('email');
 const emailError = document.querySelector('div.email-error');

 const fname = document.getElementById('fname')
 const nameError = document.querySelector('div.name-error')

 fname.addEventListener('input', function(e) {
     if (fname.validity.valid) {
         nameError.textContent = '';
         nameError.className = 'name error'
     } else {
         showNameError()
     }
 })

 email.addEventListener('input', function(e) {
     if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value)) {
         emailError.textContent = '';
         emailError.className = 'email-error'
     } else {
         showEmailError()
     }
 })

 form.addEventListener('submit', function(e) {
     // e.preventDefault()
     if (!fname.validity.valid) {
         e.preventDefault()
         showNameError()

     } else if (!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value))) {
         e.preventDefault()
         showEmailError()

     } else {
         return true
     }
 })

 function showEmailError() {
     if (email.validity.valueMissing) {
         emailError.textContent = 'You need to enter an e-mail address'
     } else if (email.validity.typeMismatch) {
         emailError.textContent = 'Entered value needs to be in the form user@domain.com'
     } else if (email.validity.tooShort) {
         emailError.textContent = `Email should be atleast ${email.minLength} characters; you entered ${email.value.length}.`
     }

     emailError.className = 'error active'
 }



 function showNameError() {
     if (fname.validity.valueMissing) {
         nameError.textContent = 'Field is required'
     }

     nameError.className = 'error active'
 }

 //  Date
 const d = new Date();

 let year = d.getFullYear();

 $('.year').text(year);
function printMess(elemId, message) {
    document.getElementById(elemId).innerHTML = message;
}

const formEl = document.querySelector(".form");
formEl.addEventListener('submit', event => {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const content = document.getElementById('content').value;
    const gresponse = grecaptcha.getResponse();

    if (firstName === '' || lastName === "" || email === '' || phone === '' || content === '' || gresponse === '') {
        printMess('valueMiss', 'Please fill out all required fields.');
        return;
    }

    Array.from(formEl.elements).forEach(formElement => formElement.disabled = true);
    const data = {
        email: email,
        // content: "First Name: " + firstName + "\n" + " Last Name: " + lastName + "\n" + " Phone: " + phone + "\n" + " Content: " + content,
        content: `First Name: ${firstName}\n Last Name: ${lastName}\n Phone: ${phone}\n Content: ${content}`,
        gresponse: gresponse
    }
    const btnSubmit = formEl.querySelector('button[type="submit"]');
    const btnLoading = formEl.querySelector('button[type="button"]');
    btnSubmit.classList.add('d-none');
    btnLoading.classList.remove('d-none');

    fetch('https://email.ncc.asia/ncc-site-api-sendmail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => {
        if (!res.ok) {
            return res.text().then(text => { throw new Error(text) })
        }
        else {
            printMess('valueSuccess', 'Thank you, your submission has been received.');
            document.getElementById("valueMiss").remove();
            formEl.reset();
        }
    }).catch(err => {
        printMess('valueError', 'Oops, something went wrong. Please try again later.')
    }).finally(() => {
        formEl.reset();
        Array.from(formEl.elements).forEach(formElement => formElement.disabled = false);
        btnSubmit.classList.remove('d-none');
        btnLoading.classList.add('d-none');
    })

})

// function onClick(e) {
//     e.preventDefault();
//     grecaptcha.ready(function () {
//         grecaptcha.execute('reCAPTCHA_site_key', { action: 'submit' }).then(function (token) {
//         });
//     });
// }
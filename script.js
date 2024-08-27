// document.addEventListener("DOMContentLoaded", function() {
//     const links = document.querySelectorAll('nav a');

//     for (const link of links) {
//         link.addEventListener('click', smoothScroll);
//     }

//     function smoothScroll(event) {
//         event.preventDefault();
//         const targetId = event.currentTarget.getAttribute("href") === "#" ? "header" : event.currentTarget.getAttribute("href").substring(1);
//         const targetElement = document.getElementById(targetId);

//         window.scrollTo({document.addEventListener("DOMContentLoaded", function() {
//             const links = document.querySelectorAll('nav a');

//             for (const link of links) {
//                 link.addEventListener('click', smoothScroll);
//             }

//             function smoothScroll(event) {
//                 event.preventDefault();
//                 const targetId = event.currentTarget.getAttribute("href").substring(1);
//                 const targetElement = document.getElementById(targetId);

//                 window.scrollTo({
//                     top: targetElement.offsetTop - document.querySelector('nav').offsetHeight,
//                     behavior: "smooth"
//                 });
//             }
//         });

//             top: targetElement.offsetTop,
//             behavior: "smooth"
//         });
//     }
// });




document.addEventListener("DOMContentLoaded", function() {
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 800,
        speedAsDuration: true,
    });

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;

        // Validate Name
        const name = document.getElementById('name');
        const nameError = document.getElementById('nameError');
        if (name.value.trim() === '') {
            nameError.classList.remove('hidden');
            isValid = false;
        } else {
            nameError.classList.add('hidden');
        }

        // Validate Email
        const email = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        if (email.value.trim() === '') {
            emailError.classList.remove('hidden');
            isValid = false;
        } else {
            emailError.classList.add('hidden');
        }

        // Validate Message
        const message = document.getElementById('message');
        const messageError = document.getElementById('messageError');
        if (message.value.trim() === '') {
            messageError.classList.remove('hidden');
            isValid = false;
        } else {
            messageError.classList.add('hidden');
        }

        if (isValid) {
            window.location.href = 'thankyou.html';
        }
    });
});
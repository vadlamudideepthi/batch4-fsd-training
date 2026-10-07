// Registration Form

const registrationForm =
    document.getElementById("registrationForm");

if (registrationForm) {

    registrationForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const name =
                document.getElementById("name").value;

            const eventName =
                document.getElementById("event").value;

            const message =
                document.getElementById(
                    "registrationMessage"
                );

            message.textContent =
                "Thank you " +
                name +
                "! You have successfully registered for " +
                eventName +
                ".";

            registrationForm.reset();
        }
    );
}


// Contact Form

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const name =
                document.getElementById(
                    "contactName"
                ).value;

            const message =
                document.getElementById(
                    "contactMessage"
                );

            message.textContent =
                "Thank you " +
                name +
                "! Your message has been sent successfully.";

            contactForm.reset();
        }
    );
}


// Welcome Message

console.log(
    "College Event Management System Loaded Successfully"
);
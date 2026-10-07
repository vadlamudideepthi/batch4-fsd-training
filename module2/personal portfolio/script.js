// Contact Form

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        const message =
            document.getElementById("formMessage");

        message.textContent =
            "Thank you, " + name +
            "! Your message has been sent successfully.";

        contactForm.reset();

    });

}


// Navigation Link Click

const navLinks =
    document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.forEach(function(item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


console.log("Personal Portfolio Loaded Successfully");
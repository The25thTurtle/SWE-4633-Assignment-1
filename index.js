const contactForm = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    if (name === "") {
        formMessage.textContent = "Please enter your name.";
    }
    else if (message.length < 10) {
        formMessage.textContent = "Message too short.";
    }
    else {
        formMessage.textContent = "Message sent successfully!";
    }
});
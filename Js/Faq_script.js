document.addEventListener("DOMContentLoaded", function () {
    const faqHeaders = document.querySelectorAll(".faq-header");

    faqHeaders.forEach(header => {
        header.addEventListener("click", () => {
            const content = header.nextElementSibling;
            const toggle = header.querySelector(".faq-toggle");

            // Toggle the content display
            content.style.display = content.style.display === "block" ? "none" : "block";

            // Toggle the + and -
            toggle.textContent = toggle.textContent === "+" ? "−" : "+";
        });
    });
});

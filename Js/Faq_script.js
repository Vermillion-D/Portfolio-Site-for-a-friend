document.addEventListener("DOMContentLoaded", function () {
    const faqHeaders = document.querySelectorAll(".faq-header");

    faqHeaders.forEach(header => {
        header.addEventListener("click", () => {
            const faqItem = header.closest(".faq-item"); // Get the parent .faq-item
            const contents = faqItem.querySelectorAll(".faq-content"); // Select both faq-content paragraphs
            const toggle = header.querySelector(".faq-toggle");

            // Toggle the display of all faq-content paragraphs within the .faq-item
            contents.forEach(content => {
                content.style.display = content.style.display === "block" ? "none" : "block";
            });

            // Toggle the + and - for the FAQ item
            toggle.textContent = toggle.textContent === "+" ? "−" : "+";
        });
    });
});

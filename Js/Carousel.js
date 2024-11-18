// Carousel function
let currentIndex = 0;
const sections = document.querySelectorAll('.carousel-section');
const totalSections = sections.length;

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const carouselContainer = document.querySelector('.carousel-container');

let autoSlideTimer;

function showSection(index) {
    // Move the carousel container to the correct position
    carouselContainer.style.transform = `translateX(-${index * 100}%)`; // Slide to the correct section
    sections.forEach((section, i) => {
        section.classList.remove('active');
        if (i === index) {
            section.classList.add('active'); // Fade in the active section
        }
    });
}

// Function to go to next section
function goToNextSection() {
    currentIndex = (currentIndex === totalSections - 1) ? 0 : currentIndex + 1;
    showSection(currentIndex);
}

// Function to go to previous section
function goToPreviousSection() {
    currentIndex = (currentIndex === 0) ? totalSections - 1 : currentIndex - 1;
    showSection(currentIndex);
}

// Event listener for manual "Previous" button click
prevBtn.addEventListener('click', () => {
    goToPreviousSection();
    resetAutoSlideTimer();  // Reset timer on manual navigation
});

// Event listener for manual "Next" button click
nextBtn.addEventListener('click', () => {
    goToNextSection();
    resetAutoSlideTimer();  // Reset timer on manual navigation
});

// Auto change slides every 15 seconds
function startAutoSlide() {
    autoSlideTimer = setInterval(goToNextSection, 15000);  // 15 seconds
}

// Reset the auto-slide timer
function resetAutoSlideTimer() {
    clearInterval(autoSlideTimer);
    startAutoSlide();
}

// Initial display
showSection(currentIndex);

// Start the auto-slide timer
startAutoSlide();

//Testimonials Carousel
let textIndex = 0;
const textSections = document.querySelectorAll('.testimonial-section');
const totalTextSections = textSections.length;
const testimonialContainer = document.querySelector('.testimonial-container');

const textPrevBtn = document.getElementById('testimonial-prev-btn');
const textNextBtn = document.getElementById('testimonial-next-btn');

let textAutoSlideTimer;

function showText(index) {
    testimonialContainer.style.transform = `translateX(-${index * 100}%)`; // Slide to the correct testimonial

    textSections.forEach((section, i) => {
        section.classList.remove('active');
        if (i === index) {
            section.classList.add('active'); // Fade in the active section
        }
    });
}

// Function to go to next text
function goToNextText() {
    textIndex = (textIndex === totalTextSections - 1) ? 0 : textIndex + 1;
    showText(textIndex);
}

// Function to go to previous text
function goToPreviousText() {
    textIndex = (textIndex === 0) ? totalTextSections - 1 : textIndex - 1;
    showText(textIndex);
}

// Event listener for manual "Previous" button click
textPrevBtn.addEventListener('click', () => {
    goToPreviousText();
    resetTextAutoSlideTimer(); // Reset timer on manual navigation
});

// Event listener for manual "Next" button click
textNextBtn.addEventListener('click', () => {
    goToNextText();
    resetTextAutoSlideTimer(); // Reset timer on manual navigation
});

// Auto change text every 7 seconds
function startTextAutoSlide() {
    textAutoSlideTimer = setInterval(goToNextText, 7000); // 7 seconds
}

// Reset the auto-slide timer
function resetTextAutoSlideTimer() {
    clearInterval(textAutoSlideTimer);
    startTextAutoSlide();
}

// Initial display
showText(textIndex);

// Start the auto-slide timer
startTextAutoSlide();
 
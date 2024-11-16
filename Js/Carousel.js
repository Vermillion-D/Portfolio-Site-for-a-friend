// Carousel function
let currentIndex = 0;
const sections = document.querySelectorAll('.carousel-section');
const totalSections = sections.length;

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let autoSlideTimer;

function showSection(index) {
    sections.forEach((section, i) => {
        section.classList.remove('active');
        if (i === index) {
            section.classList.add('active');
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

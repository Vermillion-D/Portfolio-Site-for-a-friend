// Function to toggle visibility of extra content and arrow direction
function toggleInfo() {
    const content = document.getElementById('more-content');
    const arrow = document.getElementById('arrow');

    // Toggle visibility of the content
    content.classList.toggle('hidden');

    // Toggle the arrow direction
    if (content.classList.contains('hidden')) {
        arrow.textContent = '⇒'; // Right arrow when content is hidden
    } else {
        arrow.textContent = '⇓'; // Down arrow when content is visible
    }
}

// Function to open the modal and display content (video, description)
function openModal(videoId) {
    const modal = document.getElementById('videoModal');
    const modalBody = document.getElementById('modal-body');

    // Define the content based on the clicked video
    let videoContent = '';

    if (videoId === 'video1') {
        videoContent = `
            <h2>Project 1</h2>
            <p>Vox Populi</p>
            <div class="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/1Pa0wz2vTG4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        `;
    } else if (videoId === 'video2') {
        videoContent = `
            <h2>Project 2</h2>
            <p>Vox Dei</p>
            <div class="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/1Pa0wz2vTG4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        `;
    }

    // Inject content into the modal
    modalBody.innerHTML = videoContent;

    // Show the modal
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('videoModal');
    modal.style.display = "none";
}

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

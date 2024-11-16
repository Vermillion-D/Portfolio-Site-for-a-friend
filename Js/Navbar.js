// Navbar
let navbar = document.getElementById("header");
let timeout;
let lastScrollTop = 0; // To track last scroll position

// Function to show the navbar
function showNavbar() {
    navbar.style.display = "flex"; // Show navbar
    clearTimeout(timeout); // Clear any existing timeouts
    timeout = setTimeout(hideNavbar, 5000); // Hide navbar after 5 seconds of inactivity
}

// Function to hide the navbar
function hideNavbar() {
    navbar.style.display = "none"; // Hide navbar
}

// Function to check if we are scrolling up or down
window.onscroll = function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll < lastScrollTop) {
        // Scrolling up: show the navbar
        showNavbar();
    } else {
        // Scrolling down: hide the navbar if not hovered
        if (!navbar.matches(':hover')) {
            navbar.style.display = "none";
            clearTimeout(timeout); // Clear the timeout to prevent auto-hiding when scrolling down
        }
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll values
};

// Add hover event to reset timeout when hovered
navbar.addEventListener("mouseenter", function() {
    clearTimeout(timeout); // Prevent hiding while hovered
    navbar.style.display = "flex"; // Ensure navbar stays visible while hovered
});

// Add leave event to start the timeout when mouse leaves the navbar
navbar.addEventListener("mouseleave", function() {
    timeout = setTimeout(hideNavbar, 5000); // Start hiding after 5 seconds if not hovered
});

// Initially show navbar when the page is loaded
showNavbar();

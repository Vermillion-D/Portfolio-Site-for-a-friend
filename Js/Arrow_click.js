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

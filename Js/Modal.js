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
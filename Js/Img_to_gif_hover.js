document.querySelectorAll('.video-thumbnail').forEach((thumbnail) => {
    const staticImage = thumbnail.style.backgroundImage;
    const gifImage = thumbnail.getAttribute('data-gif');

    thumbnail.addEventListener('mouseenter', () => {
        thumbnail.style.backgroundImage = `url('${gifImage}')`;
    });

    thumbnail.addEventListener('mouseleave', () => {
        thumbnail.style.backgroundImage = staticImage;
    });
});

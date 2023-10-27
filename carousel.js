document.addEventListener('DOMContentLoaded', (event) => {
    const carousel = document.getElementById('reviewCarousel');
    if (!carousel) {
        console.error('Review carousel element not found');
        return;
    }

    const cardWidth = 400; // Adjust as needed
    const speed = 70;

    const totalItems = carousel.children.length;
    const totalWidth = totalItems * cardWidth;
    const duration = totalWidth / speed;
    carousel.style.animation = `scroll ${duration}s linear infinite`;

    // Clone the carousel items until it fills at least twice the screen width
    let cloneCount = Math.ceil(window.innerWidth * 2 / totalWidth);
    for (let n = 0; n < cloneCount; n++) {
        for (let i = 0; i < totalItems; i++) {
            carousel.appendChild(carousel.children[i].cloneNode(true));
        }
    }

    window.expandCard = function (card) {
        if (card.classList.contains('expanded')) {
            card.classList.remove('expanded');
        } else {
            document.querySelectorAll('.review-card.expanded').forEach(function (el) {
                el.classList.remove('expanded');
            });
            card.classList.add('expanded');
        }
    }
});

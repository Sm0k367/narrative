// --- Scroll-Triggered Fade-in for Sections and Visual Elements ---

// Options for the Intersection Observer
const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of the element is visible
};

// Callback function for the Intersection Observer
const revealOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Stop observing once visible
        }
    });
};

// Create a new Intersection Observer instance
const observer = new IntersectionObserver(revealOnScroll, observerOptions);

// Function to set up observations
function setupNarrativeScrollReveals() {
    // Observe all sections with the 'reveal-on-scroll' class
    const sectionsToReveal = document.querySelectorAll('.reveal-on-scroll');
    sectionsToReveal.forEach(section => {
        observer.observe(section);
    });

    // Animate the subtitle in the header
    const subtitle = document.querySelector('.narrative-header .subtitle');
    if (subtitle) {
        subtitle.style.animationPlayState = 'running';
    }
}


// --- DOM Content Loaded - Initialize everything ---
document.addEventListener('DOMContentLoaded', function() {
    setupNarrativeScrollReveals();
});

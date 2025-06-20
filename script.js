window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

function toggleMenu() {
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}

// Add animation to elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.skillsBx, .projectsBx, .box, .formBx');

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for animated elements
document.querySelectorAll('.skillsBx, .projectsBx, .box, .formBx').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
});

// Run on load and scroll
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// Optional: Cycle through multiple titles
const typewriterTexts = [
    "A Frontend Specialist.",
    "A UI/UX Enthusiast.",
    "A JavaScript Developer."
];
const typewriterElement = document.querySelector('.typewriter');
let currentIndex = 0;

function changeTypewriterText() {
    typewriterElement.style.animation = 'none';
    typewriterElement.offsetHeight; /* Trigger reflow */
    typewriterElement.textContent = typewriterTexts[currentIndex];
    typewriterElement.style.animation = null;

    currentIndex = (currentIndex + 1) % typewriterTexts.length;
    setTimeout(changeTypewriterText, 4000); // Change every 4 seconds
}

// Start the cycle after initial animation completes
setTimeout(changeTypewriterText, 3500);
document.addEventListener('DOMContentLoaded', () => {
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    
    const introAnimation = document.getElementById('intro-animation');
    const sectionOne = document.getElementById('section-one');

    window.onload = () => {
        window.scrollTo(0, 0);
    };
    // Listen for the end of the intro animation
    introAnimation.addEventListener('animationend', () => {
        // Hide the intro animation and fade in Section One
        introAnimation.style.display = 'none';
        sectionOne.classList.add('visible');
    });
});1
// script.js
window.onload = function() {
    const textElement = document.getElementById('typing-text');
    
    // Delay the erasing animation
    setTimeout(() => {
        textElement.style.animation = 'erase 5s steps(60, end) forwards';
    }, 15000); // Starts erasing after typing completes
};

// Select all the drum buttons
const keys = document.querySelectorAll('.key');


keys.forEach(key => {
    key.addEventListener('click', () => {
        const sound = key.getAttribute('data-sound');
        playSound(sound);
    });
});

// Function to play the corresponding sound
function playSound(sound) {
    const audio = new Audio(`sounds/${sound}.mp3`);
    audio.play();
}

// Optional: Add keyboard event listeners for key presses
document.addEventListener('keydown', (e) => {
    const key = 
    document.querySelector(`.key[data-sound="${e.key.toLowerCase()}"]`);
    if (key) {
        playSound(key.getAttribute('data-sound'));
    }
});
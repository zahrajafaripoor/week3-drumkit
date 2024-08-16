// Function to play a sound 
const playSound = sound => {
    const audio = new Audio(`/sounds/${sound}.mp3`);
    audio.play();
};
// Function to handle click events on drum key elements
const handleClick = event => {
    const sound = event.currentTarget.getAttribute('data-sound');
    playSound(sound);
};

// Function to handle key press events
const handleKeyPress = event => {
    const keyMap = {
        'q': 'snare',
        'w': 'kick',
        'e': 'hihat',
        'r': 'tom',
        't': 'ride',
        'y': 'clap',
        'u': 'openhat',
        'i': 'tink'
    };

    // sound name based on the pressed key
    const sound = keyMap[event.key.toLowerCase()];
        // If a valid sound is mapped, play it and simulate a click on the corresponding key element
    if (sound) {
        playSound(sound);
        document.querySelector(`.key[data-sound="${sound}"]`).click();
    }
};

document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', handleClick);
});


document.addEventListener('keydown', handleKeyPress);
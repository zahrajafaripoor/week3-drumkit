
const playSound = (sound) => {
    const audio = new Audio(`./sounds/${sound}.mp3`);
    audio.play();
};


const handleClick = (event) => {
    const sound = event.target.getAttribute('data-sound');
    playSound(sound);
};


const handleKeyPress = (event) => {
    const keyMap = {
        'a': 'snare',
        's': 'kick',
        'd': 'hihat',
        'f': 'tom',
        'g': 'ride',
        'h': 'clap',
        'j': 'openhat',
        'k': 'tink'
    };
    const sound = keyMap[event.key.toLowerCase()];
    if (sound) {
        playSound(sound);
        document.querySelector(`.key[data-sound="${sound}"]`).click();
    }
};


document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', handleClick);
});


document.addEventListener('keydown', handleKeyPress);
window.addEventListener('keydown', function (e) {
    // tangkap el audio (yang hanya berisi data keyboard 'keycode' masing" tombol)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return // stop the function
    audio.play();
    const key = document.querySelector(`.key[data-key="${e.keyCode}"`);
    key.classList.toggle('pukul');

});
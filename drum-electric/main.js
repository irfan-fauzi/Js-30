window.addEventListener('keydown', function (e) {
    // tangkap el audio (yang hanya berisi data keyboard 'keycode' masing" tombol)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return // stop the function
    // penting !!!
    audio.currentTime = 0; // rewind
    audio.play();
    // tangkap elemen dengan class key
    const key = document.querySelector(`.key[data-key="${e.keyCode}"`);
    key.classList.add('pukul')
    setTimeout(function () {
        key.classList.remove('pukul');
    }, 100);

});
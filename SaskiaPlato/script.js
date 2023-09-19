const flashlight = document.getElementById('flashlight');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX - flashlight.clientWidth / 2;
    const y = e.clientY - flashlight.clientHeight / 2;
    flashlight.style.left = x + 'px';
    flashlight.style.top = y + 'px';
});


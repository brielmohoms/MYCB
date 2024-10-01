function toggleMenu() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

document.querySelectorAll('.project-content').forEach(box => {
    box.addEventListener('click', () => {
        const url = box.getAttribute('data-url');
        window.location.href = url;
    });
});
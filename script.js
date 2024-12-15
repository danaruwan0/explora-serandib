function toggleMenu() {
    const menu = document.getElementById('navbarMenu');
    menu.classList.toggle('show');
}

function typeWriterEffect(elementId, text, speed) {
    let i = 0;
    function type() {
        if (i < text.length) {
            document.getElementById(elementId).innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Start typing "Dream | Explore | Discover | Experience | Embrace |" in text-01
typeWriterEffect("text-01", "Dream | Explore | Discover | Celebrate | Sri Lanka", 100);

// Delay typing of "| Cherish | Celebrate | Sri Lanka" until the first text completes

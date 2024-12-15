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

// Start typing "Dream | Explore | Discover" in label-01
typeWriterEffect("text-01", "Dream | Explore | Discover", 100);

// Delay typing of "| Sri Lanka" until the first text completes
setTimeout(() => {
    typeWriterEffect("text-02", "| Sri Lanka", 100);
}, 3000); // Adjust delay based on the speed and text length

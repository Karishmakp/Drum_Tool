function removeTransition(e) {
    if (e.propertyName !== "transform") return; // Skip if it's not a transform
    e.target.classList.remove("playing");
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    
    if (!audio) return; // Stop if no audio is found

    key.classList.add("playing");
    audio.currentTime = 0; // Reset to start
    audio.volume = 1.0; // Ensure volume is set
    audio.play().catch(error => console.error("Audio playback failed:", error));
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);

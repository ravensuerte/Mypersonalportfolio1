const modeSwitch = document.getElementById("modeSwitch");
const body = document.body;

modeSwitch.addEventListener("change", () => {
    if (modeSwitch.checked) {
        // Switch to dark mode
        body.classList.add("dark-mode");
    } else {
        // Switch to light mode
        body.classList.remove("dark-mode");
    }
});
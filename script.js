const theme = localStorage.getItem("theme");
if (theme) {
        document.body.classList.add(theme);
    }

document.getElementById("themeToggle").addEventListener("click", function () {
    document.body.classList.toggle("night-theme");

    const theme = localStorage.getItem("theme");
    if (theme === "night-theme") {
        localStorage.setItem("theme", "");
    } else {
        localStorage.setItem("theme", "night-theme");
    }
    
});

document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("trigger_like");
    button.addEventListener("click", updateCounterLike);
});

function updateCounterLike() {
    let counterElement = document.getElementById("counter_like");
    let count = parseInt(counterElement.innerText);
    count++;
    counterElement.innerText = count;
};

document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("trigger_message");
    button.addEventListener("click", updateCounterMessage);
});

function updateCounterMessage() {
    let counterElement = document.getElementById("counter_message");
    let count = parseInt(counterElement.innerText);
    count++;
    counterElement.innerText = count;
};

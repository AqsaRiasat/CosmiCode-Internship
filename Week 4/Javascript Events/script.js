// Mouseover Event
const hoverBtn = document.getElementById("hoverBtn");

hoverBtn.addEventListener("mouseover", function() {
    hoverBtn.style.background = "#00c6ff";
    hoverBtn.style.color = "#fff";
    hoverBtn.innerText = "You're Hovering!";
});

hoverBtn.addEventListener("mouseout", function() {
    hoverBtn.style.background = "#764ba2";
    hoverBtn.style.color = "#fff";
    hoverBtn.innerText = "Hover Me!";
});

// Focus & Blur Event
const focusInput = document.getElementById("focusInput");

focusInput.addEventListener("focus", function() {
    focusInput.style.backgroundColor = "#f3f3f3";
});

focusInput.addEventListener("blur", function() {
    focusInput.style.backgroundColor = "#fff";
});

// Keypress Event
const keyInput = document.getElementById("keyInput");
const output = document.getElementById("output");

keyInput.addEventListener("keypress", function(event) {
    output.innerText = "You pressed: " + event.key;
});

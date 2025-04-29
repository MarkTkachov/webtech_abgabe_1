const toggle = document.querySelector("#darkmode-toggle");

toggle.addEventListener("change", (e) => {
    if (e.target.checked) {
        localStorage.setItem("darkmode", "true");
    } else {
        localStorage.setItem("darkmode", "false");
    }
});

const state = localStorage.getItem("darkmode");
if (state === "true") {
    toggle.checked = true;
}

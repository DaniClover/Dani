document.addEventListener("DOMContentLoaded", function () {
    const modeToggle = document.getElementById("mode-toggle");
    const body = document.body;

    // Verificar modo guardado
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        modeToggle.textContent = "☀️";
    }

    modeToggle.addEventListener("click", function () {
        body.classList.toggle("light-mode");

        if (body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
            modeToggle.textContent = "☀️";
        } else {
            localStorage.setItem("theme", "dark");
            modeToggle.textContent = "🌙";
        }
    });
});

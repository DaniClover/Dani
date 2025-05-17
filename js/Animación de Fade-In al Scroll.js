document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-element");

    function handleScroll() {
        fadeElements.forEach(element => {
            const position = element.getBoundingClientRect().top;
            if (position < window.innerHeight - 100) {
                element.classList.add("fade-in");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
});

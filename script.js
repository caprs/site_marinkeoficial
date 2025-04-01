document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".fade-in");

    function checkPosition() {
        elements.forEach((el) => {
            let position = el.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;

            if (position < windowHeight - 100) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", checkPosition);
    checkPosition();
});

document.getElementById("cta-button").addEventListener("mouseover", function() {
    this.style.transform = "scale(1.1)";
    this.style.transition = "0.3s";
});

document.getElementById("cta-button").addEventListener("mouseleave", function() {
    this.style.transform = "scale(1)";
});

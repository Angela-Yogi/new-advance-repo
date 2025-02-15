document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    // Toggle navigation menu
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });

    // Smooth scrolling for links
    const navLinks = document.querySelectorAll(".nav-menu a");

    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
                navMenu.classList.remove("show");
            }
        });
    });
});

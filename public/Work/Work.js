document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    function revealSections() {
        let screenHeight = window.innerHeight;

        sections.forEach((section) => {
            let sectionTop = section.getBoundingClientRect().top;

            // If the section is within the initial view (fully visible), show it
            if (sectionTop < screenHeight) {
                section.classList.add("visible");
            }
        });
    }

    // Run function once when the page loads
    revealSections();

    // Also run on scroll to reveal hidden sections
    window.addEventListener("scroll", revealSections);
});

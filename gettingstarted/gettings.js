// Tab Switching
function openTab(event, tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = "none");
    document.getElementById(tabId).style.display = "block";
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove("active"));
    event.currentTarget.classList.add("active");
}

// Accordion Toggle
document.querySelectorAll(".accordion").forEach(accordion => {
    accordion.addEventListener("click", function () {
        this.nextElementSibling.style.display = (this.nextElementSibling.style.display === "block") ? "none" : "block";
    });
});

// Default Tab
document.getElementById("corporate-email").style.display = "block";

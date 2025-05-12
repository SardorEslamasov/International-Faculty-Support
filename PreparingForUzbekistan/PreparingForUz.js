document.addEventListener("DOMContentLoaded", () => {
    const faqButtons = document.querySelectorAll(".faq-question");
  
    faqButtons.forEach(button => {
      button.addEventListener("click", () => {
        const answer = button.nextElementSibling;
        const span = button.querySelector("span");
  
        // Toggle visibility
        if (answer.style.display === "block") {
          answer.style.display = "none";
          span.textContent = "+";
        } else {
          answer.style.display = "block";
          span.textContent = "−";
        }
      });
    });
  });
  
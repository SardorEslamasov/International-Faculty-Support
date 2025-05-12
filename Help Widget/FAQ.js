document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll(".accordion-header");
  
    headers.forEach(header => {
      header.addEventListener("click", () => {
        const item = header.parentElement;
        item.classList.toggle("active");
  
        // Optional: Close other open items
        headers.forEach(h => {
          if (h !== header) h.parentElement.classList.remove("active");
        });
      });
    });
  });
  
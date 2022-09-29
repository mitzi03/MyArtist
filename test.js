document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("toggle-navbar").addEventListener("click", () => {
      const element = document.getElementById("nav-items");
      if (element.classList.contains("block")) {
        element.classList.remove("block");
        element.classList.add("hidden");
      } else {
        element.classList.remove("hidden");
        element.classList.add("block");
      }
    });
  });
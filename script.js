// Automatically update the footer year.
document.getElementById("year").textContent = new Date().getFullYear();

// Close the mobile navigation after selecting a section.
document.querySelectorAll(".navbar .nav-link, .navbar .btn").forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("mainNav");
    if (menu && menu.classList.contains("show") && window.bootstrap) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});

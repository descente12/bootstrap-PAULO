// Atualiza automaticamente o ano no rodapé.
document.getElementById("year").textContent = new Date().getFullYear();

// Fecha o menu mobile depois que um link é selecionado.
document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.querySelector("#navbarNav");
    if (menu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});

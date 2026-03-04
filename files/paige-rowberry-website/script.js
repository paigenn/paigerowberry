(() => {
  const buttons = document.querySelectorAll(".toggle-button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      if (!targetId) {
        return;
      }

      const abstract = document.getElementById(targetId);
      if (!abstract) {
        return;
      }

      const isHidden = abstract.hasAttribute("hidden");
      if (isHidden) {
        abstract.removeAttribute("hidden");
        button.textContent = "[-] Abstract";
        button.setAttribute("aria-expanded", "true");
      } else {
        abstract.setAttribute("hidden", "");
        button.textContent = "[+] Abstract";
        button.setAttribute("aria-expanded", "false");
      }
    });
  });
})();

/* =======================
   TEMA DARK / LIGHT
======================= */
function toggleTheme() {
  document.body.classList.toggle("light");
  localStorage.setItem("theme",
    document.body.classList.contains("light") ? "light" : "dark");
}

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
}

/* =======================
   ACCORDION
======================= */
function toggleSection(header) {
  const section = header.parentElement;
  section.classList.toggle("open");
}

/* =======================
   COPIAR COMANDOS
======================= */
document.querySelectorAll(".copy").forEach(btn => {
  btn.onclick = () => {
    const code = btn.nextElementSibling.innerText;
    navigator.clipboard.writeText(code);
    btn.innerText = "Copiado!";
    setTimeout(() => btn.innerText = "Copiar", 1200);
  };
});

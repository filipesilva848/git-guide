/* =======================
   TEMA DARK / LIGHT
======================= */
function toggleTheme() {
  document.body.classList.toggle("light");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("light") ? "light" : "dark"
  );
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
document.querySelectorAll(".copy").forEach((btn) => {
  btn.onclick = () => {
    const code = btn.nextElementSibling.innerText;
    navigator.clipboard.writeText(code);
    btn.innerText = "Copiado!";
    setTimeout(() => (btn.innerText = "Copiar"), 1200);
  };
});

/* =======================
   PESQUISA DE COMANDOS
======================= */
function searchCommands() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const sections = document.querySelectorAll("section");
  const noResults = document.getElementById("noResults");
  let hasResults = false;

  sections.forEach((section) => {
    const commands = section.querySelectorAll(".command");
    let sectionHasMatch = false;

    commands.forEach((command) => {
      const description = command.querySelector("p").textContent.toLowerCase();
      const code = command.querySelector("code").textContent.toLowerCase();
      const matches =
        description.includes(searchTerm) || code.includes(searchTerm);

      if (searchTerm === "") {
        command.classList.remove("highlight");
        command.style.display = "block";
      } else if (matches) {
        command.classList.add("highlight");
        command.style.display = "block";
        sectionHasMatch = true;
        hasResults = true;
      } else {
        command.classList.remove("highlight");
        command.style.display = "none";
      }
    });

    if (searchTerm === "") {
      section.style.display = "block";
    } else if (sectionHasMatch) {
      section.style.display = "block";
      section.classList.add("open");
    } else {
      section.style.display = "none";
    }
  });

  if (searchTerm !== "" && !hasResults) {
    noResults.style.display = "block";
  } else {
    noResults.style.display = "none";
  }
}

// Abrir primeira seção por padrão
document.addEventListener("DOMContentLoaded", () => {
  const firstSection = document.querySelector("section");
  if (firstSection && !firstSection.classList.contains("open")) {
    firstSection.classList.add("open");
  }
});

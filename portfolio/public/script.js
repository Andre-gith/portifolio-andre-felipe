const toggleButton = document.querySelector(".togglebtn");
const navLinks = document.querySelector(".navlinks");
const navItems = document.querySelectorAll(".navlinks a");

function closeMenu() {
    if (!toggleButton || !navLinks) return;

    toggleButton.classList.remove("click");
    toggleButton.setAttribute("aria-expanded", "false");
    toggleButton.setAttribute("aria-label", "Abrir menu");
    navLinks.classList.remove("open");
}

if (toggleButton && navLinks) {
    toggleButton.addEventListener("click", function () {
        const isOpen = this.getAttribute("aria-expanded") === "true";
        this.classList.toggle("click", !isOpen);
        this.setAttribute("aria-expanded", String(!isOpen));
        this.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
        navLinks.classList.toggle("open", !isOpen);
    });

    navItems.forEach(function (link) {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") closeMenu();
    });
}

const sections = document.querySelectorAll(".hero-header[id], main section[id], main article[id]");

function updateActiveNavigation() {
    const scrollPosition = window.scrollY + 120;
    let activeSection = sections[0];

    sections.forEach(function (section) {
        if (section.offsetTop <= scrollPosition) activeSection = section;
    });

    navItems.forEach(function (link) {
        const isActive = activeSection && link.getAttribute("href") === "#" + activeSection.id;
        link.classList.toggle("active", Boolean(isActive));

        if (isActive) {
            link.setAttribute("aria-current", "location");
        } else {
            link.removeAttribute("aria-current");
        }
    });
}

window.addEventListener("scroll", updateActiveNavigation, { passive: true });
window.addEventListener("load", updateActiveNavigation);

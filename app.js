const checkbox = document.getElementById("checkbox");
const icons = document.querySelectorAll(".icon");
const banner = document.querySelector(".banner-section");
const header = document.querySelector(".header-section");
let navButton = document.querySelector(".mobile-nav");
let nav = document.getElementById("navbar");
let open = document.getElementById("mobile-open");
let close = document.getElementById("mobile-close");
// const toggleBtn = document.getElementById("toggle-btn");

// Responsive Breakpoints
window.addEventListener("resize", (e) => {
    window
        .matchMedia("(max-width: 768px)")
        .addEventListener("change", (e) => (md = e.matches));
});

// Light and dark mode function
function theme() {
    document.body.classList.add("light");
    banner.classList.add("light");
    header.classList.add("light");
    icons.forEach((icon) => icon.classList.add("lightIcon"));

    nav.classList.add("light");

    checkbox.addEventListener("change", () => {
        if (
            document.body.classList.contains("dark") &&
            !document.body.classList.contains("light")
        ) {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
            banner.classList.remove("dark");
            banner.classList.add("light");
            header.classList.remove("dark");
            header.classList.add("light");
            nav.classList.remove("dark");
            nav.classList.add("light");
        } else if (
            !document.body.classList.contains("dark") &&
            document.body.classList.contains("light")
        ) {
            document.body.classList.add("dark");
            document.body.classList.remove("light");
            banner.classList.add("dark");
            banner.classList.remove("light");
            header.classList.remove("light");
            header.classList.add("dark");
            nav.classList.remove("light");
            nav.classList.add("dark");
        }
        icons.forEach((icon) => icon.classList.toggle("darkIcon"));
    });
}
theme();

// mobile nav toggler function
function navToggle() {
    if (
        !open.classList.contains("d-none") &&
        close.classList.contains("d-none")
    ) {
        open.classList.add("d-none");
        close.classList.remove("d-none");
        nav.classList.remove("close");
        nav.classList.add("open");
        if (document.body.classList.contains("light")) {
            document.body.classList.add("lightShape");
            banner.classList.add("lightShape");
        } else if (document.body.classList.contains("dark")) {
            document.body.classList.add("darkShape");
            banner.classList.add("darkShape");
        }
    } else if (
        open.classList.contains("d-none") &&
        !close.classList.contains("d-none")
    ) {
        open.classList.remove("d-none");
        close.classList.add("d-none");
        nav.classList.remove("open");
        nav.classList.add("close");
        document.body.classList.remove("darkShape");
        document.body.classList.remove("lightShape");
        banner.classList.remove("darkShape");
        banner.classList.remove("lightShape");
    }
}
navButton.addEventListener("click", navToggle);

// click outside to close mobile nav
window.addEventListener("mouseup", function (event) {
    if (
        !event.target.closest("#navbar") &&
        !event.target.closest(".mobile-nav")
    ) {
        if (
            open.classList.contains("d-none") &&
            !close.classList.contains("d-none")
        ) {
            open.classList.remove("d-none");
            close.classList.add("d-none");
            nav.classList.remove("open");
            nav.classList.add("close");
        }
        document.body.classList.remove("darkShape");
        document.body.classList.remove("lightShape");
        banner.classList.remove("darkShape");
        banner.classList.remove("lightShape");
    }
});

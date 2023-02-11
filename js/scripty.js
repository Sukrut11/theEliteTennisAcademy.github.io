const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

mobile_nav.addEventListener("click", () => toggleNavbar());
const toggleNavbar = () => {
    // alert("Plz Subscribe ");
    nav_header.classList.toggle("active");
};

function show_hide() {
    document.getElementById("heading").style.display = "none";
    document.getElementById("image").style.display = "none";
    document.getElementById("message").style.display = "none";

}

function show() {
    document.getElementById("heading").style.display = "flex";
    document.getElementById("image").style.display = "flex";
    document.getElementById("message").style.display = "flex";
}
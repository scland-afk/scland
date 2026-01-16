// CodeStitch Navigation

const CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");
const csUL = document.querySelector("#cs-expanded");

if (CShamburgerMenu && CSnavbarMenu && csUL) {
  CShamburgerMenu.addEventListener("click", function () {
    const isOpen = CSnavbarMenu.classList.toggle("cs-active");

    CShamburgerMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");

    csUL.setAttribute("aria-expanded", isOpen ? "true" : "false");
    CShamburgerMenu.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  document.addEventListener("scroll", () => {
    const scroll = document.documentElement.scrollTop;
    if (scroll >= 100) document.body.classList.add("scroll");
    else document.body.classList.remove("scroll");
  });

  const dropDowns = Array.from(document.querySelectorAll("#cs-navigation .cs-dropdown"));
  dropDowns.forEach((item) => {
    item.addEventListener("click", () => item.classList.toggle("cs-active"));
  });
}

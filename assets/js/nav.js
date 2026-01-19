(function () {
  const body = document.body;
  const navbar = document.querySelector("#cs-navigation");
  const toggle = document.querySelector("#cs-navigation .cs-toggle");
  const csUL = document.querySelector("#cs-expanded");
  const dropDowns = Array.from(document.querySelectorAll("#cs-navigation .cs-dropdown"));
  const navLinks = Array.from(document.querySelectorAll("#cs-navigation a.cs-li-link"));
  
  if (!navbar || !toggle || !csUL) return;
  
  function setExpanded(isExpanded) {
    csUL.setAttribute("aria-expanded", isExpanded ? "true" : "false");
    toggle.setAttribute("aria-expanded", isExpanded ? "true" : "false");
  }
  
  function closeMenu() {
    toggle.classList.remove("cs-active");
    navbar.classList.remove("cs-active");
    body.classList.remove("cs-open");
    setExpanded(false);
    for (const item of dropDowns) {
      item.classList.remove("cs-active");
    }
  }
  
  function openMenu() {
    toggle.classList.add("cs-active");
    navbar.classList.add("cs-active");
    body.classList.add("cs-open");
    setExpanded(true);
  }
  
  toggle.addEventListener("click", function () {
    const isOpen = navbar.classList.contains("cs-active");
    if (isOpen) closeMenu();
    else openMenu();
  });
  
  // Dropdown toggle on mobile
  for (const item of dropDowns) {
    item.addEventListener("click", function (e) {
      // Prevent closing menu when clicking inside dropdown links
      const clickedLink = e.target && e.target.closest("a");
      if (clickedLink) return;
      item.classList.toggle("cs-active");
    });
  }
  
  // Close menu after clicking a normal link on mobile
  for (const link of navLinks) {
    link.addEventListener("click", function () {
      const isMobile = window.matchMedia("(max-width: 63.9375rem)").matches;
      if (isMobile) closeMenu();
    });
  }
  
  // Close on resize to desktop
  window.addEventListener("resize", function () {
    const isDesktop = window.matchMedia("(min-width: 64rem)").matches;
    if (isDesktop) closeMenu();
  });
})();

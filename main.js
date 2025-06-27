const navLinks = document.getElementById("links");
const menuBtn = document.getElementById("menu_button"); 
const menuBtnIcon = menuBtn.querySelector("i");
menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-3-line");
    });

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
    
    });

const scrollOption = {
    distance: "40px",
    origin: "bottom",
    duration: 1000,
};

//header container
ScrollReveal().reveal(".header_content h1", { ...scrollOption, delay : 100});

//about container
ScrollReveal().reveal(".about_content .sec_header", { ...scrollOption,});
ScrollReveal().reveal(".about_content .description", { ...scrollOption, delay : 500});

//skills container
ScrollReveal().reveal(".skills_content .sec_header", { ...scrollOption,});
ScrollReveal().reveal(".skills_content .skills", { ...scrollOption, delay : 500});

function toggleDropdown(button) {
  const parent = button.parentElement;
  const dropdown = parent.querySelector('.options');
  const arrow = button.querySelector('.dropdown-arrow');

  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
    arrow.classList.remove("rotate");
  } else {
    dropdown.style.display = "block";
    arrow.classList.add("rotate");
  }
}
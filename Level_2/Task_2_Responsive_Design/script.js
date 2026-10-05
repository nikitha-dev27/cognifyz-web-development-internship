// Get the menu button and navigation links

const menuButton = document.getElementById("menuButton");

const navLinks = document.getElementById("navLinks");


// Open and close the mobile menu

menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("show");

});


// Close the menu after clicking a navigation link

const links = navLinks.querySelectorAll("a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");

    });

});
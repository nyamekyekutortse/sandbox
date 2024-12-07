"use strict";

const body = document.body;
const bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];
const nav = document.querySelector(".menu");
const navItems = nav.querySelectorAll(".menu__item");
const navBorder = nav.querySelector(".menu__border");
let activeItem = nav.querySelector(".active");

function clickItem(item, index) {
    nav.style.removeProperty("--timeOut");

    if (activeItem === item) return;

    if (activeItem) {
        activeItem.classList.remove("active");
    }

    item.classList.add("active");
    body.style.backgroundColor = bgColorsBody[index];
    activeItem = item;
    offsetNavBorder(activeItem, navBorder);
}

function offsetNavBorder(element, navBorder) {
    const offsetActiveItem = element.getBoundingClientRect();
    const left = Math.floor(
        offsetActiveItem.left - nav.offsetLeft - (navBorder.offsetWidth - offsetActiveItem.width) / 2
    ) + "px";
    navBorder.style.transform = `translate3d(${left}, 0, 0)`;
}

// Initialize the position of the border for the active item
offsetNavBorder(activeItem, navBorder);

// Attach event listeners to each nav item
navItems.forEach((item, index) => {
    item.addEventListener("click", () => clickItem(item, index));
});

// Adjust the border position on window resize
window.addEventListener("resize", () => {
    offsetNavBorder(activeItem, navBorder);
    nav.style.setProperty("--timeOut", "none");
});
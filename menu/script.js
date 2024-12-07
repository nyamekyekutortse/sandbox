/* Constants */
const menuItems = document.querySelectorAll(".menu__item");
const currentItem = document.querySelector("#current");
const moveDistance = 140; // Movement step for each item

/* Function to handle menu item click */
const getItem = (event) => {
    // Extract the x and y values from the menu item's id (e.g., "0-0")
    const [x, y] = event.currentTarget.id.split("-").map(Number);

    // Move the currentItem element horizontally
    currentItem.style.left = `${x * moveDistance}px`;

    // Move the currentItem element vertically after a delay
    setTimeout(() => {
        currentItem.style.top = `${y * moveDistance}px`;
    }, 200);
};

/* Initialize event listeners */
const initializeMenu = () => {
    menuItems.forEach((item) => {
        item.addEventListener("click", getItem);
    });
};

/* Main */
window.addEventListener("load", initializeMenu);
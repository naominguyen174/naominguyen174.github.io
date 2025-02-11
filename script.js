document.addEventListener("DOMContentLoaded", function () {
    // Project list (if needed for dynamic project loading)
    const projects = [
        { name: "Portfolio Website (THIS ONE!)", link: "https://naominguyen174.github.io/naominguyen174.github.io" }
    ];

    const projectList = document.getElementById("project-list");
    projects.forEach(project => {
        let li = document.createElement("li");
        li.innerHTML = `<a href="${project.link}" target="_blank">${project.name}</a>`;
        projectList.appendChild(li);
    });
});

// Toggle the visibility of the navigation menu
function toggleMenu() {
    var navMenu = document.getElementById("nav-menu");

    // Toggle the menu visibility
    if (navMenu.classList.contains("hidden")) {
        navMenu.classList.remove("hidden"); // Show the menu
    } else {
        navMenu.classList.add("hidden"); // Hide the menu
    }
}


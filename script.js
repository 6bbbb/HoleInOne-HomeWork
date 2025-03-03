// Typed
var typed1 = new Typed(".typed", {
    strings: [
        "Welcome To Hole in One Website Enjoy!",
        "مرحبا بك في موقع جولف هول ان ون حيث يجتمع المرح , استمتع!"
    ],
    typeSpeed: 70,
    backSpeed: 40,
    loop: true
});

// Show Side bar

function chowSidebar() {
    const sidebarItems = document.querySelectorAll(".side-bar li");
    sidebarItems.forEach(item => {
        item.style.display = 'block';
    });
}

function hideSidebar() {
    const sidebarItems = document.querySelectorAll(".side-bar li");
    sidebarItems.forEach(item => {
        item.style.display = 'none';
    });
}


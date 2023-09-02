document.addEventListener("DOMContentLoaded", function() {
    fetch("navbar.html").then((response)=>response.text()).then((navbarHtml)=>{
        const navbarContainer = document.querySelector(".navbar-container");
        if (navbarContainer) navbarContainer.innerHTML = navbarHtml;
    });
});

//# sourceMappingURL=index.8bb2c238.js.map

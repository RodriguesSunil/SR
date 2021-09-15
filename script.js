const nav = document.querySelector('#nav');

function openNavigation() {
    nav.style.transform = "translateX(0)";
}
function closeNavigation() {
    nav.style.transform = "translateX(-100%)";
}

function navigate(url) {
    location.href = url;
}


window.onload = () => {
    // declare variables
}
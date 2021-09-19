
// fetch other resources


    
window.onload = () => {

    // display names of navigation elements
    const navigationElements = [
        document.querySelector('#root'),
        document.querySelector('#interest-in-it'),
        document.querySelector('#ideal-job'),
        document.querySelector('#profile'),
        document.querySelector('#project-idea')
    ];
    navigationElements[0].innerHTML = "About Me";
    navigationElements[1].innerHTML = "Interest In IT";
    navigationElements[2].innerHTML = "Ideal Job";
    navigationElements[3].innerHTML = "Profile";
    navigationElements[4].innerHTML = "Project Idea";
        
}       









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

const toggleButton = document.querySelector('.toggle-button')
const navBars = document.querySelector('ul.navbars')


toggleButton.addEventListener("click", () => {
    if (navBars.style.left === "-100%") {
        navBars.style.left = '0%'
    } else {
        navBars.style.left = '-100%'
    }
})
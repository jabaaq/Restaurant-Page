import createContactPage from "./contact"
import createMenuPage from "./menu"
import createRestaurantHomePage from "./restaurant"



const createTabs = () => {
    const content = document.querySelector('#navbar')
    const pageContent = document.createElement('div')
    pageContent.classList.add('nav-content')

    pageContent.innerHTML = `
    <div class="restaurant-webpage">
            <div class="div">
                <div class="navbar">
                    <div class="overlap-group">
                        <div class="frame">
                            <div id="home-btn" class="home">Home</div>
                            <div id="menu-btn" class="text-wrapper">Menu</div>
                            <div id="contact-btn" class="text-wrapper">Contact</div>
                        </div>
                    </div>
                </div>
                <img class="menu" src="/img/menu.png" />
                <img class="image" src="/img/image 2.png" />
    `
    content.appendChild(pageContent)

    let homeBtn = document.querySelector('#home-btn')
    let menuBtn = document.querySelector('#menu-btn')
    let contactBtn = document.querySelector('#contact-btn')

    homeBtn.addEventListener('click', () => {
        clearContent()
        createRestaurantHomePage();
    })

    menuBtn.addEventListener('click', () => {
        clearContent()
        createMenuPage()
    })

    contactBtn.addEventListener('click', () => {
        clearContent()
        createContactPage();
    })
}

function clearContent() {
    const content = document.querySelector('#content')
    const pageContent = document.querySelector('.page-content')

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

export default createTabs;
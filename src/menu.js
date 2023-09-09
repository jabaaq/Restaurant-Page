const createMenuPage = () => {
    const content = document.querySelector('#content')
    const pageContent = document.createElement('div')
    pageContent.classList.add('page-content')

    pageContent.innerHTML = `
    <div class="restaurant-webpage">
    <div class="div">
        <div class="navbar">
            <div class="overlap-group">
                <div class="frame">
                    <div class="home">Home</div>
                    <div class="text-wrapper">Menu</div>
                    <div class="text-wrapper">Contact</div>
                </div>
                <img class="line" src="img/line-1.svg" />
            </div>
        </div>
        <img class="menu" src="/img/menu.png" />
        <img class="image" src="/img/image 2.png" />
        <div class="overlap">
            <img class="menu-image" src="/img/Menu image.jpg" alt="Menu" srcset="">
        </div>
    </div>
</div>
    `

    content.appendChild(pageContent)
}

export default createMenuPage;
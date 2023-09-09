const createMenuPage = () => {
    const content = document.querySelector('#content')
    const pageContent = document.createElement('div')
    pageContent.classList.add('page-content')

    pageContent.innerHTML = `
    <div class="restaurant-webpage">
        <div class="overlap">
            <img class="menu-image" src="/img/Menu image.jpg" alt="Menu" srcset="">
        </div>
    </div>
    `

    content.appendChild(pageContent)
}

export default createMenuPage;
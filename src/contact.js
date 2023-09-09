const createContentPage = () => {
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
                    <div class="container">

                        <div class="modal">
                            <div class="modal__header">
                                <span class="modal__title">CONTACT US</span><button class="button button--icon"><svg
                                        width="24" viewBox="0 0 24 24" height="24" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                                        <path
                                            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z">
                                        </path>
                                    </svg></button>
                            </div>
                            <div class="modal__body">
                                <div class="input">
                                    <label class="input__label">Subject</label>
                                    <input class="input__field" type="text">
                                    <p class="input__description">The subject must contain a maximum of 32 characters
                                    </p>
                                </div>
                                <div class="input">
                                    <label class="input__label">Message</label>
                                    <textarea class="input__field input__field--textarea"></textarea>
                                    <p class="input__description">Send us your message!</p>
                                </div>
                            </div>
                            <div class="modal__footer">
                                <button class="button button--primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
    content.appendChild(pageContent)
}

export default createContentPage;
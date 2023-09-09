//Restaurant main page

const createRestaurantHomePage = () => {
    const content = document.querySelector('#content')
    const pageContent = document.createElement('div')
    pageContent.classList.add('page-content')

    pageContent.innerHTML = `
    <div class="restaurant-webpage">
        <div class="overlap">
            <div class="overlap-2">
                <div class="frame-2">
                    <div class="adding-flavours-to">Adding flavours<br />to your meal!</div>
                    <p class="p">
                        Explore our healthy meal delivery options. Create your own recipe by adding flavours to
                        them!
                    </p>
                </div>
                <img class="ellipse" src="/img/ellipse 21.png" />
                <div class="group">
                    <div class="overlap-3">
                        <img class="star" src="/img/Star 2.png" />
                        <p class="element-off">
                            <span class="span">20%<br /></span> <span class="text-wrapper-2">Off</span>
                        </p>
                    </div>
                </div>
                <img class="img" src="/img/Group 73.png" />
                <img class="group-2" src="/img/Group 74.png" />
            </div>
            <div class="frame-3">
                <div class="div-wrapper">
                    <div class="text-wrapper-3">Explore Now</div>
                </div>
                <div class="group-3">
                    <div class="text-wrapper-4">Play Video</div>
                    <img class="play-circle" src="/img/play-circle.png" />
                </div>
            </div>
            <div class="overlap-wrapper">
                <div class="overlap-4">
                    <img class="rectangle" src="/img/Rectangle 93.png" />
                    <img class="ellipse-2" src="/img/Ellipse 23.png" />
                    <div class="group-4">
                        <div class="text-wrapper-5">$50.00</div>
                        <div class="frame-4">
                            <div class="text-wrapper-6">Order Now</div>
                            <img class="vector" src="/img/Vector 2.png" />
                        </div>
                        <div class="text-wrapper-7">Berries Salad</div>
                        <div class="frame-5">
                            <img class="star-2" src="/img/Star 1.png" />
                            <div class="text-wrapper-8">5.0</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="overlap-group-wrapper">
                <div class="overlap-4">
                    <img class="rectangle" src="/img/Rectangle 93.png" />
                    <img class="ellipse-2" src="/img/Ellipse 22.png" />
                    <div class="group-4">
                        <div class="text-wrapper-5">$40.00</div>
                        <div class="frame-4">
                            <div class="text-wrapper-6">Order Now</div>
                            <img class="vector" src="/img/Vector 2.png" />
                        </div>
                        <div class="text-wrapper-7">Healthy Salad</div>
                        <div class="frame-5">
                            <img class="star-2" src="/img/Star 1.png" />
                            <div class="text-wrapper-8">5.0</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>g
    `
    content.appendChild(pageContent)

}

export default createRestaurantHomePage
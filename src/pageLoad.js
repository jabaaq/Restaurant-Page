import createRestaurantHomePage from './restaurant'
import createTabs from './tabs';
import createContactPage from './contact';
import createMenuPage from './menu';


function initialLoad() {
    createTabs()
    createRestaurantHomePage()
}

export default initialLoad;
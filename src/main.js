import Vue from 'vue'
import App from './App.vue'

/* Bootstrap */
const bootstrap = require('bootstrap')
Vue.use(bootstrap)

/* Font Awesome icons*/
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons 👇 QUI AGGIUNGI LE ICONE che vuoi usare in camelCase */
import { faClock as fasClock, faPhone, faEnvelope, faPlay, faArrowRight, faDiagramProject, faLocationDot, faBriefcase, faChartSimple, faPlaneUp, faGlobe, faInbox } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faUser, faClock as farClock } from '@fortawesome/free-regular-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library 👇 QUI AGGIUNGI IL NOME DELL'ICONA in camelCase*/
library.add(fasClock, faPhone, faEnvelope, faFacebookF, faTwitter, faLinkedinIn, faUser, faPlay, faArrowRight, faDiagramProject, faLocationDot, faBriefcase, faChartSimple, faPlaneUp, faGlobe, faInbox, farClock)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

/* Font Nunito */
import "@fontsource/nunito"
import "@fontsource/nunito/300.css"
import "@fontsource/nunito/600.css"
import "@fontsource/nunito/900.css"

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
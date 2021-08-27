import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

const app = createApp(App)
app.use(router)
app.use(VueSweetalert2)
app.mount('#app')

window.Kakao.init("c6774a5692a3476d236dfccb693b7472");
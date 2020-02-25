import 'es6-promise/auto'
import axios from 'axios'
import './bootstrap'
import Vue from 'vue'
import VueAuth from '@websanova/vue-auth'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import Index from './Index'
import auth from './auth'
import router from './router'
import sidebar from './side-bar.vue'

// Set Vue globally
window.Vue = Vue

// Set Vue router
Vue.router = router
Vue.use(VueRouter)

// Set Vue authentication
Vue.use(VueAxios, axios)
axios.defaults.baseURL = `${process.env.MIX_APP_URL}/api`
Vue.use(VueAuth, auth)

//v-form
import { Form, HasError, AlertError } from 'vform'
window.Form= Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)


//sweet alert2
import Swal from 'sweetalert2';
window.Swal = Swal;
const toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});
window.toast = toast;


//vuex
import Vuex from 'vuex'
Vue.use(Vuex)
import storeData from './store/index'
const store = new Vuex.Store(
    storeData
);


//Date Time Format using Moment js
import {filter} from './filter'


// Load Index
Vue.component('index', Index)
Vue.component('side-bar', sidebar);

Vue.component('admin-main', require('./components/admin/Master.vue').default);

const app = new Vue({
    el: '#app',
    router,
    store,

});

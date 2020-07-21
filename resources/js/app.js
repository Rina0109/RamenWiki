require('./bootstrap');

window.Vue = require('vue');

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('sample-component', require('./components/SampleComponent.vue').default);
Vue.component('menubar-not-login-component', require('./components/MenubarNotLogin').default);
Vue.component('search-view-component', require('./components/SearchView').default);

const app = new Vue({
    el: '#app'
});

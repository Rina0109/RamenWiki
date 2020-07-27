require("./bootstrap");

window.Vue = require("vue");

/* ここに作ったコンポーネントを記載する */
Vue.component('wiki-page', require('./components/WikiPage.vue').default);
Vue.component('wiki-edit', require('./components/Wikiedit.vue').default);
Vue.component('mypage-passchange', require('./components/Mypage_Passchange.vue').default);
Vue.component('ai-page', require('./components/AIPage.vue').default);
Vue.component('goodbye-page', require('./components/Goodbye.vue').default);
Vue.component('goodbyebye-page', require('./components/Goodbye_bye.vue').default);
Vue.component(
    "login-component",
    require("./components/LoginComponent").default
);
Vue.component(
    "member-register-component",
    require("./components/MemberRegisterComponent").default
);
Vue.component(
    "example-component",
    require("./components/ExampleComponent.vue").default
);
Vue.component(
    "sample-component",
    require("./components/SampleComponent.vue").default
);
Vue.component(
    "search-form-component",
    require("./components/SearchFormComponent").default
);
Vue.component(
    "menubar-not-login-component",
    require("./components/MenubarNotLogin").default
);
Vue.component(
    "result-card-component",
    require("./components/ResultCardComponent").default
);
//pages
Vue.component("search-view", require("./pages/SearchView").default);
Vue.component("store-detail", require("./pages/StoreDetail").default);
Vue.component("delete-account", require("./pages/DeleteAccount").default);
Vue.component("my-page", require("./pages/MyPage").default);
Vue.component("recommend-ramen", require("./pages/RecommendRamen").default);
Vue.component("review-detail", require("./pages/ReviewDetail").default);
Vue.component("review-list", require("./pages/ReviewList").default);
Vue.component("create-view", require("./pages/CreateReview").default);

const app = new Vue({
    el: "#app"
});

<template>
  <div class="mypage">
    <div class="header">
      <h1>{{ user.name }}</h1>
        <router-link class="arrow" :to="{ name: 'search-view2' }">
            ⬅
        </router-link>
    </div>
    <div id="nav">
      <ul>
        <li
          :class="{
            'tab': tab === 1,
            'tab-no': tab != 1
            }"
          @click="tab = 1"
        >ユーザ情報</li>
        <li
          :class="{
            'tab': tab === 2,
            'tab-no': tab != 2
            }"
          @click="tab = 2"
        >写真一覧</li>
        <li
          :class="{
            'tab': tab === 3,
            'tab-no': tab != 3
            }"
          @click="tab = 3"
        >レビュー</li>
      </ul>
    </div>
    <div class="content">
      <div v-show="tab === 1">
        <myuser></myuser>
      </div>
      <div v-show="tab === 2">
        <myimage></myimage>
      </div>
      <div v-show="tab === 3">
        <myreview></myreview>
      </div>
    </div>
  </div>
</template>

<script>
    import axios from "axios";
    export default {
    data() {
        return {
        tab : 1,
        user:{
            id: 1,
            name: "hoge",
            password: "hogehoge",
            email: "hoge@hoge.com"
        }
    }
  },
    created() {
      console.log("hoge")
      axios.get('localhost:8080/user')
        .then(response => {
            console.log(response);
        })
        .catch(err=>{
            console.log(err);
        })
    }
}
</script>

<style lang="scss">
    .arrow {
        position: relative;
        top: -238px;
        font-size: 45px;
        left: -510px;
        text-decoration: none;
        color: white;
    }

</style>

<template>
  <div>
    <h1>页面二</h1>
    <div>
      <router-link :to="{ name: 'ChildOne', params: { userName: 'test' } }"
        >子页面一</router-link
      >｜
      <!-- <router-link to="/pagetwo/childtwo">子页面二</router-link> -->
      <router-link
        :to="{ path: '/pagetwo/childtwo', query: { age: 20, school: '黑大' } }"
        >子页面二</router-link
      >｜
      <router-link to="/pagetwo/childthree/aaaaaa">子页面三</router-link>
    </div>
    <ul>
      <li v-for="item in dataList" v-bind:key="item.jrid">{{item.levelname}}</li>
    </ul>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
        dataList:[]
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get("http://47.92.82.13:4000/showMessage")
        .then((response) => {
            this.dataList = response.data.data
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
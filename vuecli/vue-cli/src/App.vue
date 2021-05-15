<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/pageone">页面一</router-link>|
      <router-link to="/pagetwo">页面二</router-link>|
      <router-link to="/home">返回首页</router-link>|
      <span @click="routerHandle">编程导航</span>

    </div>
    <div class="box">
      <transition name="fade">
        <router-view/>
      </transition>
    </div>
    
    
  </div>
</template>
<script>
export default {
  methods: {
    routerHandle(){
      // this.$router.push('/about');
      // this.$router.go(-2)
    }
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.box{
  position: relative;
}
.fade-enter{
  transform: translateX(100%);
}
.fade-enter-active{
  transition: all 1s linear;
  position: absolute;
  top:0;
  width: 100vw;
}
.fade-enter-to{
  transform: translateX(0);
}

.fade-leave{
  transform: translateX(0);
  
}
.fade-leave-active{
  transition: all 1s linear;
  position: absolute;
  width: 100vw;
  top:0;
}
.fade-leave-to{
  
  transform: translateX(-100%);
}
</style>

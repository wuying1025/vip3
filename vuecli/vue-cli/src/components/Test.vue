<template>
    <div>
       <h1>{{str}}</h1> 
       <h1>{{$store.state.vip2}}</h1>
    </div>
</template>

<script>
export default {
    name:"Test",
    data() {
        return {
            str:"这是一个测试页面"
        }
    },
}
</script>

<style scoped>
h1{
    color: red;
}
</style>
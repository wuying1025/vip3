<template>
    <div>
       <h1>页面一</h1> 
       <h1>{{$store.state.num}}</h1>
       <h1>{{$store.getters.sum}}</h1>
       <button @click="addHandle">add</button>
    </div>
</template>

<script>
export default {
    created() {
        console.log(this.$store.state.vip2)
    },
    methods: {
        addHandle(){
            // this.$store.state.num++
            // this.$store.commit("addNum",10);
            this.$store.dispatch("actionAdd");
        }
    },
}
</script>
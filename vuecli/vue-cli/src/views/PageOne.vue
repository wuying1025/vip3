<template>
    <div>
       <h1>页面一</h1> 
       <!-- <h1>{{$store.state.num}}</h1> -->
       <h1>{{num}}</h1>
       <h1>{{vip2}}</h1>
       <!-- <h1>{{$store.getters.sum}}</h1> -->
       <h1>{{sum}}</h1>
       <button @click="addHandle">add</button>
    </div>
</template>

<script>
import {mapState,mapMutations,mapActions,mapGetters} from "vuex"
export default {
    created() {
        console.log(this.$store.state.vip2)
    },
    computed:{
        ...mapState(["num","vip2"]),
        ...mapGetters(["sum"])
        // num(){
        //     return this.$store.state.num
        // }
    },
    methods: {
        ...mapMutations(["addNum"]),
        ...mapActions(["actionAdd"]),
        addHandle(){
            // this.$store.state.num++
            // this.$store.commit("addNum",10);
            // this.$store.dispatch("actionAdd");
            // this.addNum(10);
            this.actionAdd();
            
        }
    },
}
</script>
<template>
    <div>
        <h1>子页面一</h1>
        {{msg}}
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg:""
        }
    },
    created() {
        let str = this.$route.params.userName;
        this.msg = str;
    },
}
</script>
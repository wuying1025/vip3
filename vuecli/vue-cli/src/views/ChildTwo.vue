<template>
    <div>
        <h1>子页面二</h1>
        <h1>{{msg}}</h1>
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
        this.msg = this.$route.query.school
    },
}
</script>
<template>
    <div>
        <h1>子页面三</h1>
        <h1>{{msg}}</h1>
        <el-button type="text" @click="open">点击打开 Message Box</el-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg:""
        }
    },
    methods: {
        open() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定1',
          cancelButtonText: '取消1',
          type: 'error'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
        }
    },
    created() {
        this.msg = this.$route.params.username
    },
}
</script>
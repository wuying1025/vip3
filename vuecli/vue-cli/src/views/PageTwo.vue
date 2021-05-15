<template>
    <div>
        <h1>页面二</h1>
        <div>
            <router-link :to="{name:'ChildOne',params:{userName:'test'}}">子页面一</router-link>｜
            <!-- <router-link to="/pagetwo/childtwo">子页面二</router-link> -->
            <router-link :to="{path:'/pagetwo/childtwo',query:{age:20,school:'黑大'}}">子页面二</router-link>｜
            <router-link to="/pagetwo/childthree/aaaaaa">子页面三</router-link>
        </div>
        <div>
            <router-view />
        </div>
    </div>
</template>
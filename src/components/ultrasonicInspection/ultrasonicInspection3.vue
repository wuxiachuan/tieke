<template>
    <processtemp v-bind:requestURL="requestURL" v-bind:index="'4'"
                 v-bind:finishFlag="'isaxleInspectionFinish'" v-bind:title="'超声波探伤'"
                 v-bind:navhead1="'轮对探伤'" v-bind:navhead2="'超声波探伤'"></processtemp>
</template>

<script>
    import processtemp from "../template/processtemp";
    export default {
        name: "information",
        components:{
            processtemp:processtemp,
        },
        data(){
            return {
                requestURL:'/axleInspection',
            };
        },
    }
</script>

<style lang="scss" scoped>
</style>
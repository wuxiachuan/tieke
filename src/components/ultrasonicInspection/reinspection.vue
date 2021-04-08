<template>
    <processtemp v-bind:requestURL="requestURL" v-bind:index="'13'"
                 v-bind:finishFlag="'isreInspectionFinish'" v-bind:title="'人工复探'"
                 v-bind:navhead1="'轮对探伤'" v-bind:navhead2="'人工复探'"></processtemp>
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
                requestURL:'/reInspection',
            };
        },
    }
</script>

<style lang="scss" scoped>
</style>
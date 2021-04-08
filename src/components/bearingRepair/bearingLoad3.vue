<template>
    <processtemp v-bind:requestURL="requestURL" v-bind:index="'6'"
                 v-bind:finishFlag="'isbearingLoadFinish'" v-bind:title="'轴承压装'"
                 v-bind:navhead1="'轴承检修'" v-bind:navhead2="'轴承压装'"></processtemp>
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
                requestURL:'/bearingLoad',
            };
        },
    }
</script>

<style lang="scss" scoped>
</style>
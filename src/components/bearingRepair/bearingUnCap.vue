<template>
    <processtemp v-bind:requestURL="requestURL" v-bind:index="'10'"
                 v-bind:finishFlag="'isbearingUnCapFinish'" v-bind:title="'轴承开盖'"
                 v-bind:navhead1="'轴承检修'" v-bind:navhead2="'轴承开盖'"></processtemp>
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
                requestURL:'/bearingUnCap',
            };
        },
    }
</script>

<style lang="scss" scoped>
</style>
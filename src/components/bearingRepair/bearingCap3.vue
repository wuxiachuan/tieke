<template>
    <processtemp v-bind:requestURL="requestURL" v-bind:index="'7'"
                 v-bind:finishFlag="'isbearingCapFinish'" v-bind:title="'轴承关盖'"
                 v-bind:navhead1="'轴承检修'" v-bind:navhead2="'轴承关盖'"></processtemp>
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
                requestURL:'/bearingCap',
            };
        },
    }
</script>

<style lang="scss" scoped>
</style>
<template>
    <processtemp v-bind:requestURL="requestURL" v-bind:index="'11'"
                 v-bind:finishFlag="'isbearingUnloadFinish'" v-bind:title="'轴承退卸'"
                 v-bind:navhead1="'轴承检修'" v-bind:navhead2="'轴承退卸'"></processtemp>
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
                requestURL:'/bearingUnLoad',
            };
        },
    }
</script>

<style lang="scss" scoped>
</style>
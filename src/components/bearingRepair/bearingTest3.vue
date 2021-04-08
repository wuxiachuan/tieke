<template>
    <processtemp v-bind:requestURL="requestURL" v-bind:index="'8'"
                 v-bind:finishFlag="'isbearingrollTestFinish'" v-bind:title="'轴承磨合'"
                 v-bind:navhead1="'轴承检修'" v-bind:navhead2="'轴承磨合'"></processtemp>
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
                requestURL:'/bearingTest',
            };
        },
    }
</script>

<style lang="scss" scoped>
</style>
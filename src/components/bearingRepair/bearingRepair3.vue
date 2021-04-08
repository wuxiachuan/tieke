<template>
    <processtemp v-bind:requestURL="requestURL" v-bind:index="'2'"
                 v-bind:finishFlag="'isbearingRepairFinish'" v-bind:title="'轴承检查'"
                 v-bind:navhead1="'轴承检修'" v-bind:navhead2="'外观检查'"></processtemp>
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
                requestURL:'/bearingRepair',
            };
        },
    }
</script>

<style lang="scss" scoped>
</style>
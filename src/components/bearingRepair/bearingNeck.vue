<template>
    <processtemp v-bind:requestURL="requestURL" v-bind:index="'12'"
                 v-bind:finishFlag="'isbearingNeckFinish'" v-bind:title="'轴颈测量'"
                 v-bind:navhead1="'轴承检修'" v-bind:navhead2="'轴颈测量'"></processtemp>
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
                requestURL:'/neckMeasure',
            };
        },
    }
</script>

<style lang="scss" scoped>
</style>
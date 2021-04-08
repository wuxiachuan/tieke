<template>
    <processtemp v-bind:requestURL="requestURL" v-bind:index="'9'"
                 v-bind:finishFlag="'isreMeasureFinish'" v-bind:title="'轮对复测'"
                 v-bind:navhead1="'轮对支出'" v-bind:navhead2="'支出测量'"></processtemp>
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
                requestURL:'/wheelReMeasure',
            };
        },
    }
</script>

<style lang="scss" scoped>
</style>
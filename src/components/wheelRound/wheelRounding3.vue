<template>
    <processtemp v-bind:requestURL="requestURL" v-bind:index="'5'"
                 v-bind:finishFlag="'isWheelRoundingFinish'" v-bind:title="'轮对旋面'"
                 v-bind:navhead1="'车轮旋面'" v-bind:navhead2="'车轮旋面'"></processtemp>
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
                requestURL:'/wheelRound',
            };
        }
    }
</script>

<style lang="scss" scoped>
</style>
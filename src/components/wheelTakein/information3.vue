<template>
    <processtemp v-bind:requestURL="requestURL" v-bind:index="'0'"
                 v-bind:finishFlag="'infoTakeFinish'" v-bind:title="'轮对收入'"
                 v-bind:navhead1="'轮对收入'" v-bind:navhead2="'信息采集'"></processtemp>
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
                requestURL:'/wheelTakein',
            };
        }
    }
</script>

<style lang="scss">

</style>
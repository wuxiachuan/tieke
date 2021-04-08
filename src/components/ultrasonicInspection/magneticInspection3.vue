<template>
    <processtemp v-bind:requestURL="requestURL" v-bind:index="'3'"
                 v-bind:finishFlag="'ismagnetInspectionFinish'" v-bind:title="'磁粉探伤'"
                 v-bind:navhead1="'轮对探伤'" v-bind:navhead2="'磁粉探伤'"></processtemp>
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
                requestURL:'/magInspection',
            };
        },
    }
</script>

<style lang="scss" scoped>
</style>
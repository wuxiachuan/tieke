<template>
    <div>
        <!--        面包屑导航条-->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>综合管理</el-breadcrumb-item>
            <el-breadcrumb-item>进度监控</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card>
            <el-tabs tab-position="left" style="height: 600px;" @tab-click="handleClick">
                <el-tab-pane label="轮对测量" name="wm">
                    <progressTable :showinfo="wheelList"></progressTable>
                </el-tab-pane>
                <el-tab-pane label="轴承检查" name="br">
                    <progressTable :showinfo="wheelList"></progressTable>
                </el-tab-pane>
                <el-tab-pane label="磁粉探伤" name="mi">
                    <progressTable :showinfo="wheelList"></progressTable>
                </el-tab-pane>
                <el-tab-pane label="超声探伤" name="ui">
                    <progressTable :showinfo="wheelList"></progressTable>
                </el-tab-pane>
                <el-tab-pane label="车轮旋面" name="wr">
                    <progressTable :showinfo="wheelList"></progressTable>
                </el-tab-pane>
                <el-tab-pane label="轴承压装" name="bl">
                    <progressTable :showinfo="wheelList"></progressTable>
                </el-tab-pane>
                <el-tab-pane label="轴承关盖" name="bc">
                    <progressTable :showinfo="wheelList"></progressTable>
                </el-tab-pane>
                <el-tab-pane label="磨合试验" name="bt">
                    <progressTable :showinfo="wheelList"></progressTable>
                </el-tab-pane>
                <el-tab-pane label="轮对复测" name="rm">
                    <progressTable :showinfo="wheelList"></progressTable>
                </el-tab-pane>
                <el-tab-pane label="质量检查" name="qc">
                    <progressTable :showinfo="wheelList"></progressTable>
                </el-tab-pane>
            </el-tabs>

        </el-card>
    </div>
</template>

<script>
    import progressTable from "./progressTable";
    export default {
        name: "information",
        components:{
            progressTable:progressTable
        },
        data(){
            return {
                wheelList:[],
            };
        },
        computed: {

        },
        methods: {
            async handleClick(tab, event) {
                console.log(tab.name);
                var result = await axios.post(
                    "/manage/getWheelList?name="+tab.name);
                if (result.data.code != 100){
                    alert("添加失败");
                    return ;
                }
                this.wheelList = result.data.object;
                console.log(this.wheelList);
            }
        },
        filters:{
            dateFormate: function(datastr,patt){
                var data = new Date(datastr);
                var y = data.getFullYear();
                var M = (data.getMonth()+1).toString().padStart(2,"0");
                var d = (data.getDate()).toString().padStart(2,"0");

                var h = (data.getHours()).toString().padStart(2,"0");
                var m = (data.getMinutes()).toString().padStart(2,"0");
                var s = (data.getSeconds()).toString().padStart(2,"0");

                if(patt && patt.toLowerCase()=="yyyy-mm-dd"){
                    return `${y}-${M}-${d}`;
                }else{
                    return `${y}-${M}-${d}  ${h}:${m}:${s}`;
                }
            }
        },
        created() {
        }
    }
</script>

<style lang="scss" >

</style>
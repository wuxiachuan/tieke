<template>
    <div>
        <el-table :data="showinfo"
                  height="600"
                  style="width: 100%"
                  :default-sort = "{prop: 'finishTime', order: 'descending'}" border stripe
                  :row-class-name="tableRowClassName">
            <el-table-column type="index" label="序号" width="50"></el-table-column>
            <el-table-column prop="axleNumber" label="轴号" width="50"></el-table-column>
            <el-table-column prop="axleType" label="轴型" width="50"></el-table-column>
            <el-table-column prop="vehicleNumber" label="收入车号" width="80" ></el-table-column>
            <el-table-column prop="axlePosition" label="轴位"></el-table-column>
            <el-table-column prop="infoTakeFinishTime" label="收入时间" width="400" sortable></el-table-column>
            <el-table-column prop="finishTime" label="上道工序完成时间" sortable></el-table-column>
            <el-table-column prop="reserve1" label="工序停留时间" sortable></el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "progressTable",
        props:{
            showinfo:Array
        },
        data(){
            return {
                wheelList:[]
            }
        },
        methods:{
            tableRowClassName({row}) {
                // if (row.reserve1 > '1:0:0') {
                //     return 'warning-row';
                // } else if (row.reserve1 > '2:0:0') {
                //     return 'danger-row';
                // }
                return '';
            }
        },
        created() {
            this.wheelList = this.showinfo;
        }
    }
</script>

<style lang="scss" >
    .warning-row{
        background-color:#E6A23C !important;
    }
    .danger-row{
        background-color:#F56C6C !important;
    }
    .success-row{
        background-color:#67C23A !important;
    }
</style>
<template>
    <el-card>
        <el-table :data="wheelList" style="width: 100%" :default-sort = "{prop: 'id', order: 'ascending'}" border stripe>
            <el-table-column type="index" label="序号" width="50"></el-table-column>
            <el-table-column prop="wheelId" label="单号" width="70" sortable></el-table-column>
            <el-table-column prop="axleType" label="轴型" width="77" sortable></el-table-column>
            <el-table-column prop="axleNumber" label="轴号" width="77" sortable></el-table-column>
            <el-table-column prop="axleMadeIn" label="厂代号" width="77" ></el-table-column>
            <el-table-column prop="takeInReason" label="收入来源" ></el-table-column>
            <el-table-column prop="takeInDate" label="收入日期" width="97" sortable></el-table-column>
            <el-table-column prop="vehicleType" label="收入车型" width="100" sortable></el-table-column>
            <el-table-column prop="vehicleNumber" label="收入车号" ></el-table-column>
            <el-table-column prop="axlePosition" label="收入轴位" ></el-table-column>
            <el-table-column prop="" label="完工状态" >
                <template slot-scope="scope">
                    <span v-if="scope.row[finishFlag] =='0'" >未完工</span>
                    <span v-if="scope.row[finishFlag] =='1'" >完工</span>
                </template>
            </el-table-column>
            <el-table-column label="操作" fixed="right" :width="index=='0'?200:100">
                <template slot-scope="scope">
                    <el-button
                            icon="el-icon-edit"
                            size="mini"
                            v-if="issaved=='0'"
                            @click="capture(scope.$index, scope.row)">加工</el-button>
                    <el-button
                            icon="el-icon-edit"
                            size="mini"
                            v-if="issaved=='2'"
                            @click="show(scope.$index, scope.row)">查看</el-button>
                    <el-button
                            icon="el-icon-edit"
                            size="mini"
                            @click="Qrcode(scope.$index, scope.row)" v-if="index=='0'">二维码</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-card>
</template>

<script>
    export default {
        name: "InfoTable",
        props:{
            index:String,
            wheelList:Array,
            issaved:'',
            finishFlag:''
        },
        data(){
            return{

            }
        },
        methods:{
            capture(index,item){
                //console.log(item);
                this.$emit("capture",{index:index,item:item});
            },
            show(index,item){
                //console.log(item);
                this.$emit("show",{index:index,item:item});
            },
            Qrcode(index,item){
                //console.log(item);
                this.$emit("qrcode",{index:index,item:item});
            }
        }
    }
</script>

<style scoped>

</style>
<template>
    <el-form :model="search" :rules="searchrules" ref="searchForm" >
        <el-col :span="4">
            <el-form-item prop="wheelId">
                <el-input v-model="search.wheelId" placeholder="请输入单号" clearable></el-input>
            </el-form-item>
        </el-col>
        <el-col :span="4">
            <el-form-item prop="axleNumber">
                <el-input v-model="search.axleNumber" placeholder="请输入轴号" clearable></el-input>
            </el-form-item>
        </el-col>
        <el-col :span="4">
            <el-form-item prop="vehicleNumber">
                <el-input v-model="search.vehicleNumber" placeholder="请输入收入车号" clearable></el-input>
            </el-form-item>
        </el-col>
        <el-col :span="4">
            <el-form-item prop="takeInDateFrom">
                <el-date-picker
                        type="date"
                        placeholder="请选择收入起始日期"
                        v-model="search.takeInDateFrom"
                        format="yyyy 年 MM 月 dd 日"
                        value-format="yyyy-MM-dd"
                        style="width: 100%;"></el-date-picker>
            </el-form-item>
        </el-col>
        <el-col :span="4">
            <el-form-item prop="takeInDateTo">
                <el-date-picker
                        type="date"
                        placeholder="请选择收入终止日期"
                        v-model="search.takeInDateTo"
                        format="yyyy 年 MM 月 dd 日"
                        value-format="yyyy-MM-dd"
                        style="width: 100%;"></el-date-picker>
            </el-form-item>
        </el-col>
        <el-col :span="4">
            <el-form-item prop="infoTakeFinishTimeFrom">
                <el-date-picker
                        type="date"
                        placeholder="请选择完工起始日期"
                        v-model="search.infoTakeFinishTimeFrom"
                        format="yyyy 年 MM 月 dd 日"
                        value-format="yyyy-MM-dd"
                        style="width: 100%;"></el-date-picker>
            </el-form-item>
        </el-col>
        <el-col :span="4">
            <el-form-item prop="infoTakeFinishTimeTo">
                <el-date-picker
                        type="date"
                        placeholder="请选择完工终止日期"
                        v-model="search.infoTakeFinishTimeTo"
                        format="yyyy 年 MM 月 dd 日"
                        value-format="yyyy-MM-dd"
                        style="width: 100%;"></el-date-picker>
            </el-form-item>
        </el-col>
        <el-col :span="10">
            <el-button  @click="searchWheel" >查询</el-button>
            <el-button  @click="creatNew" v-if="index=='0'">新建</el-button>
            <el-button  @click="getUnFinish" v-if="index!='0'">获取</el-button>
        </el-col>
    </el-form>
</template>

<script>
    export default {
        name: "QueryCondition",
        props:{
            index:String,
            search:{}
        },
        data(){
            return{
                searchrules:{
                    wheelId:[],
                        axleNumber:[{ min:3, max:5, message: '长度在 3 到 5 个字符', trigger: 'blur' }],
                        vehicleNumber: [{ min: 7, max: 7, message: '长度 7 个字符', trigger: 'blur' }],
                }
            }
        },
        methods:{
            searchWheel(){
                //console.log('search');
                this.$emit("searchWheel");
            },
            creatNew(){
                //console.log('creatNew');
                this.$emit("creatNew");
            },
            getUnFinish(){
                //console.log('getUnFinish');
                this.$emit("getUnFinish");
            }
        }
    }
</script>

<style scoped>

</style>
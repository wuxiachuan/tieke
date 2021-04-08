<template>
    <div>
        <el-row>
            <el-col :span="24">
                <el-card>
                    <el-form :model="ruleForm"  ref="ruleForm" label-width="100px" >
                        <el-row>
                            <el-col :span="8">
                                <el-form-item label="开盖原因（左）" label-width="150px" prop="unCapReasonLeft">
                                    <el-checkbox-group v-model="unCapReasonLeft">
                                        <el-checkbox label="1">送厂</el-checkbox>
                                        <el-checkbox label="2">旋面</el-checkbox>
                                        <el-checkbox label="4">超探</el-checkbox>
                                    </el-checkbox-group>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="开盖原因（右）" label-width="150px" prop="unCapReasonRight">
                                    <el-checkbox-group v-model="unCapReasonRight">
                                        <el-checkbox label="1">送厂</el-checkbox>
                                        <el-checkbox label="2">旋面</el-checkbox>
                                        <el-checkbox label="4">超探</el-checkbox>
                                    </el-checkbox-group>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="8">
                                <el-form-item label="开盖者（左）" label-width="150px" prop="unCapperLeft">
                                    <el-input v-model="ruleForm.unCapperLeft" ></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="开盖者（右）"label-width="150px" prop="unCapperRight" >
                                    <el-input v-model="ruleForm.unCapperRight" ></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "measureTable",
        props:{
            showinfo:Object,
        },
        data(){
            return{
                ruleForm: {},
                unCapReasonLeft:[],
                unCapReasonRight:[]
            }
        },
        methods:{
            enableForm(){
                var reasonLeft = this.showinfo.uncapReasonLeft;
                var reasonRight = this.showinfo.uncapReasonRight;
                this.setReason(reasonLeft,this.unCapReasonLeft);
                this.setReason(reasonRight,this.unCapReasonRight);
            },
            setReason(index,unCapReason){
                if (index=='1'){
                    unCapReason.push("1");
                }else if (index=="2"){
                    unCapReason.push("2");
                }else if (index=="3"){
                    unCapReason.push("1");
                    unCapReason.push("2");
                }else if (index=="5"){
                    unCapReason.push("1");
                    unCapReason.push("4");
                }else if (index=="6"){
                    unCapReason.push("2");
                    unCapReason.push("4");
                }else if (index=="7"){
                    unCapReason.push("1");
                    unCapReason.push("2");
                    unCapReason.push("4");
                }
            }
        },
        mounted() {
            this.ruleForm = this.showinfo?this.showinfo:{};
            this.enableForm();
        }
    }
</script>

<style lang="scss" scoped>
    .list{
        list-style: none;
        height: 1020px;
        padding: 0;
        font-size: 14px;
        overflow: auto;
        background-color: #e7e1cd;
        .list-item{
            width: 100%;
            height: 40px;
            background-color: #cfa;
            border-bottom: 1px solid black;
            user-select: none;
            cursor: pointer;
            margin-top: 2px;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
    }
    .status{
        font-size: 14px;
        margin: 0 0 20px 10px;
        span{
            margin-left: 20px;
            font-size: 16px;
        }
    }
    .list-item:hover{
        background-color: #0096b3;
    }
    .choosen{
        background-color: #B3C0D1 !important;
    }
    .notfinish{
        color: red;
    }
    .listContainer{
        text-align: center;
        line-height: 40px;
    }
    .innertext{
        display: flex;
        justify-content: center;
        span{
            line-height: 40px;
        }
    }
    .container{
        padding-top: 20px;
        border: 1px solid black;
        margin-bottom: 20px;
    }
</style>
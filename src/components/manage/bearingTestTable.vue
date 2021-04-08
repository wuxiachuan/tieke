<template>
    <div>
        <el-row>
            <el-col :span="24">
                <el-card>
                    <el-form :model="ruleForm"  ref="ruleForm" label-width="100px">
                        <el-row>
                            <el-col :span="7">
                                <el-form-item label="环境温度" prop="envTemperatureLeft" label-width="120px">
                                    <el-input v-model="ruleForm.envTemperatureLeft" placeholder=""  :disabled="enableLeft"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="7">
                                <el-form-item label="最高温度" prop="highestTempLeft" label-width="120px">
                                    <el-input v-model="ruleForm.highestTempLeft" placeholder="" :disabled="enableLeft">
                                        <template slot="prepend">左</template>
                                    </el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="4">
                                <el-form-item prop="highestTempRight" label-width="20">
                                    <el-input v-model="ruleForm.highestTempRight" placeholder="" :disabled="enableLeft">
                                        <template slot="prepend">右</template>
                                    </el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="7">
                                <el-form-item label="最大温升" prop="temperatureRiseLeft" label-width="120px">
                                    <el-input v-model="ruleForm.temperatureRiseLeft" placeholder="" :disabled="enableLeft">
                                        <template slot="prepend">左</template>
                                    </el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="4">
                                <el-form-item prop="temperatureRiseRight" label-width="20">
                                    <el-input v-model="ruleForm.temperatureRiseRight" placeholder="" :disabled="enableLeft">
                                        <template slot="prepend">右</template>
                                    </el-input>
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
        name: "bearingTestTable",
        props:{
            showinfo:Object
        },
        data(){
            return{
                enableLeft:false,
             //   enableRight:true,
                ruleForm: {
                    id:'',
                    wheelId	:'',

                    envTemperatureLeft:'',
                    envTemperatureRight:'',
                    temperatureRiseLeft:'',
                    temperatureRiseRight:'',
                    highestTempLeft:'',
                    highestTempRight:'',
                    testerLeft:'',
                    testerRight:'',
                    isFinish:'',
                    finishTime:'',
                    other:''
                }
            }
        },
        mounted() {
            this.ruleForm = this.showinfo?this.showinfo:{};
        }

    }
</script>

<style lang="scss" scoped>
    .list{
        list-style: none;
        height: 1100px;
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
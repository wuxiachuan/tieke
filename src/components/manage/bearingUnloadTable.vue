<template>
    <div>
        <el-row>
            <el-col :span="24">
                <el-card>
                    <el-form  ref="ruleForm" label-width="100px" >
                        <el-row>
                            <el-col :span="10">
                                <el-form-item label="轴承编号(左)" label-width="150px" prop="idLeft">
                                    <el-input v-model="BearingLeft.id" ></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="10">
                                <el-form-item label="轴承编号(右)" label-width="150px" prop="idRight">
                                    <el-input v-model="BearingRight.id" ></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="10">
                                <el-form-item label="等级(左)" label-width="150px" prop="repairProcessLeft">
                                    <el-radio-group v-model="BearingLeft.level">
                                        <el-radio label="1">新造</el-radio>
                                        <el-radio label="2">大修</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </el-col>
                            <el-col :span="10">
                                <el-form-item label="等级(右)" label-width="150px" prop="repairProcessRight">
                                    <el-radio-group v-model="BearingRight.level">
                                        <el-radio label="1">新造</el-radio>
                                        <el-radio label="2">大修</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="6">
                                <el-form-item label="轴承信息(左)" label-width="150px" prop="bearingMadeInLeft">
                                    <el-input v-model="BearingLeft.bearingMadeIn" >
                                        <template slot="prepend">工厂</template>
                                    </el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="4">
                                <el-form-item prop="bearingAssembleDateLeft" label-width="0">
                                    <el-date-picker
                                            type="date"
                                            placeholder="请选择日期"
                                            v-model="BearingLeft.bearingAssembleDate"
                                            format="yyyy 年 MM 月 dd 日"
                                            value-format="yyyy-MM-dd"
                                            style="width: 100%;"></el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="轴承信息(右)" label-width="150px" prop="bearingMadeInRight">
                                    <el-input v-model="BearingRight.bearingMadeIn" placeholder="" >
                                        <template slot="prepend">工厂</template>
                                    </el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="4">
                                <el-form-item prop="bearingAssembleDateRight" label-width="0">
                                    <el-date-picker
                                            type="date"
                                            placeholder="请选择日期"
                                            v-model="BearingRight.bearingAssembleDate"
                                            format="yyyy 年 MM 月 dd 日"
                                            value-format="yyyy-MM-dd"
                                            style="width: 100%;"></el-date-picker>
                                </el-form-item>
                            </el-col>
                        </el-row>

                        <el-row>
                            <el-col :span="10">
                                <el-form-item label="退卸原因(左)" label-width="150px" prop="unloadReasonLeft">
                                    <el-select v-model="BearingLeft.unloadReason">
                                        <el-option label="压装到期" value="1"></el-option>
                                        <el-option label="轴承异音" value="2"></el-option>
                                        <el-option label="其它原因" value="3"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="10">
                                <el-form-item label="退卸原因(右)" label-width="150px" prop="unloadReasonRight">
                                    <el-select v-model="BearingRight.unloadReason">
                                        <el-option label="压装到期" value="1"></el-option>
                                        <el-option label="轴承异音" value="2"></el-option>
                                        <el-option label="其它原因" value="3"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="10">
                                <el-form-item label="修程(左)" label-width="150px" prop="repairProgressLeft">
                                    <el-select v-model="BearingLeft.repairProgress" >
                                        <el-option label="压装到期" value="1"></el-option>
                                        <el-option label="状态不良" value="0"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="10">
                                <el-form-item label="修程(右)" label-width="150px" prop="repairProgressRight">
                                    <el-select v-model="BearingRight.repairProgress" >
                                        <el-option label="压装到期" value="1"></el-option>
                                        <el-option label="状态不良" value="0"></el-option>
                                    </el-select>
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
            showinfo:Array,
        },
        data(){
            return{
                BearingLeft:{},
                BearingRight:{},
                ruleForm:{}
            }
        },
        methods:{
        },
        mounted() {
            this.BearingLeft = this.showinfo?this.showinfo[0]: {};
            this.BearingRight = this.showinfo?this.showinfo[1]: {};
            this.ruleForm.BearingLeft = this.BearingLeft;
            this.ruleForm.BearingRight = this.BearingRight;
        }
    }
</script>

<style lang="scss" scoped>

    .status{
        font-size: 14px;
        margin: 0 0 20px 10px;
        span{
            margin-left: 20px;
            font-size: 16px;
        }
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
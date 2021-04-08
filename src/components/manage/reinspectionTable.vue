<template>
    <div>
        <el-row>
            <el-col :span="24">
                <el-card>
                    <el-form :model="ruleForm" ref="ruleForm" label-width="100px" >
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="穿透复探左" prop="reultAxleLeft" label-width="120px">
                                    <el-input v-model="ruleForm.reultAxleLeft" placeholder="" ></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item  label="穿透复探右" prop="reultAxleRight" label-width="120px">
                                    <el-input v-model="ruleForm.reultAxleRight" placeholder="" ></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="卸荷槽复探左" prop="reultAxleNeckLeft" label-width="120px">
                                    <el-input v-model="ruleForm.reultAxleNeckLeft" placeholder="" ></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item  label="卸荷槽复探右" prop="reultAxleNeckRight" label-width="120px">
                                    <el-input v-model="ruleForm.reultAxleNeckRight" placeholder="" ></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="8">
                                <el-form-item label="是否送厂" prop="repairProcess">
                                    <el-radio-group v-model="ruleForm.repairProcess">
                                        <el-radio label="1">是</el-radio>
                                        <el-radio label="0">否</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="送厂原因" prop="discardReason">
                                    <el-input v-model="ruleForm.discardReason"></el-input>
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
            }
        },
        mounted() {
            this.ruleForm = this.showinfo?this.showinfo:{};
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
</style>
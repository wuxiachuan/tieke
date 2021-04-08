<template>
    <div>
        <el-row>
            <el-col :span="24">
                <el-card>
                    <el-form :model="ruleForm"  ref="ruleForm" label-width="100px">
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="穿透初探左" prop="ultAxleLeft" label-width="120px">
                                    <el-input v-model="ruleForm.ultAxleLeft" placeholder="" :disabled="enableLeft"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item  label="穿透初探右" prop="ultAxleRight" label-width="120px">
                                    <el-input v-model="ruleForm.ultAxleRight" placeholder="" :disabled="enableLeft"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="穿透复探左" prop="reultAxleLeft" label-width="120px">
                                    <el-input v-model="ruleForm.reultAxleLeft" placeholder="" :disabled="enableLeft"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item  label="穿透复探右" prop="reultAxleRight" label-width="120px">
                                    <el-input v-model="ruleForm.reultAxleRight" placeholder="" :disabled="enableLeft"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="轮座左" prop="ultAxleFootLeft" label-width="120px">
                                    <el-input v-model="ruleForm.ultAxleFootLeft" placeholder="" :disabled="enableLeft"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item  label="轮座右" prop="ultAxleFootRight" label-width="120px">
                                    <el-input v-model="ruleForm.ultAxleFootRight" placeholder="" :disabled="enableLeft"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="卸荷槽初探左" prop="ultAxleNeckLeft" label-width="120px">
                                    <el-input v-model="ruleForm.ultAxleNeckLeft" placeholder="" :disabled="enableLeft"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item  label="卸荷槽初探右" prop="ultAxleNeckRight" label-width="120px">
                                    <el-input v-model="ruleForm.ultAxleNeckRight" placeholder="" :disabled="enableLeft"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="卸荷槽复探左" prop="reultAxleNeckLeft" label-width="120px">
                                    <el-input v-model="ruleForm.reultAxleNeckLeft" placeholder="" :disabled="enableLeft"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item  label="卸荷槽复探右" prop="reultAxleNeckRight" label-width="120px">
                                    <el-input v-model="ruleForm.reultAxleNeckRight" placeholder="" :disabled="enableLeft"></el-input>
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
        name: "axleInspectionTable",
        props:{
            showinfo:Object
        },
        data(){
            return{
                enableLeft:false,
              //  enableRight:true,
                ruleForm: {
                    id:'',
                    wheelId:'',
                    magAxleBody	:'11',
                    magtAxleNeckLeft:'',
                    magAxleNeckRight:'',
                    ultAxleLeft:'',
                    ultAxleRight:'',
                    reultAxleLeft:'',
                    reultAxleRight:'',
                    ultAxleFootLeft	:'',
                    ultAxleFootRight:'',
                    ultAxleNeckLeft:'',
                    ultAxleNeckRight:'',
                    reultAxleNeckLeft:'',
                    reultAxleNeckRight:'',
                    magInspector:'',
                    magisFinish	:'',
                    magfinishTime:'',
                    ultisFinish	:'',
                    ultfinishTime:'',
                    ultInspector:'',
                    reultisFinish:'',
                    reultfinishTime:'',
                    reultInspector:'',
                    other:''
                }
            }
        },
        mounted() {
            this.ruleForm = this.showinfo?this.showinfo:{};
        }
    }
</script>

<style scoped>

</style>
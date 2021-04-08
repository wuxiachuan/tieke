<template>
    <div>
        <el-row>
            <el-col :span="24">
                <el-card>
                    <el-form :model="ruleForm" ref="ruleForm" label-width="100px">
                        <el-row>
                            <el-col :span="6">
                                <el-form-item label="车轮直径(左)" prop="wheelDiameterLeft">
                                    <el-input v-model="ruleForm.wheelDiameterLeft" placeholder="左" :disabled="enableRight"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="车轮直径(右)" prop="wheelDiameterRight" >
                                    <el-input v-model="ruleForm.wheelDiameterRight" placeholder="右" :disabled="enableRight"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>

                        <el-row>
                            <el-col :span="6">
                                <el-form-item label="踏面磨耗(左)" prop="treadWearLeft">
                                    <el-input v-model="ruleForm.treadWearLeft" placeholder="左" :disabled="enableRight"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="踏面磨耗(右)"  prop="treadWearRight" >
                                    <el-input v-model="ruleForm.treadWearRight" placeholder="右" :disabled="enableRight"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>

                        <el-row>
                            <el-col :span="6">
                                <el-form-item label="轮缘厚(左)" prop="flangeThickLeft">
                                    <el-input v-model="ruleForm.flangeThickLeft" placeholder="左" :disabled="enableRight"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="轮缘厚(右)"  prop="flangeThickRight">
                                    <el-input v-model="ruleForm.flangeThickRight" placeholder="右" :disabled="enableRight"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="6">
                                <el-form-item label="轮辋厚(左)" prop="rimThickLeft">
                                    <el-input v-model="ruleForm.rimThickLeft" placeholder="左" :disabled="enableRight"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="轮辋厚(右)" prop="rimThickRight" >
                                    <el-input v-model="ruleForm.rimThickRight" placeholder="右" :disabled="enableRight"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="6">
                                <el-form-item label="轮辋宽(左)" prop="rimWideLeft">
                                    <el-input v-model="ruleForm.rimWideLeft" placeholder="左" :disabled="enableRight"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="轮辋宽(右)" prop="rimWideRight" >
                                    <el-input v-model="ruleForm.rimWideRight" placeholder="右" :disabled="enableRight"></el-input>
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
        name: "wheelDispatchTable",
        props:{
            showinfo:Object
        },
        data(){
            return{
                enable:'',
                enableLeft:false,
                enableRight:false,
                ruleForm: {
                    id:'',
                    wheelId:'',
                    wheelDiameterLeft:'',
                    wheelDiameterRight:'',
                    treadWearLeft:'',
                    treadWearRight:'',
                    rimWideLeft:'',
                    rimWideRight:'',
                    flangeThickLeft:'',
                    flangeThickRight:'',
                    rimThickLeft:'',
                    rimThickRight:'',
                    worker:'',
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

<style scoped>

</style>
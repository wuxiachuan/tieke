<template>
    <div>
        <el-card>
            <el-row class="status">
                <el-col :span="20">
                    <span>轴型: {{wheelInfo.axleType}}</span>
                    <span>轴号: {{wheelInfo.axleNumber}}</span>
                    <span>车型: {{wheelInfo.vehicleType}}</span>
                    <span>车号: {{wheelInfo.vehicleNumber}}</span>
                    <span>轴位: {{wheelInfo.axlePosition}} 位</span>
                </el-col>
            </el-row>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" :disabled="disableForm">
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
                <el-form-item>
                    <el-button type="primary" @click="submitForm"  v-show="addbtnstatus" size="small">提交</el-button>
                    <el-button @click="resetForm" v-show="addbtnstatus" size="small">重置</el-button>
                    <el-button @click="saveForm" v-show="false&&savebtnstatus" size="small">保存</el-button>
                    <el-button @click="modifyForm" v-show="false&&modbtnstatus" size="small">修改</el-button>
                    <el-button @click="cancelmodForm" v-show="false&&cancelbtnstatus" size="small">取消</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "measureTable",
        props:{
            showinfo:Object,
            wheelInfo:Object,
            disableForm:Boolean,
            addbtnstatus:Boolean,
            savebtnstatus:Boolean,
            modbtnstatus:Boolean,
            cancelbtnstatus:Boolean,
            enableLeft:{
                type: Boolean,
                default: false
            },
            enableRight:{
                type: Boolean,
                default: false
            }
        },
        data(){
            return{
                ruleForm: {},
                rules:{
                    ultAxleLeft: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    ultAxleRight: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    reultAxleLeft: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    reultAxleRight: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    ultAxleFootLeft: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    ultAxleFootRight: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    ultAxleNeckLeft: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    ultAxleNeckRight: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    reultAxleNeckLeft: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    reultAxleNeckRight: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ]
                }
            }
        },
        methods:{
            resetForm(){
                this.$refs['ruleForm'].resetFields();
                this.ruleForm = {};
            },
            submitForm(){
                this.ruleForm.wheelId = this.wheelInfo.wheelId;
                this.$refs['ruleForm'].validate(async (valid) => {
                    if (valid) {
                        this.$emit("sendwheeldata",{data:this.ruleForm,flag:'0'});
                    } else {
                        alert('信息不完整！');
                        return false;
                    }
                });
            },
            saveForm(){
                this.$emit("sendwheeldata",{data:this.ruleForm,flag:'1'});
            },
            modifyForm(){
                this.$refs['ruleForm'].validate(async (valid) => {
                    if (valid) {
                        this.$emit("sendwheeldata",{data:this.ruleForm,flag:'2'});
                    } else {
                        alert('信息不完整！');
                        return false;
                    }
                });
            },
            cancelmodForm(){

            },
        },
        mounted() {
            this.ruleForm = this.showinfo;
            this.ruleForm.wheelId = this.wheelInfo.wheelId;
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
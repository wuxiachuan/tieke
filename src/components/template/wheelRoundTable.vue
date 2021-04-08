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
            <el-form :model="ruleForm"  ref="ruleForm" label-width="100px" :disabled="disableForm">
                <el-row style="margin-bottom: 20px">
                    <el-col :span="6" :offset="1"><span>旋面前尺寸：</span></el-col>
                    <el-col :span="6" :offset="4"><span>旋面后尺寸：</span></el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="车轮直径" >
                            <el-input v-model="origindata.wheelDiameterLeft" placeholder="左" :disabled="enableLeft"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item label-width="0">
                            <el-input v-model="origindata.wheelDiameterRight" placeholder="右" :disabled="enableLeft"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="车轮直径" prop="wheelDiameterLeft">
                            <el-input v-model="ruleForm.wheelDiameterLeft" placeholder="左" :disabled="enableRight"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item prop="wheelDiameterRight" label-width="0">
                            <el-input v-model="ruleForm.wheelDiameterRight" placeholder="右" :disabled="enableRight"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="6">
                        <el-form-item label="踏面磨耗" >
                            <el-input v-model="origindata.treadWearLeft" placeholder="左" :disabled="enableLeft"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item  label-width="0">
                            <el-input v-model="origindata.treadWearRight" placeholder="右" :disabled="enableLeft"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="踏面磨耗" prop="treadWearLeft">
                            <el-input v-model="ruleForm.treadWearLeft" placeholder="左" :disabled="enableRight"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item prop="treadWearRight" label-width="0">
                            <el-input v-model="ruleForm.treadWearRight" placeholder="右" :disabled="enableRight"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="6">
                        <el-form-item label="轮缘厚" >
                            <el-input v-model="origindata.flangeThickLeft" placeholder="左" :disabled="enableLeft"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item  label-width="0">
                            <el-input v-model="origindata.flangeThickRight" placeholder="右" :disabled="enableLeft"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="轮缘厚" prop="flangeThickLeft">
                            <el-input v-model="ruleForm.flangeThickLeft" placeholder="左" :disabled="enableRight"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item prop="flangeThickRight" label-width="0">
                            <el-input v-model="ruleForm.flangeThickRight" placeholder="右" :disabled="enableRight"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>


                <el-row>
                    <el-col :span="6">
                        <el-form-item label="轮辋厚">
                            <el-input v-model="origindata.rimThickLeft" placeholder="左" :disabled="enableLeft"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item label-width="0">
                            <el-input v-model="origindata.rimThickRight" placeholder="右" :disabled="enableLeft"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="轮辋厚" prop="rimThickLeft">
                            <el-input v-model="ruleForm.rimThickLeft" placeholder="左" :disabled="enableRight"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item prop="rimThickRight" label-width="0">
                            <el-input v-model="ruleForm.rimThickRight" placeholder="右" :disabled="enableRight"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="6">
                        <el-form-item label="轮辋宽" >
                            <el-input v-model="origindata.rimWideLeft" placeholder="左" :disabled="enableLeft"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item  label-width="0">
                            <el-input v-model="origindata.rimWideRight" placeholder="右" :disabled="enableLeft"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="轮辋宽" prop="rimWideLeft">
                            <el-input v-model="ruleForm.rimWideLeft" placeholder="左" :disabled="enableRight"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item prop="rimWideRight" label-width="0">
                            <el-input v-model="ruleForm.rimWideRight" placeholder="右" :disabled="enableRight"></el-input>
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
            enableLeft:Boolean,
            enableRight:Boolean,
            origindata:Object
        },
        data(){
            //校验车轴直径
            var checkaxleDiameter = (rule,value,callback)=>{
                var myreg= /^[1][7-8][0-9]\.[0-9]$/;
                if (!myreg.test(value)) {
                    return callback(new Error("输入合法的数值"));
                }
                callback();
            };
            //校验车轮直径
            var checkDiameter = (rule,value,callback)=>{
                var myreg= /^[7-8][0-9][0-9]\.[0-9]$/;
                if (!myreg.test(value)) {
                    return callback(new Error("输入合法的数值"));
                }
                callback();
            };
            //校验踏面磨耗
            var checktreadWear = (rule,value,callback)=>{
                var myreg= /^[0-9]\.[0-9]$/;
                if (!myreg.test(value)) {
                    return callback(new Error("输入合法的数值"));
                }
                callback();
            };
            //校验轮辋厚
            var checkrimThick = (rule,value,callback)=>{
                var myreg= /^[3-4][0-9]\.[0-9]$/;
                if (!myreg.test(value)) {
                    return callback(new Error("输入合法的数值"));
                }
                callback();
            };
            //校验轮辋宽
            var checkrimWide = (rule,value,callback)=>{
                var myreg= /^[1][3-4][0-9]\.[0-9]$/;
                if (!myreg.test(value)) {
                    return callback(new Error("输入合法的数值"));
                }
                callback();
            };
            //校验轮缘厚
            var checkflangeThick = (rule,value,callback)=>{
                var myreg= /^[2-3][0-9]\.[0-9]$/;
                if (!myreg.test(value)) {
                    return callback(new Error("输入合法的数值"));
                }
                callback();
            };
            //校验
            var checkinternalDistance = (rule,value,callback)=>{
                var myreg= /^[1][3][5][0-9]\.[0-9]$/;
                if (!myreg.test(value)) {
                    return callback(new Error("输入合法的数值"));
                }
                callback();
            };
            return{
                ruleForm: {},
                rules: {
                    axleDiameter: [
                        { required: true, message: '请输入', trigger: 'blur' },
                        { validator:checkaxleDiameter,trigger: 'blur' }
                    ],
                    wheelDiameterLeft: [
                        { required: true, message: '请输入', trigger: 'blur' },
                        { validator:checkDiameter,trigger: 'blur' }
                    ],
                    wheelDiameterRight: [
                        { required: true, message: '请输入', trigger: 'blur' },
                        { validator:checkDiameter,trigger: 'blur' }
                    ],
                    treadWearLeft: [
                        { required: true, message: '请输入', trigger: 'blur' },
                        { validator:checktreadWear,trigger: 'blur' }
                    ],
                    treadWearRight: [
                        { required: true, message: '请输入', trigger: 'blur' },
                        { validator:checktreadWear,trigger: 'blur' }
                    ],
                    rimThickLeft: [
                        { required: true, message: '请输入', trigger: 'blur' },
                        { validator:checkrimThick,trigger: 'blur' }
                    ],
                    rimThickRight: [
                        { required: true, message: '请输入', trigger: 'blur' },
                        { validator:checkrimThick,trigger: 'blur' }
                    ],
                    rimWideLeft: [
                        { required: true, message: '请输入', trigger: 'blur' },
                        { validator:checkrimWide,trigger: 'blur' }
                    ],
                    rimWideRight: [
                        { required: true, message: '请输入', trigger: 'blur' },
                        { validator:checkrimWide,trigger: 'blur' }
                    ],
                    flangeThickLeft: [
                        { required: true, message: '请输入', trigger: 'blur' },
                        { validator:checkflangeThick,trigger: 'blur' }
                    ],
                    flangeThickRight: [
                        { required: true, message: '请输入', trigger: 'blur' },
                        { validator:checkflangeThick,trigger: 'blur' }
                    ],
                    internalDistance1: [
                        { required: true, message: '请输入', trigger: 'blur' },
                        { validator:checkinternalDistance,trigger: 'blur' }
                    ],
                    internalDistance2: [
                        { required: true, message: '请输入', trigger: 'blur' },
                        { validator:checkinternalDistance,trigger: 'blur' }
                    ],
                    internalDistance3: [
                        { required: true, message: '请输入', trigger: 'blur' },
                        { validator:checkinternalDistance,trigger: 'blur' }
                    ],
                    repairProcess:[
                        { required: true, message: '请选择修程', trigger: 'blur' }
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
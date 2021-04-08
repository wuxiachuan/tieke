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
            <el-form :model="ruleForm" ref="ruleForm" label-width="150px" :disabled="disableForm">
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="车轴直径" prop="axleDiameter">
                            <el-input v-model="ruleForm.axleDiameter"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="车轮直径（左）" prop="wheelDiameterLeft">
                            <el-input v-model="ruleForm.wheelDiameterLeft"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10">
                        <el-form-item label="车轮直径（右）" prop="wheelDiameterRight">
                            <el-input v-model="ruleForm.wheelDiameterRight"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="踏面磨耗（左）" prop="treadWearLeft">
                            <el-input v-model="ruleForm.treadWearLeft"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10">
                        <el-form-item label="踏面磨耗（右）" prop="treadWearRight">
                            <el-input v-model="ruleForm.treadWearRight"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="轮辋厚（左）" prop="rimThickLeft">
                            <el-input v-model="ruleForm.rimThickLeft"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10">
                        <el-form-item label="轮辋厚（右）" prop="rimThickRight">
                            <el-input v-model="ruleForm.rimThickRight"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="轮缘厚（左）" prop="flangeThickLeft">
                            <el-input v-model="ruleForm.flangeThickLeft"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10">
                        <el-form-item label="轮缘厚（右）" prop="flangeThickRight">
                            <el-input v-model="ruleForm.flangeThickRight"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="轮辋宽（左）" prop="rimWideLeft">
                            <el-input v-model="ruleForm.rimWideLeft"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10">
                        <el-form-item label="轮辋宽（右）" prop="rimWideRight">
                            <el-input v-model="ruleForm.rimWideRight"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="9">
                        <el-form-item label="轮对内距" prop="internalDistance1" >
                            <el-input v-model="ruleForm.internalDistance1"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="5">
                        <el-form-item  prop="internalDistance2" label-width="0">
                            <el-input v-model="ruleForm.internalDistance2"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="5">
                        <el-form-item  prop="internalDistance3" label-width="0">
                            <el-input v-model="ruleForm.internalDistance3"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="20">
                        <el-form-item label="故障情况" prop="problem">
                            <el-input v-model="ruleForm.problem"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="施修范围" prop="repairWay">
                            <el-radio-group v-model="ruleForm.repairProcess">
                                <el-radio label="0">送厂</el-radio>
                                <el-radio label="1">旋面</el-radio>
                                <el-radio label="2">不旋面</el-radio>
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
                repairWay:[],
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
        },
        watch:{
            showinfo:function (val) {
                this.ruleForm = val;
            }
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
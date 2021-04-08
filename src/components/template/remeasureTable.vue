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
            <el-form :model="ruleForm" ref="ruleForm" label-width="100px" :disabled="disableForm">
                <el-row>
                    <el-col :span="7">
                        <el-form-item label="车轮直径" prop="wheelDiameterLeft" label-width="120px">
                            <el-input v-model="ruleForm.wheelDiameterLeft" placeholder="" :disabled="enableLeft">
                                <template slot="prepend">左</template>
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item prop="wheelDiameterRight" label-width="20">
                            <el-input v-model="ruleForm.wheelDiameterRight" placeholder="" :disabled="enableLeft">
                                <template slot="prepend">右</template>
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7">
                        <el-form-item label="踏面磨耗" prop="treadWearLeft" label-width="120px">
                            <el-input v-model="ruleForm.treadWearLeft" placeholder="" :disabled="enableLeft">
                                <template slot="prepend">左</template>
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item prop="treadWearRight" label-width="20">
                            <el-input v-model="ruleForm.treadWearRight" placeholder="" :disabled="enableLeft">
                                <template slot="prepend">右</template>
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="7">
                        <el-form-item label="轮辋宽" prop="rimWideLeft" label-width="120px">
                            <el-input v-model="ruleForm.rimWideLeft" placeholder="" :disabled="enableLeft">
                                <template slot="prepend">左</template>
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item prop="rimWideRight" label-width="20">
                            <el-input v-model="ruleForm.rimWideRight" placeholder="" :disabled="enableLeft">
                                <template slot="prepend">右</template>
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7">
                        <el-form-item label="轮缘厚" prop="flangeThickLeft" label-width="120px">
                            <el-input v-model="ruleForm.flangeThickLeft" placeholder="" :disabled="enableLeft">
                                <template slot="prepend">左</template>
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item prop="flangeThickRight" label-width="20">
                            <el-input v-model="ruleForm.flangeThickRight" placeholder="" :disabled="enableLeft">
                                <template slot="prepend">右</template>
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="7">
                        <el-form-item label="轮辋厚" prop="rimThickLeft" label-width="120px">
                            <el-input v-model="ruleForm.rimThickLeft" placeholder="" :disabled="enableLeft">
                                <template slot="prepend">左</template>
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item prop="rimThickRight" label-width="20">
                            <el-input v-model="ruleForm.rimThickRight" placeholder="" :disabled="enableLeft">
                                <template slot="prepend">右</template>
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="7">
                        <el-form-item label="轮对内距" prop="internalDistance1" label-width="120px">
                            <el-input v-model="ruleForm.internalDistance1" placeholder="" :disabled="enableLeft">
                                <template slot="prepend">1:</template>
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item prop="internalDistance2" label-width="20">
                            <el-input v-model="ruleForm.internalDistance2" placeholder="" :disabled="enableLeft">
                                <template slot="prepend">2:</template>
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item prop="internalDistance3" label-width="20">
                            <el-input v-model="ruleForm.internalDistance3" placeholder="" :disabled="enableLeft">
                                <template slot="prepend">3:</template>
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="6">
                        <el-form-item label="轴型/号/材质" prop="axleType" label-width="120px">
                            <el-select v-model="ruleForm.axleType" placeholder="轴型">
                                <el-option label="RE2B" value="RE2B"></el-option>
                                <el-option label="RD2" value="RD2"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="3">
                        <el-form-item prop="axleNumber" label-width="20">
                            <el-input v-model="ruleForm.axleNumber" placeholder="" :disabled="enableLeft">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="2">
                        <el-form-item prop="axleMaterial" label-width="20">
                            <el-select v-model="ruleForm.axleMaterial" placeholder="材料">
                                <el-option label="W" value="W"></el-option>
                                <el-option label="S" value="S"></el-option>
                                <el-option label="H" value="H"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7">
                        <el-form-item label="制造日期" prop="axleMadeDate" label-width="80px">
                            <el-date-picker
                                    type="date"
                                    placeholder="请选择日期"
                                    v-model="ruleForm.axleMadeDate"
                                    format="yyyy 年 MM 月 dd 日"
                                    value-format="yyyy-MM-dd"
                                    style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="5">
                        <el-form-item label="制造单位" prop="axleMadeIn" label-width="80px">
                            <el-input v-model="ruleForm.axleMadeIn" placeholder="" :disabled="enableLeft">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="6">
                        <el-form-item label="车轮型号" prop="wheelType" label-width="120px">
                            <el-input v-model="ruleForm.wheelType" placeholder="" :disabled="enableLeft">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7">
                        <el-form-item label="首装日期" prop="wheelAssemblefirst" label-width="80px">
                            <el-date-picker
                                    type="date"
                                    placeholder="请选择日期"
                                    v-model="ruleForm.wheelAssemblefirst"
                                    format="yyyy 年 MM 月 dd 日"
                                    value-format="yyyy-MM-dd"
                                    style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7">
                        <el-form-item label="末装日期" prop="wheelAssemblelast" label-width="80px">
                            <el-date-picker
                                    type="date"
                                    placeholder="请选择日期"
                                    v-model="ruleForm.wheelAssemblelast"
                                    format="yyyy 年 MM 月 dd 日"
                                    value-format="yyyy-MM-dd"
                                    style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item label="末装单位" prop="wheelAssemblelastIn" label-width="80px">
                            <el-input v-model="ruleForm.wheelAssemblelastIn" placeholder="" :disabled="enableLeft">
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="7">
                        <el-form-item label="轴承等级(左)" prop="bearingTypeLeft" label-width="120px">
                            <el-select v-model="ruleForm.bearingTypeLeft" placeholder="轴承等级">
                                <el-option label="新造" value="0"></el-option>
                                <el-option label="大修" value="1"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="组装日期(左)" prop="bearingAssembleDateLeft" label-width="120px">
                            <el-date-picker
                                    type="date"
                                    placeholder="请选择日期"
                                    v-model="ruleForm.bearingAssembleDateLeft"
                                    format="yyyy 年 MM 月 dd 日"
                                    value-format="yyyy-MM-dd"
                                    style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="7">
                        <el-form-item label="轴承等级(右)" prop="bearingTypeRight" label-width="120px">
                            <el-select v-model="ruleForm.bearingTypeRight" placeholder="轴承等级">
                                <el-option label="新造" value="0"></el-option>
                                <el-option label="大修" value="1"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="组装日期(右)" prop="bearingAssembleDateRight" label-width="120px">
                            <el-date-picker
                                    type="date"
                                    placeholder="请选择日期"
                                    v-model="ruleForm.bearingAssembleDateRight"
                                    format="yyyy 年 MM 月 dd 日"
                                    value-format="yyyy-MM-dd"
                                    style="width: 100%;"></el-date-picker>
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
                    axleDiameter	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    wheelDiameterLeft	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    wheelDiameterRight	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    treadWearLeft	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    treadWearRight	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    rimWideLeft	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    rimWideRight	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    flangeThickLeft	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    flangeThickRight	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    rimThickLeft	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    rimThickRight	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    internalDistance1	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    internalDistance2	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    internalDistance3	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    axleNumber	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    axleType	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    axleMaterial	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    axleMadeDate	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    axleMadeIn	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    wheelType	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    wheelMaterial	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    wheelMadeIn	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    wheelAssemblefirst	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    wheelAssemblefirstIn	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    wheelAssemblelast	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    wheelAssemblelastIn	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    bearingTypeLeft	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    bearingAssembleDateLeft	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    bearingMadeInLeft	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    bearingTypeRight	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    bearingAssembleDateRight	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    bearingMadeInRight	: [
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
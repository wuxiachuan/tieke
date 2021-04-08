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
                <el-row style="margin-bottom: 10px"><el-col :span="6"><span>轴颈直径</span></el-col></el-row>
                <div class="container">
                    <el-row>
                        <el-col :span="1" class="innertext"><span>左A:</span></el-col>
                        <el-col :span="4">
                            <el-form-item  prop="axleNeckDiameterLeftA1" label-width='0'>
                                <el-input v-model="ruleForm.axleNeckDiameterLeftA1" placeholder="0度位置" :disabled="enableLeft">
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item  prop="axleNeckDiameterLeftA2" label-width='0'>
                                <el-input v-model="ruleForm.axleNeckDiameterLeftA2" placeholder="90度位置" :disabled="enableLeft">
                                </el-input>
                            </el-form-item>
                        </el-col>

                        <el-col :span="4">
                            <el-form-item  prop="" label-width='0'>
                                <el-input v-model="axleNeckDiameterLeftAvgA" placeholder="" :disabled="enableLeft">
                                    <template slot="prepend">平均:</template>
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item  prop="" label-width='0'>
                                <el-input v-model="axleNeckRoundnessLeftA" placeholder="" :disabled="enableLeft">
                                    <template slot="prepend">圆度:</template>
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="1" class="innertext"><span>左B:</span></el-col>
                        <el-col :span="4">
                            <el-form-item  prop="axleNeckDiameterLeftB1" label-width='0'>
                                <el-input v-model="ruleForm.axleNeckDiameterLeftB1" placeholder="0度位置" :disabled="enableLeft">
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item  prop="axleNeckDiameterLeftB2" label-width='0'>
                                <el-input v-model="ruleForm.axleNeckDiameterLeftB2" placeholder="90度位置" :disabled="enableLeft">
                                </el-input>
                            </el-form-item>
                        </el-col>

                        <el-col :span="4">
                            <el-form-item  prop="" label-width='0'>
                                <el-input v-model="axleNeckDiameterLeftAvgB" placeholder="" :disabled="enableLeft">
                                    <template slot="prepend">平均:</template>
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item  prop="" label-width='0'>
                                <el-input v-model="axleNeckRoundnessLeftB" placeholder="" :disabled="enableLeft">
                                    <template slot="prepend">圆度:</template>
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="1" class="innertext"><span>右A:</span></el-col>
                        <el-col :span="4">
                            <el-form-item  prop="axleNeckDiameterRightA1" label-width='0'>
                                <el-input v-model="ruleForm.axleNeckDiameterRightA1" placeholder="0度位置" :disabled="enableRight">
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item  prop="axleNeckDiameterRightA2" label-width='0'>
                                <el-input v-model="ruleForm.axleNeckDiameterRightA2" placeholder="90度位置" :disabled="enableRight">
                                </el-input>
                            </el-form-item>
                        </el-col>

                        <el-col :span="4">
                            <el-form-item  prop="" label-width='0'>
                                <el-input v-model="axleNeckDiameterRightAvgA" placeholder="" :disabled="enableRight">
                                    <template slot="prepend">平均:</template>
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item  prop="" label-width='0'>
                                <el-input v-model="axleNeckRoundnessRightA" placeholder="" :disabled="enableRight">
                                    <template slot="prepend">圆度:</template>
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="1" class="innertext"><span>右B:</span></el-col>
                        <el-col :span="4">
                            <el-form-item  prop="axleNeckDiameterRightB1" label-width='0'>
                                <el-input v-model="ruleForm.axleNeckDiameterRightB1" placeholder="0度位置" :disabled="enableRight">
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item  prop="axleNeckDiameterRightB2" label-width='0'>
                                <el-input v-model="ruleForm.axleNeckDiameterRightB2" placeholder="90度位置" :disabled="enableRight">
                                </el-input>
                            </el-form-item>
                        </el-col>

                        <el-col :span="4">
                            <el-form-item  prop="" label-width='0'>
                                <el-input v-model="axleNeckDiameterRightAvgB" placeholder="" :disabled="enableRight">
                                    <template slot="prepend">平均:</template>
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item  prop="" label-width='0'>
                                <el-input v-model="axleNeckRoundnessRightB" placeholder="" :disabled="enableRight">
                                    <template slot="prepend">圆度:</template>
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="3" class="innertext"><span>左轴颈平均值:</span></el-col>
                        <el-col :span="4">
                            <el-form-item  prop="" label-width='0'>
                                <el-input v-model="axleNeckDiameterLeftAvg" placeholder="" :disabled="enableLeft"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="3" class="innertext"><span>右轴颈平均值:</span></el-col>
                        <el-col :span="4">
                            <el-form-item  prop="" label-width='0'>
                                <el-input v-model="axleNeckDiameterRightAvg" placeholder="" :disabled="enableRight"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="3" class="innertext"><span>左轴颈圆度:</span></el-col>
                        <el-col :span="4">
                            <el-form-item  prop="" label-width='0'>
                                <el-input v-model="axleNeckRoundnessLeft" placeholder="" :disabled="enableLeft"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="3" class="innertext"><span>右轴颈圆度:</span></el-col>
                        <el-col :span="4">
                            <el-form-item  prop="" label-width='0'>
                                <el-input v-model="axleNeckRoundnessRight" placeholder="" :disabled="enableRight"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </div>

                <el-row style="margin-bottom: 10px"><el-col :span="6"><span>防尘座直径</span></el-col></el-row>
                <div class="container">
                    <el-row>
                        <el-col :span="1" class="innertext"><span>左:</span></el-col>
                        <el-col :span="4">
                            <el-form-item  prop="neckFootDiameterLeft1" label-width='0'>
                                <el-input v-model="ruleForm.neckFootDiameterLeft1" placeholder="0度位置" :disabled="enableLeft">
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item  prop="neckFootDiameterLeft2" label-width='0'>
                                <el-input v-model="ruleForm.neckFootDiameterLeft2" placeholder="90度位置" :disabled="enableLeft">
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item  prop="" label-width='0'>
                                <el-input v-model="neckFootDiameterLeftAvg" placeholder="" :disabled="enableLeft">
                                    <template slot="prepend">直径平均值:</template>
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item  prop="" label-width='0'>
                                <el-input v-model="neckFootRoundnessLeft" placeholder="" :disabled="enableRight">
                                    <template slot="prepend">圆度:</template>
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="1" class="innertext"><span>右:</span></el-col>
                        <el-col :span="4">
                            <el-form-item  prop="neckFootDiameterRight1" label-width='0' >
                                <el-input v-model="ruleForm.neckFootDiameterRight1" placeholder="0度位置" :disabled="enableRight">
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item  prop="neckFootDiameterRight2" label-width='0' >
                                <el-input v-model="ruleForm.neckFootDiameterRight2" placeholder="90度位置" :disabled="enableRight">
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item  prop="" label-width='0'>
                                <el-input v-model="neckFootDiameterRightAvg" placeholder="" :disabled="enableRight">
                                    <template slot="prepend">直径平均值:</template>
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item  prop="" label-width='0'>
                                <el-input v-model="neckFootRoundnessRight" placeholder="" :disabled="enableRight">
                                    <template slot="prepend">圆度:</template>
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </div>

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
                    axleNeckDiameterLeftA1	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    axleNeckDiameterLeftA2	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    axleNeckDiameterLeftA3	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    axleNeckDiameterLeftB1	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    axleNeckDiameterLeftB2	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    axleNeckDiameterLeftB3	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    axleNeckDiameterRightA1	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    axleNeckDiameterRightA2	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    axleNeckDiameterRightA3	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    axleNeckDiameterRightB1	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    axleNeckDiameterRightB2	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    axleNeckDiameterRightB3	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    axleNeckRoundnessLeftA	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    axleNeckRoundnessLeftB	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    axleNeckRoundnessRightA	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    axleNeckRoundnessRightB	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    axleNeckDiameterLeftAvgA	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    axleNeckDiameterLeftAvgB	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    axleNeckDiameterRightAvgA	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    axleNeckDiameterRightAvgB	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    axleNeckDiameterLeftAvg	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    axleNeckDiameterRightAvg	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    neckFootDiameterLeft1	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    neckFootDiameterLeft2	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    neckFootDiameterRight1	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    neckFootDiameterRight2	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    neckFootDiameterLeftAvg	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    neckFootDiameterRightAvg	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    neckFootRoundnessLeft	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    neckFootRoundnessRight	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    axleTypeLeft	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    axleTypeRight	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    bearingInnerDiameterLeft	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    bearingInnerDiameterRight	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    sealDiameterLeft	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    sealDiameterRight	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    backerInnerDiameterLeft	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    backerInnerDiameterRight	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    backerRoundnessLeft	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    backerRoundnessRight	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    fitBearing2NeckLeft	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    fitSeal2NeckLeft	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    fitSeal2BackerLeft	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    fitBearing2NeckRight	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    fitSeal2NeckRight	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    fitSeal2BackerRight	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    maxPressureLeft	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    maxPressureRight	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    finalPressureLeft	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    finalPressureRight	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    axleGapLeft	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    axleGapRight	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    bearingAssemble1stLeft	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    bearingLevelLeft	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    bearingmadeInLeft	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    wheelAssemble1st	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    axleNumber	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    bearingAssembleLeft	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    axleMadeDate	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    axleMaterial	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    axleMadeIn	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    bearingAssembleInLeft	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    repairLevelLeft	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    bearingAssemble1stRight	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    bearingLevelRight	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    bearingmadeInRight	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    wheelAssemblelast	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    wheelAssembleIn	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    bearingAssembleRight	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    bearingAssembleInRight	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    repairLevelRight	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    sealMarkLeft	: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    sealMarkRight	: [
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
        computed: {
            axleNeckDiameterLeftAvgA:function () {
                var r1 = parseInt(this.ruleForm.axleNeckDiameterLeftA1);
                var r2 = parseInt(this.ruleForm.axleNeckDiameterLeftA2);
                r1 = (r1+r2)/2;
                return this.ruleForm.axleNeckDiameterLeftAvgA = Math.round(r1);
            },
            axleNeckRoundnessLeftA:function () {
                var r1 = parseInt(this.ruleForm.axleNeckDiameterLeftA1);
                var r2 = parseInt(this.ruleForm.axleNeckDiameterLeftA2);
                r1 = Math.abs(r1-r2);
                return this.ruleForm.axleNeckRoundnessLeftA = Math.round(r1/2);
            },
            axleNeckDiameterLeftAvgB:function () {
                var r1 = parseInt(this.ruleForm.axleNeckDiameterLeftB1);
                var r2 = parseInt(this.ruleForm.axleNeckDiameterLeftB2);
                r1 = (r1+r2)/2;
                return this.ruleForm.axleNeckDiameterLeftAvgB = Math.round (r1);
            },
            axleNeckRoundnessLeftB:function () {
                var r1 = parseInt(this.ruleForm.axleNeckDiameterLeftB1);
                var r2 = parseInt(this.ruleForm.axleNeckDiameterLeftB2);
                r1 = Math.abs(r1-r2);
                return this.ruleForm.axleNeckRoundnessLeftB = Math.round(r1/2);
            },
            axleNeckDiameterRightAvgA:function () {
                var r1 = parseInt(this.ruleForm.axleNeckDiameterRightA1);
                var r2 = parseInt(this.ruleForm.axleNeckDiameterRightA2);
                r1 = Math.abs(r1-r2);
                r1 = (r1+r2)/2;
                return this.ruleForm.axleNeckDiameterRightAvgA = Math.round (r1);
            },
            axleNeckRoundnessRightA:function () {
                var r1 = parseInt(this.ruleForm.axleNeckDiameterRightA1);
                var r2 = parseInt(this.ruleForm.axleNeckDiameterRightA2);
                r1 = Math.abs(r1-r2);
                return this.ruleForm.axleNeckRoundnessRightA = Math.round(r1/2);
            },
            axleNeckDiameterRightAvgB:function () {
                var r1 = parseInt(this.ruleForm.axleNeckDiameterRightB1);
                var r2 = parseInt(this.ruleForm.axleNeckDiameterRightB2);
                r1 = (r1+r2)/2;
                return this.ruleForm.axleNeckDiameterRightAvgB = Math.round (r1);
            },
            axleNeckRoundnessRightB:function () {
                var r1 = parseInt(this.ruleForm.axleNeckDiameterRightB1);
                var r2 = parseInt(this.ruleForm.axleNeckDiameterRightB2);
                r1 = Math.abs(r1-r2);
                return this.ruleForm.axleNeckRoundnessRightB = Math.round(r1/2);
            },

            axleNeckDiameterLeftAvg:function () {
                return this.ruleForm.axleNeckDiameterLeftAvg = Math.round (this.axleNeckDiameterLeftAvgA/2+this.axleNeckDiameterLeftAvgB/2)
            },
            axleNeckDiameterRightAvg:function () {
                return this.ruleForm.axleNeckDiameterRightAvg = Math.round (this.axleNeckDiameterRightAvgA/2+this.axleNeckDiameterRightAvgB/2)
            },
            axleNeckRoundnessLeft(){
                return this.ruleForm.axleNeckRoundnessLeft = Math.round (this.axleNeckRoundnessLeftA/2+this.axleNeckRoundnessLeftB/2)
            },
            axleNeckRoundnessRight(){
                return this.ruleForm.axleNeckRoundnessRight = Math.round (this.axleNeckRoundnessRightA/2+this.axleNeckRoundnessRightB/2)
            },


            neckFootDiameterLeftAvg:function () {
                var r1 = parseInt(this.ruleForm.neckFootDiameterLeft1);
                var r2 = parseInt(this.ruleForm.neckFootDiameterLeft2);
                r1 = (r1+r2)/2;
                return this.ruleForm.neckFootDiameterLeftAvg = Math.round (r1);
            },
            neckFootRoundnessLeft:function () {
                var r1 = parseInt(this.ruleForm.neckFootDiameterLeft1);
                var r2 = parseInt(this.ruleForm.neckFootDiameterLeft2);
                r1 = Math.abs(r1-r2);
                return this.ruleForm.neckFootRoundnessLeft = Math.round(r1/2);
            },

            neckFootDiameterRightAvg(){
                var r1 = parseInt(this.ruleForm.neckFootDiameterRight1);
                var r2 = parseInt(this.ruleForm.neckFootDiameterRight2);
                r1 = (r1+r2)/2;
                return this.ruleForm.neckFootDiameterRightAvg = Math.round (r1);
            },
            neckFootRoundnessRight:function () {
                var r1 = parseInt(this.ruleForm.neckFootDiameterRight1);
                var r2 = parseInt(this.ruleForm.neckFootDiameterRight2);
                r1 = Math.abs(r1-r2);
                return this.ruleForm.neckFootRoundnessRight = Math.round(r1/2);
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
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
                                <el-input v-model="origindata.axleNeckDiameterLeftA1" placeholder="0度位置" :disabled="enableLeft">
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item  prop="axleNeckDiameterLeftA2" label-width='0'>
                                <el-input v-model="origindata.axleNeckDiameterLeftA2" placeholder="90度位置" :disabled="enableLeft">
                                </el-input>
                            </el-form-item>
                        </el-col>

                        <el-col :span="4">
                            <el-form-item  prop="axleNeckDiameterLeftAvgA" label-width='0'>
                                <el-input v-model="origindata.axleNeckDiameterLeftAvgA" placeholder="" :disabled="enableLeft">
                                    <template slot="prepend">平均:</template>
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item  prop="axleNeckRoundnessLeftA" label-width='0'>
                                <el-input v-model="origindata.axleNeckRoundnessLeftA" placeholder="" :disabled="enableLeft">
                                    <template slot="prepend">圆度:</template>
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="1" class="innertext"><span>左B:</span></el-col>
                        <el-col :span="4">
                            <el-form-item  prop="axleNeckDiameterLeftB1" label-width='0'>
                                <el-input v-model="origindata.axleNeckDiameterLeftB1" placeholder="0度位置" :disabled="enableLeft">
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item  prop="axleNeckDiameterLeftB2" label-width='0'>
                                <el-input v-model="origindata.axleNeckDiameterLeftB2" placeholder="90度位置" :disabled="enableLeft">
                                </el-input>
                            </el-form-item>
                        </el-col>

                        <el-col :span="4">
                            <el-form-item  prop="axleNeckDiameterLeftAvgB" label-width='0'>
                                <el-input v-model="origindata.axleNeckDiameterLeftAvgB" placeholder="" :disabled="enableLeft">
                                    <template slot="prepend">平均:</template>
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item  prop="axleNeckRoundnessLeftB" label-width='0'>
                                <el-input v-model="origindata.axleNeckRoundnessLeftB" placeholder="" :disabled="enableLeft">
                                    <template slot="prepend">圆度:</template>
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="1" class="innertext"><span>右A:</span></el-col>
                        <el-col :span="4">
                            <el-form-item  prop="axleNeckDiameterRightA1" label-width='0'>
                                <el-input v-model="origindata.axleNeckDiameterRightA1" placeholder="0度位置" :disabled="enableRight">
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item  prop="axleNeckDiameterRightA2" label-width='0'>
                                <el-input v-model="origindata.axleNeckDiameterRightA2" placeholder="90度位置" :disabled="enableRight">
                                </el-input>
                            </el-form-item>
                        </el-col>

                        <el-col :span="4">
                            <el-form-item  prop="axleNeckDiameterRightAvgA" label-width='0'>
                                <el-input v-model="origindata.axleNeckDiameterRightAvgA" placeholder="" :disabled="enableRight">
                                    <template slot="prepend">平均:</template>
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item  prop="axleNeckRoundnessRightA" label-width='0'>
                                <el-input v-model="origindata.axleNeckRoundnessRightA" placeholder="" :disabled="enableRight">
                                    <template slot="prepend">圆度:</template>
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="1" class="innertext"><span>右B:</span></el-col>
                        <el-col :span="4">
                            <el-form-item  prop="axleNeckDiameterRightB1" label-width='0'>
                                <el-input v-model="origindata.axleNeckDiameterRightB1" placeholder="0度位置" :disabled="enableRight">
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item  prop="axleNeckDiameterRightB2" label-width='0'>
                                <el-input v-model="origindata.axleNeckDiameterRightB2" placeholder="90度位置" :disabled="enableRight">
                                </el-input>
                            </el-form-item>
                        </el-col>

                        <el-col :span="4">
                            <el-form-item  prop="axleNeckDiameterRightAvgB" label-width='0'>
                                <el-input v-model="origindata.axleNeckDiameterRightAvgB" placeholder="" :disabled="enableRight">
                                    <template slot="prepend">平均:</template>
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item  prop="axleNeckRoundnessRightB" label-width='0'>
                                <el-input v-model="origindata.axleNeckRoundnessRightB" placeholder="" :disabled="enableRight">
                                    <template slot="prepend">圆度:</template>
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="3" class="innertext"><span>左轴颈平均值:</span></el-col>
                        <el-col :span="4">
                            <el-form-item  prop="" label-width='0'>
                                <el-input v-model="origindata.axleNeckDiameterLeftAvg" placeholder="" :disabled="enableLeft"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="3" class="innertext"><span>右轴颈平均值:</span></el-col>
                        <el-col :span="4">
                            <el-form-item  prop="axleNeckDiameterRightAvg" label-width='0'>
                                <el-input v-model="origindata.axleNeckDiameterRightAvg" placeholder="" :disabled="enableRight"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="3" class="innertext"><span>左轴颈圆度:</span></el-col>
                        <el-col :span="4">
                            <el-form-item  prop="axleNeckRoundnessLeft" label-width='0'>
                                <el-input v-model="origindata.axleNeckRoundnessLeft" placeholder="" :disabled="enableLeft"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="3" class="innertext"><span>右轴颈圆度:</span></el-col>
                        <el-col :span="4">
                            <el-form-item  prop="axleNeckRoundnessRight" label-width='0'>
                                <el-input v-model="origindata.axleNeckRoundnessRight" placeholder="" :disabled="enableRight"></el-input>
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
                                <el-input v-model="origindata.neckFootDiameterLeft1" placeholder="0度位置" :disabled="enableLeft">
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item  prop="neckFootDiameterLeft2" label-width='0'>
                                <el-input v-model="origindata.neckFootDiameterLeft2" placeholder="90度位置" :disabled="enableRight">
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item  prop="neckFootDiameterLeftAvg" label-width='0'>
                                <el-input v-model="origindata.neckFootDiameterLeftAvg" placeholder="" :disabled="enableLeft">
                                    <template slot="prepend">直径平均值:</template>
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item  prop="neckFootRoundnessLeft" label-width='0'>
                                <el-input v-model="origindata.neckFootRoundnessLeft" placeholder="" :disabled="enableLeft">
                                    <template slot="prepend">圆度:</template>
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="1" class="innertext"><span>右:</span></el-col>
                        <el-col :span="4">
                            <el-form-item  prop="neckFootDiameterRight1" label-width='0' >
                                <el-input v-model="origindata.neckFootDiameterRight1" placeholder="0度位置" :disabled="enableRight">
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item  prop="neckFootDiameterRight2" label-width='0' >
                                <el-input v-model="origindata.neckFootDiameterRight2" placeholder="90度位置" :disabled="enableRight">
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item  prop="neckFootDiameterRightAvg" label-width='0'>
                                <el-input v-model="origindata.neckFootDiameterRightAvg" placeholder="" :disabled="enableRight">
                                    <template slot="prepend">直径平均值:</template>
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item  prop="neckFootRoundnessRight" label-width='0'>
                                <el-input v-model="origindata.neckFootRoundnessRight" placeholder="" :disabled="enableRight">
                                    <template slot="prepend">圆度:</template>
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </div>

                <el-row style="margin-bottom: 10px"><el-col :span="6"><span>轴承参数</span></el-col></el-row>
                <div class="container">
                    <el-row>
                        <el-col :span="6">
                            <el-form-item label="轴承型号" prop="axleTypeLeft" >
                                <el-select v-model="ruleForm.axleTypeLeft" :disabled="enableLeft">
                                    <el-option label="SKF197726" value="SKF197726"></el-option>
                                    <el-option label="353130B" value="353130B"></el-option>
                                    <el-option label="352226X2-2RZ" value="352226X2-2RZ"></el-option>
                                    <el-option label="353132A" value="353132A"></el-option>
                                    <el-option label="353132B" value="353132B"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item prop="axleTypeRight" label-width="0">
                                <el-select v-model="ruleForm.axleTypeRight" :disabled="enableRight">
                                    <el-option label="SKF197726" value="SKF197726"></el-option>
                                    <el-option label="353130B" value="353130B"></el-option>
                                    <el-option label="352226X2-2RZ" value="352226X2-2RZ"></el-option>
                                    <el-option label="353132A" value="353132A"></el-option>
                                    <el-option label="353132B" value="353132B"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="轴承内径" prop="bearingInnerDiameterLeft">
                                <el-input v-model="ruleForm.bearingInnerDiameterLeft" placeholder="左" :disabled="enableLeft"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item prop="bearingInnerDiameterRight" label-width="0">
                                <el-input v-model="ruleForm.bearingInnerDiameterRight" placeholder="右" :disabled="enableRight"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="6">
                            <el-form-item label="密封座内径" prop="sealDiameterLeft">
                                <el-input v-model="ruleForm.sealDiameterLeft" placeholder="左" :disabled="enableLeft"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item prop="sealDiameterRight" label-width="0">
                                <el-input v-model="ruleForm.sealDiameterRight" placeholder="右" :disabled="enableRight"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="后档内径" prop="backerInnerDiameterLeft">
                                <el-input v-model="ruleForm.backerInnerDiameterLeft" placeholder="左" :disabled="enableLeft"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item prop="backerInnerDiameterRight" label-width="0">
                                <el-input v-model="ruleForm.backerInnerDiameterRight" placeholder="右" :disabled="enableRight"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </div>

                <el-row style="margin-bottom: 10px"><el-col :span="6"><span>过盈量</span></el-col></el-row>
                <div class="container">
                    <el-row>
                        <el-col :span="7">
                            <el-form-item label="轴承与轴颈" prop="fitBearing2NeckLeft" label-width="120px">
                                <el-input v-model="ruleForm.fitBearing2NeckLeft" placeholder="左" :disabled="enableLeft"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item prop="fitBearing2NeckRight" label-width="0">
                                <el-input v-model="ruleForm.fitBearing2NeckRight" placeholder="右" :disabled="enableRight"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="7">
                            <el-form-item label="密封座与轴颈" prop="fitSeal2NeckLeft" label-width="120px">
                                <el-input v-model="ruleForm.fitSeal2NeckLeft" placeholder="左" :disabled="enableLeft"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item prop="fitSeal2NeckRight" label-width="0">
                                <el-input v-model="ruleForm.fitSeal2NeckRight" placeholder="右" :disabled="enableRight"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="7">
                            <el-form-item label="后档与防尘座" prop="fitSeal2BackerLeft" label-width="120px">
                                <el-input v-model="ruleForm.fitSeal2BackerLeft" placeholder="左" :disabled="enableLeft"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item prop="fitSeal2BackerRight" label-width="0">
                                <el-input v-model="ruleForm.fitSeal2BackerRight" placeholder="右" :disabled="enableRight"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </div>
                <el-row style="margin-bottom: 10px"><el-col :span="6"><span>压装参数</span></el-col></el-row>
                <div class="container">
                    <el-row>
                        <el-col :span="7">
                            <el-form-item label="最大压装力" prop="maxPressureLeft" label-width="120px">
                                <el-input v-model="ruleForm.maxPressureLeft" placeholder="左" :disabled="enableLeft"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item prop="maxPressureRight" label-width="0">
                                <el-input v-model="ruleForm.maxPressureRight" placeholder="右" :disabled="enableRight"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="7">
                            <el-form-item label="终止贴合压力" prop="finalPressureLeft" label-width="120px">
                                <el-input v-model="ruleForm.finalPressureLeft" placeholder="左" :disabled="enableLeft"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item prop="finalPressureRight" label-width="0">
                                <el-input v-model="ruleForm.finalPressureRight" placeholder="右" :disabled="enableRight"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="7">
                            <el-form-item label="轴向游隙" prop="axleGapLeft" label-width="120px">
                                <el-input v-model="ruleForm.axleGapLeft" placeholder="左" :disabled="enableLeft"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item prop="axleGapRight" label-width="0">
                                <el-input v-model="ruleForm.axleGapRight" placeholder="右" :disabled="enableRight"></el-input>
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
            origindata:Object,
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
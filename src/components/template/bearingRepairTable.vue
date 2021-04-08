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
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="轴承型号左" prop="bearingTypeLeft">
                            <el-select v-model="ruleForm.bearingTypeLeft">
                                <el-option label="SKF197726" value="SKF197726"></el-option>
                                <el-option label="353130B" value="353130B"></el-option>
                                <el-option label="352226X2-2RZ" value="352226X2-2RZ"></el-option>
                                <el-option label="353132A" value="353132A"></el-option>
                                <el-option label="353132B" value="353132B"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10">
                        <el-form-item label="轴承型号右" prop="bearingTypeRight">
                            <el-select v-model="ruleForm.bearingTypeRight">
                                <el-option label="SKF197726" value="SKF197726"></el-option>
                                <el-option label="353130B" value="353130B"></el-option>
                                <el-option label="352226X2-2RZ" value="352226X2-2RZ"></el-option>
                                <el-option label="353132A" value="353132A"></el-option>
                                <el-option label="353132B" value="353132B"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row style="margin-bottom: 10px"><el-col :span="6"><span>标志板内容左</span></el-col></el-row>
                <div class="container">
                    <el-row>
                        <el-col :span="1" class="innertext"><span>A:</span></el-col>
                        <el-col :span="6">
                            <el-form-item prop="bearingAssemble1stLeft" label-width='0'>
                                <el-date-picker
                                        type="month"
                                        placeholder="轴承首装"
                                        v-model="ruleForm.bearingAssemble1stLeft"
                                        format="yyyy 年 MM 月"
                                        value-format="yyyy-MM"
                                        style="width: 100%;"></el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item  prop="bearingLevelLeft" label-width='0'>
                                <el-select v-model="ruleForm.bearingLevelLeft" placeholder="轴承等级">
                                    <el-option label="新造" value="0"></el-option>
                                    <el-option label="大修" value="1"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item  prop="bearingmadeInLeft" label-width='0'>
                                <el-input v-model="ruleForm.bearingmadeInLeft" placeholder="制造单位"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="1" class="innertext"><span>B:</span></el-col>
                        <el-col :span="6">
                            <el-form-item prop="wheelAssemble1st" label-width='0'>
                                <el-date-picker
                                        type="date"
                                        placeholder="轮对首次组装"
                                        v-model="ruleForm.wheelAssemble1st"
                                        format="yyyy 年 MM 月 dd 日"
                                        value-format="yyyy-MM-dd"
                                        style="width: 100%;"></el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :span="1" class="innertext"><span>左</span></el-col>
                        <el-col :span="6">
                            <el-form-item  prop="axleNumber" label-width='0'>
                                <el-input v-model="ruleForm.axleNumber" placeholder="轴号"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="1" class="innertext"><span>C:</span></el-col>
                        <el-col :span="6">
                            <el-form-item prop="bearingAssembleLeft" label-width='0'>
                                <el-date-picker
                                        type="date"
                                        placeholder="轴承本次组装"
                                        v-model="ruleForm.bearingAssembleLeft"
                                        format="yyyy 年 MM 月 dd 日"
                                        value-format="yyyy-MM-dd"
                                        style="width: 100%;"></el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item prop="axleMadeDate" label-width='0'>
                                <el-date-picker
                                        type="date"
                                        placeholder="车轴制造年月"
                                        v-model="ruleForm.axleMadeDate"
                                        format="yyyy 年 MM 月"
                                        value-format="yyyy-MM"
                                        style="width: 100%;"></el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item  prop="axleMaterial" label-width='0'>
                                <el-select v-model="ruleForm.axleMaterial" placeholder="车轴钢种代号">
                                    <el-option label="W" value="W"></el-option>
                                    <el-option label="S" value="S"></el-option>
                                    <el-option label="H" value="H"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item  prop="axleMadeIn" label-width='0'>
                                <el-input v-model="ruleForm.axleMadeIn" placeholder="制造单位"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="1" class="innertext"><span>D:</span></el-col>
                        <el-col :span="6">
                            <el-form-item  prop="bearingAssembleInLeft" label-width='0'>
                                <el-input v-model="ruleForm.bearingAssembleInLeft" placeholder="轴承本次装用单位"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item  prop="repairLevelLeft" label-width='0'>
                                <el-select v-model="ruleForm.repairLevelLeft" placeholder="轴承等级">
                                    <el-option label="新造" value="0"></el-option>
                                    <el-option label="大修" value="1"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </div>


                <el-row style="margin-bottom: 10px"><el-col :span="6"><span>标志板内容右</span></el-col></el-row>
                <div class="container">
                    <el-row>
                        <el-col :span="1" class="innertext"><span>A:</span></el-col>
                        <el-col :span="6">
                            <el-form-item prop="bearingAssemble1stRight" label-width='0'>
                                <el-date-picker
                                        type="month"
                                        placeholder="轴承首装"
                                        v-model="ruleForm.bearingAssemble1stRight"
                                        format="yyyy 年 MM 月"
                                        value-format="yyyy-MM"
                                        style="width: 100%;"></el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item  prop="bearingLevelRight" label-width='0'>
                                <el-select v-model="ruleForm.bearingLevelRight" placeholder="轴承等级">
                                    <el-option label="新造" value="0"></el-option>
                                    <el-option label="大修" value="1"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item  prop="bearingmadeInRight" label-width='0'>
                                <el-input v-model="ruleForm.bearingmadeInRight" placeholder="制造单位"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="1" class="innertext"><span>B:</span></el-col>
                        <el-col :span="6">
                            <el-form-item prop="wheelAssemblelast" label-width='0'>
                                <el-date-picker
                                        type="date"
                                        placeholder="轮对末次组装"
                                        v-model="ruleForm.wheelAssemblelast"
                                        format="yyyy 年 MM 月 dd 日"
                                        value-format="yyyy-MM-dd"
                                        style="width: 100%;"></el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item  prop="wheelAssembleIn" label-width='0'>
                                <el-input v-model="ruleForm.wheelAssembleIn" placeholder="组装单位"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="1" class="innertext"><span>C:</span></el-col>
                        <el-col :span="6">
                            <el-form-item prop="bearingAssembleRight" label-width='0'>
                                <el-date-picker
                                        type="date"
                                        placeholder="轴承本次组装"
                                        v-model="ruleForm.bearingAssembleRight"
                                        format="yyyy 年 MM 月 dd 日"
                                        value-format="yyyy-MM-dd"
                                        style="width: 100%;"></el-date-picker>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="1" class="innertext"><span>D:</span></el-col>
                        <el-col :span="6">
                            <el-form-item  prop="bearingAssembleInRight" label-width='0'>
                                <el-input v-model="ruleForm.bearingAssembleInRight" placeholder="本次装用单位"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item  prop="repairLevelRight" label-width='0'>
                                <el-select v-model="ruleForm.repairLevelRight" placeholder="轴承等级">
                                    <el-option label="新造" value="0"></el-option>
                                    <el-option label="大修" value="1"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </div>

                <el-row>
                    <el-col :span="6">
                        <el-form-item label="施封状态" prop="closeStateLeft">
                            <el-select v-model="ruleForm.closeStateLeft" placeholder="左">
                                <el-option label="良好" value="1"></el-option>
                                <el-option label="不良" value="0"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item prop="closeStateRight" label-width="0">
                            <el-select v-model="ruleForm.closeStateRight" placeholder="右">
                                <el-option label="良好" value="1"></el-option>
                                <el-option label="不良" value="0"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="轴向游隙" prop="axleGapLeft">
                            <el-input v-model="ruleForm.axleGapLeft" placeholder="左"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item prop="axleGapRight" label-width="0">
                            <el-input v-model="ruleForm.axleGapRight" placeholder="右"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="6">
                        <el-form-item label="外观状态" prop="appearanceLeft">
                            <el-select v-model="ruleForm.appearanceLeft" placeholder="左">
                                <el-option label="良好" value="1"></el-option>
                                <el-option label="不良" value="0"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item prop="appearanceRight" label-width="0">
                            <el-select v-model="ruleForm.appearanceRight" placeholder="右">
                                <el-option label="良好" value="1"></el-option>
                                <el-option label="不良" value="0"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="轴承修程" prop="repairProgressLeft">
                            <el-select v-model="ruleForm.repairProgressLeft" placeholder="左">
                                <el-option label="报废" value="3"></el-option>
                                <el-option label="大修" value="2"></el-option>
                                <el-option label="一般检" value="1"></el-option>
                                <el-option label="外观检查" value="0"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item prop="repairProgressRight" label-width="0">
                            <el-select v-model="ruleForm.repairProgressRight" placeholder="右">
                                <el-option label="报废" value="3"></el-option>
                                <el-option label="大修" value="2"></el-option>
                                <el-option label="一般检" value="1"></el-option>
                                <el-option label="外观检查" value="0"></el-option>
                            </el-select>
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
            //校验制造单位
            var checkMadePlant = (rule,value,callback)=>{
                var plants=[];
                // if (plants.indexOf(value)==-1) {
                //     return callback(new Error("输入合法的单位"));
                // }
                callback();
            };
            //校验轴号
            var checkaxleNumber = (rule,value,callback)=>{
                var myreg= /^[0-9]{3,6}$/;
                if (!myreg.test(value)) {
                    return callback(new Error("输入合法的数值"));
                }
                callback();
            };
            //校验单位代号
            var checkPlant = (rule,value,callback)=>{
                var myreg= /^[0-9]{3}$/;
                if (!myreg.test(value)) {
                    return callback(new Error("输入合法的数值"));
                }
                callback();
            };
            //校验轴向游隙
            var checkaxleGap = (rule,value,callback)=>{
                var myreg= /^[0-2]\.[0-9]{2,3}$/;
                if (!myreg.test(value)) {
                    return callback(new Error("输入合法的数值"));
                }
                callback();
            };
            return{
                ruleForm: {},
                rules:{
                    bearingTypeLeft: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    bearingTypeRight: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    bearingAssemble1stLeft: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    bearingLevelLeft: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    bearingmadeInLeft: [
                        { required: true, message: '请输入', trigger: 'blur' },
                        { validator:checkPlant,trigger: 'blur' }
                    ],
                    wheelAssemble1st: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    axleNumber: [
                        { required: true, message: '请输入', trigger: 'blur' },
                        { validator:checkaxleNumber,trigger: 'blur' }
                    ],
                    bearingAssembleLeft: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    axleMadeDate: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    axleMaterial: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    axleMadeIn: [
                        { required: true, message: '请输入', trigger: 'blur' },
                        { validator:checkPlant,trigger: 'blur' }
                    ],
                    bearingAssembleInLeft: [
                        { required: true, message: '请输入', trigger: 'blur' },
                        { validator:checkPlant,trigger: 'blur' }
                    ],
                    repairLevelLeft: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    bearingAssemble1stRight: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    bearingLevelRight: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    bearingmadeInRight: [
                        { required: true, message: '请输入', trigger: 'blur' },
                        { validator:checkPlant,trigger: 'blur' }
                    ],
                    wheelAssemblelast: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    wheelAssembleIn: [
                        { required: true, message: '请输入', trigger: 'blur' },
                        { validator:checkPlant,trigger: 'blur' }
                    ],
                    bearingAssembleRight: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    bearingAssembleInRight: [
                        { required: true, message: '请输入', trigger: 'blur' },
                        { validator:checkPlant,trigger: 'blur' }
                    ],
                    repairLevelRight: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    closeStateLeft: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    closeStateRight: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    axleGapLeft: [
                        { required: true, message: '请输入', trigger: 'blur' },
                        { validator:checkaxleGap,trigger: 'blur' }
                    ],
                    axleGapRight: [
                        { required: true, message: '请输入', trigger: 'blur' },
                        { validator:checkaxleGap,trigger: 'blur' }
                    ],
                    appearanceLeft: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    appearanceRight: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    uncapReasonLeft: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    uncapReasonRight: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    unloadReasonLeft: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    unloadReasonRight: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    unloadDateLeft: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    unloadDateRight: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    unloaderLeft: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    unloaderRight: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    repairProgressLeft: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    repairProgressRight: [
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
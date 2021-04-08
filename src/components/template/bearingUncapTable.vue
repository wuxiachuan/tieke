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
                    <el-col :span="8">
                        <el-form-item label="开盖原因（左）" label-width="150px" prop="unCapReasonLeft">
                            <el-checkbox-group v-model="unCapReasonLeft">
                                <el-checkbox label="1">送厂</el-checkbox>
                                <el-checkbox label="2">旋面</el-checkbox>
                                <el-checkbox label="4">超探</el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="开盖原因（右）" label-width="150px" prop="unCapReasonRight">
                            <el-checkbox-group v-model="unCapReasonRight">
                                <el-checkbox label="1">送厂</el-checkbox>
                                <el-checkbox label="2">旋面</el-checkbox>
                                <el-checkbox label="4">超探</el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="开盖者（左）" label-width="150px" prop="unCapperLeft">
                            <el-input v-model="ruleForm.unCapperLeft" ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="开盖者（右）"label-width="150px" prop="unCapperRight" >
                            <el-input v-model="ruleForm.unCapperRight" ></el-input>
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
                unCapReasonRight:[],
                unCapReasonLeft:[],
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
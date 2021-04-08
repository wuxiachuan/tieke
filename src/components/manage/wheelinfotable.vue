<template>
    <div>
        <el-row>
            <el-col :span="24">
                <el-card>
                    <el-form :model="ruleForm" ref="ruleForm" label-width="100px">
                        <el-row>
                            <el-col :span="6">
                                <el-form-item label="收入单位" prop="takeInDepot">
                                    <el-input v-model="ruleForm.takeInDepot"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="收入日期" prop="takeInDate">
                                    <el-date-picker
                                            type="date"
                                            placeholder="选择日期"
                                            v-model="ruleForm.takeInDate"
                                            format="yyyy 年 MM 月 dd 日"
                                            value-format="yyyy-MM-dd"
                                            style="width: 100%;"></el-date-picker>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="6">
                                <el-form-item label="收入原因" prop="takeInReason">
                                    <el-select v-model="ruleForm.takeInReason" placeholder="请选择">
                                        <el-option label="段修" value="duanxiu"></el-option>
                                        <el-option label="站修调入" value="zhanxiu"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="收入车型" prop="vehicleType">
                                    <el-input v-model="ruleForm.vehicleType"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="收入车号" prop="vehicleNumber">
                                    <el-input v-model="ruleForm.vehicleNumber"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="6">
                                <el-form-item label="轴号" prop="axleNumber">
                                    <el-input v-model="ruleForm.axleNumber"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="轴型" prop="axleType">
                                    <el-select v-model="ruleForm.axleType" placeholder="请选择轴型">
                                        <el-option label="RE2B" value="RE2B"></el-option>
                                        <el-option label="RD2" value="RD2"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="材质" prop="axleMaterial">
                                    <el-select v-model="ruleForm.axleMaterial" placeholder="请轴材质">
                                        <el-option label="LZ50" value="LZ50"></el-option>
                                        <el-option label="LZ45CrV" value="LZ45CrV"></el-option>
                                        <el-option label="LZ40" value="LZ40"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="6">
                                <el-form-item label="车轴制造" prop="axleMadeDate">
                                    <el-date-picker
                                            type="month"
                                            placeholder="选择日期"
                                            v-model="ruleForm.axleMadeDate"
                                            format="yyyy 年 MM 月 "
                                            value-format="yyyy-MM"
                                            style="width: 100%;"></el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="制造单位" prop="axleMadeIn">
                                    <el-input v-model="ruleForm.axleMadeIn"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="轴位" prop="axlePosition">
                                    <el-select v-model="ruleForm.axlePosition" placeholder="请选择轴位">
                                        <el-option label="1位" value="1"></el-option>
                                        <el-option label="2位" value="2"></el-option>
                                        <el-option label="3位" value="3"></el-option>
                                        <el-option label="4位" value="4"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="6">
                                <el-form-item label="轮型" prop="wheelType">
                                    <el-select v-model="ruleForm.wheelType" placeholder="请选择轮型">
                                        <el-option label="HESA" value="HESA"></el-option>
                                        <el-option label="HEZB" value="HEZB"></el-option>
                                        <el-option label="HDSA" value="HDSA"></el-option>
                                        <el-option label="HDZA" value="HDZA"></el-option>
                                        <el-option label="HDZB" value="HDZB"></el-option>
                                        <el-option label="HDZC" value="HDZC"></el-option>
                                        <el-option label="HDZD" value="HDZD"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="材质" prop="wheelMaterial">
                                    <el-select v-model="ruleForm.wheelMaterial" placeholder="请选择轮材质">
                                        <el-option label="辗钢" value="辗钢"></el-option>
                                        <el-option label="铸钢" value="铸钢"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="制造单位" prop="wheelMadeIn">
                                    <el-input v-model="ruleForm.wheelMadeIn"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="首次组装" prop="wheelAssemblefirstDate">
                                    <el-date-picker
                                            type="date"
                                            placeholder="选择日期"
                                            v-model="ruleForm.wheelAssemblefirstDate"
                                            format="yyyy 年 MM 月 dd 日 "
                                            value-format="yyyy-MM-dd"
                                            style="width: 100%;"></el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="组装单位" prop="wheelAssemblefirstIn">
                                    <el-input v-model="ruleForm.wheelAssemblefirstIn"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="末次组装" prop="wheelAssemblelastDate">
                                    <el-date-picker
                                            type="date"
                                            placeholder="选择日期"
                                            v-model="ruleForm.wheelAssemblefirstDate"
                                            format="yyyy 年 MM 月 dd 日 "
                                            value-format="yyyy-MM-dd"
                                            style="width: 100%;"></el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="组装单位" prop="wheelAssemblelastIn">
                                    <el-input v-model="ruleForm.wheelAssemblelastIn"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="9">
                                <el-form-item label="车轮标记左" prop="wheelMarkLeft">
                                    <el-input v-model="ruleForm.wheelMarkLeft"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="9">
                                <el-form-item label="车轮标记右" prop="wheelMarkRight">
                                    <el-input v-model="ruleForm.wheelMarkRight"></el-input>
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
        name: "wheelinfotable",
        props:{
            showinfo:Object
        },
        data(){
            return{
                ruleForm: {
                    wheelId:'',
                    takeInDate: '',
                    takeInDepot: '',
                    takeInReason: '',
                    vehicleType: '',
                    vehicleNumber: '',
                    axleNumber:'',
                    axleType: '',
                    axleMaterial: '',
                    axleMadeDate:'',
                    axleMadeIn:'',
                    axlePosition:'',
                    wheelType:'',
                    wheelMaterial:'',
                    wheelMadeIn:'',
                    wheelAssemblefirstDate:'',
                    wheelAssemblefirstIn:'',
                    wheelAssemblelastDate:'',
                    wheelAssemblelastIn:'',
                    wheelMarkLeft:'',
                    wheelMarkRight:'',
                    infoCollector:'',
                    infoTakeFinish:'0',
                    infoTakeFinishTime:'',
                    isMeasureFinish:'0',
                    other:'',
                    saveNumer:0
                }
            }
        },
        mounted() {
            this.ruleForm = this.showinfo?this.showinfo:{};
        }
    }
</script>

<style lang="scss" scoped>

</style>
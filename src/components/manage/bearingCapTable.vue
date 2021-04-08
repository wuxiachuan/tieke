<template>
    <div>
        <el-row>
            <el-col :span="24">
                <el-card>
                    <el-form>
                        <el-row style="margin-bottom: 10px"><el-col :span="6"><span>轴端螺栓力矩</span></el-col></el-row>
                        <div class="container">
                            <el-row>
                                <el-col :span="1" class="innertext"><span>左:</span></el-col>
                                <el-col :span="4">
                                    <el-form-item  prop="boltTorqueLeft1" label-width='0'>
                                        <el-input v-model="ruleForm.boltTorqueLeft1" placeholder="螺栓力矩1" :disabled="enableLeft">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="4">
                                    <el-form-item  prop="boltTorqueLeft2" label-width='0'>
                                        <el-input v-model="ruleForm.boltTorqueLeft2" placeholder="螺栓力矩2" :disabled="enableLeft">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="4">
                                    <el-form-item  prop="boltTorqueLeft3" label-width='0'>
                                        <el-input v-model="ruleForm.boltTorqueLeft3" placeholder="螺栓力矩3" :disabled="enableLeft">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="4">
                                    <el-form-item  prop="axleNeckDiameterLeftAvgA" label-width='0'>
                                        <el-input v-model="ruleForm.axleNeckDiameterLeftAvgA" placeholder="" :disabled="enableLeft">
                                            <template slot="prepend">平均:</template>
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="1" class="innertext"><span>右:</span></el-col>
                                <el-col :span="4">
                                    <el-form-item  prop="boltTorqueRight1" label-width='0'>
                                        <el-input v-model="ruleForm.boltTorqueRight1" placeholder="螺栓力矩1" :disabled="enableLeft">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="4">
                                    <el-form-item  prop="boltTorqueRight2" label-width='0'>
                                        <el-input v-model="ruleForm.boltTorqueRight2" placeholder="螺栓力矩2" :disabled="enableLeft">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="4">
                                    <el-form-item  prop="boltTorqueRight3" label-width='0'>
                                        <el-input v-model="ruleForm.boltTorqueRight3" placeholder="螺栓力矩3" :disabled="enableLeft">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="4">
                                    <el-form-item  prop="axleNeckDiameterLeftAvgB" label-width='0'>
                                        <el-input v-model="ruleForm.axleNeckDiameterLeftAvgB" placeholder="" :disabled="enableLeft">
                                            <template slot="prepend">平均:</template>
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </div>

                        <el-row style="margin-bottom: 10px"><el-col :span="6"><span>标志板内容左</span></el-col></el-row>
                        <div class="container">
                            <el-row>
                                <el-col :span="1" class="innertext"><span>A:</span></el-col>
                                <el-col :span="6">
                                    <el-form-item prop="bearingAssemble1stLeft" label-width='0' >
                                        <el-date-picker
                                                type="month"
                                                placeholder="轴承首装"
                                                v-model="ruleForm.bearingAssemble1stLeft"
                                                format="yyyy 年 MM 月"
                                                value-format="yyyy-MM"
                                                style="width: 100%;"></el-date-picker >
                                    </el-form-item>
                                </el-col>
                                <el-col :span="4">
                                    <el-form-item  prop="bearingLevelLeft" label-width='0'>
                                        <el-select v-model="ruleForm.bearingLevelLeft" placeholder="轴承等级" :disabled="enableLeft">
                                            <el-option label="新造" value="0"></el-option>
                                            <el-option label="大修" value="1"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="4">
                                    <el-form-item  prop="bearingmadeInLeft" label-width='0'>
                                        <el-input v-model="ruleForm.bearingmadeInLeft" placeholder="制造单位" :disabled="enableLeft"></el-input>
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
                                        <el-input v-model="ruleForm.axleNumber" placeholder="轴号" :disabled="enableLeft"></el-input>
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
                                        <el-select v-model="ruleForm.axleMaterial" placeholder="车轴钢种代号" :disabled="enableLeft">
                                            <el-option label="W" value="W"></el-option>
                                            <el-option label="S" value="S"></el-option>
                                            <el-option label="H" value="H"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="4">
                                    <el-form-item  prop="axleMadeIn" label-width='0'>
                                        <el-input v-model="ruleForm.axleMadeIn" placeholder="制造单位" :disabled="enableLeft"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="1" class="innertext"><span>D:</span></el-col>
                                <el-col :span="6">
                                    <el-form-item  prop="bearingAssembleInLeft" label-width='0'>
                                        <el-input v-model="ruleForm.bearingAssembleInLeft" placeholder="轴承本次装用单位" :disabled="enableLeft"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="4">
                                    <el-form-item  prop="repairLevelLeft" label-width='0'>
                                        <el-select v-model="ruleForm.repairLevelLeft" placeholder="轴承等级" :disabled="enableLeft">
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
                                        <el-select v-model="ruleForm.bearingLevelRight" placeholder="轴承等级" :disabled="enableLeft">
                                            <el-option label="新造" value="0"></el-option>
                                            <el-option label="大修" value="1"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="4">
                                    <el-form-item  prop="bearingmadeInRight" label-width='0'>
                                        <el-input v-model="ruleForm.bearingmadeInRight" placeholder="制造单位"></el-input :disabled="enableLeft">
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
                                        <el-input v-model="ruleForm.wheelAssembleIn" placeholder="组装单位" :disabled="enableLeft"></el-input>
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
                                        <el-input v-model="ruleForm.bearingAssembleInRight" placeholder="本次装用单位" :disabled="enableLeft"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="4">
                                    <el-form-item  prop="repairLevelRight" label-width='0'>
                                        <el-select v-model="ruleForm.repairLevelRight" placeholder="轴承等级" :disabled="enableLeft">
                                            <el-option label="新造" value="0"></el-option>
                                            <el-option label="大修" value="1"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </div>

                        <el-row>
                             <el-col :span="7">
                                <el-form-item label="施封标记" prop="sealMarkLeft" label-width="120px">
                                    <el-select v-model="ruleForm.sealMarkLeft" placeholder="左" :disabled="enableLeft">
                                        <el-option label="良好" value="1"></el-option>
                                        <el-option label="不良" value="0"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="4">
                                <el-form-item prop="sealMarkRight" label-width="0">
                                    <el-select v-model="ruleForm.sealMarkRight" placeholder="右" :disabled="enableLeft">
                                        <el-option label="良好" value="1"></el-option>
                                        <el-option label="不良" value="0"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="7">
                                <el-form-item label="关盖作业" prop="caperLeft" label-width="120px">
                                    <el-input v-model="ruleForm.caperLeft" placeholder="左" :disabled="enableLeft"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="4">
                                <el-form-item prop="caperRight" label-width="0">
                                    <el-input v-model="ruleForm.caperRight" placeholder="右" :disabled="enableLeft"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="7">
                                <el-form-item label="磨合作业" prop="loaderLeft" label-width="120px">
                                    <el-input v-model="ruleForm.loaderLeft" placeholder="左" :disabled="enableLeft"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="4">
                                <el-form-item prop="loaderRight" label-width="0">
                                    <el-input v-model="ruleForm.loaderRight" placeholder="右" :disabled="enableLeft"></el-input>
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
        name: "bearingCapTable",
        props:{
            showinfo:Object
        },
        data(){
            return{
                enableLeft:false,
              //  enableRight:true,
                ruleForm: {
                    id:'',
                    wheelId	:'',
                    bearingAssemble1stLeft:'',
                    bearingLevelLeft:'',
                    bearingmadeInLeft:'',
                    wheelAssemble1st:'',
                    axleNumber:'',
                    bearingAssembleLeft	:'',
                    axleMadeDate:'',
                    axleMaterial:'',
                    axleMadeIn:'',
                    bearingAssembleInLeft:'',
                    repairLevelLeft:'',
                    bearingAssemble1stRight:'',
                    bearingLevelRight:'',
                    bearingmadeInRight:'',
                    wheelAssemblelast:'',
                    wheelAssembleIn:'',
                    bearingAssembleRight:'',
                    bearingAssembleInRight:'',
                    repairLevelRight:'',
                    sealMarkLeft:'',
                    sealMarkRight:'',
                    envTemperatureLeft:'',
                    envTemperatureRight:'',
                    temperatureRiseLeft:'',
                    temperatureRiseRight:'',
                    highestTempLeft:'',
                    highestTempRight:'',
                    matcherLeft:'',
                    loaderLeft:'',
                    caperLeft:'',
                    matcherRight:'',
                    loaderRight:'',
                    caperRight	:'',
                    foreMan:'',
                    qualityInspector:'',
                    Inspector:'',
                    isFinish:'',
                    finishTime:'',
                    other:'',
                    repairSaved:'',
                    boltTorqueLeft1:'',
                    boltTorqueLeft2:'',
                    boltTorqueLeft3:'',
                    boltTorqueRight1:'',
                    boltTorqueRight2:'',
                    boltTorqueRight3:''
                }
            }
        },
        mounted() {
            this.ruleForm = this.showinfo?this.showinfo:{};
        }
    }
</script>

<style lang="scss" scoped>
    .list{
        list-style: none;
        height: 1100px;
        padding: 0;
        font-size: 14px;
        overflow: auto;
        background-color: #e7e1cd;
    .list-item{
        width: 100%;
        height: 40px;
        background-color: #cfa;
        border-bottom: 1px solid black;
        user-select: none;
        cursor: pointer;
        margin-top: 2px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    }
    .status{
        font-size: 14px;
        margin: 0 0 20px 10px;
    span{
        margin-left: 20px;
        font-size: 16px;
    }
    }
    .list-item:hover{
        background-color: #0096b3;
    }
    .choosen{
        background-color: #B3C0D1 !important;
    }
    .notfinish{
        color: red;
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
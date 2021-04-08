<template>
    <div>
        <el-row>
            <el-col :span="24">
                <el-card>
                    <el-form :model="ruleForm"  ref="ruleForm" label-width="100px">
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
                                        <el-input v-model="ruleForm.axleNeckDiameterLeftA2" placeholder="120度位置" :disabled="enableLeft">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="4">
                                    <el-form-item  prop="axleNeckDiameterLeftA3" label-width='0'>
                                        <el-input v-model="ruleForm.axleNeckDiameterLeftA3" placeholder="240度位置" :disabled="enableLeft">
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
                                <el-col :span="4">
                                    <el-form-item  prop="axleNeckRoundnessLeftA" label-width='0'>
                                        <el-input v-model="ruleForm.axleNeckRoundnessLeftA" placeholder="" :disabled="enableLeft">
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
                                        <el-input v-model="ruleForm.axleNeckDiameterLeftB2" placeholder="120度位置" :disabled="enableLeft">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="4">
                                    <el-form-item  prop="axleNeckDiameterLeftB3" label-width='0'>
                                        <el-input v-model="ruleForm.axleNeckDiameterLeftB3" placeholder="240度位置" :disabled="enableLeft">
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
                                <el-col :span="4">
                                    <el-form-item  prop="axleNeckRoundnessLeftB" label-width='0'>
                                        <el-input v-model="ruleForm.axleNeckRoundnessLeftB" placeholder="" :disabled="enableLeft">
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
                                        <el-input v-model="ruleForm.axleNeckDiameterRightA2" placeholder="120度位置" :disabled="enableRight">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="4">
                                    <el-form-item  prop="axleNeckDiameterRightA3" label-width='0'>
                                        <el-input v-model="ruleForm.axleNeckDiameterRightA3" placeholder="240度位置" :disabled="enableRight">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="4">
                                    <el-form-item  prop="axleNeckDiameterRightAvgA" label-width='0'>
                                        <el-input v-model="ruleForm.axleNeckDiameterRightAvgA" placeholder="" :disabled="enableRight">
                                            <template slot="prepend">平均:</template>
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="4">
                                    <el-form-item  prop="axleNeckRoundnessRightA" label-width='0'>
                                        <el-input v-model="ruleForm.axleNeckRoundnessRightA" placeholder="" :disabled="enableRight">
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
                                        <el-input v-model="ruleForm.axleNeckDiameterRightB2" placeholder="120度位置" :disabled="enableRight">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="4">
                                    <el-form-item  prop="axleNeckDiameterRightB3" label-width='0'>
                                        <el-input v-model="ruleForm.axleNeckDiameterRightB3" placeholder="240度位置" :disabled="enableRight">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="4">
                                    <el-form-item  prop="axleNeckDiameterRightAvgB" label-width='0'>
                                        <el-input v-model="ruleForm.axleNeckDiameterRightAvgB" placeholder="" :disabled="enableRight">
                                            <template slot="prepend">平均:</template>
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="4">
                                    <el-form-item  prop="axleNeckRoundnessRightB" label-width='0'>
                                        <el-input v-model="ruleForm.axleNeckRoundnessRightB" placeholder="" :disabled="enableRight">
                                            <template slot="prepend">圆度:</template>
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="3" class="innertext"><span>左轴颈平均值:</span></el-col>
                                <el-col :span="4">
                                    <el-form-item  prop="axleNeckDiameterLeftAvg" label-width='0'>
                                        <el-input v-model="ruleForm.axleNeckDiameterLeftAvg" placeholder="" :disabled="enableLeft"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="3" class="innertext"><span>右轴颈平均值:</span></el-col>
                                <el-col :span="4">
                                    <el-form-item  prop="axleNeckDiameterRightAvg" label-width='0'>
                                        <el-input v-model="ruleForm.axleNeckDiameterRightAvg" placeholder="" :disabled="enableRight"></el-input>
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
                                    <el-form-item  prop="neckFootDiameterLeftAvg" label-width='0'>
                                        <el-input v-model="ruleForm.neckFootDiameterLeftAvg" placeholder="" :disabled="enableLeft">
                                            <template slot="prepend">直径平均值:</template>
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="4">
                                    <el-form-item  prop="neckFootRoundnessLeft" label-width='0'>
                                        <el-input v-model="ruleForm.neckFootRoundnessLeft" placeholder="" :disabled="enableLeft">
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
                                    <el-form-item  prop="neckFootDiameterRightAvg" label-width='0'>
                                        <el-input v-model="ruleForm.neckFootDiameterRightAvg" placeholder="" :disabled="enableRight">
                                            <template slot="prepend">直径平均值:</template>
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="4">
                                    <el-form-item  prop="neckFootRoundnessRight" label-width='0'>
                                        <el-input v-model="ruleForm.neckFootRoundnessRight" placeholder="" :disabled="enableRight">
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
                    </el-form>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "bearingLoadTable",
        props:{
            showinfo:Object
        },
        data(){
            return{
                enableLeft:false,
                enableRight:true,
                ruleForm: {
                    id	:'',
                    wheelId	:'',
                    axleNeckDiameterLeftA1	:'',
                    axleNeckDiameterLeftA2	:'',
                    axleNeckDiameterLeftA3	:'',
                    axleNeckDiameterLeftB1	:'',
                    axleNeckDiameterLeftB2	:'',
                    axleNeckDiameterLeftB3	:'',
                    axleNeckDiameterRightA1	:'',
                    axleNeckDiameterRightA2	:'',
                    axleNeckDiameterRightA3	:'',
                    axleNeckDiameterRightB1	:'',
                    axleNeckDiameterRightB2	:'',
                    axleNeckDiameterRightB3	:'',
                    axleNeckRoundnessLeftA	:'',
                    axleNeckRoundnessLeftB	:'',
                    axleNeckRoundnessRightA	:'',
                    axleNeckRoundnessRightB	:'',
                    axleNeckDiameterLeftAvgA:'',
                    axleNeckDiameterLeftAvgB:'',
                    axleNeckDiameterRightAvgA:'',
                    axleNeckDiameterRightAvgB:'',
                    axleNeckDiameterLeftAvg:'',
                    axleNeckDiameterRightAvg:'',
                    neckFootDiameterLeft1	:'',
                    neckFootDiameterLeft2	:'',
                    neckFootDiameterRight1	:'',
                    neckFootDiameterRight2	:'',
                    neckFootDiameterLeftAvg :0,
                    neckFootDiameterRightAvg :0,
                    neckFootRoundnessLeft	:'',
                    neckFootRoundnessRight	:'',
                    axleTypeLeft	:'',
                    axleTypeRight	:'',
                    bearingInnerDiameterLeft	:'',
                    bearingInnerDiameterRight	:'',
                    sealDiameterLeft	:'',
                    sealDiameterRight	:'',
                    backerInnerDiameterLeft	:'',
                    backerInnerDiameterRight	:'',
                    backerRoundnessLeft	:'',
                    backerRoundnessRight	:'',
                    fitBearing2NeckLeft	:'',
                    fitSeal2NeckLeft	:'',
                    fitSeal2BackerLeft	:'',
                    fitBearing2NeckRight	:'',
                    fitSeal2NeckRight	:'',
                    fitSeal2BackerRight	:'',
                    maxPressureLeft	:'',
                    maxPressureRight	:'',
                    finalPressureLeft	:'',
                    finalPressureRight	:'',
                    axleGapLeft	:'',
                    axleGapRight	:'',
                    bearingAssemble1stLeft	:'',
                    bearingLevelLeft	:'',
                    bearingmadeInLeft	:'',
                    wheelAssemble1st	:'',
                    axleNumber	:'',
                    bearingAssembleLeft	:'',
                    axleMadeDate	:'',
                    axleMaterial	:'',
                    axleMadeIn	:'',
                    bearingAssembleInLeft	:'',
                    repairLevelLeft	:'',
                    bearingAssemble1stRight	:'',
                    bearingLevelRight	:'',
                    bearingmadeInRight	:'',
                    wheelAssemblelast	:'',
                    wheelAssembleIn	:'',
                    bearingAssembleRight	:'',
                    bearingAssembleInRight	:'',
                    repairLevelRight	:'',
                    sealMarkLeft	:'',
                    sealMarkRight	:'',
                    envTemperatureLeft	:'',
                    envTemperatureRight	:'',
                    temperatureRiseLeft	:'',
                    temperatureRiseRight	:'',
                    highestTempLeft	:'',
                    highestTempRight	:'',
                    matcherLeft	:'',
                    loaderLeft	:'',
                    caperLeft	:'',
                    matcherRight	:'',
                    loaderRight	:'',
                    caperRight	:'',
                    foreMan	:'',
                    qualityInspector	:'',
                    Inspector	:'',
                    isFinish	:'',
                    finishTime	:'',
                    other:'',
                    repairSaved:''
                }
            }
        },
        methods:{
            enableForm(index){
                this.enableLeft = true;
                this.enableRight = true;
                if (index=='1') this.enableLeft = false;
                if (index=='2') this.enableRight = false;
                if (index=='3') {
                    this.enableLeft = false;
                    this.enableRight = false;
                }
            }
        },
        mounted() {
            this.ruleForm = this.showinfo?this.showinfo:{};
            this.enableForm(this.showinfo.repairSaved);
        }
    }
</script>

<style lang="scss" scoped>
    .list{
        list-style: none;
        height: 1020px;
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
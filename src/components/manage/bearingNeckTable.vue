<template>
    <div>
        <el-row>
            <el-col :span="24">
                <el-card>
                    <el-form :model="ruleForm"  ref="ruleForm" label-width="100px" >
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
                                    <el-form-item  prop="" label-width='0'>
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
                                    <el-form-item  prop="" label-width='0'>
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
                                    <el-form-item  prop="" label-width='0'>
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
                                    <el-form-item  prop="" label-width='0'>
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
                                    <el-form-item  prop="" label-width='0'>
                                        <el-input v-model="ruleForm.axleNeckDiameterLeftAvg" placeholder="" :disabled="enableLeft"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="3" class="innertext"><span>右轴颈平均值:</span></el-col>
                                <el-col :span="4">
                                    <el-form-item  prop="" label-width='0'>
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
                                    <el-form-item  prop="" label-width='0'>
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
                                    <el-form-item  prop="" label-width='0'>
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
                    </el-form>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "measureTable",
        props:{
            showinfo:Object
        },
        data(){
            return{
                ruleForm: {},
                enableLeft:false,
                enableRight:false
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
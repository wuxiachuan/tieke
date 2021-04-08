<template>
    <div>
        <el-row>
            <el-col :span="24">
                <el-card>
                    <el-form :model="ruleForm"  ref="ruleForm" label-width="100px">
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
                            <el-col :span="5">
                                <el-form-item label="轴型/号/材质" prop="axleType" label-width="120px">
                                    <el-select v-model="ruleForm.axleType" placeholder="请选择轴型">
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
                            <el-col :span="3">
                                <el-form-item prop="axleMaterial" label-width="20">
                                    <el-select v-model="ruleForm.axleMaterial" placeholder="车轴钢种代号">
                                        <el-option label="W" value="LZ50"></el-option>
                                        <el-option label="S" value="LZ40"></el-option>
                                        <el-option label="H" value="LZ45CrV"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
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
                            <el-col :span="6">
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
                            <el-col :span="6">
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
                            <el-col :span="5">
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
                                    <el-select v-model="ruleForm.bearingTypeLeft" placeholder="轴承等级">
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
                    </el-form>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "wheelDispatchTable",
        props:{
            showinfo:Object
        },
        data(){
            return{
                enableLeft:false,
                // enableRight:true,
                ruleForm: {
                    id	:'',
                    wheelId	:'',
                    axleDiameter	:'',
                    wheelDiameterLeft	:'',
                    wheelDiameterRight	:'',
                    treadWearLeft	:'',
                    treadWearRight	:'',
                    rimWideLeft	:'',
                    rimWideRight	:'',
                    flangeThickLeft	:'',
                    flangeThickRight	:'',
                    rimThickLeft	:'',
                    rimThickRight	:'',
                    internalDistance1	:'',
                    internalDistance2	:'',
                    internalDistance3	:'',
                    axleNumber	:'',
                    axleType	:'',
                    axleMaterial	:'',
                    axleMadeDate	:'',
                    axleMadeIn	:'',
                    wheelType	:'',
                    wheelMaterial	:'',
                    wheelMadeIn	:'',
                    wheelAssemblefirst	:'',
                    wheelAssemblefirstIn	:'',
                    wheelAssemblelast	:'',
                    wheelAssemblelastIn	:'',
                    bearingTypeLeft	:'',
                    bearingAssembleDateLeft	:'',
                    bearingMadeInLeft	:'',
                    bearingTypeRight	:'',
                    bearingAssembleDateRight	:'',
                    bearingMadeInRight	:'',
                    storePositionX	:'',
                    storePositionY	:'',
                    wheelStatus	:'',
                    vehicleType	:'',
                    vehicleNumber	:'',
                    matcher	:'',
                    foreMan	:'',
                    qualityInspector	:'',
                    Inspector	:'',
                    isFinish	:'',
                    finishTime	:'',
                    remeasurer	:'',
                    other:''
                }
            }
        },
        mounted() {
            this.ruleForm = this.showinfo?this.showinfo:{};
        }
    }
</script>

<style scoped>

</style>
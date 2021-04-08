<template>
    <div>
        <el-row>
            <el-col :span="24">
                <el-card>
                    <el-form :model="ruleForm"  ref="ruleForm" label-width="100px">
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
                                <el-form-item label="开盖原因" prop="uncapReasonLeft">
                                    <el-select v-model="ruleForm.uncapReasonLeft" placeholder="左">
                                        <el-option label="超探" value="1"></el-option>
                                        <el-option label="旋面" value="2"></el-option>
                                        <el-option label="压装" value="3"></el-option>
                                        <el-option label="其它" value="0"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="4">
                                <el-form-item prop="uncapReasonRight" label-width="0">
                                    <el-select v-model="ruleForm.uncapReasonRight" placeholder="右">
                                        <el-option label="超探" value="超探"></el-option>
                                        <el-option label="旋面" value="旋面"></el-option>
                                        <el-option label="压装" value="压装"></el-option>
                                        <el-option label="其它" value="其它"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>

                        <el-row>
                            <el-col :span="6">
                                <el-form-item label="退卸原因" prop="unloadReasonLeft">
                                    <el-select v-model="ruleForm.unloadReasonLeft" placeholder="左">
                                        <el-option label="压装到期" value="1"></el-option>
                                        <el-option label="状态不良" value="0"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="4">
                                <el-form-item prop="unloadReasonRight" label-width="0">
                                    <el-select v-model="ruleForm.unloadReasonRight" placeholder="右">
                                        <el-option label="压装到期" value="1"></el-option>
                                        <el-option label="状态不良" value="0"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="推卸日期" prop="unloadDateLeft">
                                    <el-date-picker
                                            type="date"
                                            placeholder="左"
                                            v-model="ruleForm.unloadDateLeft"
                                            format="yyyy 年 MM 月 dd 日"
                                            value-format="yyyy-MM-dd"
                                            style="width: 100%;"></el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="4">
                                <el-form-item prop="unloadDateRight" label-width="0">
                                    <el-date-picker
                                            type="date"
                                            placeholder="右"
                                            v-model="ruleForm.unloadDateRight"
                                            format="yyyy 年 MM 月 dd 日"
                                            value-format="yyyy-MM-dd"
                                            style="width: 100%;"></el-date-picker>
                                </el-form-item>
                            </el-col>
                        </el-row>

                        <el-row>
                            <el-col :span="6">
                                <el-form-item label="开盖者" prop="unloaderLeft">
                                    <el-input v-model="ruleForm.unloaderLeft" placeholder="左"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="4">
                                <el-form-item prop="unloaderRight" label-width="0">
                                    <el-input v-model="ruleForm.unloaderRight" placeholder="右"></el-input>
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
                    </el-form>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "bearingRepairTable",
        props:{
            showinfo:Object
        },
        data(){
            return{
              //  enableLeft:false,
             //   enableRight:true,
                ruleForm: {
                    id:'',
                    wheelId:'',
                    bearingTypeLeft:'',
                    bearingTypeRight:'',
                    bearingBoxType:'',
                    bearingAssemble1stLeft:'',
                    bearingLevelLeft:'',
                    bearingmadeInLeft:'',
                    wheelAssemble1st:'',
                    axleNumber:'',
                    bearingAssembleLeft:'',
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
                    closeStateLeft:'',
                    closeStateRight:'',
                    axleGapLeft:'',
                    axleGapRight:'',
                    appearanceLeft:'',
                    appearanceRight:'',
                    uncapReasonLeft:'',
                    uncapReasonRight:'',
                    unloadReasonLeft:'',
                    unloadReasonRight:'',
                    unloadDateLeft:'',
                    unloadDateRight:'',
                    repairProgressLeft:'',
                    repairProgressRight:'',
                    bearingExaminers:'',
                    unloaderLeft:'',
                    unloaderRight:'',
                    isFinish:'0',
                    finishTime:'',
                    other:'',
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
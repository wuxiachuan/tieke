<template>
    <div>
        <el-row>
            <el-col :span="24">
               <el-card>
                   <el-form :model="ruleForm"  ref="ruleForm" label-width="150px">
                       <el-row>
                           <el-col :span="10">
                               <el-form-item label="车轴直径" prop="axleDiameter">
                                   <el-input v-model="ruleForm.axleDiameter"></el-input>
                               </el-form-item>
                           </el-col>
                       </el-row>
                       <el-row>
                           <el-col :span="10">
                               <el-form-item label="车轮直径（左）" prop="wheelDiameterLeft">
                                   <el-input v-model="ruleForm.wheelDiameterLeft"></el-input>
                               </el-form-item>
                           </el-col>
                           <el-col :span="10">
                               <el-form-item label="车轮直径（右）" prop="wheelDiameterRight">
                                   <el-input v-model="ruleForm.wheelDiameterRight"></el-input>
                               </el-form-item>
                           </el-col>
                       </el-row>
                       <el-row>
                           <el-col :span="10">
                               <el-form-item label="踏面磨耗（左）" prop="treadWearLeft">
                                   <el-input v-model="ruleForm.treadWearLeft"></el-input>
                               </el-form-item>
                           </el-col>
                           <el-col :span="10">
                               <el-form-item label="踏面磨耗（右）" prop="treadWearRight">
                                   <el-input v-model="ruleForm.treadWearRight"></el-input>
                               </el-form-item>
                           </el-col>
                       </el-row>
                       <el-row>
                           <el-col :span="10">
                               <el-form-item label="轮辋厚（左）" prop="rimThickLeft">
                                   <el-input v-model="ruleForm.rimThickLeft"></el-input>
                               </el-form-item>
                           </el-col>
                           <el-col :span="10">
                               <el-form-item label="轮辋厚（右）" prop="rimThickRight">
                                   <el-input v-model="ruleForm.rimThickRight"></el-input>
                               </el-form-item>
                           </el-col>
                       </el-row>
                       <el-row>
                           <el-col :span="10">
                               <el-form-item label="轮缘厚（左）" prop="flangeThickLeft">
                                   <el-input v-model="ruleForm.flangeThickLeft"></el-input>
                               </el-form-item>
                           </el-col>
                           <el-col :span="10">
                               <el-form-item label="轮缘厚（右）" prop="flangeThickRight">
                                   <el-input v-model="ruleForm.flangeThickRight"></el-input>
                               </el-form-item>
                           </el-col>
                       </el-row>
                       <el-row>
                           <el-col :span="10">
                               <el-form-item label="轮辋宽（左）" prop="rimWideLeft">
                                   <el-input v-model="ruleForm.rimWideLeft"></el-input>
                               </el-form-item>
                           </el-col>
                           <el-col :span="10">
                               <el-form-item label="轮辋宽（右）" prop="rimWideRight">
                                   <el-input v-model="ruleForm.rimWideRight"></el-input>
                               </el-form-item>
                           </el-col>
                       </el-row>
                       <el-row>
                           <el-col :span="7">
                               <el-form-item label="轮对内距" prop="internalDistance1" >
                                   <el-input v-model="ruleForm.internalDistance1"></el-input>
                               </el-form-item>
                           </el-col>
                           <el-col :span="5">
                               <el-form-item  prop="internalDistance2" label-width="0">
                                   <el-input v-model="ruleForm.internalDistance2"></el-input>
                               </el-form-item>
                           </el-col>
                           <el-col :span="5">
                               <el-form-item  prop="internalDistance3" label-width="0">
                                   <el-input v-model="ruleForm.internalDistance3"></el-input>
                               </el-form-item>
                           </el-col>
                       </el-row>
                       <el-row>
                           <el-col :span="14">
                               <el-form-item label="故障情况" prop="problem">
                                   <el-input v-model="ruleForm.problem"></el-input>
                               </el-form-item>
                           </el-col>
                           <el-col :span="7">
                               <el-form-item label="修程" prop="repairProcess">
                                   <el-select v-model="ruleForm.repairProcess" placeholder="请选择">
                                       <el-option label="外观检查" value="0"></el-option>
                                       <el-option label="旋面" value="1"></el-option>
                                       <el-option label="探伤" value="2"></el-option>
                                       <el-option label="旋面+探伤" value="3"></el-option>
                                       <el-option label="送厂" value="4"></el-option>
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
        name: "wheelMeasureTable",
        props:{
            showinfo:Object
        },
        data(){
            return{
             //   enableLeft:false,
            //    enableRight:true,
                ruleForm: {}
            }
        },
        mounted() {
            this.ruleForm = this.showinfo?this.showinfo:{};
        }
    }
</script>

<style scoped>

</style>
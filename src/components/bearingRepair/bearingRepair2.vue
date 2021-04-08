<template>
    <div>
        <!--        面包屑导航条-->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>轴承检修</el-breadcrumb-item>
            <el-breadcrumb-item>轴承检查</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card>
            <el-row :gutter="5">
                <el-form :model="search" :rules="searchrules" ref="searchForm" >
                    <el-col :span="4">
                        <el-form-item prop="wheelId">
                            <el-input v-model="search.wheelId" placeholder="请输入单号" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item prop="axleNumber">
                            <el-input v-model="search.axleNumber" placeholder="请输入轴号" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item prop="vehicleNumber">
                            <el-input v-model="search.vehicleNumber" placeholder="请输入收入车号" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item prop="takeInDateFrom">
                            <el-date-picker
                                    type="date"
                                    placeholder="请选择收入起始日期"
                                    v-model="search.takeInDateFrom"
                                    format="yyyy 年 MM 月 dd 日"
                                    value-format="yyyy-MM-dd"
                                    style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item prop="takeInDateTo">
                            <el-date-picker
                                    type="date"
                                    placeholder="请选择收入终止日期"
                                    v-model="search.takeInDateTo"
                                    format="yyyy 年 MM 月 dd 日"
                                    value-format="yyyy-MM-dd"
                                    style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item prop="infoTakeFinishTimeFrom">
                            <el-date-picker
                                    type="date"
                                    placeholder="请选择完工日期"
                                    v-model="search.infoTakeFinishTimeFrom"
                                    format="yyyy 年 MM 月 dd 日"
                                    value-format="yyyy-MM-dd"
                                    style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item prop="infoTakeFinishTimeTo">
                            <el-date-picker
                                    type="date"
                                    placeholder="请选择完工日期"
                                    v-model="search.infoTakeFinishTimeTo"
                                    format="yyyy 年 MM 月 dd 日"
                                    value-format="yyyy-MM-dd"
                                    style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10">
                        <el-button  @click="searchWheelInfo('searchForm')" >查询</el-button>
                        <el-button  @click="searchSavedInfo" >已保存</el-button>
                        <el-button  @click="searchUnFinish" >获取</el-button>
                    </el-col>
                </el-form>
            </el-row>
            <el-row>
                <el-col>
                    <el-card>
                        <el-table :data="wheelList" style="width: 100%" :default-sort = "{prop: 'id', order: 'ascending'}" border stripe>
                            <el-table-column type="index" label="序号" width="50"></el-table-column>
                            <el-table-column prop="wheelId" label="单号" width="80" sortable></el-table-column>
                            <el-table-column prop="axleType" label="轴型"  sortable></el-table-column>
                            <el-table-column prop="axleNumber" label="轴号" width="150" sortable></el-table-column>
                            <el-table-column prop="axleMadeIn" label="厂代号"  sortable></el-table-column>
                            <el-table-column prop="takeInReason" label="收入来源" ></el-table-column>
                            <el-table-column prop="takeInDate" label="收入日期" ></el-table-column>
                            <el-table-column prop="vehicleType" label="收入车型" ></el-table-column>
                            <el-table-column prop="vehicleNumber" label="收入车号" ></el-table-column>
                            <el-table-column prop="axlePosition" label="收入轴位" ></el-table-column>
                            <el-table-column prop="" label="完工状态" >
                                <template slot-scope="scope">
                                    <span v-if="scope.row.isbearingRepairFinish =='0'" >未完工</span>
                                    <span v-if="scope.row.isbearingRepairFinish =='1'" >完工</span>
                                </template>
                            </el-table-column>
                            <el-table-column label="操作" fixed="right" width="200">
                                <template slot-scope="scope">
                                    <el-button
                                            icon="el-icon-edit"
                                            size="mini"
                                            v-if="issaved=='0'"
                                            @click="captureitem(scope.$index, scope.row)">捕获</el-button>
                                    <el-button
                                            icon="el-icon-edit"
                                            size="mini"
                                            v-if="issaved=='1'"
                                            @click="operateitem(scope.$index, scope.row)">操作</el-button>
                                    <el-button
                                            icon="el-icon-edit"
                                            size="mini"
                                            v-if="issaved=='2'"
                                            @click="showitem(scope.$index, scope.row)">查看</el-button>
                                    <el-button
                                            icon="el-icon-delete"
                                            size="mini"
                                            type="danger"
                                            :disabled="scope.row.isbearingRepairFinish =='0'"
                                            v-if="issaved=='2'||issaved=='0'"
                                            @click="deleteForm(scope.$index, scope.row)">删除</el-button>
                                    <el-button
                                            icon="el-icon-delete"
                                            size="mini"
                                            type="danger"
                                            v-if="issaved=='1'"
                                            @click="turnBack(scope.$index, scope.row)">退回</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-card>
                </el-col>
            </el-row>
        </el-card>
        <el-dialog
                title="轴承检查"
                :visible.sync="operateTableVisible"
                width="80%"
                :before-close="handleProblemTable"
        >
            <el-card>
                <el-row class="status">
                    <span v-text="isModify ?'当前状态: 修改':'当前状态: 新建'"></span>
                    <span>轴型: {{wheelInfo.axleType}}</span>
                    <span>轴号: {{wheelInfo.axleNumber}}</span>
                    <span>车型: {{wheelInfo.vehicleType}}</span>
                    <span>车号: {{wheelInfo.vehicleNumber}}</span>
                    <span>轴位: {{wheelInfo.axlePosition}} 位</span>
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
                            <el-form-item label="开盖原因" prop="uncapReasonLeft">
                                <el-select v-model="ruleForm.uncapReasonLeft" placeholder="左">
                                    <el-option label="超探" value="超探"></el-option>
                                    <el-option label="旋面" value="旋面"></el-option>
                                    <el-option label="压装" value="压装"></el-option>
                                    <el-option label="其它" value="其它"></el-option>
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
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')"  v-show="addbtnstatus" size="small">创建</el-button>
                        <el-button @click="resetForm" size="small">重置</el-button>
                        <el-button @click="saveForm('ruleForm')" v-show="savebtnstatus" size="small">保存</el-button>
                        <el-button @click="modifyForm('ruleForm')" v-show="modbtnstatus" size="small" :disabled="this.wheelInfo.isprocessFinish=='1'">修改</el-button>
                        <el-button @click="cancelmodForm('ruleForm')" v-show="cancelbtnstatus" size="small">取消</el-button>
                    </el-form-item>
                </el-form>
            </el-card>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "information",
        data(){
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
            return {
                isModify:false,
                dialogVisible:false,
                addbtnstatus:true,
                savebtnstatus:true,
                modbtnstatus:false,
                cancelbtnstatus:false,
                itemUnderMod:{},
                savedInfo:[],
                wheelList:[],
                unFinishMeasureList:[],
                saveIndex:1,

                operateTableVisible:false,
                issaved:'0',
                hassaved:false,

                disableForm:true,
                wheelInfo:{},
                savedInfoHeads:[],
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
                    worker:'',
                    unloaderLeft:'',
                    unloaderRight:'',
                    isFinish:'0',
                    finishTime:'',
                    other:'',
                },
                search:{
                    wheelId:'',
                    takeInDate: null,
                    takeInDateFrom: null,
                    takeInDateTo: null,
                    axleNumber:'',
                    vehicleNumber: '',
                    infoTakeFinishTime:null,
                    infoTakeFinishTimeFrom:null,
                    infoTakeFinishTimeTo:null
                },
                rrules: {
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
                    repairProgressLeft: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    repairProgressRight: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    unloaderLeft: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ],
                    unloaderRight: [
                        { required: true, message: '请输入', trigger: 'blur' },
                    ]
                },
                searchrules:{
                    wheelId:[],
                    axleNumber:[{ min:3, max:5, message: '长度在 3 到 5 个字符', trigger: 'blur' }],
                    vehicleNumber: [{ min: 7, max: 7, message: '长度 7 个字符', trigger: 'blur' }],
                }
            };
        },
        computed: {

        },
        methods: {
            //重置表单内容
            resetForm() {
                this.$refs['ruleForm'].resetFields();
                this.ruleForm = {};
            },
            //刷新表单
            flushRuleForm(){
                this.addbtnstatus = true;
                this.savebtnstatus = true;
                this.modbtnstatus = false;
                this.cancelbtnstatus = false;
                this.isModify = false;
                this.ruleForm = {};
                this.wheelInfo = {};
                this.disableForm = true;
            },
            //添加新wheel
            submitForm(formName) {
                this.$refs[formName].validate(async (valid) => {
                    if (valid) {
                        this.ruleForm.worker = sessionStorage.getItem("name");
                        this.ruleForm.isFinish = '1';
                        this.ruleForm.finishTime = this.dateFormate(new Date(),'');
                        var result = await this.$http.post(
                            "/bearingRepair/addBearing",
                            this.ruleForm);
                        if (result.data.code != 100){
                            alert("添加失败");
                            return ;
                        }
                        alert("添加成功");
                        //设置保存按钮
                        this.hassaved = true;
                        //从列表内跟新
                        for(var i=0;i<this.wheelList.length;i++){
                            if (this.wheelList[i].wheelId == this.ruleForm.wheelId){
                                this.wheelInfo.isbearingRepairFinish = '1';
                                this.wheelList[i] = this.wheelInfo;
                                break;
                            }
                        }
                        //检查保存列表如有相同的从保存列表删除
                        var id = this.ruleForm.wheelId;
                        this.deleteFromSaveInfo(id);
                        //获取未完成列表
                        this.searchUnFinish();
                        //清空列表
                        this.flushRuleForm();
                    } else {
                        alert('信息不完整！');
                        return false;
                    }
                });
            },
            //从保存列表删除
            deleteFromSaveInfo(id){
                for (var i=0;i<this.savedInfo.length;i++){
                    if (this.savedInfo[i].wheelId==id){
                        for (var j=0;j<this.savedInfoHeads.length;j++){
                            if (this.savedInfoHeads[j].wheelId == id){
                                this.savedInfoHeads.splice(j,1);
                            }
                        }
                        this.savedInfo.splice(i,1);
                        this.saveToSession(this.savedInfo,this.saveIndex,this.savedInfoHeads);
                    }
                }
            },
            //保存未完成RuleForm
            saveForm(formName){
                var id = this.ruleForm.wheelId;
                if (id==''||id==null||id==undefined) {
                    alert("请选择保存项");
                    return ;
                }
                //如果已存在替换
                for (var i=0;i<this.savedInfo.length;i++){
                    if (this.savedInfo[i].wheelId==id){
                        this.savedInfo[i] = JSON.parse(JSON.stringify(this.ruleForm));
                        this.savedInfoHeads[i] = JSON.parse(JSON.stringify(this.wheelInfo));
                        this.saveToSession(this.savedInfo,this.saveIndex,this.savedInfoHeads);
                        alert("已保存");
                        return;
                    }
                }
                //保存新
                this.ruleForm.worker = sessionStorage.getItem("name");
                this.ruleForm.isFinish = '0';
                var saved = JSON.parse(JSON.stringify(this.ruleForm));
                this.savedInfo.push(saved);
                this.savedInfoHeads.push(this.wheelInfo);
                this.saveToSession(this.savedInfo,this.saveIndex,this.savedInfoHeads);
                alert("已保存");
            },
            //创建新表
            creatNewWheelInfo(){
                this.flushRuleForm();
            },
            async saveToSession(info,index,heads){
                var wheelInfo = {
                    data:info,
                    heads:heads
                }
                //sessionStorage.setItem("savedMeasureInfo",JSON.stringify(wheelInfo));
                var name = sessionStorage.getItem("name");
                var data = JSON.stringify(wheelInfo);
                var result = await this.$http.post(
                    "/bearingRepair/savedWheelInfo",
                    {name:name,data:data});
                if (result.data.code != 100){
                    alert("查询失败");
                    return ;
                }
                //设置保存按钮
                this.hassaved = true;
            },
            //从seesion中获取保存的未完成表单
            async getSavedWheelInfoFromSession(){
                var name = sessionStorage.getItem("name");
                var result = await this.$http.get(
                    "/bearingRepair/getSavedWheelInfo?name="+name);
                if (result.data.code != 100){
                    alert("查询失败");
                    return ;
                }
                //var measureInfo = JSON.parse(sessionStorage.getItem("savedMeasureInfo"));
                var measureInfo = JSON.parse(result.data.object);
                if (measureInfo!=null){
                    this.savedInfo = measureInfo.data;
                    this.savedInfoHeads = measureInfo.heads;
                }
            },
            //查找保存的未完成表单
            searchSavedInfo(){
                this.issaved = '1';
                this.getSavedWheelInfoFromSession();
                this.wheelList = this.savedInfoHeads;
                this.flushRuleForm();
            },
            //从数据库查找未完成的wheel
            async searchUnFinish(){
                this.issaved = '0';
                var result = await this.$http.post(
                    "/bearingRepair/unFinishBearing2",
                    this.ruleForm);
                if (result.data.code != 100){
                    alert("查询失败");
                    return ;
                }
                this.unFinishMeasureList = result.data.object;
                this.wheelList = this.unFinishMeasureList;
                this.flushRuleForm();
            },
            //修改wheel
            async modifyForm(formName){
                var result = await this.$http.post(
                    "/bearingRepair/modifyBearing",
                    this.ruleForm);
                if (result.data.code != 100){
                    alert("修改失败");
                    return ;
                }

                //刷新item
                this.wheelList[this.itemUnderMod] = result.data.object;
                //重置表单
                this.isModify = false;
                this.flushRuleForm();
                alert("修改成功");
            },
            //取消修改
            cancelmodForm(formName){
                this.isModify = false;
                //重置表单
                this.flushRuleForm();
                alert("取消修改");
            },
            //多条件查找wheel
            searchWheelInfo(searchForm){
                this.issaved = '2';
                //保证至少一个查找条件
                if(this.search.wheelId==''&&this.search.takeInDateFrom==null&&this.search.takeInDateTo==null&&this.search.axleNumber==''&&
                    this.search.vehicleNumber==''&&this.search.infoTakeFinishTimeFrom==null&&this.search.infoTakeFinishTimeTo==null){
                    this.wheelList = [];
                    return;
                }
                this.$refs[searchForm].validate(async (valid) => {
                    if (valid) {
                        var result = await this.$http.post(
                            "/bearingRepair/searchWheelInfoByconditionRepair",
                            this.search);
                        if (result.data.code != 100){
                            alert("添加失败");
                            return ;
                        }
                        this.wheelList = result.data.object;
                        this.flushRuleForm();
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            async captureitem(index,item){
                //重置保存按钮
                this.hassaved = false;
                //显示操作面板
                this.operateTableVisible = true;
                //如果已提交屏蔽 创建 按钮，提供修改和取消按钮
                this.flushRuleForm();
                //显示基本信息
                this.wheelInfo = item;
                const id = item.wheelId;
                //未完成给个空值和表单id
                if (item.isbearingRepairFinish == '0'){
                    //从候选set中删除
                    var result = await this.$http.get(
                        "/bearingRepair/chooseWheel?id="+id);
                    if (result.data.code != 100){
                        //获取未完成列表
                        this.searchUnFinish();
                        alert("捕获失败");
                        //关闭操作面板
                        this.operateTableVisible = false;
                        return ;
                    }
                    this.ruleForm = {};
                    this.ruleForm.wheelId = id;
                }
                //开放表单
                this.disableForm = false;
            },
            async operateitem(index,item){
                //重置保存按钮
                this.hassaved = false;
                //显示操作面板
                this.operateTableVisible = true;
                //如果已提交屏蔽 创建 按钮，提供修改和取消按钮
                this.flushRuleForm();
                //显示基本信息
                this.wheelInfo = item;
                const id = item.wheelId;
                //检查保存里是否有数据
                for (var i=0;i<this.savedInfo.length;i++){
                    if (this.savedInfo[i].wheelId == id){
                        this.ruleForm = JSON.parse(JSON.stringify(this.savedInfo[i]));
                        //开放表单
                        this.disableForm = false;
                        return;
                    }
                }
            },
            //显示wheel信息
            async showitem(index,item){
                //重置保存按钮
                this.hassaved = false;
                //显示操作面板
                this.operateTableVisible = true;
                //如果已提交,屏蔽"创建"按钮，提供"修改"和"取消"按钮
                this.flushRuleForm();
                //显示基本信息
                this.wheelInfo = item;
                const id = item.wheelId;

                //是否完成
                if (item.isbearingRepairFinish == '1'){
                    this.addbtnstatus = false;
                    this.savebtnstatus = false;
                    this.modbtnstatus = true;
                    this.cancelbtnstatus = true;
                    this.isModify = true;
                    //已完成从数据库内查找，提交到显示表单
                    var result = await this.$http.get(
                        "/bearingRepair/findBearingById?id="+id);
                    if (result.data.code != 100){
                        alert("添加失败");
                        return ;
                    }
                    this.ruleForm = result.data.object;
                }
                //开放表单
                this.disableForm = false;
            },
            handleEdit(){
                this.operateTableVisible = true;
            },
            async turnBack(index,item){
                const id = item.wheelId;
                var result = await this.$http.get(
                    "/bearingRepair/turnBack?id="+id);
                if (result.data.code != 100){
                    alert("添加失败");
                    return ;
                }
                this.deleteFromSaveInfo(id);
                this.searchSavedInfo();
                alert("已退回！");
            },
            //关闭
            async handleProblemTable(done){
                if(this.wheelInfo.isbearingRepairFinish=='0'&&this.hassaved == false){
                    var res = await  this.$confirm('是否保存?', '提示', {
                        confirmButtonText: '保存',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).catch(err=>{
                        return err;
                    });
                    if (res == "confirm"){
                        this.saveForm('ruleForm');
                    }else {
                        if (this.issaved == false){
                            this.turnBack(0,this.ruleForm);
                        }
                    }
                }
                this.$refs['ruleForm'].resetFields();
                done();
            },
            async deleteForm(index,item){
                var res = await this.$confirm('此操作将永久删除, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).catch(err=>{
                    return err;
                });
                if (res == "confirm") {
                    //从数据库删除
                    var id = item.wheelId;
                    if (id==''||id==null||id==undefined) {
                        alert("请选择删除项");
                        return;
                    }
                    var result = await this.$http.get('/bearingRepair/deleteBearing?id=' + id);
                    if (result.data.code != 100) {
                        alert("删除失败");
                        return;
                    }
                    //从保存列表删除
                    this.deleteFromSaveInfo(id);
                    //刷新列表
                    this.searchSavedInfo();
                    alert("已删除");
                } else {
                    // alert("取消删除");
                }
            },
            //日期格式化
            dateFormate(data,patt){
                var y = data.getFullYear();
                var M = (data.getMonth()+1).toString().padStart(2,"0");
                var d = (data.getDate()).toString().padStart(2,"0");

                var h = (data.getHours()).toString().padStart(2,"0");
                var m = (data.getMinutes()).toString().padStart(2,"0");
                var s = (data.getSeconds()).toString().padStart(2,"0");

                if(patt && patt.toLowerCase()=="yyyy-mm-dd"){
                    return `${y}-${M}-${d}`;
                }else{
                    return `${y}-${M}-${d}  ${h}:${m}:${s}`;
                }
            }
        },
        filters:{
            dateFormate: function(datastr,patt){
                var data = new Date(datastr);
                var y = data.getFullYear();
                var M = (data.getMonth()+1).toString().padStart(2,"0");
                var d = (data.getDate()).toString().padStart(2,"0");

                var h = (data.getHours()).toString().padStart(2,"0");
                var m = (data.getMinutes()).toString().padStart(2,"0");
                var s = (data.getSeconds()).toString().padStart(2,"0");

                if(patt && patt.toLowerCase()=="yyyy-mm-dd"){
                    return `${y}-${M}-${d}`;
                }else{
                    return `${y}-${M}-${d}  ${h}:${m}:${s}`;
                }
            }
        },
        created() {
            //获取未完成列表
            this.getSavedWheelInfoFromSession();
        },
        mounted() {
            //获取未完成列表
            this.searchUnFinish();
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
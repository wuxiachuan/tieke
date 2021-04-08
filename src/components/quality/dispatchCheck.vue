<template>
    <div>
        <!--        面包屑导航条-->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>质检验收</el-breadcrumb-item>
            <el-breadcrumb-item>质量检查</el-breadcrumb-item>
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
                        <el-form-item prop="axleType">
                            <el-select v-model="search.axleType" placeholder="请输入轴型号" clearable>
                                <el-option label="RE2B" value="RE2B"></el-option>
                                <el-option label="RD2" value="RD2"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item prop="takeInReason">
                            <el-select v-model="search.takeInReason" placeholder="请输入收入来源" clearable>
                                <el-option label="段修" value="duanxiu"></el-option>
                                <el-option label="站修调入" value="zhanxiu"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item prop="vehicleNumber">
                            <el-input v-model="search.vehicleNumber" placeholder="请输入收入车号" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item prop="isprocessFinish">
                            <el-select v-model="search.isprocessFinish" placeholder="请输入完工状态" clearable>
                                <el-option label="已完工" value="1"></el-option>
                                <el-option label="未完工" value="0"></el-option>
                                <el-option label="全部" value=""></el-option>
                            </el-select>
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
                        <el-form-item prop="infoTakeFinishTime">
                            <el-input v-model="search.infoTakeFinishTime" placeholder="请输入车轴制造单位" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item prop="dispatchDate">
                            <el-input v-model="search.dispatchDate" placeholder="请输入车轮制造单位" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-button  type="primary" @click="searchWheelInfo('searchForm')" >查询</el-button>
                        <el-button  @click="resetSearchInfo('searchForm')" >重置</el-button>
                        <el-button  @click="findMyProblem" >我的发现</el-button>
                    </el-col>
                </el-form>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="24">
                    <el-table :data="wheelList" style="width: 100%" :default-sort = "{prop: 'id', order: 'ascending'}" border stripe>
                      <el-table-column type="index" label="序号" width="50"></el-table-column>
                      <el-table-column prop="wheelId" label="单号" width="70" sortable></el-table-column>
                      <el-table-column prop="axleType" label="轴型" width="77" sortable></el-table-column>
                      <el-table-column prop="axleNumber" label="轴号" width="77" sortable></el-table-column>
                      <el-table-column prop="axleMadeIn" label="厂代号" width="77" ></el-table-column>
                      <el-table-column prop="takeInReason" label="收入来源" ></el-table-column>
                      <el-table-column prop="takeInDate" label="收入日期" width="97" sortable></el-table-column>
                      <el-table-column prop="vehicleType" label="收入车型" width="100" sortable></el-table-column>
                      <el-table-column prop="vehicleNumber" label="收入车号" ></el-table-column>
                      <el-table-column prop="axlePosition" label="收入轴位" ></el-table-column>
                        <el-table-column prop="isprocessFinish" label="完工状态" >
                            <template slot-scope="scope">
                                <span v-if="scope.row.isprocessFinish =='1'" >已完工</span>
                                <span v-if="scope.row.isprocessFinish =='0'" >未完工</span>
                            </template>
                        </el-table-column>
<!--                        <el-table-column prop="" label="修竣日期" ></el-table-column>-->
<!--                        <el-table-column prop="wheelInfo.vehicleNumber" label="支出车型" ></el-table-column>-->
<!--                        <el-table-column prop="wheelInfo.vehicleNumber" label="支出车号" ></el-table-column>-->
<!--                        <el-table-column prop="wheelInfo.vehicleNumber" label="支出轴位" ></el-table-column>-->
<!--                        <el-table-column prop="wheelInfo.vehicleNumber" label="支出日期" ></el-table-column>-->
                        <el-table-column label="详细信息" fixed="right" width="270">
                            <template slot-scope="scope">
                                <el-button
                                        icon="el-icon-edit"
                                        size="mini"
                                        @click="handleForDetail(scope.$index, scope.row)">详细</el-button>
                                <el-button
                                        icon="el-icon-edit"
                                        size="mini"
                                        @click="handleForProgress(scope.$index, scope.row)">修程</el-button>
                                <el-button
                                        icon="el-icon-edit"
                                        size="mini"
                                        :disabled="scope.row.isprocessFinish =='1'"
                                        @click="handle2FinishInspection(scope.$index, scope.row)">通过</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-col>
            </el-row>
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="search.page"
                    :page-sizes="[10,15,20,25]"
                    :page-size="search.size"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="total">
            </el-pagination>
        </el-card>
        <!--        显示详情对话框-->
        <el-dialog
                title="轮轴详情"
                :visible.sync="detailtableVisible"
                width="80%"
                :before-close="handleClose"
        >
            <!--    分块显示详细信息-->
            <el-tabs v-model="activeName" @tab-click="handleClick" type="card" v-if="detailtableVisible">
                <el-tab-pane label="收入信息" name="first" v-if="wheelInfoForTable.wheelInfo">
                    <wheelinfotable ref="wheelinfo" v-if="wheelInfoForTable.wheelInfo" :showinfo="wheelInfoForTable.wheelInfo" ></wheelinfotable>
                </el-tab-pane>
                <el-tab-pane label="轮对测量" name="second" v-if="wheelInfoForTable.wheelMeasure" >
                    <wheelMeasureTable ref="wheelmeasure" v-if="wheelInfoForTable.wheelMeasure"  :showinfo="wheelInfoForTable.wheelMeasure"></wheelMeasureTable>
                </el-tab-pane>
                <el-tab-pane label="轴承检查" name="third" v-if="wheelInfoForTable.bearingRepair">
                    <bearingRepairTable ref="bearingRepair" v-if="wheelInfoForTable.bearingRepair" :showinfo="wheelInfoForTable.bearingRepair"></bearingRepairTable>
                </el-tab-pane>
                <el-tab-pane label="轴承开盖" name="thirteen" v-if="wheelInfoForTable.bearingRepair">
                    <bearingUncapTable ref="bearingUnCap" v-if="wheelInfoForTable.bearingRepair" :showinfo="wheelInfoForTable.bearingRepair"></bearingUncapTable>
                </el-tab-pane>
                <el-tab-pane label="轴承退卸" name="fourteen" v-if="wheelInfoForTable.bearingUnLoad">
                    <bearingUnloadTable ref="bearingUnload" v-if="wheelInfoForTable.bearingUnLoad" :showinfo="bearingUnload"></bearingUnloadTable>
                </el-tab-pane>
                <el-tab-pane label="磁粉探伤" name="sixteen" v-if="wheelInfoForTable.axleInspection">
                    <magneticInspectionTable ref="magneticInspection" v-if="wheelInfoForTable.axleInspection" :showinfo="wheelInfoForTable.axleInspection"></magneticInspectionTable>
                </el-tab-pane>
                <el-tab-pane label="超声波探伤" name="fourth" v-if="wheelInfoForTable.axleInspection">
                    <axleInspectionTable ref="axleInspection" v-if="wheelInfoForTable.axleInspection" :showinfo="wheelInfoForTable.axleInspection"></axleInspectionTable>
                </el-tab-pane>
                <el-tab-pane label="人工复探" name="seventeen" v-if="wheelInfoForTable.axleInspection">
                    <reinspectionTable ref="reinspection" v-if="wheelInfoForTable.axleInspection" :showinfo="wheelInfoForTable.axleInspection"></reinspectionTable>
                </el-tab-pane>
                <el-tab-pane label="车轮旋面" name="fifth" v-if="wheelInfoForTable.wheelRound">
                    <wheelRoundTable ref="wheelRound" v-if="wheelInfoForTable.wheelRound" :showinfo="wheelInfoForTable.wheelRound"></wheelRoundTable>
                </el-tab-pane>
                <el-tab-pane label="轴颈测量" name="fifteen" v-if="wheelInfoForTable.bearingLoad">
                    <bearingNeckTable ref="bearingNeck" v-if="wheelInfoForTable.bearingLoad" :showinfo="wheelInfoForTable.bearingLoad"></bearingNeckTable>
                </el-tab-pane>
                <el-tab-pane label="轴承压装" name="sixth" v-if="wheelInfoForTable.bearingLoad">
                    <bearingLoadTable ref="bearingLoad" v-if="wheelInfoForTable.bearingLoad" :showinfo="wheelInfoForTable.bearingLoad"></bearingLoadTable>
                </el-tab-pane>
                <el-tab-pane label="轴承关盖" name="seventh" v-if="wheelInfoForTable.bearingCap" >
                    <bearingCapTable ref="bearingCap" v-if="wheelInfoForTable.bearingCap" :showinfo="wheelInfoForTable.bearingCap"></bearingCapTable>
                </el-tab-pane>
                <el-tab-pane label="磨合试验" name="eighth" v-if="wheelInfoForTable.bearingTest">
                    <bearingTestTable ref="rollTest" v-if="wheelInfoForTable.bearingTest" :showinfo="wheelInfoForTable.bearingTest"></bearingTestTable>
                </el-tab-pane>
                <el-tab-pane label="轮对复测" name="nineth" v-if="wheelInfoForTable.wheelDispatch">
                    <wheelDispatchTable ref="wheelDispatch" v-if="wheelInfoForTable.wheelDispatch" :showinfo="wheelInfoForTable.wheelDispatch"></wheelDispatchTable>
                </el-tab-pane>
            </el-tabs>
            <span slot="footer" class="dialog-footer">
                <el-button  type="primary" @click="problemFeedback" size="small">故障</el-button>
                <el-button  @click="modifyInfo" size="small">修改</el-button>
                <el-button  @click="closedetailable" size="small">关闭</el-button>
            </span>
        </el-dialog>
        <el-dialog
                title="当前进度"
                :visible.sync="progresstableVisible"
                width="80%"
                :before-close="handleCloseProgress"
        >
            <!--    进度条-->
            <el-tabs v-model="activeStep" v-if="progresstableVisible">
                <el-tab-pane label="收入信息" name="first" v-if="wheelInfoForTable.wheelInfo">
                    <div>
                        <h4>完工时间: {{wheelInfoForTable.wheelInfo.infoTakeFinishTime}}</h4>
                        <h4>收入: {{wheelInfoForTable.wheelInfo.worker}}</h4>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="轮对测量" name="second" v-if="wheelInfoForTable.wheelMeasure && wheelInfoForTable.wheelInfo.isMeasureFinish == '1'" >
                    <div>
                        <h4>完工时间: {{wheelInfoForTable.wheelMeasure.finishTime}}</h4>
                        <h4>测量: {{wheelInfoForTable.wheelMeasure.worker}}</h4>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="轴承检查" name="third" v-if="wheelInfoForTable.bearingRepair && wheelInfoForTable.wheelInfo.isbearingRepairFinish == '1'">
                    <div>
                        <h4>完工时间: {{wheelInfoForTable.bearingRepair.finishTime}}</h4>
                        <h4>检查: {{wheelInfoForTable.bearingRepair.bearingExaminers}}</h4>
                        <h4>推卸(左): {{wheelInfoForTable.bearingRepair.worker}}</h4>
                        <h4>推卸(右): {{wheelInfoForTable.bearingRepair.unloaderRight}}</h4>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="轮轴探伤" name="fourth" v-if="wheelInfoForTable.axleInspection && wheelInfoForTable.wheelInfo.ismagnetInspectionFinish == '1'">
                    <div>
                        <h4>磁粉探伤完工时间: {{wheelInfoForTable.axleInspection.reultfinishTime}}</h4>
                        <h4>磁粉探伤: {{wheelInfoForTable.axleInspection.reultInspector}}</h4>
                        <h4>超声波探伤完工时间: {{wheelInfoForTable.axleInspection.ultfinishTime}}</h4>
                        <h4>超声波探伤: {{wheelInfoForTable.axleInspection.worker}}</h4>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="车轮旋面" name="fifth" v-if="wheelInfoForTable.wheelRound && wheelInfoForTable.wheelInfo.isWheelRoundingFinish == '1'">
                    <div>
                        <h4>完工时间: {{wheelInfoForTable.wheelRound.finishTime}}</h4>
                        <h4>旋面: {{wheelInfoForTable.wheelRound.worker}}</h4>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="轴承压装" name="sixth" v-if="wheelInfoForTable.bearingLoad && wheelInfoForTable.wheelInfo.isbearingLoadFinish == '4'">
                    <div>
                        <h4>完工时间: {{wheelInfoForTable.bearingLoad.finishTime}}</h4>
                        <h4>选配(左): {{wheelInfoForTable.bearingLoad.matcherLeft}}</h4>
                        <h4>压装(左): {{wheelInfoForTable.bearingLoad.worker}}</h4>
                        <h4>选配(右): {{wheelInfoForTable.bearingLoad.matcherLeft}}</h4>
                        <h4>压装(右): {{wheelInfoForTable.bearingLoad.loaderRight}}</h4>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="轴承关盖" name="seventh" v-if="wheelInfoForTable.bearingCap && wheelInfoForTable.wheelInfo.isbearingCapFinish == '1'" >
                    <div>
                        <h4>完工时间: {{wheelInfoForTable.bearingCap.finishTime}}</h4>
                        <h4>关盖(左): {{wheelInfoForTable.bearingCap.worker}}</h4>
                        <h4>关盖(右): {{wheelInfoForTable.bearingCap.caperRight}}</h4>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="磨合试验" name="eighth" v-if="wheelInfoForTable.bearingTest && wheelInfoForTable.wheelInfo.isbearingrollTestFinish == '1'">
                    <div>
                        <h4>完工时间: {{wheelInfoForTable.bearingTest.finishTime}}</h4>
                        <h4>磨合试验: {{wheelInfoForTable.bearingTest.worker}}</h4>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="轮对复测" name="nineth" v-if="wheelInfoForTable.wheelDispatch && wheelInfoForTable.wheelInfo.isreMeasureFinish == '1'">
                    <div>
                        <h4>完工时间: {{wheelInfoForTable.wheelDispatch.finishTime}}</h4>
                        <h4>支出: {{wheelInfoForTable.wheelDispatch.worker}}</h4>
                    </div>
                </el-tab-pane>
            </el-tabs>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="closeprogressTable" size="small">关闭</el-button>
            </span>
            <el-steps :space="200" :active="currentStep" finish-status="success">
                <el-step title="轮对收入" v-if="currentWheelInfo.infoTakeFinish=='1'"></el-step>
                <el-step title="轮对测量" v-if="currentWheelInfo.isMeasureFinish=='1'"></el-step>
                <el-step title="轴承检查" v-if="currentWheelInfo.isbearingRepairFinish=='1'"></el-step>
                <el-step title="轴承开盖" v-if="currentWheelInfo.isbearingUnCapFinish=='1'"></el-step>
                <el-step title="轴承退卸" v-if="currentWheelInfo.isbearingUnloadFinish=='1'"></el-step>
                <el-step title="磁粉探伤" v-if="currentWheelInfo.ismagnetInspectionFinish=='1'"></el-step>
                <el-step title="超声波探伤" v-if="currentWheelInfo.isaxleInspectionFinish=='1'"></el-step>
                <el-step title="人工复探" v-if="currentWheelInfo.isreInspectionFinish=='1'"></el-step>
                <el-step title="车轮旋面" v-if="currentWheelInfo.isWheelRoundingFinish=='1'"></el-step>
                <el-step title="轴颈测量" v-if="currentWheelInfo.isbearingNeckFinish=='1'"></el-step>
                <el-step title="轴承压装" v-if="currentWheelInfo.isbearingLoadFinish=='1'"></el-step>
                <el-step title="轴承关盖" v-if="currentWheelInfo.isbearingCapFinish=='1'"></el-step>
                <el-step title="轴承磨合" ></el-step>
                <el-step title="支出复测" ></el-step>
                <el-step title="质量检查" ></el-step>
                <el-step title="轮对支出" ></el-step>
                <el-step title="轮对待送厂" v-if="currentWheelInfo.state=='3'"></el-step>
            </el-steps>
        </el-dialog>
        <el-dialog
                title="问题记录"
                :visible.sync="problemtableVisible"
                width="80%"
                :before-close="handleCloseProblem"
        >
            <el-form ref="problemform" :model="problem" label-width="80px">
                <el-form-item label="问题简述">
                    <el-input v-model="problem.problemDescription"></el-input>
                </el-form-item>
                <el-form-item label="所属部位">
                    <el-select v-model="problem.processBelong" placeholder="请选择所属工位">
                        <el-option label="信息采集" value="0"></el-option>
                        <el-option label="轮对测量" value="1"></el-option>
                        <el-option label="轴承检查" value="2"></el-option>
                        <el-option label="轴承开盖" value="3"></el-option>
                        <el-option label="轴承退卸" value="4"></el-option>
                        <el-option label="磁粉探伤" value="5"></el-option>
                        <el-option label="超声探伤" value="6"></el-option>
                        <el-option label="人工复探" value="7"></el-option>
                        <el-option label="车轮旋面" value="8"></el-option>
                        <el-option label="轴颈测量" value="9"></el-option>
                        <el-option label="轴承压装" value="10"></el-option>
                        <el-option label="轴承关盖" value="11"></el-option>
                        <el-option label="磨合测试" value="12"></el-option>
                        <el-option label="支出复测" value="13"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="发现时间">
                    <el-date-picker
                            v-model="problem.findTime"
                            type="datetime"
                            value-format="yyyy-MM-dd HH:mm"
                            placeholder="选择日期时间">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="问题详情">
                    <el-input type="textarea" v-model="problem.problemDetails"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">提交</el-button>
                    <el-button @click="problemCancel">取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
        <el-dialog
                title="问题列表"
                :visible.sync="problemListVisible"
                width="80%"
                :before-close="handleProblemTable"
        >
            <el-row :gutter="5">
                <el-form :model="searchProblem"  ref="problemForm" >
                    <el-col :span="4">
                        <el-form-item prop="axleNumber">
                            <el-input v-model="searchProblem.axleNumber" placeholder="轴号" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item prop="axleType">
                            <el-select v-model="searchProblem.axleType" placeholder="轴型" clearable>
                                <el-option label="RE2B" value="RE2B"></el-option>
                                <el-option label="RD2" value="RD2"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item prop="processBelong">
                            <el-select v-model="searchProblem.processBelong" placeholder="所属工位" clearable>
                                <el-option label="信息采集" value="0"></el-option>
                                <el-option label="轮对测量" value="1"></el-option>
                                <el-option label="轴承检查" value="2"></el-option>
                                <el-option label="磁粉探伤" value="3"></el-option>
                                <el-option label="超声探伤" value="4"></el-option>
                                <el-option label="车轮旋面" value="5"></el-option>
                                <el-option label="轴承压装" value="6"></el-option>
                                <el-option label="轴承关盖" value="7"></el-option>
                                <el-option label="磨合测试" value="8"></el-option>
                                <el-option label="轮对复测" value="9"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item prop="worker">
                            <el-input v-model="searchProblem.worker" placeholder="责任人" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item prop="findTime">
                            <el-date-picker
                                    type="date"
                                    placeholder="发现时间"
                                    v-model="searchProblem.findTime"
                                    format="yyyy 年 MM 月 dd 日"
                                    value-format="yyyy-MM-dd"
                                    style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item prop="problemStatus">
                            <el-select v-model="searchProblem.problemStatus" placeholder="整改情况" clearable>
                                <el-option label="已整改" value="1"></el-option>
                                <el-option label="未整改" value="0"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item prop="correctTime">
                            <el-date-picker
                                    type="date"
                                    placeholder="整改时间"
                                    v-model="searchProblem.correctTime"
                                    format="yyyy 年 MM 月 dd 日"
                                    value-format="yyyy-MM-dd"
                                    style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item prop="confirm">
                            <el-select v-model="searchProblem.confirm" placeholder="消耗情况" clearable>
                                <el-option label="已消耗" value="1"></el-option>
                                <el-option label="未消耗" value="0"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-button size="samll" type="primary" @click="searchProblemCond('problemForm')" >查询</el-button>
                        <el-button size="samll" @click="resetSearchProblemCond('problemForm')" >重置</el-button>
                    </el-col>
                </el-form>
            </el-row>
            <el-table :data="problemList" style="width: 100%" height="600" :default-sort = "{prop: 'id', order: 'ascending'}" border stripe>
                <el-table-column type="index" label="序号" width="50"></el-table-column>
                <el-table-column prop="axleType" label="轴型" width="50"></el-table-column>
                <el-table-column prop="axleNumber" label="轴号" width="50"></el-table-column>
                <el-table-column prop="axleMadeIn" label="厂代号" width="50"></el-table-column>
                <el-table-column prop="processBelong" label="部位" width="80" sortable>
                    <template slot-scope="scope">
                        <span v-if="scope.row.processBelong==0" >信息采集</span>
                        <span v-if="scope.row.processBelong==1" >轮对测量</span>
                        <span v-if="scope.row.processBelong==2" >轴承检查</span>
                        <span v-if="scope.row.processBelong==3" >磁粉探伤</span>
                        <span v-if="scope.row.processBelong==4" >超声探伤</span>
                        <span v-if="scope.row.processBelong==5" >车轮旋面</span>
                        <span v-if="scope.row.processBelong==6" >轴承压装</span>
                        <span v-if="scope.row.processBelong==7" >轴承关盖</span>
                        <span v-if="scope.row.processBelong==8" >磨合测试</span>
                        <span v-if="scope.row.processBelong==9" >轮对复测</span>
                    </template>
                </el-table-column>
                <el-table-column prop="problemDescription" label="简介"  sortable></el-table-column>
                <el-table-column prop="problemDetails" label="问题" width="400"></el-table-column>
                <el-table-column prop="worker" label="责任人" ></el-table-column>
                <el-table-column prop="problemFinder" label="发现人" ></el-table-column>
                <el-table-column prop="findTime" label="发现时间" ></el-table-column>
                <el-table-column prop="problemStatus" label="整改情况" >
                    <template slot-scope="scope">
                        <span v-if="scope.row.problemStatus=='0'" >未整改</span>
                        <span v-if="scope.row.problemStatus=='1'" >已整改</span>
                    </template>
                </el-table-column>
                <el-table-column prop="correctTime" label="整改时间" ></el-table-column>
                <el-table-column prop="confirm" label="消耗" >
                    <template slot-scope="scope">
                        <span v-if="scope.row.confirm=='0'" >未消号</span>
                        <span v-if="scope.row.confirm=='1'" >已消号</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作" fixed="right" width="100">
                    <template slot-scope="scope">
                        <el-button
                                icon="el-icon-edit"
                                size="mini"
                                @click="handleToDone(scope.$index, scope.row)">销号</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-dialog>
        <el-dialog
                title="提示"
                :visible.sync="finishInspectionDialogVisible"
                 width="30%">
            <span>{{finishInspect.axleType}} {{finishInspect.axleNumber}}</span><span>是否通过？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="finishInspectionDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="finishInspection">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import wheelinfotable from "../manage/wheelinfotable";
    import wheelRoundTable from "../manage/wheelRoundTable";
    import wheelMeasureTable from "../manage/wheelMeasureTable";
    import wheelDispatchTable from "../manage/wheelDispatchTable";
    import bearingCapTable from "../manage/bearingCapTable";
    import bearingLoadTable from "../manage/bearingLoadTable";
    import bearingRepairTable from "../manage/bearingRepairTable";
    import bearingTestTable from "../manage/bearingTestTable";
    import axleInspectionTable from "../manage/axleInspectionTable";
    import magneticInspectionTable from "../manage/magneticInspectionTable";
    import reinspectionTable from "../manage/reinspectionTable";
    import bearingUncapTable from "../manage/bearingUncapTable";
    import bearingUnloadTable from "../manage/bearingUnloadTable";
    import bearingNeckTable from "../manage/bearingNeckTable";
    export default {
        name: "information",
        components:{
            wheelinfotable:wheelinfotable,
            wheelMeasureTable:wheelMeasureTable,
            wheelRoundTable:wheelRoundTable,
            wheelDispatchTable:wheelDispatchTable,
            bearingTestTable:bearingTestTable,
            bearingRepairTable:bearingRepairTable,
            bearingLoadTable:bearingLoadTable,
            bearingCapTable:bearingCapTable,
            axleInspectionTable:axleInspectionTable,
            magneticInspectionTable:magneticInspectionTable,
            reinspectionTable:reinspectionTable,
            bearingUncapTable:bearingUncapTable,
            bearingUnloadTable:bearingUnloadTable,
            bearingNeckTable:bearingNeckTable
        },
        data(){
            return {
                wheelList:[],
                wheelInfoForTable:{},
                problemList:[],
                detailtableVisible:false,
                progresstableVisible:false,
                problemtableVisible:false,
                problemListVisible:false,
                finishInspectionDialogVisible:false,
                activeStep:'',
                activeName:'wheelinfo',
                currentInfo:{},
                dataBaseName:'',
                bearingUnload:[],
                currentWheelInfo:{},
                currentStep:0,
                //显示用户条数
                total:100,
                finishInspect:'',
                search:{
                    wheelId:'',
                    takeInDate: null,
                    takeInDateFrom: null,
                    takeInDateTo: null,
                    axleNumber:'',
                    vehicleNumber: '',
                    infoTakeFinishTime:null,
                    infoTakeFinishTimeFrom:null,
                    infoTakeFinishTimeTo:null,
                    dispatchDate:null,
                    dispatchDateFrom:null,
                    dispatchDateTo:null,
                    takeInReason:'',
                    dipatchVehicleNumber:'',
                    status:'',
                    axleType:'',
                    isprocessFinish:'',
                    page:1,
                    size:10,
                    other:''
                },
                searchrules:{
                    wheelId:[],
                    axleNumber:[{ min:3, max:5, message: '长度在 3 到 5 个字符', trigger: 'blur' }],
                    vehicleNumber: [{ min: 7, max: 7, message: '长度 7 个字符', trigger: 'blur' }],
                },
                problem:{
                    wheelId:'',
                    processBelong:'',
                    problemDescription:'',
                    problemDetails:'',
                    worker:'',
                    problemFinder:'',
                    findTime:'',
                    problemStatus:'0',
                    correctTime:'',
                    confirm:'0',
                    confirmTime:''
                },
                searchProblem:{
                    wheelId:'',
                    processBelong:'',
                    problemDescription:'',
                    problemDetails:'',
                    worker:'',
                    problemFinder:'',
                    findTime:null,
                    problemStatus:'',
                    correctTime:null,
                    confirm:'',
                    confirmTime:null,
                    axleNumber:'',
                    axleType:''
                }
            };
        },
        computed: {

        },
        methods: {
            //每页显示数目改变
            handleSizeChange(val){
                this.search.size = val;
                this.searchWheelInfo('searchForm');
            },
            //当前页改变
            handleCurrentChange(val){
                this.search.page = val;
                this.searchWheelInfo('searchForm');
            },
            //查询
            searchWheelInfo(searchForm){
                this.$refs[searchForm].validate(async (valid) => {
                    if (valid) {
                        var result = await this.$http.post(
                            "/manage/getInfo2check",
                            this.search);
                        if (result.data.code != 100){
                            alert("添加失败");
                            return ;
                        }
                        this.wheelList = result.data.object.list;
                        this.total = result.data.object.total;
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetSearchInfo(searchForm){
                this.$refs[searchForm].resetFields();
            },
            //查看详细
            async handleForDetail(index,data){
                var result = await this.$http.post(
                    "/manage/queryAll",
                    data);
                if (result.data.code != 100){
                    alert("添加失败");
                    return ;
                }
                this.wheelInfoForTable = result.data.object;
                this.bearingUnload = this.wheelInfoForTable.bearingUnLoad;
                //给当前信息赋第一个工序wheelInfo值
                this.currentInfo = this.wheelInfoForTable.wheelInfo;
                this.detailtableVisible = true;
            },
            //查看进度
             async handleForProgress(index,data){
                var result = await this.$http.post(
                    "/manage/queryAll",
                    data);
                if (result.data.code != 100){
                    alert("添加失败");
                    return ;
                }
                this.progresstableVisible = true;
                this.wheelInfoForTable = result.data.object;
                this.currentWheelInfo = this.wheelInfoForTable.wheelInfo;
                this.setCurrentStep(this.currentWheelInfo);
            },
            //关闭
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(()=>{
                        this.activeName = 'first';
                        done();
                    })
                    .catch();
            },
            //关闭
            handleCloseProgress(done) {
                this.$confirm('确认关闭？')
                    .then(()=>{
                        this.activeStep = '';
                        done();
                    })
                    .catch();
            },
            //关闭
            handleCloseProblem(done){
                this.$confirm('确认关闭？')
                    .then(()=>{
                        this.$refs['problemform'].resetFields();
                        done();
                    })
                    .catch();
            },
            //关闭
            handleProblemTable(done){
                this.$confirm('确认关闭？')
                    .then(()=>{
                        done();
                    })
                    .catch();
            },
            //切换工序信息
            handleClick(tab, event) {
                //将每个步骤信息的表单绑定到this.currentInfo
                this.currentInfo = tab.$children[0].ruleForm;
                this.dataBaseName = tab.name;
                console.log(this.currentInfo);
            },
            //关闭
            closedetailable(){
                this.activeName = 'wheelinfo';
                this.detailtableVisible = false;
            },
            //关闭
            closeprogressTable(){
                this.activeStep = '';
                this.progresstableVisible = false;
            },
            //填写问题
            problemFeedback(){
                this.problemtableVisible = true;
            },
            //修改信息
           async modifyInfo(){
                this.currentInfo.qualityInspector = sessionStorage.getItem("name");
                this.currentInfo.finishTime = this.dateFormate(new Date(),'');
                var data ={
                    database:this.dataBaseName,
                    data:this.currentInfo
                }
                var result = await this.$http.post(
                    "/quality/modify",
                    data);
                if (result.data.code != 100){
                    alert("修改失败");
                    return ;
                }
                alert("修改成功");
            },
            //提交故障问题
           async onSubmit(){
                this.problemtableVisible = false;
                this.problem.problemFinder = sessionStorage.getItem("name");
                this.problem.wheelId = this.currentInfo.wheelId;
                this.problem.worker = this.currentInfo.worker;
                var result = await this.$http.post(
                    "/quality/addProblem",
                    this.problem);
                if (result.data.code != 100){
                    alert(result.data.message);
                    return ;
                }
                alert("提交成功");
                this.problem = {};
                this.$refs['problemform'].resetFields();
            },
            problemCancel(){
                this.problemtableVisible = false;
                this.$refs['problemform'].resetFields();
            },
            //查找发现的问题
           findMyProblem(){
                this.getMyProblem();
                this.problemListVisible = true;
            },
            async getMyProblem(){
                var finder = sessionStorage.getItem("name");
                var result = await this.$http.get(
                    "/quality/findProblemF?finder="+finder);
                if (result.data.code != 100){
                    alert("提交失败");
                    return ;
                }
                this.problemList = result.data.object;
            },
            //消号
            async handleToDone(index,row){
                var result = await this.$http.get(
                    "/quality/finishProblem?id="+row.id);
                if (result.data.code != 100){
                    alert("修改失败");
                    return ;
                }
                alert("已销号");
                this.getMyProblem();
            },
            //查找我发现的问题
           async searchProblemCond(){
                this.searchProblem.problemFinder = sessionStorage.getItem("name");
                var result = await this.$http.post(
                    "/quality/findProblemCond",
                    this.searchProblem);
                if (result.data.code != 100){
                    alert("修改失败");
                    return ;
                }
                this.problemList = result.data.object;
            },
            resetSearchProblemCond(searchForm){
                 this.$refs[searchForm].resetFields();
            },
            handle2FinishInspection(index,row){
                this.finishInspectionDialogVisible = true;
                this.finishInspect = row;
            },
            async finishInspection(){
                var name = sessionStorage.getItem("name");
                var result = await this.$http.get(
                    "/quality/finishInspection?name="+name+"&id="+this.finishInspect.wheelId);
                if (result.data.code != 100){
                    alert("修改失败");
                    return ;
                }
                this.finishInspectionDialogVisible = false;
                this.searchWheelInfo('searchForm');
                alert("已通过！");
            },
            setCurrentStep(currentWheelInfo){
                this.currentStep = 0;
                if (currentWheelInfo.infoTakeFinish=='1') this.currentStep++;
                if (currentWheelInfo.isMeasureFinish=='1') this.currentStep++;
                if (currentWheelInfo.isbearingRepairFinish=='1') this.currentStep++;
                if (currentWheelInfo.isbearingUnCapFinish=='1') this.currentStep++;
                if (currentWheelInfo.isbearingUnloadFinish=='1') this.currentStep++;
                if (currentWheelInfo.ismagnetInspectionFinish=='1') this.currentStep++;
                if (currentWheelInfo.isaxleInspectionFinish=='1') this.currentStep++;
                if (currentWheelInfo.isreInspectionFinish=='1') this.currentStep++;
                if (currentWheelInfo.isWheelRoundingFinish=='1') this.currentStep++;
                if (currentWheelInfo.isbearingNeckFinish=='1') this.currentStep++;
                if (currentWheelInfo.isbearingLoadFinish=='1') this.currentStep++;
                if (currentWheelInfo.isbearingCapFinish=='1') this.currentStep++;
                if (currentWheelInfo.isbearingrollTestFinish=='1') this.currentStep++;
                if (currentWheelInfo.isreMeasureFinish=='1') this.currentStep++;
                if (currentWheelInfo.isqualityInspectionFinish=='1') this.currentStep++;
                if (currentWheelInfo.iswheelDispatchFinish=='1') this.currentStep++;
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

        },
       async mounted() {
            var result = await this.$http.post(
                "/manage/getInfo2check",
                this.search);
            if (result.data.code != 100){
                alert("添加失败");
                return ;
            }
            this.wheelList = result.data.object.list;
            this.total = result.data.object.total;
        }
    }
</script>

<style lang="scss" scoped>

</style>
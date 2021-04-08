<template>
    <div>
        <!--        面包屑导航条-->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>综合管理</el-breadcrumb-item>
            <el-breadcrumb-item>信息查询</el-breadcrumb-item>
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
                        <el-form-item prop="status">
                            <el-select v-model="search.status" placeholder="请输入竣工状态" clearable>
                                <el-option label="检修中" value="0"></el-option>
                                <el-option label="待支出" value="1"></el-option>
                                <el-option label="已支出" value="2"></el-option>
                                <el-option label="报废" value="3"></el-option>
                                <el-option label="已送厂" value="4"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item prop="infoTakeFinishTimeFrom">
                            <el-date-picker
                                    type="date"
                                    placeholder="请选择完工起始日期"
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
                                    placeholder="请选择完工终止日期"
                                    v-model="search.infoTakeFinishTimeTo"
                                    format="yyyy 年 MM 月 dd 日"
                                    value-format="yyyy-MM-dd"
                                    style="width: 100%;"></el-date-picker>
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
                        <el-form-item prop="dipatchVehicleNumber">
                            <el-input v-model="search.dipatchVehicleNumber" placeholder="请输入支出车号" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item prop="dispatchDateFrom">
                            <el-date-picker
                                    type="date"
                                    placeholder="请选择支出起始日期"
                                    v-model="search.dispatchDateFrom"
                                    format="yyyy 年 MM 月 dd 日"
                                    value-format="yyyy-MM-dd"
                                    style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item prop="dispatchDateTo">
                            <el-date-picker
                                    type="date"
                                    placeholder="请选择支出终止日期"
                                    v-model="search.dispatchDateTo"
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
                    <el-col :span="4">
                        <el-form-item prop="other">
                            <el-input v-model="search.other" placeholder="请输入..." clearable></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="6">
                        <el-button type="primary" @click="searchWheelInfo('searchForm')" >查询</el-button>
                        <el-button  @click="resetSearchInfo('searchForm')" >重置</el-button>
                        <el-button  @click="exportToExcel" >导出</el-button>
                    </el-col>
                </el-form>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="24">
                    <el-table
                            :data="wheelList"
                            style="width: 100%"
                            :default-sort = "{prop: 'id', order: 'ascending'}"
                            :row-class-name="tableRowClassName"
                            border stripe>
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
                                <span v-if="scope.row.state =='0'" >检修中</span>
                                <span v-if="scope.row.state =='1'" >待支出</span>
                                <span v-if="scope.row.state =='2'" >已支出</span>
                                <span v-if="scope.row.state =='3'" >报废</span>
                                <span v-if="scope.row.state =='4'" >已送厂</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="isprocessFinishTime" label="修竣日期" width="150" ></el-table-column>
                        <el-table-column prop="wheelDispatch" label="轮场位置" >
                            <template slot-scope="scope">
                                <span v-if="scope.row.storePositionX != null" >{{scope.row.storePositionX}}道</span>
                                <span v-if="scope.row.storePositionX != null" >{{scope.row.storePositionY}}号</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="dispatchVehicleType" label="支出车型" ></el-table-column>
                        <el-table-column prop="dipatchVehicleNumber" label="支出车号" ></el-table-column>
                        <el-table-column prop="dipatchAxlePosition" label="支出轴位" ></el-table-column>
                        <el-table-column prop="dispatchDate" label="支出日期" ></el-table-column>
                        <el-table-column label="详细信息" fixed="right" width="180">
                            <template slot-scope="scope">
                                <el-button
                                        icon="el-icon-edit"
                                        size="mini"
                                        @click="handleForDetail(scope.$index, scope.row)">详细</el-button>
                                <el-button
                                        icon="el-icon-edit"
                                        size="mini"
                                        @click="handleForProgress(scope.$index, scope.row)">修程</el-button>
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
                    <wheelinfotable ref="wheelinfotable" v-if="wheelInfoForTable.wheelInfo" :showinfo="wheelInfoForTable.wheelInfo" ></wheelinfotable>
                </el-tab-pane>
                <el-tab-pane label="轮对测量" name="second" v-if="wheelInfoForTable.wheelMeasure" >
                    <wheelMeasureTable ref="wheelMeasureTable" v-if="wheelInfoForTable.wheelMeasure"  :showinfo="wheelInfoForTable.wheelMeasure"></wheelMeasureTable>
                </el-tab-pane>
                <el-tab-pane label="轴承检查" name="third" v-if="wheelInfoForTable.bearingRepair">
                    <bearingRepairTable ref="bearingRepairTable" v-if="wheelInfoForTable.bearingRepair" :showinfo="wheelInfoForTable.bearingRepair"></bearingRepairTable>
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
                    <axleInspectionTable ref="wheelinfotable" v-if="wheelInfoForTable.axleInspection" :showinfo="wheelInfoForTable.axleInspection"></axleInspectionTable>
                </el-tab-pane>
                <el-tab-pane label="人工复探" name="seventeen" v-if="wheelInfoForTable.axleInspection">
                    <reinspectionTable ref="reinspection" v-if="wheelInfoForTable.axleInspection" :showinfo="wheelInfoForTable.axleInspection"></reinspectionTable>
                </el-tab-pane>
                <el-tab-pane label="车轮旋面" name="fifth" v-if="wheelInfoForTable.wheelRound">
                    <wheelRoundTable ref="wheelinfotable" v-if="wheelInfoForTable.wheelRound" :showinfo="wheelInfoForTable.wheelRound"></wheelRoundTable>
                </el-tab-pane>
                <el-tab-pane label="轴颈测量" name="fifteen" v-if="wheelInfoForTable.bearingLoad">
                    <bearingNeckTable ref="bearingNeck" v-if="wheelInfoForTable.bearingLoad" :showinfo="wheelInfoForTable.bearingLoad"></bearingNeckTable>
                </el-tab-pane>
                <el-tab-pane label="轴承压装" name="sixth" v-if="wheelInfoForTable.bearingLoad">
                    <bearingLoadTable ref="bearingLoadTable" v-if="wheelInfoForTable.bearingLoad" :showinfo="wheelInfoForTable.bearingLoad"></bearingLoadTable>
                </el-tab-pane>
                <el-tab-pane label="轴承关盖" name="seventh" v-if="wheelInfoForTable.bearingCap" >
                    <bearingCapTable ref="bearingCapTable" v-if="wheelInfoForTable.bearingCap" :showinfo="wheelInfoForTable.bearingCap"></bearingCapTable>
                </el-tab-pane>
                <el-tab-pane label="磨合试验" name="eighth" v-if="wheelInfoForTable.bearingTest">
                    <bearingTestTable ref="bearingTestTable" v-if="wheelInfoForTable.bearingTest" :showinfo="wheelInfoForTable.bearingTest"></bearingTestTable>
                </el-tab-pane>
                <el-tab-pane label="轮对复测" name="nineth" v-if="wheelInfoForTable.wheelDispatch">
                    <wheelDispatchTable ref="wheelinfotable" v-if="wheelInfoForTable.wheelDispatch" :showinfo="wheelInfoForTable.wheelDispatch"></wheelDispatchTable>
                </el-tab-pane>
                <el-tab-pane label="故障信息" name="ten">
                        <el-table :data="problemList" style="width: 100%" height="600" :default-sort = "{prop: 'findTime', order: 'descending'}" border stripe>
                            <el-table-column type="index" label="序号" width="50"></el-table-column>
                            <el-table-column prop="axleNumber" label="轴号" width="50"></el-table-column>
                            <el-table-column prop="axleType" label="轴型" width="50"></el-table-column>
                            <el-table-column prop="processBelong" label="部位" width="80" >
                                <template slot-scope="scope">
                                    <span v-if="scope.row.processBelong==1" >车轮</span>
                                    <span v-if="scope.row.processBelong==2" >车轴</span>
                                    <span v-if="scope.row.processBelong==3" >轴承</span>
                                    <span v-if="scope.row.processBelong==4" >探伤</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="problemDescription" label="简介"></el-table-column>
                            <el-table-column prop="problemDetails" label="问题" width="400"></el-table-column>
                            <el-table-column prop="worker" label="责任人" ></el-table-column>
                            <el-table-column prop="problemFinder" label="发现人" ></el-table-column>
                            <el-table-column prop="findTime" label="发现时间" sortable></el-table-column>
                            <el-table-column prop="problemStatus" label="整改情况" >
                                <template slot-scope="scope">
                                    <span v-if="scope.row.problemStatus=='0'" >未整改</span>
                                    <span v-if="scope.row.problemStatus=='1'" >已整改</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="correctTime" label="整改时间" sortable></el-table-column>
                            <el-table-column prop="confirm" label="消耗情况" >
                                <template slot-scope="scope">
                                    <span v-if="scope.row.confirm=='0'" >未消号</span>
                                    <span v-if="scope.row.confirm=='1'" >已消号</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="confirmTime" label="消耗时间" sortable></el-table-column>
                        </el-table>
                </el-tab-pane>
                <el-tab-pane label="51C卡片" name="eleven" >
                    <sheetTable ref="wheelinfotable"  :showinfo="wheelInfoForTable"></sheetTable>
                </el-tab-pane>
                <el-tab-pane label="二维码" name="twelve">
                    <div class="QRimg">
                        <img  :src="QRimgpath">
                    </div>
                </el-tab-pane>
            </el-tabs>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="closedetailable" size="small">关闭</el-button>
            </span>
        </el-dialog>
        <el-dialog
                title="当前进度"
                :visible.sync="progresstableVisible"
                width="80%"
                :before-close="handleCloseProgress"
        >
            <!--    进度条-->
<!--            <el-tabs v-model="activeStep" v-if="progresstableVisible">-->
<!--                <el-tab-pane label="收入信息" name="first" v-if="wheelInfoForTable.wheelInfo">-->
<!--                    <div>-->
<!--                        <h4>完工时间: {{wheelInfoForTable.wheelInfo.infoTakeFinishTime}}</h4>-->
<!--                        <h4>收入: {{wheelInfoForTable.wheelInfo.worker}}</h4>-->
<!--                    </div>-->
<!--                </el-tab-pane>-->
<!--                <el-tab-pane label="轮对测量" name="second" v-if="wheelInfoForTable.wheelMeasure && wheelInfoForTable.wheelInfo.isMeasureFinish == '1'" >-->
<!--                    <div>-->
<!--                        <h4>完工时间: {{wheelInfoForTable.wheelMeasure.finishTime}}</h4>-->
<!--                        <h4>测量: {{wheelInfoForTable.wheelMeasure.worker}}</h4>-->
<!--                    </div>-->
<!--                </el-tab-pane>-->
<!--                <el-tab-pane label="轴承检查" name="third" v-if="wheelInfoForTable.bearingRepair && wheelInfoForTable.wheelInfo.isbearingRepairFinish == '1'">-->
<!--                    <div>-->
<!--                        <h4>完工时间: {{wheelInfoForTable.bearingRepair.finishTime}}</h4>-->
<!--                        <h4>检查: {{wheelInfoForTable.bearingRepair.bearingExaminers}}</h4>-->
<!--                        <h4>推卸(左): {{wheelInfoForTable.bearingRepair.worker}}</h4>-->
<!--                        <h4>推卸(右): {{wheelInfoForTable.bearingRepair.unloaderRight}}</h4>-->
<!--                    </div>-->
<!--                </el-tab-pane>-->
<!--                <el-tab-pane label="轮轴探伤" name="fourth" v-if="wheelInfoForTable.axleInspection && wheelInfoForTable.wheelInfo.ismagnetInspectionFinish == '1'">-->
<!--                    <div>-->
<!--                        <h4>磁粉探伤完工时间: {{wheelInfoForTable.axleInspection.reultfinishTime}}</h4>-->
<!--                        <h4>磁粉探伤: {{wheelInfoForTable.axleInspection.reultInspector}}</h4>-->
<!--                        <h4>超声波探伤完工时间: {{wheelInfoForTable.axleInspection.ultfinishTime}}</h4>-->
<!--                        <h4>超声波探伤: {{wheelInfoForTable.axleInspection.worker}}</h4>-->
<!--                    </div>-->
<!--                </el-tab-pane>-->
<!--                <el-tab-pane label="车轮旋面" name="fifth" v-if="wheelInfoForTable.wheelRound && wheelInfoForTable.wheelInfo.isWheelRoundingFinish == '1'">-->
<!--                    <div>-->
<!--                        <h4>完工时间: {{wheelInfoForTable.wheelRound.finishTime}}</h4>-->
<!--                        <h4>旋面: {{wheelInfoForTable.wheelRound.worker}}</h4>-->
<!--                    </div>-->
<!--                </el-tab-pane>-->
<!--                <el-tab-pane label="轴承压装" name="sixth" v-if="wheelInfoForTable.bearingLoad && wheelInfoForTable.wheelInfo.isbearingLoadFinish == '4'">-->
<!--                    <div>-->
<!--                        <h4>完工时间: {{wheelInfoForTable.bearingLoad.finishTime}}</h4>-->
<!--                        <h4>选配(左): {{wheelInfoForTable.bearingLoad.matcherLeft}}</h4>-->
<!--                        <h4>压装(左): {{wheelInfoForTable.bearingLoad.worker}}</h4>-->
<!--                        <h4>选配(右): {{wheelInfoForTable.bearingLoad.matcherLeft}}</h4>-->
<!--                        <h4>压装(右): {{wheelInfoForTable.bearingLoad.loaderRight}}</h4>-->
<!--                    </div>-->
<!--                </el-tab-pane>-->
<!--                <el-tab-pane label="轴承关盖" name="seventh" v-if="wheelInfoForTable.bearingCap && wheelInfoForTable.wheelInfo.isbearingCapFinish == '1'" >-->
<!--                    <div>-->
<!--                        <h4>完工时间: {{wheelInfoForTable.bearingCap.finishTime}}</h4>-->
<!--                        <h4>关盖(左): {{wheelInfoForTable.bearingCap.worker}}</h4>-->
<!--                        <h4>关盖(右): {{wheelInfoForTable.bearingCap.caperRight}}</h4>-->
<!--                    </div>-->
<!--                </el-tab-pane>-->
<!--                <el-tab-pane label="磨合试验" name="eighth" v-if="wheelInfoForTable.bearingTest && wheelInfoForTable.wheelInfo.isbearingrollTestFinish == '1'">-->
<!--                    <div>-->
<!--                        <h4>完工时间: {{wheelInfoForTable.bearingTest.finishTime}}</h4>-->
<!--                        <h4>磨合试验: {{wheelInfoForTable.bearingTest.worker}}</h4>-->
<!--                    </div>-->
<!--                </el-tab-pane>-->
<!--                <el-tab-pane label="轮对复测" name="nineth" v-if="wheelInfoForTable.wheelDispatch && wheelInfoForTable.wheelInfo.isreMeasureFinish == '1'">-->
<!--                    <div>-->
<!--                        <h4>完工时间: {{wheelInfoForTable.wheelDispatch.finishTime}}</h4>-->
<!--                        <h4>支出: {{wheelInfoForTable.wheelDispatch.worker}}</h4>-->
<!--                    </div>-->
<!--                </el-tab-pane>-->
<!--            </el-tabs>-->
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="closeprogressTable" size="small">关闭</el-button>
            </span>
            <el-steps :space="200" :active="currentStep" finish-status="success">
                <el-step title="轮对收入" ></el-step>
                <el-step title="轮对测量" ></el-step>
                <el-step title="轴承检查" ></el-step>
                <el-step title="轴承开盖" v-if="currentWheelInfo.isbearingUnCapFinish!=='-1'"></el-step>
                <el-step title="轴承退卸" v-if="currentWheelInfo.isbearingUnloadFinish!=='-1'"></el-step>
                <el-step title="磁粉探伤" v-if="currentWheelInfo.ismagnetInspectionFinish!=='-1'"></el-step>
                <el-step title="超声波探伤" v-if="currentWheelInfo.isaxleInspectionFinish!=='-1'"></el-step>
                <el-step title="人工复探" v-if="currentWheelInfo.isreInspectionFinish!=='-1'"></el-step>
                <el-step title="车轮旋面" v-if="currentWheelInfo.isWheelRoundingFinish!=='-1'"></el-step>
                <el-step title="轴颈测量" v-if="currentWheelInfo.isbearingNeckFinish!=='-1'"></el-step>
                <el-step title="轴承压装" v-if="currentWheelInfo.isbearingLoadFinish!=='-1'"></el-step>
                <el-step title="轴承关盖" v-if="currentWheelInfo.isbearingCapFinish!=='-1'"></el-step>
                <el-step title="轴承磨合" ></el-step>
                <el-step title="支出复测" ></el-step>
                <el-step title="质量检查" ></el-step>
                <el-step title="轮对支出" ></el-step>
                <el-step title="轮对待送厂" v-if="currentWheelInfo.state=='3'"></el-step>
            </el-steps>
        </el-dialog>
    </div>
</template>

<script>
    import wheelinfotable from "./wheelinfotable";
    import wheelRoundTable from "./wheelRoundTable";
    import wheelMeasureTable from "./wheelMeasureTable";
    import wheelDispatchTable from "./wheelDispatchTable";
    import bearingCapTable from "./bearingCapTable";
    import bearingLoadTable from "./bearingLoadTable";
    import bearingRepairTable from "./bearingRepairTable";
    import bearingTestTable from "./bearingTestTable";
    import axleInspectionTable from "./axleInspectionTable";
    import sheetTable from "./sheetTable";
    import bearingUncapTable from "./bearingUncapTable";
    import bearingUnloadTable from "./bearingUnloadTable";
    import bearingNeckTable from "./bearingNeckTable";
    import magneticInspectionTable from "./magneticInspectionTable";
    import reinspectionTable from "./reinspectionTable";
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
            bearingUncapTable:bearingUncapTable,
            bearingUnloadTable:bearingUnloadTable,
            bearingNeckTable:bearingNeckTable,
            magneticInspectionTable:magneticInspectionTable,
            reinspectionTable:reinspectionTable,
            sheetTable:sheetTable
        },
        data(){
            return {
                wheelList:[],
                wheelInfoForTable:{},
                detailtableVisible:false,
                progresstableVisible:false,
                QRcodeVisible:false,
                QRimgpath:'',
                activeStep:'',
                activeName:'first',
                resourceURL:this.$GLOBAL.resourceURL,
                bearingUnload:[],
                currentWheelInfo:{},
                currentStep:0,
                //显示用户条数
                total:100,
                problemList:[],
                exportList:[],
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
            searchWheelInfo(searchForm){
                this.$refs[searchForm].validate(async (valid) => {
                    if (valid) {
                        var result = await axios.post(
                            "/manage/query",
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
            async searchWheelInfoWithOutPage(searchForm){
                this.$refs[searchForm].validate(async (valid) => {
                    if (valid) {
                        var result = await axios.post(
                            "/manage/queryWithOutPage",
                            this.search);
                        if (result.data.code != 100){
                            alert("添加失败");
                            return ;
                        }
                        this.exportList = result.data.object;
                        return result.data.object;
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
              },
            resetSearchInfo(searchForm){
                this.$refs[searchForm].resetFields();
            },
            async handleForDetail(index,data){
                var result = await axios.post(
                    "/manage/queryAll",
                    data);
                if (result.data.code != 100){
                    alert("添加失败");
                    return ;
                }
                this.wheelInfoForTable = result.data.object;
                this.bearingUnload = this.wheelInfoForTable.bearingUnLoad;
                this.detailtableVisible = true;
            },
            async handleForProgress(index,data){
                var result = await axios.post(
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
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(()=>{
                        this.activeName = 'first';
                        done();
                    })
                    .catch();
            },
            handleCloseProgress(done) {
                this.$confirm('确认关闭？')
                    .then(()=>{
                        this.activeStep = '';
                        done();
                    })
                    .catch();
            },
            handleClick(tab, event) {
                if (tab.name == 'ten'){
                    var id = this.wheelInfoForTable.wheelId;
                    this.getProblem(id);
                }
                if (tab.name == 'twelve'){
                    var id = this.wheelInfoForTable.wheelId;
                    this.getQRcode(id);
                }
            },
            async getProblem(id){
                var result = await axios.get(
                    "/quality/getProblemsById?id="+id);
                if (result.data.code != 100){
                    alert("添加失败");
                    return ;
                }
                this.problemList = result.data.object;
            },
            closedetailable(){
                this.activeName = 'first';
                this.detailtableVisible = false;
            },
            closeprogressTable(){
                this.activeStep = '';
                this.progresstableVisible = false;
            },
            tableRowClassName({row}){
                if(row.state === '0'){
                    return '';
                } else if(row.state === '1'){
                    return 'repaired';
                } else if(row.state === '2'){
                    return 'dispatched';
                } else if(row.state === '3'){
                    return 'discard';
                } else if(row.state === '4'){
                     return 'back2plant';
                } else {
                    return '';
                }
            },
            exportToExcel(){
                this.searchWheelInfoWithOutPage('searchForm');
                require.ensure([], () => {
                    const { export_json_to_excel } = require('../../excel/Export2Excel.js');
                    const tHeader = [
                        '单号',
                        '轴号',
                        '轴型',
                        '厂代号',
                        '收入来源',
                        '收入日期',
                        '收入车型',
                        '收入车号',
                        '收入轴位',
                        '完工状态',
                        '修竣日期',
                        '轮场位置',
                        '支出车型',
                        '支出车号',
                        '支出轴位',
                        '支出日期'
                    ];
                    const filterVal = [
                        'wheelId',
                        'axleNumber',
                        'axleType',
                        'axleMadeIn',
                        'takeInReason',
                        'takeInDate',
                        'vehicleType',
                        'vehicleNumber',
                        'axlePosition',
                        'isprocessFinish',
                        'isprocessFinishTime',
                        'wheelDispatch',
                        'dispatchVehicleType',
                        'dipatchVehicleNumber',
                        'dipatchAxlePosition',
                        'dispatchDate'
                    ];
                    const list = this.exportList;
                    const data = this.formatJson(filterVal, list);
                    export_json_to_excel(tHeader, data, '故障列表');
                })
            },
            formatJson(filterVal, jsonData) {
                return jsonData.map(v => filterVal.map(j => v[j]))
            },
            //获取二维码
            async getQRcode(wheelId){
                var result = await axios.get(
                    "/wheelTakein/getQRcode?id="+wheelId);
                if (result.data.code != 100){
                    alert("二维码生成失败");
                    return ;
                }
                this.QRimgpath = this.resourceURL + '/wheelqrcode/'+result.data.object;
            },
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
            var result = await axios.post(
                "/manage/query",
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

<style lang="scss" >
.repairing{
    color: #0F0F0F !important;
}
.repaired{
     color: #009933 !important;
 }
.dispatched{
    color: #409EFF !important;
}
.discard{
    color: #CD0000 !important;
}
.back2plant{
    color: #B3B3B3  !important;
}
.QRimg{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
}
.QRimg img{
    margin: 0 auto;
}
</style>
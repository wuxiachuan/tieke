<template>
    <div>
        <el-row :gutter="20" class="noborder">
            <el-col :span="12" class="noborder">
                <el-card>
                    <div class="sheet">
                        <el-row class="title">
                            <el-col :span="20" class="noborder"><span >轮轴卡片</span></el-col>
                            <el-col :span="4" class="noborder"><span style="font-size: 16px;">No:{{wheelInfo&&wheelInfo.wheelId}}</span></el-col>
                        </el-row>
                        <el-row class="vcenter">
                            <el-col :span="1" class="noborder"><span>收入基本情况</span></el-col>
                            <el-col :span="23" class="noborder">
                                <el-row>
                                    <el-col :span="12" ><span>收入单位: {{wheelInfo&&wheelInfo.takeInDepot}}</span></el-col>
                                    <el-col :span="12"><span>收入日期: {{wheelInfo&&wheelInfo.takeInDate}}</span></el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="12"><span>收入原因: {{wheelInfo&&wheelInfo.takeInReason}}</span></el-col>
                                    <el-col :span="12"><span>收入车型车号: {{wheelInfo&&wheelInfo.vehicleType}} {{wheelInfo&&wheelInfo.vehicleNumber}}</span></el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="6"><span>轴号: {{wheelInfo&&wheelInfo.axleNumber}}</span></el-col>
                                    <el-col :span="6"><span>轴型及材质: {{wheelInfo&&wheelInfo.axleType}} {{wheelInfo&&wheelInfo.axleMaterial}}</span></el-col>
                                    <el-col :span="6"><span>轮型及材质: {{wheelInfo&&wheelInfo.wheelType}} </span></el-col>
                                    <el-col :span="6"><span>轴等级: {{wheelInfo&&wheelInfo.axleMaterial}}</span></el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="6"><span>车轴制造</span></el-col>
                                    <el-col :span="18">
                                        <span>年月日:{{wheelInfo&&wheelInfo.axleMadeDate}}</span>
                                        <span>单位:{{wheelInfo&&wheelInfo.axleMaterial}}</span>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="6"><span>轮对首次组装</span></el-col>
                                    <el-col :span="18">
                                        <span>年月日: {{wheelInfo&&wheelInfo.wheelAssemblefirstDate}}</span>
                                        <span>单位: {{wheelInfo&&wheelInfo.wheelAssemblefirstIn}}</span>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="6"><span>轮对末次组装</span></el-col>
                                    <el-col :span="18">
                                        <span>年月日: {{wheelInfo&&wheelInfo.wheelAssemblelastDate}}</span>
                                        <span>单位: {{wheelInfo&&wheelInfo.wheelAssemblelastIn}}</span>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="6"><span>车轮标记</span></el-col>
                                    <el-col :span="9"><span>左: {{wheelInfo&&wheelInfo.wheelMarkLeft}}</span></el-col>
                                    <el-col :span="9"><span>右: {{wheelInfo&&wheelInfo.wheelMarkRight}}</span></el-col>
                                </el-row>
                            </el-col>
                        </el-row>
                        <el-row class="vcenter" >
                            <el-col :span="1" class="noborder"></el-col>
                            <el-col :span="23" >
                                <el-col class="vcenter">
                                    <el-col :span="4" class="noborder"><span>项目</span></el-col>
                                    <el-col :span="10" class="noborder">
                                        <el-row class="notop-border">
                                            <el-col class="noborder"><span>收入尺寸</span></el-col>
                                        </el-row>
                                        <el-row >
                                            <el-col :span="12"><span>左</span></el-col>
                                            <el-col :span="12" class="noborder"><span>右</span></el-col>
                                        </el-row>
                                    </el-col>
                                    <el-col :span="10" class="noborder">
                                        <el-row  class="notop-border"><span>支出尺寸</span></el-row>
                                        <el-row >
                                            <el-col :span="12" ><span>左</span></el-col>
                                            <el-col :span="12" class="noborder"><span>右</span></el-col>
                                        </el-row>
                                    </el-col>
                                </el-col>
                            </el-col>
                        </el-row>

                        <el-row class="vcenter">
                            <el-col :span="1" class="noborder"><span>车轮</span></el-col>
                            <el-col :span="23">
                                <el-row>
                                    <el-col :span="4"><span>直径</span></el-col>
                                    <el-col :span="5"><span>{{wheelMeasure&&wheelMeasure.wheelDiameterLeft}}</span></el-col>
                                    <el-col :span="5"><span>{{wheelMeasure&&wheelMeasure.wheelDiameterRight}}</span></el-col>
                                    <el-col :span="5"><span>{{wheelDispatch&&wheelDispatch.wheelDiameterLeft}}</span></el-col>
                                    <el-col :span="5" class="noborder"><span>{{wheelDispatch&&wheelDispatch.wheelDiameterLeft}}</span></el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="4"><span>轮辋厚</span></el-col>
                                    <el-col :span="5"><span>{{wheelMeasure&&wheelMeasure.rimThickLeft}}</span></el-col>
                                    <el-col :span="5"><span>{{wheelMeasure&&wheelMeasure.rimThickRight}}</span></el-col>
                                    <el-col :span="5"><span>{{wheelDispatch&&wheelDispatch.rimThickLeft}}</span></el-col>
                                    <el-col :span="5" class="noborder"><span>{{wheelDispatch&&wheelDispatch.rimThickRight}}</span></el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="4"><span>轮缘厚</span></el-col>
                                    <el-col :span="5"><span>{{wheelMeasure&&wheelMeasure.flangeThickLeft}}</span></el-col>
                                    <el-col :span="5"><span>{{wheelMeasure&&wheelMeasure.flangeThickRight}}</span></el-col>
                                    <el-col :span="5"><span>{{wheelDispatch&&wheelDispatch.flangeThickLeft}}</span></el-col>
                                    <el-col :span="5" class="noborder"><span>{{wheelDispatch&&wheelDispatch.flangeThickRight}}</span></el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="4"><span>轮辋宽</span></el-col>
                                    <el-col :span="5"><span>{{wheelMeasure&&wheelMeasure.rimWideLeft}}</span></el-col>
                                    <el-col :span="5"><span>{{wheelMeasure&&wheelMeasure.rimWideRight}}</span></el-col>
                                    <el-col :span="5"><span>{{wheelDispatch&&wheelDispatch.rimWideLeft}}</span></el-col>
                                    <el-col :span="5" class="noborder"><span>{{wheelDispatch&&wheelDispatch.rimWideRight}}</span></el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="4"><span>轮对内距</span></el-col>
                                    <el-col :span="5"><span>{{wheelMeasure&&wheelMeasure.internalDistance1}}</span></el-col>
                                    <el-col :span="5"><span>{{wheelMeasure&&wheelMeasure.internalDistance2}}</span></el-col>
                                    <el-col :span="5"><span>{{wheelMeasure&&wheelMeasure.internalDistance3}}</span></el-col>
                                    <el-col :span="5" class="noborder"><span>{{wheelMeasure&&wheelMeasure.internalDistance1}}</span></el-col>
                                </el-row>
                            </el-col>
                        </el-row>
                        <el-row class="vcenter">
                            <el-col :span="1"><span>车轴直径</span></el-col>
                            <el-col :span="23"><span>{{wheelMeasure&&wheelMeasure.axleDiameter}}</span></el-col>
                        </el-row>
                        <el-row class="vcenter">
                            <el-col :span="1" class="noborder"><span>轮对</span></el-col>
                            <el-col :span="23">
                                <el-row>
                                    <el-col :span="4"><span>故障情况</span></el-col>
                                    <el-col :span="20"><span>{{wheelMeasure&&wheelMeasure.problem}}</span></el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="4"><span>修程</span></el-col>
                                    <el-col :span="2"><span>送厂</span></el-col>
                                    <el-col :span="2"><span>旋面</span></el-col>
                                    <el-col :span="2"><span>超探</span></el-col>
                                    <el-col :span="6"><span>{{wheelMeasure&&wheelMeasure.repairProcess == '0'?'外观检查':
                                            wheelMeasure&&wheelMeasure.repairProcess == '1'?'旋面':
                                            wheelMeasure&&wheelMeasure.repairProcess == '2'?'超探':
                                            wheelMeasure&&wheelMeasure.repairProcess == '3'?'旋面+超探':
                                            wheelMeasure&&wheelMeasure.repairProcess == '4'?'送厂':''}}
                                    </span></el-col>
                                    <el-col :span="3"><span>检查者</span></el-col>
                                    <el-col :span="5"><span>{{wheelMeasure&&wheelMeasure.worker}}</span></el-col>
                                </el-row>
                            </el-col>
                        </el-row>
                        <el-row class="vcenter">
                            <el-col :span="1" class="noborder"><span>滚动轴承</span></el-col>
                            <el-col :span="23">
                                <el-row>
                                    <el-col :span="4"><span>轴承型号</span></el-col>
                                    <el-col :span="10"><span>左: {{bearingRepair&&bearingRepair.bearingTypeLeft}}</span></el-col>
                                    <el-col :span="10" class="noborder"><span>右: {{bearingRepair&&bearingRepair.bearingTypeRight}}</span></el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="4"><span>项目</span></el-col>
                                    <el-col :span="10"><span>左</span></el-col>
                                    <el-col :span="10" class="noborder"><span>右</span></el-col>
                                </el-row>
                                <el-row class="vcenter">
                                    <el-col :span="4" class="noborder"><span>轴端标志版内容</span></el-col>
                                    <el-col :span="10" class="noborder">
                                        <el-row :span="12"><span>A:{{bearingRepair&&bearingRepair.bearingAssemble1stLeft}} {{bearingRepair&&bearingRepair.bearingLevelLeft == '0'? '新造':'大修'}} {{bearingRepair&&bearingRepair.bearingmadeInLeft}}</span></el-row>
                                        <el-row :span="12"><span>B:{{bearingRepair&&bearingRepair.wheelAssemble1st}} 左 {{bearingRepair&&bearingRepair.axleNumber}}</span></el-row>
                                        <el-row :span="12"><span>C:{{bearingRepair&&bearingRepair.bearingAssembleLeft}} {{bearingRepair&&bearingRepair.axleMadeDate}} {{bearingRepair&&bearingRepair.axleMaterial}} {{bearingRepair&&bearingRepair.axleMadeIn}}</span></el-row>
                                        <el-row :span="12"><span>D:{{bearingRepair&&bearingRepair.bearingAssembleInLeft}} {{bearingRepair&&bearingRepair.repairLevelLeft == '0'? '新造':'大修'}}</span></el-row>
                                    </el-col>
                                    <el-col :span="10" class="noborder">
                                        <el-row :span="12"><span>A:{{bearingRepair&&bearingRepair.bearingAssemble1stRight}} {{bearingRepair&&bearingRepair.bearingLevelRight == '0'? '新造':'大修'}} {{bearingRepair&&bearingRepair.bearingmadeInRight}}</span></el-row>
                                        <el-row :span="12"><span>B:{{bearingRepair&&bearingRepair.wheelAssemblelast}} {{bearingRepair&&bearingRepair.wheelAssembleIn}}</span></el-row>
                                        <el-row :span="12"><span>C:{{bearingRepair&&bearingRepair.bearingAssembleRight}}</span></el-row>
                                        <el-row :span="12"><span>D:{{bearingRepair&&bearingRepair.bearingAssembleInRight}} {{bearingRepair&&bearingRepair.repairLevelRight == '0'? '新造':'大修'}}</span></el-row>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="4"><span>施封状态</span></el-col>
                                    <el-col :span="10"><span>{{bearingRepair&&bearingRepair.closeStateLeft == '1'? '良好':'不良'}}</span></el-col>
                                    <el-col :span="10"><span>{{bearingRepair&&bearingRepair.closeStateRight == '1'? '良好':'不良'}}</span></el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="4"><span>轴向游隙</span></el-col>
                                    <el-col :span="10"><span>{{bearingRepair&&bearingRepair.axleGapLeft}}</span></el-col>
                                    <el-col :span="10"><span>{{bearingRepair&&bearingRepair.axleGapRight}}</span></el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="4"><span>外观状态</span></el-col>
                                    <el-col :span="10"><span>{{bearingRepair&&bearingRepair.appearanceLeft == '0'? '不良':'良好'}}</span></el-col>
                                    <el-col :span="10"><span>{{bearingRepair&&bearingRepair.appearanceRight == '0'? '不良':'良好'}}</span></el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="4"><span>开盖原因</span></el-col>
                                    <el-col :span="10"><span>{{bearingRepair&&bearingRepair.uncapReasonLeft}}</span></el-col>
                                    <el-col :span="10"><span>{{bearingRepair&&bearingRepair.uncapReasonRight}}</span></el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="4"><span>退卸原因</span></el-col>
                                    <el-col :span="10"><span>{{bearingRepair&&bearingRepair.unloadReasonLeft == '0'?'其它':
                                            bearingRepair&&bearingRepair.unloadReasonLeft == '1'?'超探':
                                            bearingRepair&&bearingRepair.unloadReasonLeft == '2'?'旋面':
                                            bearingRepair&&bearingRepair.unloadReasonLeft == '3'?'压装':''}}</span></el-col>
                                    <el-col :span="10"><span>{{bearingRepair&&bearingRepair.unloadReasonRight == '0'?'其它':
                                            bearingRepair&&bearingRepair.unloadReasonRight == '1'?'超探':
                                            bearingRepair&&bearingRepair.unloadReasonRight == '2'?'旋面':
                                            bearingRepair&&bearingRepair.unloadReasonRight == '3'?'压装':''}}</span></el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="4"><span>推卸日期</span></el-col>
                                    <el-col :span="10"><span>{{bearingRepair&&bearingRepair.unloadDateLeft}}</span></el-col>
                                    <el-col :span="10"><span>{{bearingRepair&&bearingRepair.unloadDateRight}}</span></el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="4"><span>新造</span></el-col>
                                    <el-col :span="10" ><span>工厂:</span><span v-show="bearingRepair&&bearingRepair.bearingLevelLeft == '0'">{{bearingRepair&&bearingRepair.bearingmadeInLeft}}</span></el-col>
                                    <el-col :span="10"><span>日期:</span><span v-show="bearingRepair&&bearingRepair.bearingLevelRight == '0'">{{bearingRepair&&bearingRepair.bearingmadeInRight}}</span></el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="4"><span>大修</span></el-col>
                                    <el-col :span="10" ><span>工厂:</span><span v-show="bearingRepair&&bearingRepair.bearingLevelLeft == '1'">{{bearingRepair&&bearingRepair.bearingmadeInLeft}}</span></el-col>
                                    <el-col :span="10"><span>日期:</span><span v-show="bearingRepair&&bearingRepair.bearingLevelRight == '1'">{{bearingRepair&&bearingRepair.bearingmadeInRight}}</span></el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="4"><span>修程</span></el-col>
                                    <el-col :span="10">
                                        <span>{{bearingRepair&&bearingRepair.repairProgressLeft == '0'?'外观检查':
                                            bearingRepair&&bearingRepair.repairProgressLeft == '1'?'一般检':
                                            bearingRepair&&bearingRepair.repairProgressLeft == '2'?'大修':
                                            bearingRepair&&bearingRepair.repairProgressLeft == '3'?'报废':''}}</span>
                                    </el-col>
                                    <el-col :span="10">
                                        <span>{{bearingRepair&&bearingRepair.repairProgressRight == '0'?'外观检查':
                                            bearingRepair&&bearingRepair.repairProgressRight == '1'?'一般检':
                                            bearingRepair&&bearingRepair.repairProgressRight == '2'?'大修':
                                            bearingRepair&&bearingRepair.repairProgressRight == '3'?'报废':''}}</span>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="4"><span>检查者</span></el-col>
                                    <el-col :span="5"><span>{{bearingRepair&&bearingRepair.worker}}</span></el-col>
                                    <el-col :span="5"><span>开盖者</span></el-col>
                                    <el-col :span="5"><span>左:{{bearingRepair&&bearingRepair.unloaderLeft}}</span></el-col>
                                    <el-col :span="5"><span>右:{{bearingRepair&&bearingRepair.unloaderRight}}</span></el-col>
                                </el-row>
                            </el-col>
                        </el-row>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="12" class="noborder">
                <el-card>
                    <div class="sheet">
                        <!--            背面-->
                        <el-row class="vcenter">
                            <el-col :span="1" ><span></span></el-col>
                            <el-col :span="23">
                                <el-row class="noborder">
                                    <el-col :span="4"><span>磁粉探伤者</span></el-col>
                                    <el-col :span="20">
                                        <el-col :span="4"><span>轴身</span></el-col>
                                        <el-col :span="4"><span></span></el-col>
                                        <el-col :span="4"><span>左颈</span></el-col>
                                        <el-col :span="4"><span>{{axleInspection&&axleInspection.magInspector}}</span></el-col>
                                        <el-col :span="4"><span>右颈</span></el-col>
                                        <el-col :span="4"><span>{{axleInspection&&axleInspection.magInspector}}</span></el-col>
                                    </el-col>
                                </el-row>
                            </el-col>
                        </el-row>
                        <el-row class="vcenter">
                            <el-col :span="1" class="noborder"><span>探伤</span></el-col>
                            <el-col :span="23" class="noborder">
                                <el-row class="notop-border">
                                    <el-row class="vcenter notop-border notop-left">
                                        <el-col :span="4" class="noborder"><span>超声波探伤者</span></el-col>
                                        <el-col :span="20" class="noborder">
                                            <el-row class="notop-border">
                                                <el-row class="noborder vcenter notop-border">
                                                    <el-col :span="4" class="noborder"><span>穿透</span></el-col>
                                                    <el-col :span="20" class="noborder">
                                                        <el-row class="notop-border vcenter">
                                                            <el-col :span="6" ><span>初探</span></el-col>
                                                            <el-col :span="18" class="noborder">
                                                                <el-col :span="12"><span>左:{{axleInspection&&axleInspection.worker}}</span></el-col>
                                                                <el-col :span="12" class="noborder"><span>右:{{axleInspection&&axleInspection.worker}}</span></el-col>
                                                            </el-col>
                                                        </el-row>
                                                        <el-row >
                                                            <el-col :span="6"><span>复探</span></el-col>
                                                            <el-col :span="18" class="noborder">
                                                                <el-col :span="12"><span>左:{{axleInspection&&axleInspection.reultInspector}}</span></el-col>
                                                                <el-col :span="12" class="noborder"><span>右:{{axleInspection&&axleInspection.reultInspector}}</span></el-col>
                                                            </el-col>
                                                        </el-row>
                                                    </el-col>
                                                </el-row>
                                                <el-row class="notop-left">
                                                    <el-col :span="4"><span>轮座</span></el-col>
                                                    <el-col :span="20" class="noborder">
                                                        <el-col :span="12" ><span>左:{{axleInspection&&axleInspection.worker}}</span></el-col>
                                                        <el-col :span="12" class="noborder"><span>右:{{axleInspection&&axleInspection.worker}}</span></el-col>
                                                    </el-col>
                                                </el-row>
                                                <el-row class="vcenter notop-left">
                                                    <el-col :span="4" class="noborder"><span>轴颈卸荷槽</span></el-col>
                                                    <el-col :span="20" class="noborder">
                                                        <el-row class="notop-border">
                                                            <el-col :span="6"><span>初探</span></el-col>
                                                            <el-col :span="18" class="noborder">
                                                                <el-col :span="12" ><span>左:{{axleInspection&&axleInspection.worker}}</span></el-col>
                                                                <el-col :span="12" class="noborder"><span>右:{{axleInspection&&axleInspection.worker}}</span></el-col>
                                                            </el-col>
                                                        </el-row>
                                                        <el-row>
                                                            <el-col :span="6"><span>复探</span></el-col>
                                                            <el-col :span="18" class="noborder">
                                                                <el-col :span="12" ><span>左:{{axleInspection&&axleInspection.reultInspector}}</span></el-col>
                                                                <el-col :span="12" class="noborder"><span>右:{{axleInspection&&axleInspection.reultInspector}}</span></el-col>
                                                            </el-col>
                                                        </el-row>
                                                    </el-col>
                                                </el-row>
                                            </el-row>
                                        </el-col>
                                    </el-row>
                                    <el-row class="notop-left">
                                        <el-col :span="8"><span>车轴轴颈及防尘板座复探者</span></el-col>
                                        <el-col :span="16" class="noborder">
                                            <el-col :span="12"><span>左:{{axleInspection&&axleInspection.reultInspector}}</span></el-col>
                                            <el-col :span="12"><span>右:{{axleInspection&&axleInspection.reultInspector}}</span></el-col>
                                        </el-col>
                                    </el-row>
                                </el-row>
                            </el-col>
                        </el-row>
                        <el-row class="vcenter">
                            <el-col :span="1" class="noborder"><span>轴承压装</span></el-col>
                            <el-col :span="23">
                                <el-row class="notop-border">
                                    <el-col :span="8"><span>项目</span></el-col>
                                    <el-col :span="4"><span>1</span></el-col>
                                    <el-col :span="4"><span>2</span></el-col>
                                    <el-col :span="4"><span>3</span></el-col>
                                    <el-col :span="4"><span>平均</span></el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="8" class="noborder vcenter">
                                        <el-col :span="12" class="noborder"><span>轴颈直径</span></el-col>
                                        <el-col :span="12" class="noborder">
                                            <el-row class="vcenter notop-border">
                                                <el-col :span="12" class="noborder vcenter"><span>左</span></el-col>
                                                <el-col :span="12" class="noborder">
                                                    <el-row class="notop-border">
                                                        <el-col :span="24" class="noborder"><span>1</span></el-col>
                                                    </el-row>
                                                    <el-row >
                                                        <el-col :span="24" class="noborder"><span>2</span></el-col>
                                                    </el-row>
                                                </el-col>
                                            </el-row>
                                            <el-row class="vcenter">
                                                <el-col :span="12" class="noborder vcenter"><span>右</span></el-col>
                                                <el-col :span="12" class="noborder">
                                                    <el-row class="notop-border">
                                                        <el-col :span="24" class="noborder"><span>1</span></el-col>
                                                    </el-row>
                                                    <el-row>
                                                        <el-col :span="24" class="noborder"><span>2</span></el-col>
                                                    </el-row>
                                                </el-col>
                                            </el-row>
                                        </el-col>
                                    </el-col>
                                    <el-col :span="4" class="noborder">
                                        <el-row class="notop-border notop-left"><span>{{bearingLoad&&bearingLoad.axleNeckDiameterLeftA1}}</span></el-row>
                                        <el-row class="notop-left"><span>{{bearingLoad&&bearingLoad.axleNeckDiameterLeftB1}}</span></el-row>
                                        <el-row class="notop-left"><span>{{bearingLoad&&bearingLoad.axleNeckDiameterRightA1}}</span></el-row>
                                        <el-row class="notop-left"><span>{{bearingLoad&&bearingLoad.axleNeckDiameterRightB1}}</span></el-row>
                                    </el-col>
                                    <el-col  :span="4" class="noborder">
                                        <el-row class="notop-border"><span>{{bearingLoad&&bearingLoad.axleNeckDiameterLeftA2}}</span></el-row>
                                        <el-row><span>{{bearingLoad&&bearingLoad.axleNeckDiameterLeftB2}}</span></el-row>
                                        <el-row><span>{{bearingLoad&&bearingLoad.axleNeckDiameterRightA2}}</span></el-row>
                                        <el-row><span>{{bearingLoad&&bearingLoad.axleNeckDiameterRightB2}}</span></el-row>
                                    </el-col>
                                    <el-col  :span="4" class="noborder">
                                        <el-row class="notop-border"><span>{{bearingLoad&&bearingLoad.axleNeckDiameterLeftA3}}</span></el-row>
                                        <el-row><span>{{bearingLoad&&bearingLoad.axleNeckDiameterLeftB3}}</span></el-row>
                                        <el-row><span>{{bearingLoad&&bearingLoad.axleNeckDiameterRightA3}}</span></el-row>
                                        <el-row><span>{{bearingLoad&&bearingLoad.axleNeckDiameterRightB3}}</span></el-row>
                                    </el-col>
                                    <el-col  :span="4" class="noborder">
                                        <el-row><span class="notop-border">{{bearingLoad&&bearingLoad.axleNeckDiameterLeftAvgA}}</span></el-row>
                                        <el-row><span>{{bearingLoad&&bearingLoad.axleNeckDiameterLeftAvgB}}</span></el-row>
                                        <el-row><span>{{bearingLoad&&bearingLoad.axleNeckDiameterRightAvgA}}</span></el-row>
                                        <el-row><span>{{bearingLoad&&bearingLoad.axleNeckDiameterRightAvgB}}</span></el-row>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="8" class="noborder vcenter">
                                        <el-col :span="12" class="noborder"><span>防尘座直径</span></el-col>
                                        <el-col :span="12" class="noborder">
                                            <el-row class="notop-border">
                                                <el-col :span="24" class="noborder"><span>左</span></el-col>
                                            </el-row>
                                            <el-row>
                                                <el-col :span="24" class="noborder"><span>左</span></el-col>
                                            </el-row>
                                        </el-col>
                                    </el-col>
                                    <el-col  :span="4" class="noborder">
                                        <el-row class="notop-border"><span>{{bearingLoad&&bearingLoad.neckFootDiameterLeft1}}</span></el-row>
                                        <el-row><span>{{bearingLoad&&bearingLoad.neckFootDiameterRight1}}</span></el-row>
                                    </el-col>
                                    <el-col  :span="4" class="noborder">
                                        <el-row class="notop-border"><span>{{bearingLoad&&bearingLoad.neckFootDiameterLeft2}}</span></el-row>
                                        <el-row><span>{{bearingLoad&&bearingLoad.neckFootDiameterRight2}}</span></el-row>
                                    </el-col>
                                    <el-col  :span="4" class="noborder">
                                        <el-row class="notop-border"><span>平均:{{bearingLoad&&bearingLoad.neckFootDiameterLeft1}}</span></el-row>
                                        <el-row><span>平均:{{bearingLoad&&bearingLoad.neckFootDiameterRight1}}</span></el-row>
                                    </el-col>
                                    <el-col  :span="4" class="noborder">
                                        <el-row class="notop-border"><span>圆度:{{bearingLoad&&bearingLoad.neckFootRoundnessLeft}}</span></el-row>
                                        <el-row><span>圆度:{{bearingLoad&&bearingLoad.neckFootRoundnessRight}}</span></el-row>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="8"><span>项目</span></el-col>
                                    <el-col :span="8"><span>左</span></el-col>
                                    <el-col :span="8"><span>右</span></el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="8"><span>轴承型号</span></el-col>
                                    <el-col :span="8"><span>{{bearingLoad&&bearingLoad.axleTypeLeft}}</span></el-col>
                                    <el-col :span="8"><span>{{bearingLoad&&bearingLoad.axleTypeRight}}</span></el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="8"><span>轴承内径平均值</span></el-col>
                                    <el-col :span="8"><span>{{bearingLoad&&bearingLoad.bearingInnerDiameterLeft}}</span></el-col>
                                    <el-col :span="8"><span>{{bearingLoad&&bearingLoad.bearingInnerDiameterRight}}</span></el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="8"><span>密封座内径</span></el-col>
                                    <el-col :span="8"><span>{{bearingLoad&&bearingLoad.sealDiameterLeft}}</span></el-col>
                                    <el-col :span="8"><span>{{bearingLoad&&bearingLoad.sealDiameterRight}}</span></el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="8" class="vcenter">
                                        <el-col :span="12" class="noborder"><span>后档</span></el-col>
                                        <el-col :span="12" class="noborder">
                                            <el-row class="notop-border">
                                                <el-col class="noborder"><span>内径</span></el-col>
                                            </el-row>
                                            <el-row >
                                                <el-col class="noborder"><span>圆度</span></el-col>
                                            </el-row>
                                        </el-col>
                                    </el-col>
                                    <el-col :span="8" class="noborder">
                                        <el-row class="noborder notop-left"><span>{{bearingLoad&&bearingLoad.backerInnerDiameterLeft}}</span></el-row>
                                        <el-row class="notop-left"><span>{{bearingLoad&&bearingLoad.backerRoundnessLeft}}</span></el-row>
                                    </el-col>
                                    <el-col :span="8" class="noborder">
                                        <el-row class="notop-border"><span>{{bearingLoad&&bearingLoad.backerInnerDiameterRight}}</span></el-row>
                                        <el-row><span>{{bearingLoad&&bearingLoad.backerRoundnessRight}}</span></el-row>
                                    </el-col>
                                </el-row>
                                <el-row class="vcenter">
                                    <el-col :span="8" class="noborder vcenter">
                                        <el-col :span="12" class="noborder"><span>过盈量</span></el-col>
                                        <el-col :span="12" class="noborder">
                                            <el-row class="notop-border">
                                                <el-col class="noborder"><span>轴承与轴颈</span></el-col>
                                            </el-row>
                                            <el-row>
                                                <el-col class="noborder"><span>密封座与轴颈</span></el-col>
                                            </el-row>
                                            <el-row>
                                                <el-col class="noborder"><span>后挡与防尘座</span></el-col>
                                            </el-row>
                                        </el-col>
                                    </el-col>
                                    <el-col :span="8" class="noborder">
                                        <el-row class="notop-border"><span>{{bearingLoad&&bearingLoad.fitBearing2NeckLeft}}</span></el-row>
                                        <el-row><span>{{bearingLoad&&bearingLoad.fitSeal2NeckLeft}}</span></el-row>
                                        <el-row><span>{{bearingLoad&&bearingLoad.fitSeal2BackerLeft}}</span></el-row>
                                    </el-col>
                                    <el-col :span="8" class="noborder">
                                        <el-row class="notop-border"><span>{{bearingLoad&&bearingLoad.fitBearing2NeckRight}}</span></el-row>
                                        <el-row><span>{{bearingLoad&&bearingLoad.fitSeal2NeckRight}}</span></el-row>
                                        <el-row><span>{{bearingLoad&&bearingLoad.fitSeal2BackerRight}}</span></el-row>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="8"><span>最大压装力</span></el-col>
                                    <el-col :span="8"><span>{{bearingLoad&&bearingLoad.maxPressureLeft}}</span></el-col>
                                    <el-col :span="8"><span>{{bearingLoad&&bearingLoad.maxPressureRight}}</span></el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="8"><span>终止贴合压力</span></el-col>
                                    <el-col :span="8"><span>{{bearingLoad&&bearingLoad.finalPressureLeft}}</span></el-col>
                                    <el-col :span="8"><span>{{bearingLoad&&bearingLoad.finalPressureRight}}</span></el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="8"><span>压装后轴向间隙</span></el-col>
                                    <el-col :span="8"><span>{{bearingLoad&&bearingLoad.axleGapLeft}}</span></el-col>
                                    <el-col :span="8"><span>{{bearingLoad&&bearingLoad.axleGapRight}}</span></el-col>
                                </el-row>
                                <el-row class="vcenter">
                                    <el-col :span="8" class="noborder"><span>新标志版内容</span></el-col>
                                    <el-col :span="8" class="noborder">
                                        <el-row class="notop-border">
                                            <el-col class="noborder"><span>A:{{bearingCap&&bearingCap.bearingAssemble1stLeft}} {{bearingCap&&bearingCap.bearingLevelLeft == '0'? '新造':'大修'}} {{bearingCap&&bearingCap.bearingmadeInLeft}}</span></el-col>
                                        </el-row>
                                        <el-row>
                                            <el-col class="noborder"><span>B: {{bearingCap&&bearingCap.wheelAssemble1st}}
                                                左 {{bearingCap&&bearingCap.axleNumber}}
                                            </span></el-col>
                                        </el-row>
                                        <el-row>
                                            <el-col class="noborder"><span>C:{{bearingCap&&bearingCap.bearingAssembleLeft}} {{bearingCap&&bearingCap.axleMadeDate}}
                                                {{bearingCap&&bearingCap.axleMaterial}} {{bearingCap&&bearingCap.axleMadeIn}}
                                            </span></el-col>
                                        </el-row>
                                        <el-row>
                                            <el-col class="noborder"><span>D:{{bearingCap&&bearingCap.bearingAssembleInLeft}} {{bearingCap&&bearingCap.repairLevelLeft == '0'? '新造':'大修'}}</span></el-col>
                                        </el-row>
                                    </el-col>
                                    <el-col :span="8" class="noborder">
                                        <el-row class="notop-border notop-left">
                                            <el-col class="noborder"><span>A:{{bearingCap&&bearingCap.bearingAssemble1stRight}} {{bearingCap&&bearingCap.bearingLevelRight == '0'? '新造':'大修'}} {{bearingCap&&bearingCap.bearingmadeInRight}}</span></el-col>
                                        </el-row>
                                        <el-row class="notop-left">
                                            <el-col ><span>B:{{bearingCap&&bearingCap.wheelAssemblelast}} {{bearingCap&&bearingCap.wheelAssembleIn}}</span></el-col>
                                        </el-row>
                                        <el-row class="notop-left">
                                            <el-col ><span>C:{{bearingCap&&bearingCap.bearingAssembleRight}}</span></el-col>
                                        </el-row>
                                        <el-row class="notop-left">
                                            <el-col ><span>D:{{bearingCap&&bearingCap.bearingAssembleInRight}} {{bearingCap&&bearingCap.repairLevelRight == '0'? '新造':'大修'}}</span></el-col>
                                        </el-row>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="8"><span>施封标记</span></el-col>
                                    <el-col :span="8"><span>{{bearingCap&&bearingCap.sealMarkLeft == '0'? '不良':'良好'}}</span></el-col>
                                    <el-col :span="8"><span>{{bearingCap&&bearingCap.sealMarkRight == '0'? '不良':'良好'}}</span></el-col>
                                </el-row>
                                <el-row class="vcenter">
                                    <el-col :span="8" class="noborder vcenter">
                                        <el-col :span="12" class="noborder"><span>轴承磨合试验</span></el-col>
                                        <el-col :span="12" class="noborder">
                                            <el-row class="notop-border">
                                                <el-col class="noborder"><span>环温</span></el-col>
                                            </el-row>
                                            <el-row>
                                                <el-col class="noborder"><span>最高温</span></el-col>
                                            </el-row>
                                            <el-row>
                                                <el-col class="noborder"><span>温升</span></el-col>
                                            </el-row>
                                        </el-col>
                                    </el-col>
                                    <el-col :span="8" class="noborder">
                                        <el-row class="notop-border notop-left"><span>{{bearingTest&&bearingTest.envTemperatureLeft}}</span></el-row>
                                        <el-row class="notop-left"><span>{{bearingTest&&bearingTest.highestTempLeft}}</span></el-row>
                                        <el-row class="notop-left"><span>{{bearingTest&&bearingTest.temperatureRiseLeft}}</span></el-row>
                                    </el-col>
                                    <el-col :span="8" class="noborder">
                                        <el-row class="noborder"><span>{{bearingTest&&bearingTest.envTemperatureLeft}}</span></el-row>
                                        <el-row class="notop-left"><span>{{bearingTest&&bearingTest.highestTempRight}}</span></el-row>
                                        <el-row class="notop-left"><span>{{bearingTest&&bearingTest.temperatureRiseRight}}</span></el-row>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="1"><span>1</span></el-col>
                                    <el-col :span="3"><span>选配者</span></el-col>
                                    <el-col :span="3"><span>压装者</span></el-col>
                                    <el-col :span="3"><span>关盖者</span></el-col>
                                    <el-col :span="3"><span>工长</span></el-col>
                                    <el-col :span="3"><span>质检</span></el-col>
                                    <el-col :span="4"><span>验收员</span></el-col>
                                    <el-col :span="4"><span>修竣日期</span></el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="1" class="noborder">
                                        <el-row class="notop-border notop-left"><span>左</span></el-row>
                                        <el-row class="notop-left"><span>右</span></el-row>
                                    </el-col>
                                    <el-col :span="3" class="noborder">
                                        <el-row class="notop-border notop-left"><span>{{bearingLoad&&bearingLoad.matcherLeft}}</span></el-row>
                                        <el-row class="notop-left"><span>{{bearingLoad&&bearingLoad.matcherRight}}</span></el-row>
                                    </el-col>
                                    <el-col :span="3" class="noborder">
                                        <el-row class="notop-border notop-left"><span>'{{bearingLoad&&bearingLoad.loaderLeft}}'</span></el-row>
                                        <el-row class="notop-left"><span>{{bearingLoad&&bearingLoad.loaderRight}}</span></el-row>
                                    </el-col>
                                    <el-col :span="3" class="noborder">
                                        <el-row class="notop-border notop-left"><span>{{bearingCap&&bearingCap.worker}}</span></el-row>
                                        <el-row class="notop-left"><span>{{bearingCap&&bearingCap.worker}}</span></el-row>
                                    </el-col>
                                    <el-col :span="3"><span>工长</span></el-col>
                                    <el-col :span="3"><span>{{wheelDispatch&&wheelDispatch.qualityInspector}}</span></el-col>
                                    <el-col :span="4"><span>验收员</span></el-col>
                                    <el-col :span="4"><span>{{wheelDispatch&&wheelDispatch.qualityInspectFinishTime}}</span></el-col>
                                </el-row>
                            </el-col>
                        </el-row>
                        <el-row class="vcenter">
                            <el-col :span="1" class="noborder"><span>支出</span></el-col>
                            <el-col :span="23">
                                <el-row class="notop-border">
                                    <el-col :span="3" ><span>最终:</span></el-col>
                                    <el-col :span="21" >
                                        <span>车型车号:{{wheelDispatch&&wheelDispatch.vehicleType}}</span>
                                        <span>车号:{{wheelDispatch&&wheelDispatch.vehicleNumber}}</span>
                                        <span>轴位:{{wheelDispatch&&wheelDispatch.axlePosition}}</span>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="3"><span>中间</span></el-col>
                                    <el-col :span="21"><span>支出处所:</span><span>支出原因:</span></el-col>
                                </el-row>
                                <el-row>
                                    <el-col><span>检查者:</span></el-col>
                                </el-row>
                            </el-col>
                        </el-row>
                        <el-row class="vcenter">
                            <el-col :span="1" class="noborder"><span>状态</span></el-col>
                            <el-col :span="23">
                                <el-row class="notop-border">
                                    <el-col><span>轮对状态:</span></el-col>
                                </el-row>
                            </el-col>
                        </el-row>
                        <el-row class="vcenter">
                            <el-col :span="1"  class="noborder"><span>计时</span></el-col>
                            <el-col :span="23" >
                                <el-row class="notop-border">
                                    <el-col><span>1</span></el-col>
                                </el-row>
                            </el-col>
                        </el-row>

                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Card from "./card";
    export default {
        name: "bearingLoadTable",
        components: {Card},
        props:{
            showinfo:Object
        },
        data(){
            return{
                wheelInfo: {},
                wheelMeasure: {},
                bearingRepair: {},
                axleInspection: {},
                wheelRound: {},
                bearingCap:{},
                bearingLoad:{},
                bearingTest:{},
                wheelDispatch:{}

            }
        },
        mounted() {
            this.wheelInfo = this.showinfo.wheelInfo;
            this.wheelMeasure = this.showinfo.wheelMeasure;
            this.wheelDispatch = this.showinfo.wheelDispatch;
            this.bearingRepair = this.showinfo.bearingRepair;
            this.axleInspection = this.showinfo.axleInspection;
            this.bearingLoad = this.showinfo.bearingLoad;
            this.bearingTest = this.showinfo.bearingTest;
            this.bearingCap = this.showinfo.bearingCap;
            this.wheelRound = this.showinfo.wheelRound;
        }
    }
</script>

<style lang="scss" scoped>
    .el-row{
        padding: 0;
        margin: 0;
        border: 1px solid black;
        border-bottom: none;
    }
    .el-col{
        padding: 0;
        margin: 0;
        border-right:1px solid black;
    }
    .sheet{
        font-size: 14px;
        width: 620px;

    }
    .vcenter{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .noborder{
        border: none;
    }
    .notop-border{
        border-top: none;
    }
    .notop-left{
        border-left: none;
    }
    .title{
       font-size: 30px;
       font-weight: bold;
       text-align: center;
    }
</style>
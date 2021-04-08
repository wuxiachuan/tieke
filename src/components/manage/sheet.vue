<template>
    <el-card>
        <div class="sheet">
            <el-row><span>轮轴卡片</span><span>No.单号</span></el-row>
            <el-row class="vcenter">
                <el-col :span="1" class="noborder"><span>收入基本情况</span></el-col>
                <el-col :span="23" class="noborder">
                    <el-row>
                        <el-col :span="12" ><span>收入单位</span></el-col>
                        <el-col :span="12"><span>收入日期</span></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12"><span>收入原因</span></el-col>
                        <el-col :span="12"><span>收入车型车号</span></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="6"><span>轴号</span></el-col>
                        <el-col :span="6"><span>轴型及材质</span></el-col>
                        <el-col :span="6"><span>轮型及材质</span></el-col>
                        <el-col :span="6"><span>轴等级</span></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="6"><span>车轴制造</span></el-col>
                        <el-col :span="6"><span>年月日</span></el-col>
                        <el-col :span="6"><span>单位</span></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="6"><span>轮对首次组装</span></el-col>
                        <el-col :span="6"><span>年月日</span></el-col>
                        <el-col :span="6"><span>单位</span></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="6"><span>轮对末次组装</span></el-col>
                        <el-col :span="6"><span>年月日</span></el-col>
                        <el-col :span="6"><span>单位</span></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="6"><span>车轮标记</span></el-col>
                        <el-col :span="6"><span>左</span></el-col>
                        <el-col :span="6"><span>右</span></el-col>
                    </el-row>
                </el-col>
            </el-row>
            <el-row class="vcenter" >
                <el-col :span="1" class="noborder"><span>项目</span></el-col>
                <el-col :span="23">
                    <el-col :span="12" class="noborder">
                        <el-row >
                            <el-col class="noborder"><span>收入尺寸</span></el-col>
                        </el-row>
                        <el-row >
                            <el-col :span="12"><span>左</span></el-col>
                            <el-col :span="12" class="noborder"><span>右</span></el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="12" class="noborder">
                        <el-row ><span>支出尺寸</span></el-row>
                        <el-row >
                            <el-col :span="12" ><span>左</span></el-col>
                            <el-col :span="12" class="noborder"><span>右</span></el-col>
                        </el-row>
                    </el-col>
                </el-col>
            </el-row>
            <el-row class="vcenter">
                <el-col :span="1"><span>车轴直径</span></el-col>
                <el-col :span="23"><span></span></el-col>
            </el-row>
            <el-row class="vcenter">
                <el-col :span="1" class="noborder"><span>车轮</span></el-col>
                <el-col :span="23">
                    <el-row>
                        <el-col :span="4"><span>直径</span></el-col>
                        <el-col :span="5"><span>1</span></el-col>
                        <el-col :span="5"><span>1</span></el-col>
                        <el-col :span="5"><span>1</span></el-col>
                        <el-col :span="5" class="noborder"><span>1</span></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4"><span>轮辋厚</span></el-col>
                        <el-col :span="5"><span>1</span></el-col>
                        <el-col :span="5"><span>1</span></el-col>
                        <el-col :span="5"><span>1</span></el-col>
                        <el-col :span="5" class="noborder"><span>1</span></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4"><span>轮缘厚</span></el-col>
                        <el-col :span="5"><span>1</span></el-col>
                        <el-col :span="5"><span>1</span></el-col>
                        <el-col :span="5"><span>1</span></el-col>
                        <el-col :span="5" class="noborder"><span>1</span></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4"><span>轮辋宽</span></el-col>
                        <el-col :span="5"><span>1</span></el-col>
                        <el-col :span="5"><span>1</span></el-col>
                        <el-col :span="5"><span>1</span></el-col>
                        <el-col :span="5" class="noborder"><span>1</span></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4"><span>轮对内距</span></el-col>
                        <el-col :span="5"><span>1</span></el-col>
                        <el-col :span="5"><span>1</span></el-col>
                        <el-col :span="5"><span>1</span></el-col>
                        <el-col :span="5" class="noborder"><span>1</span></el-col>
                    </el-row>
                </el-col>
            </el-row>
            <el-row class="vcenter">
                <el-col :span="1" class="noborder"><span>轮对</span></el-col>
                <el-col :span="23">
                    <el-row>
                        <el-col :span="4"><span>故障情况</span></el-col>
                        <el-col :span="20"><span>1</span></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4"><span>修程</span></el-col>
                        <el-col :span="3"><span>送厂</span></el-col>
                        <el-col :span="3"><span>旋面</span></el-col>
                        <el-col :span="3"><span>超探</span></el-col>
                        <el-col :span="3"><span>1</span></el-col>
                        <el-col :span="3"><span>检查者</span></el-col>
                        <el-col :span="5"><span>1</span></el-col>
                    </el-row>
                </el-col>
            </el-row>
            <el-row class="vcenter">
                <el-col :span="1" class="noborder"><span>滚动轴承</span></el-col>
                <el-col :span="23">
                    <el-row>
                        <el-col :span="4"><span>轴承型号</span></el-col>
                        <el-col :span="10"><span>左</span></el-col>
                        <el-col :span="10" class="noborder"><span>右</span></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4"><span>项目</span></el-col>
                        <el-col :span="10"><span>左</span></el-col>
                        <el-col :span="10" class="noborder"><span>右</span></el-col>
                    </el-row>
                    <el-row class="vcenter">
                        <el-col :span="4" class="noborder"><span>轴端标志版内容</span></el-col>
                        <el-col :span="10" class="noborder">
                            <el-row :span="12"><span>A</span></el-row>
                            <el-row :span="12"><span>B</span></el-row>
                            <el-row :span="12"><span>C</span></el-row>
                            <el-row :span="12"><span>D</span></el-row>
                        </el-col>
                        <el-col :span="10" class="noborder">
                            <el-row :span="12"><span>A</span></el-row>
                            <el-row :span="12"><span>B</span></el-row>
                            <el-row :span="12"><span>C</span></el-row>
                            <el-row :span="12"><span>D</span></el-row>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4"><span>施封状态</span></el-col>
                        <el-col :span="10"><span>良好</span></el-col>
                        <el-col :span="10"><span>良好</span></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4"><span>施封状态</span></el-col>
                        <el-col :span="10"><span>良好</span></el-col>
                        <el-col :span="10"><span>良好</span></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4"><span>施封状态</span></el-col>
                        <el-col :span="10"><span>良好</span></el-col>
                        <el-col :span="10"><span>良好</span></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4"><span>轴向游隙</span></el-col>
                        <el-col :span="10"><span>1</span></el-col>
                        <el-col :span="10"><span>1</span></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4"><span>外观状态</span></el-col>
                        <el-col :span="10"><span>1</span></el-col>
                        <el-col :span="10"><span>1</span></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4"><span>开盖原因</span></el-col>
                        <el-col :span="10"><span>1</span></el-col>
                        <el-col :span="10"><span>1</span></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4"><span>退卸原因</span></el-col>
                        <el-col :span="10"><span>1</span></el-col>
                        <el-col :span="10"><span>1</span></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4"><span>推卸日期</span></el-col>
                        <el-col :span="10"><span>1</span></el-col>
                        <el-col :span="10"><span>1</span></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4"><span>新造</span></el-col>
                        <el-col :span="10"><span>工长</span><span>日期</span></el-col>
                        <el-col :span="10"><span>工长</span><span>日期</span></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4"><span>大修</span></el-col>
                        <el-col :span="10"><span>工长</span><span>日期</span></el-col>
                        <el-col :span="10"><span>工长</span><span>日期</span></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4"><span>修程</span></el-col>
                        <el-col :span="10"><span>报废</span></el-col>
                        <el-col :span="10"><span>报废</span></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4"><span>检查者</span></el-col>
                        <el-col :span="5"><span>1</span></el-col>
                        <el-col :span="5"><span>开盖者</span></el-col>
                        <el-col :span="5"><span>左</span></el-col>
                        <el-col :span="5"><span>右</span></el-col>
                    </el-row>
                </el-col>
            </el-row>
<!--            背面-->
            <el-row class="vcenter">
                <el-col :span="1" ><span>探伤</span></el-col>
                <el-col :span="23">
                    <el-row class="noborder">
                        <el-col :span="4"><span>车轴磁粉探伤者</span></el-col>
                        <el-col :span="20">
                            <el-col :span="4"><span>轴身</span></el-col>
                            <el-col :span="4"><span>1</span></el-col>
                            <el-col :span="4"><span>左颈</span></el-col>
                            <el-col :span="4"><span>1</span></el-col>
                            <el-col :span="4"><span>右颈</span></el-col>
                            <el-col :span="4"><span>1</span></el-col>
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
                                                    <el-col :span="12"><span>左</span></el-col>
                                                    <el-col :span="12" class="noborder"><span>右</span></el-col>
                                                </el-col>
                                            </el-row>
                                            <el-row >
                                                <el-col :span="6"><span>复探</span></el-col>
                                                <el-col :span="18" class="noborder">
                                                    <el-col :span="12"><span>左</span></el-col>
                                                    <el-col :span="12" class="noborder"><span>右</span></el-col>
                                                </el-col>
                                            </el-row>
                                        </el-col>
                                    </el-row>
                                    <el-row class="notop-left">
                                        <el-col :span="4"><span>轮座</span></el-col>
                                        <el-col :span="20" class="noborder">
                                            <el-col :span="12" ><span>左</span></el-col>
                                            <el-col :span="12" class="noborder"><span>右</span></el-col>
                                        </el-col>
                                    </el-row>
                                    <el-row class="vcenter notop-left">
                                        <el-col :span="4" class="noborder"><span>轴颈卸荷槽</span></el-col>
                                        <el-col :span="20" class="noborder">
                                            <el-row class="notop-border">
                                                <el-col :span="6"><span>初探</span></el-col>
                                                <el-col :span="18" class="noborder">
                                                    <el-col :span="12" ><span>左</span></el-col>
                                                    <el-col :span="12" class="noborder"><span>右</span></el-col>
                                                </el-col>
                                            </el-row>
                                            <el-row>
                                                <el-col :span="6"><span>复探</span></el-col>
                                                <el-col :span="18" class="noborder">
                                                    <el-col :span="12" ><span>左</span></el-col>
                                                    <el-col :span="12" class="noborder"><span>右</span></el-col>
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
                                <el-col :span="12"><span>左</span></el-col>
                                <el-col :span="12"><span>右</span></el-col>
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
                            <el-row class="notop-border notop-left"><span>1</span></el-row>
                            <el-row class="notop-left"><span>1</span></el-row>
                            <el-row class="notop-left"><span>1</span></el-row>
                            <el-row class="notop-left"><span>1</span></el-row>
                        </el-col>
                        <el-col  :span="4" class="noborder">
                            <el-row class="notop-border"><span>1</span></el-row>
                            <el-row><span>1</span></el-row>
                            <el-row><span>1</span></el-row>
                            <el-row><span>1</span></el-row>
                        </el-col>
                        <el-col  :span="4" class="noborder">
                            <el-row class="notop-border"><span>1</span></el-row>
                            <el-row><span>1</span></el-row>
                            <el-row><span>1</span></el-row>
                            <el-row><span>1</span></el-row>
                        </el-col>
                        <el-col  :span="4" class="noborder">
                            <el-row><span class="notop-border">1</span></el-row>
                            <el-row><span>1</span></el-row>
                            <el-row><span>1</span></el-row>
                            <el-row><span>1</span></el-row>
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
                            <el-row class="notop-border"><span>1</span></el-row>
                            <el-row><span>1</span></el-row>
                        </el-col>
                        <el-col  :span="4" class="noborder">
                            <el-row class="notop-border"><span>1</span></el-row>
                            <el-row><span>1</span></el-row>
                        </el-col>
                        <el-col  :span="4" class="noborder">
                            <el-row class="notop-border"><span>1</span></el-row>
                            <el-row><span>1</span></el-row>
                        </el-col>
                        <el-col  :span="4" class="noborder">
                            <el-row class="notop-border"><span>1</span></el-row>
                            <el-row><span>1</span></el-row>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="8"><span>项目</span></el-col>
                        <el-col :span="8"><span>左</span></el-col>
                        <el-col :span="8"><span>右</span></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="8"><span>轴承型号</span></el-col>
                        <el-col :span="8"><span>1</span></el-col>
                        <el-col :span="8"><span>2</span></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="8"><span>轴承内径平均值</span></el-col>
                        <el-col :span="8"><span>1</span></el-col>
                        <el-col :span="8"><span>1</span></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="8"><span>密封座内径</span></el-col>
                        <el-col :span="8"><span>1</span></el-col>
                        <el-col :span="8"><span>1</span></el-col>
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
                            <el-row class="noborder notop-left"><span>1</span></el-row>
                            <el-row class="notop-left"><span>1</span></el-row>
                        </el-col>
                        <el-col :span="8" class="noborder">
                            <el-row class="notop-border"><span>1</span></el-row>
                            <el-row><span>1</span></el-row>
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
                            <el-row class="notop-border"><span>1</span></el-row>
                            <el-row><span>1</span></el-row>
                            <el-row><span>1</span></el-row>
                        </el-col>
                        <el-col :span="8" class="noborder">
                            <el-row class="notop-border"><span>1</span></el-row>
                            <el-row><span>1</span></el-row>
                            <el-row><span>1</span></el-row>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="8"><span>最大压装力</span></el-col>
                        <el-col :span="8"><span>1</span></el-col>
                        <el-col :span="8"><span>2</span></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="8"><span>终止贴合压力</span></el-col>
                        <el-col :span="8"><span>1</span></el-col>
                        <el-col :span="8"><span>1</span></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="8"><span>压装后轴向间隙</span></el-col>
                        <el-col :span="8"><span>1</span></el-col>
                        <el-col :span="8"><span>1</span></el-col>
                    </el-row>
                    <el-row class="vcenter">
                        <el-col :span="8" class="noborder"><span>新标志版内容</span></el-col>
                        <el-col :span="8" class="noborder">
                            <el-row class="notop-border">
                                <el-col class="noborder"><span>A</span></el-col>
                            </el-row>
                            <el-row>
                                <el-col class="noborder"><span>B</span></el-col>
                            </el-row>
                            <el-row>
                                <el-col class="noborder"><span>C</span></el-col>
                            </el-row>
                            <el-row>
                                <el-col class="noborder"><span>D</span></el-col>
                            </el-row>
                        </el-col>
                        <el-col :span="8" class="noborder">
                            <el-row class="notop-border notop-left">
                                <el-col class="noborder"><span>A</span></el-col>
                            </el-row>
                            <el-row class="notop-left">
                                <el-col ><span>B</span></el-col>
                            </el-row>
                            <el-row class="notop-left">
                                <el-col ><span>C</span></el-col>
                            </el-row>
                            <el-row class="notop-left">
                                <el-col ><span>D</span></el-col>
                            </el-row>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="8"><span>施封标记</span></el-col>
                        <el-col :span="8"><span>1</span></el-col>
                        <el-col :span="8"><span>1</span></el-col>
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
                            <el-row class="notop-border notop-left"><span>1</span></el-row>
                            <el-row class="notop-left"><span>1</span></el-row>
                            <el-row class="notop-left"><span>1</span></el-row>
                        </el-col>
                        <el-col :span="8" class="noborder">
                            <el-row class="noborder"><span>1</span></el-row>
                            <el-row class="notop-left"><span>1</span></el-row>
                            <el-row class="notop-left"><span>1</span></el-row>
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
                            <el-row class="notop-border notop-left"><span>1</span></el-row>
                            <el-row class="notop-left"><span>1</span></el-row>
                        </el-col>
                        <el-col :span="3" class="noborder">
                            <el-row class="notop-border notop-left"><span>1</span></el-row>
                            <el-row class="notop-left"><span>1</span></el-row>
                        </el-col>
                        <el-col :span="3" class="noborder">
                            <el-row class="notop-border notop-left"><span>1</span></el-row>
                            <el-row class="notop-left"><span>1</span></el-row>
                        </el-col>
                        <el-col :span="3"><span>工长</span></el-col>
                        <el-col :span="3"><span>质检</span></el-col>
                        <el-col :span="4"><span>验收员</span></el-col>
                        <el-col :span="4"><span>修竣日期</span></el-col>
                    </el-row>
                </el-col>
            </el-row>
            <el-row class="vcenter">
                <el-col :span="1" class="noborder"><span>支出</span></el-col>
                <el-col :span="23">
                    <el-row class="notop-border">
                        <el-col :span="3" ><span>最终</span></el-col>
                        <el-col :span="27" ><span>最终</span><span>最终</span></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="3"><span>最终</span></el-col>
                        <el-col :span="27"><span>最终</span><span>最终</span></el-col>
                    </el-row>
                    <el-row>
                        <el-col><span>最终</span><span>最终</span></el-col>
                    </el-row>
                </el-col>
            </el-row>
            <el-row class="vcenter">
                <el-col :span="1" class="noborder"><span>状态</span></el-col>
                <el-col :span="23">
                    <el-row class="notop-border">
                        <el-col><span>最终</span><span>最终</span></el-col>
                    </el-row>
                </el-col>
            </el-row>
            <el-row class="vcenter">
                <el-col :span="1"  class="noborder"><span>计时</span></el-col>
                <el-col :span="23" >
                    <el-row class="notop-border">
                        <el-col><span>最终</span><span>最终</span></el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
    </el-card>
</template>

<script>
    export default {
        name: "sheet"
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
        width: 800px;

    }
    .vcenter{
        display: flex;
        justify-content: center;
        align-items: center;
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

</style>
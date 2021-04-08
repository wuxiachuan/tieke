<template>
    <div>
        <!--        面包屑导航条-->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>轮对支出</el-breadcrumb-item>
            <el-breadcrumb-item>按车选配</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card>
            <el-row>
                <el-row :gutter="5">
                    <el-form :model="searchVehicle"  ref="vehicleForm" >
                        <el-col :span="4">
                            <el-form-item prop="Id">
                                <el-input v-model="searchVehicle.Id" placeholder="Id" clearable></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item prop="vehicleNumber">
                                <el-input v-model="searchVehicle.vehicleNumber" placeholder="车号" clearable></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item prop="vehicleType">
                                <el-select v-model="searchVehicle.vehicleType" placeholder="车型" clearable>
                                    <el-option label="C70" value="C70"></el-option>
                                    <el-option label="C64" value="C64"></el-option>
                                    <el-option label="P64" value="P64"></el-option>
                                    <el-option label="P70" value="P70"></el-option>
                                    <el-option label="Q70" value="Q70"></el-option>
                                    <el-option label="Q60" value="Q60"></el-option>
                                    <el-option label="NX70" value="NX70"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>

                        <el-col :span="4">
                            <el-form-item prop="RepairDate">
                                <el-date-picker
                                        type="date"
                                        placeholder="检修日期"
                                        v-model="searchVehicle.RepairDate"
                                        format="yyyy 年 MM 月 dd 日"
                                        value-format="yyyy-MM-dd"
                                        style="width: 100%;"></el-date-picker>
                            </el-form-item>
                        </el-col>

                        <el-col :span="8">
                            <el-button type="primary" @click="searchVehicleInfo('searchForm')" >查询</el-button>
                            <el-button  @click="resetSearchInfo('searchForm')" >重置</el-button>
                            <el-button  @click="autoMatchBatch" >自动匹配</el-button>
                            <el-button  @click="handMatchBatch" >手动匹配</el-button>
                            <el-button  @click="sumitMatch" >提交</el-button>
                        </el-col>
                    </el-form>
                </el-row>
            </el-row>
            <el-table :data="vehicleList" ref="multipleTable"
                      style="width: 100%" height="600"
                      tooltip-effect="dark"
                      @selection-change="handleSelectionChange"
                      :default-sort = "{prop: 'id', order: 'descending'}" border stripe>
                <el-table-column
                        type="selection"
                        width="36">
                </el-table-column>
                <el-table-column type="expand">
                    <template slot-scope="props">
                        <el-row>
                            <el-col :span="1">{{ props.row.in1 && props.row.in1.axleNumber ? "轴位" : "轴位"}}</el-col>
                            <el-col :span="2">{{ props.row.in1 && props.row.in1.axleNumber ? "收入日期" : "收入日期"}}</el-col>
                            <el-col :span="2">{{ props.row.in1 && props.row.in1.axleNumber ? "轴号" : "轴号"}}</el-col>
                            <el-col :span="2">{{ props.row.in1 && props.row.in1.axleNumber ? "轴型" : "轴型"}}</el-col>
                            <el-col :span="5">{{ props.row.in1 && props.row.in1.axleNumber ? "轴材质" : "轴材质"}}</el-col>
                            <el-col :span="2">{{ props.row.in1 && props.row.in1.axleNumber ? "收入日期" : "收入日期"}}</el-col>
                            <el-col :span="2">{{ props.row.in1 && props.row.in1.axleNumber ? "轴号" : "轴号"}}</el-col>
                            <el-col :span="2">{{ props.row.in1 && props.row.in1.axleNumber ? "轴型" : "轴型"}}</el-col>
                            <el-col :span="2">{{ props.row.in1 && props.row.in1.axleNumber ? "轴材质" : "轴材质"}}</el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="1">{{ props.row.in1 && props.row.in1.axleNumber ? "1" : "1"}}</el-col>
                            <el-col :span="2">{{ props.row.in1 && props.row.in1.takeInDate ? props.row.in1.takeInDate : "0000-00-00"}}</el-col>
                            <el-col :span="2">{{ props.row.in1 && props.row.in1.axleNumber ? props.row.in1.axleNumber : "null"}}</el-col>
                            <el-col :span="2">{{ props.row.in1 && props.row.in1.axleType ? props.row.in1.axleType : "null"}}</el-col>
                            <el-col :span="5">{{ props.row.in1 && props.row.in1.axleMaterial ? props.row.in1.axleMaterial : "null"}}</el-col>
                            <el-col :span="2">{{ props.row.out1 && props.row.out1.takeInDate ? props.row.out1.takeInDate : "0000-00-00" }}</el-col>
                            <el-col :span="2">{{ props.row.out1 && props.row.out1.axleNumber ? props.row.out1.axleNumber : "null" }}</el-col>
                            <el-col :span="2">{{ props.row.out1 && props.row.out1.axleType ? props.row.out1.axleType : "null" }}</el-col>
                            <el-col :span="2">{{ props.row.out1 && props.row.out1.axleMaterial ? props.row.out1.axleMaterial : "null" }}</el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="1">{{ props.row.in1 && props.row.in1.axleNumber ? "2" : "2"}}</el-col>
                            <el-col :span="2">{{ props.row.in2 && props.row.in2.takeInDate ? props.row.in2.takeInDate : "0000-00-00"}}</el-col>
                            <el-col :span="2">{{ props.row.in2 && props.row.in2.axleNumber ? props.row.in2.axleNumber : "null"}}</el-col>
                            <el-col :span="2">{{ props.row.in2 && props.row.in2.axleType ? props.row.in2.axleType : "null"}}</el-col>
                            <el-col :span="5">{{ props.row.in2 && props.row.in2.axleMaterial ? props.row.in2.axleMaterial : "null"}}</el-col>
                            <el-col :span="2">{{ props.row.out2 && props.row.out2.takeInDate ? props.row.out2.takeInDate : "0000-00-00" }}</el-col>
                            <el-col :span="2">{{ props.row.out2 && props.row.out2.axleNumber ? props.row.out2.axleNumber : "null" }}</el-col>
                            <el-col :span="2">{{ props.row.out2 && props.row.out2.axleType ? props.row.out2.axleType : "null" }}</el-col>
                            <el-col :span="2">{{ props.row.out2 && props.row.out2.axleMaterial ? props.row.out2.axleMaterial : "null" }}</el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="1">{{ props.row.in1 && props.row.in1.axleNumber ? "3" : "3"}}</el-col>
                            <el-col :span="2">{{ props.row.in3 && props.row.in3.takeInDate ? props.row.in3.takeInDate : "0000-00-00"}}</el-col>
                            <el-col :span="2">{{ props.row.in3 && props.row.in3.axleNumber ? props.row.in3.axleNumber : "null"}}</el-col>
                            <el-col :span="2">{{ props.row.in3 && props.row.in3.axleType ? props.row.in3.axleType : "null"}}</el-col>
                            <el-col :span="5">{{ props.row.in3 && props.row.in3.axleMaterial ? props.row.in3.axleMaterial : "null"}}</el-col>
                            <el-col :span="2">{{ props.row.out3 && props.row.out3.takeInDate ? props.row.out3.takeInDate : "0000-00-00" }}</el-col>
                            <el-col :span="2">{{ props.row.out3 && props.row.out3.axleNumber ? props.row.out3.axleNumber : "null" }}</el-col>
                            <el-col :span="2">{{ props.row.out3 && props.row.out3.axleType ? props.row.out3.axleType : "null" }}</el-col>
                            <el-col :span="2">{{ props.row.out3 && props.row.out3.axleMaterial ? props.row.out3.axleMaterial : "null" }}</el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="1">{{ props.row.in1 && props.row.in1.axleNumber ? "4" : "4"}}</el-col>
                            <el-col :span="2">{{ props.row.in4 && props.row.in4.takeInDate ? props.row.in4.takeInDate : "0000-00-00"}}</el-col>
                            <el-col :span="2">{{ props.row.in4 && props.row.in4.axleNumber ? props.row.in4.axleNumber : "null"}}</el-col>
                            <el-col :span="2">{{ props.row.in4 && props.row.in4.axleType ? props.row.in4.axleType : "null"}}</el-col>
                            <el-col :span="5">{{ props.row.in4 && props.row.in4.axleMaterial ? props.row.in4.axleMaterial : "null"}}</el-col>
                            <el-col :span="2">{{ props.row.out4 && props.row.out4.takeInDate ? props.row.out4.takeInDate : "0000-00-00" }}</el-col>
                            <el-col :span="2">{{ props.row.out4 && props.row.out4.axleNumber ? props.row.out4.axleNumber : "null" }}</el-col>
                            <el-col :span="2">{{ props.row.out4 && props.row.out4.axleType ? props.row.out4.axleType : "null" }}</el-col>
                            <el-col :span="2">{{ props.row.out4 && props.row.out4.axleMaterial ? props.row.out4.axleMaterial : "null" }}</el-col>
                        </el-row>
                    </template>
                </el-table-column>
                <el-table-column prop="id" label="ID" width="80" sortable></el-table-column>
                <el-table-column prop="vehicleNumber" label="车号" width="200" sortable ></el-table-column>
                <el-table-column prop="vehicleType" label="车型" width="150" sortable ></el-table-column>
                <el-table-column prop="preOverhaul" label="修程" width="100" sortable ></el-table-column>
                <el-table-column prop="NextOverhaul" label="台位" width="100"sortable></el-table-column>
                <el-table-column prop="repairDate" label="入线次数"  sortable ></el-table-column>
                <el-table-column prop="isFinish" label="完工状态" sortable>
                    <template slot-scope="scope">
                        <span v-if="scope.row.isFinish=='0'" >未完工</span>
                        <span v-if="scope.row.isFinish=='1'" >已完工</span>
                    </template>
                </el-table-column>
                <el-table-column prop="offset" label="调整" >
                    <template slot-scope="scope">
                        <el-input size="mini" v-model="scope.row.offset" clearable></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        width="200">
                    <template slot-scope="scope">
                        <el-button
                                @click.native.prevent="autoMatch(scope.row)"
                                type="primary"
                                size="small">
                            自动匹配
                        </el-button>
                        <el-button
                                @click.native.prevent="handMatch(scope.row)"
                                type="primary"
                                size="small">
                            手动匹配
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="pagesInfo.page"
                    :page-sizes="[10,15,20,25]"
                    :page-size="pagesInfo.size"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="total">
            </el-pagination>
            <el-dialog
                    title="手动匹配"
                    :visible.sync="matchTableVisible"
                    :before-close="handleClose"
                    width="100%"
            >
                <el-row >
                    <el-col :span="10" class="vcenter">
                        <el-row>
                            <el-card style="padding: 0px">
                                <div class="item head hee">
                                    <span class="he1">序</span>
                                    <span class="he2">车型</span>
                                    <span class="he3">车号</span>
                                    <span class="he4">轮径L</span>
                                    <span class="he5">轮径H</span>
                                    <span class="he6">轴承寿命</span>
                                    <span class="he7">轮对寿命</span>
                                </div>
                                <ul class="container" style="height: 640px">
                                    <li v-for="(item,index) in data">
                                        <div class="item head hev" @click="showitem2(item,index,$event)">
                                            <span class="he1">{{index+1}}</span>
                                            <span class="he2">{{item.vehicleType}}</span>
                                            <span class="he3">{{item.vehicleNumber}}</span>
                                            <span class="he4">{{item.low}}</span>
                                            <span class="he5">{{item.high}}</span>
                                            <span class="he6">{{item.bearingLife}}</span>
                                            <span class="he7">{{item.axleLife}}</span>
                                        </div>
                                        <div  class="item "  v-show="item.isShow" >
                                            <span class="he1">序</span>
                                            <span class="he2">轴型</span>
                                            <span class="he3">轴号</span>
                                            <span class="he4">轮径 L</span>
                                            <span class="he5">轮径 H</span>
                                            <span class="he6">轴承寿命 L</span>
                                            <span class="he7">轴承寿命 R</span>
                                            <span class="he8">轮对寿命</span>
                                        </div>
                                        <div class="item child"
                                             v-show="item.isShow"
                                             v-for="(subitem,index2) in item.axleOut"
                                             @click="choosen(subitem,index,index2,$event)"
                                        >
                                            <span class="he1">{{index2+1}}位</span>
                                            <span class="he2">{{subitem&&subitem.axleType ? subitem.axleType : "null"}}</span>
                                            <span class="he3">{{subitem&&subitem.axleNumber ? subitem.axleNumber : "null"}}</span>
                                            <span class="he4">{{subitem&&subitem.wheelDiameterLeft ? subitem.wheelDiameterLeft : "null"}}</span>
                                            <span class="he5">{{subitem&&subitem.wheelDiameterRight ? subitem.wheelDiameterRight : "null"}}</span>
                                            <span class="he6">{{subitem&&subitem.bearingAssembleDateLeft ? subitem.bearingAssembleDateLeft : "null"}}</span>
                                            <span class="he7">{{subitem&&subitem.bearingAssembleDateRight ? subitem.bearingAssembleDateRight : "null"}}</span>
                                            <span class="he8">{{subitem&&subitem.axleMadeDate ? subitem.axleMadeDate : "null"}}</span>
                                        </div>
                                    </li>
                                </ul>
                            </el-card>
                        </el-row>
                    </el-col>
                    <el-col :span="4" class="vcenter" style="height: 600px">
                        <el-button @click="changeitem">《 添加</el-button>
                        <el-button @click="moveitem">移除 》</el-button>
                    </el-col>
                    <el-col :span="10" class="vcenter">
                        <el-row>
                            <el-card>
                                <el-row>
                                    <el-form :model="searchWheel"  ref="searchWheel" >
                                        <el-col :span="4">
                                            <el-form-item prop="axleNumber" class="el-form">
                                                <el-input size="mini" v-model="searchWheel.axleNumber" placeholder="轴号" clearable></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="4" >
                                            <el-form-item prop="axleType" class="el-form">
                                                <el-select size="mini" v-model="searchWheel.axleType" placeholder="轴型" clearable>
                                                    <el-option label="RE2B" value="RE2B"></el-option>
                                                    <el-option label="RD2" value="RD2"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="4" >
                                            <el-form-item prop="axleMaterial" class="el-form">
                                                <el-select size="mini" v-model="searchWheel.axleMaterial" placeholder="轴材质" clearable>
                                                    <el-option label="50钢" value="H"></el-option>
                                                    <el-option label="45钢" value="S"></el-option>
                                                    <el-option label="40钢" value="W"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="4" >
                                            <el-form-item prop="axleMadeIn" class="el-form">
                                                <el-input size="mini" v-model="searchWheel.axleMadeIn" placeholder="厂代号" clearable></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="4" >
                                            <el-form-item prop="wheelDiameterLow" class="el-form">
                                                <el-input size="mini" v-model="searchWheel.wheelDiameterLow" placeholder="轮径低" clearable></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="4" >
                                            <el-form-item prop="wheelDiameterHigh" class="el-form">
                                                <el-input size="mini" v-model="searchWheel.wheelDiameterHigh" placeholder="轮径高" clearable></el-input>
                                            </el-form-item>
                                        </el-col>

                                        <el-col :span="6" >
                                            <el-form-item prop="bearingAssembleDateLeft" class="el-form">
                                                <el-date-picker
                                                        size="mini"
                                                        type="date"
                                                        placeholder="轴承寿命左"
                                                        v-model="searchWheel.bearingAssembleDateLeft"
                                                        format="yyyy 年 MM 月 dd 日"
                                                        value-format="yyyy-MM-dd"
                                                        style="width: 100%;"></el-date-picker>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="6">
                                            <el-form-item prop="bearingAssembleDateRight" class="el-form">
                                                <el-date-picker
                                                        size="mini"
                                                        type="date"
                                                        placeholder="轴承寿命右"
                                                        v-model="searchWheel.bearingAssembleDateRight"
                                                        format="yyyy 年 MM 月 dd 日"
                                                        value-format="yyyy-MM-dd"
                                                        style="width: 100%;"></el-date-picker>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="6" >
                                            <el-form-item prop="axleMadeDate" class="el-form">
                                                <el-date-picker
                                                        size="mini"
                                                        type="date"
                                                        placeholder="车轴寿命"
                                                        v-model="searchWheel.axleMadeDate"
                                                        format="yyyy 年 MM 月 dd 日"
                                                        value-format="yyyy-MM-dd"
                                                        style="width: 100%;"></el-date-picker>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="6">
                                            <el-form-item prop="takeInDate" class="el-form">
                                                <el-date-picker
                                                        size="mini"
                                                        type="date"
                                                        placeholder="收入日期"
                                                        v-model="searchWheel.takeInDate"
                                                        format="yyyy 年 MM 月 dd 日"
                                                        value-format="yyyy-MM-dd"
                                                        style="width: 100%;"></el-date-picker>
                                            </el-form-item>
                                        </el-col>
                                         <el-col :offset="18" :span="6" class="el-row">
                                            <el-button type="mini" @click="searchForWheel('searchWheel')">查询</el-button>
                                            <el-button type="mini" @click="resetSearchForWheel('searchWheel')">重置</el-button>
                                        </el-col>
                                    </el-form>
                                </el-row>
                                <div style="margin-bottom: 5px">为 {{curItem.vehicleType}} {{curItem.vehicleNumber}} 找到 {{changeData.length}} 条可选数据</div>
                                <div class="hee">
                                    <span class="he1">序</span>
                                    <span class="he2">轴型</span>
                                    <span class="he3">轴号</span>
                                    <span class="he4">轮径 L</span>
                                    <span class="he5">轮径 H</span>
                                    <span class="he6">轴承寿命 L</span>
                                    <span class="he7">轴承寿命 R</span>
                                    <span class="he8">轮对寿命</span>
                                </div>
                                <ul class="container" >
                                    <li class="item child" v-for="(item,index) in changeData"
                                        @click="showchangeitem(item,index,$event)"
                                    >
                                        <span class="he1">{{index+1}}</span>
                                        <span class="he2">{{item&&item.axleType? item.axleType : "null"}}</span>
                                        <span class="he3">{{item&&item.axleNumber ? item.axleNumber : "null"}}</span>
                                        <span class="he4">{{item&&item.wheelDiameterLeft ? item.wheelDiameterLeft : "null"}}</span>
                                        <span class="he5">{{item&&item.wheelDiameterRight ? item.wheelDiameterRight : "null"}}</span>
                                        <span class="he6">{{item&&item.bearingAssembleDateLeft ? item.bearingAssembleDateLeft : "null"}}</span>
                                        <span class="he7">{{item&&item.bearingAssembleDateRight ? item.bearingAssembleDateRight : "null"}}</span>
                                        <span class="he8">{{item&&item.axleMadeDate ? item.axleMadeDate : "null"}}</span>
                                    </li>
                                </ul>
                            </el-card>
                        </el-row>
                    </el-col>
                </el-row>
            </el-dialog>
        </el-card>
        <el-dialog
                title="高度调整"
                :visible.sync="offsetTableVisible"
                width="50%"
        >
            <el-card>
                <el-row>
                    <el-table :data="vehicleInfo" style="width: 100%">
                        <el-table-column
                                label="车型"
                                prop="vehicleType">
                        </el-table-column>
                        <el-table-column
                                label="车号"
                                prop="vehicleNumber">
                        </el-table-column>
                        <el-table-column
                                label="调整高度">
                            <template  slot-scope="scope">
                                <el-input
                                        v-model="scope.row.offset"
                                        placeholder="输入调整高度"/>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-row>
                <el-row>
                    <el-col :offset="20">
                        <el-button @click="confirmForm" size="small">确认</el-button>
                        <el-button @click="cancelmodForm" size="small">取消</el-button>
                    </el-col>
                </el-row>
            </el-card>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "matching",
        data(){
            return{
                vehicleNum:[],
                choosenNum:[],
                vehicleInfo:[],
                total:100,
                pagesInfo:{
                    page:1,
                    size:10
                },
                searchVehicle:{
                    Id:'',
                    vehicleNumber:'',
                    vehicleType:'',
                    RepairDate:null
                },
                searchWheel:{
                    axleNumber:'',
                    axleType:'',
                    axleMaterial:'',
                    axleMadeIn:'',
                    wheelDiameterLow:'',
                    wheelDiameterHigh:'',
                    bearingAssembleDateLeft:null,
                    bearingAssembleDateRight:null,
                    axleMadeDate:null,
                    takeInDate:null
                },
                vehicleList:[],
                selectedVehicle: [],

                matchTableVisible:false,
                offsetTableVisible:false,
                offsetAdded:false,
                x:0,
                y:0,
                cx:0,
                cy:0,
                curIndex:-1,
                curItem:'',
                data: [],
                changeData: [],
                orgdata:{},
                target:{},
                value: [1, 4],
                nullobj:{
                    axleNumber:'null',
                    wheelDiameterLeft:'null',
                    wheelDiameterRight:'null',
                    bearingAssembleDateLeft:'null',
                    bearingAssembleDateRight:'null',
                    axleMadeDate:'null'
                }
            }
        },
        methods:{
            handleChange(val) {
                console.log(val);
            },
            showitem(item,index,e){
                item.isShow = !item.isShow;
                this.$forceUpdate();
            },
            //点击车辆显示轮对信息
            showitem2(item,index,e){
                item.isShow = !item.isShow;
                if (this.curIndex != index){
                    this.curIndex = index;
                    this.curItem = item;
                    //this.findMatch(this.data[this.curIndex]);
                }
                this.$forceUpdate();
            },
            //查找备选轮对
            async findMatch(item){
                var result = await this.$http.post(
                    "/wheelDispatch/find2match",
                    item);
                if (result.data.code != 100){
                    alert("添加失败");
                    return ;
                }
                this.changeData = result.data.object;
                this.$forceUpdate();
            },
            //点击需要手动匹配轮对
            choosen(item,index,index2,e){
                e.currentTarget.parentElement.childNodes.forEach(function (child,index) {
                    child.classList.remove("choosen");
                });
                e.currentTarget.parentElement.parentElement.childNodes.forEach(function (child,index) {
                    child.childNodes.forEach(function (child,index) {
                        child.classList.remove("choosen");
                    });
                });
                e.currentTarget.classList.add("choosen");
                if (this.curIndex != index){
                    this.curIndex = index;
                    //this.findMatch(this.data[this.curIndex]);
                    this.curItem = this.data[this.curIndex];
                }
                this.x = index;
                this.y = index2;
            },
            //点击备选轮对
            showchangeitem(item,index,e){
                e.currentTarget.parentElement.childNodes.forEach(function (child,index) {
                    child.classList.remove("choosen");
                });
                e.currentTarget.classList.add("choosen");
                this.cx = index;
                // this.target = item;
            },
            //添加替换轮对
            changeitem(){
                console.log(this.data[this.x].axleOut[this.y]);
                if (this.data[this.x].axleOut[this.y] && this.data[this.x].axleOut[this.y].axleNumber != 'null'){
                    alert("请先移除目标轮对！");
                    return;
                }
                var temp = JSON.parse(JSON.stringify(this.changeData[this.cx]));
                this.data[this.x].axleOut[this.y] = temp;
                if(this.y == 0) {
                    this.data[this.x].out1 = temp;
                }else if(this.y == 1) {
                    this.data[this.x].out2 = temp;
                }else if(this.y == 2) {
                    this.data[this.x].out3 = temp;
                }else if(this.y == 3) {
                    this.data[this.x].out4 = temp;
                }else {

                }
                this.changeData.splice(this.cx,1);
                this.$forceUpdate();
            },
            //移除原轮对
            moveitem(){
                if (this.data[this.x].axleOut[this.y]==null || this.data[this.x].axleOut[this.y].axleNumber == 'null'){
                    alert("轮对已移除！");
                    return;
                }
                var temp = JSON.parse(JSON.stringify(this.data[this.x].axleOut[this.y]));
                this.data[this.x].axleOut[this.y] = this.nullobj;
                if(this.y == 0) {
                    this.data[this.x].out1 = this.nullobj;
                }else if(this.y == 1) {
                    this.data[this.x].out2 = this.nullobj;
                }else if(this.y == 2) {
                    this.data[this.x].out3 = this.nullobj;
                }else if(this.y == 3) {
                    this.data[this.x].out4 = this.nullobj;
                }else {

                }
                this.changeData.push(temp);
                this.$forceUpdate();
            },
            searchVehicleInfo(form){
                this.searchVehicleInfoCond(this.pagesInfo.page,this.pagesInfo.size);
            },
            async searchVehicleInfoCond(page,size){
                var result = await this.$http.post(
                    "/wheelDispatch/findVehicle2match?page="
                        +page+"&size="+size,
                    this.searchVehicle);
                if (result.data.code != 100){
                    alert("添加失败");
                    return ;
                }
                this.vehicleList = result.data.object.list;
                this.total = result.data.object.total;
                this.data = this.vehicleList;
                this.selectedVehicle = [];
                console.log(this.vehicleList);
            },
            resetSearchInfo(form){

            },
            async sendToDispatch(){
                var result = await this.$http.post(
                    "/wheelDispatch/dispatch",
                    this.vehicleInfo);
                if (result.data.code != 100){
                    alert("添加失败");
                    return ;
                }
                this.data = result.data.object;
            },
            addOffset(){
                this.offsetTableVisible = true;
                this.findvehicleInfo();
            },
            confirmForm(){
                this.offsetAdded = true;
                this.offsetTableVisible = false;
                console.log(this.vehicleInfo);
            },
            cancelmodForm(){
                this.offsetTableVisible = false;
            },
            findvehicleInfo(){
                this.vehicleInfo = [];
                for (var i = 0 ; i < this.choosenNum.length ; i++){
                    for (var j = 0 ; j < this.vehicleNum.length ; j++){
                        if (this.choosenNum[i] == this.vehicleNum[j].vehicleNumber){
                            this.vehicleInfo.push(this.vehicleNum[j]);
                        }
                    }
                }
                // console.log(this.choosenNum);
                // console.log(this.vehicleInfo);
            },

            async handDispatch(){
                if (this.choosenNum.length == 0){
                    alert("请选择匹配轮对");
                    return ;
                }
                this.matchTableVisible=true;
            },
            //提交匹配结果
            async submitDispatch(){
                if(this.data[0] == 1){
                    alert("请检查提交数据格式！");
                    return ;
                }
                var res = await this.$confirm('提交后无法修改, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).catch(err=>{
                    return err;
                });
                if (res == "confirm"){
                    var matcher = sessionStorage.getItem("name");
                    var result = await this.$http.post(
                        "/wheelDispatch/receiveResult?matcher="+matcher,
                        this.data);
                    if (result.data.code != 100){
                        alert("添加失败");
                        return ;
                    }
                    this.clearDispatched();
                    alert("提交成功！");
                }else {
                    alert("取消");
                }
            },
            clearDispatched(){
                for (var i = 0 ; i < this.choosenNum.length ; i++){
                    for (var j = 0 ; j < this.vehicleNum.length ; j++){
                        if (this.choosenNum[i] == this.vehicleNum[j].vehicleNumber){
                            this.vehicleNum.splice(j,1);
                        }
                    }
                }
                this.vehicleInfo = [];
                this.choosenNum = [];
                this.data = [];
                this.changeData = [];
                this.offsetAdded = false;
            },
            //每页显示数目改变
            handleSizeChange(val){
                this.pagesInfo.size = val;
                this.searchVehicleCond(this.pagesInfo.page, this.pagesInfo.size);
            },
            handleCurrentChange(val){
                this.pagesInfo.page = val;
                this.searchVehicleCond(this.pagesInfo.page, this.pagesInfo.size);
            },
            //单条自动匹配
            autoMatch(item){
                console.log(item.vehicleNumber);
                this.selectedVehicle = [];
                this.selectedVehicle.push(item);
                this.autoMatchBatch();
            },
            //单条手动匹配
            handMatch(item){
                console.log(item.vehicleNumber);
                this.selectedVehicle = [];
                this.selectedVehicle.push(item);
                this.data = this.selectedVehicle;
                this.matchTableVisible=true;
                this.$refs.multipleTable.toggleRowSelection(item);
            },
            //批量自动匹配
            async autoMatchBatch(){
                var result = await this.$http.post(
                    "/wheelDispatch/dispatch",
                    this.selectedVehicle);
                if (result.data.code != 100){
                    alert("匹配失败");
                    return ;
                }
                this.vehicleList = result.data.object;
                this.total = this.vehicleList.length;
                this.selectedVehicle = this.vehicleList;
                this.$refs.multipleTable.toggleAllSelection();
            },
            //批量手动匹配
            handMatchBatch(){
                this.matchTableVisible=true;
                this.data = this.selectedVehicle;
                this.$refs.multipleTable.toggleAllSelection();
            },
            handleSelectionChange(val) {
                this.selectedVehicle = val;
                console.log(this.selectedVehicle);
            },
            async sumitMatch(){
                if(this.selectedVehicle==null||this.selectedVehicle.length == 0){
                    alert("请选择提交数据！");
                    return ;
                }
                var res = await this.$confirm('提交后无法修改, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).catch(err=>{
                    return err;
                });
                if (res == "confirm"){
                    var matcher = sessionStorage.getItem("name");
                    var result = await this.$http.post(
                        "/wheelDispatch/receiveResult?matcher="+matcher,
                        this.selectedVehicle);
                    if (result.data.code != 100){
                        alert("添加失败");
                        return ;
                    }
                    alert("提交成功！");
                }else {
                }
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        this.changeData = [];
                        done();
                    })
                    .catch(_ => {});
            },
            async searchForWheel(form){
                var result = await this.$http.post(
                    "/wheelDispatch/wheels",
                    this.searchWheel);
                if (result.data.code != 100){
                    alert("添加失败");
                    return ;
                }
                this.changeData = result.data.object;
                console.log(this.changeData);
            },
            resetSearchForWheel(form){

            },
        }
    }
</script>

<style lang="scss" scoped>
    .container{
        list-style: none;
        min-height: 300px;
        height: 600px;
        width: 100%;
        overflow: auto;
        padding: 0;
        margin:0 auto;
        color: #606266;
        li{
            width:620px;
            border-bottom: 1px solid #DCDFE6;
        }
    }
    .item{
        font-size: 14px;
        height: 30px;
        line-height: 30px;
    }
    .child{
        cursor: pointer;
        color:#409EFF ;
    }
    .child:hover{
        background-color:#C2C2C2;
    }
    .head{
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        cursor: pointer;
        color: #606266;
    }
    .hev:hover{
        background-color: #CDB79E;
    }
    .choosen{
        background-color: #C0FF3E;
    }
    .notshow{
        display: none;
    }
    .vcenter{
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .hee{
        width: 620px;
        margin-bottom: 5px;
        overflow: hidden;
    }
    span{
        float: left;
    }
    .he1{
        text-align: center;
        width: 8%;
    }
    .he2{
        text-align: center;
        width: 8%;
    }
    .he3{
        text-align: center;
        width: 15%;
    }
    .he4{
        text-align: center;
        width: 9%;
    }
    .he5{
        text-align: center;
        width: 9%;
    }
    .he6{
        text-align: center;
        width: 17%;
    }
    .he7{
        text-align: center;
        width: 17%;
    }
    .he8{
        text-align: center;
        width: 17%;
    }
    .card{
        height: 600px;
        display: flex;
        align-items: center;
    }
    .el-form{
        height: 40px;
        margin-bottom: 0;
    }

</style>


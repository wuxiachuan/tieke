<template>
    <div>
        <!--        面包屑导航条-->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>综合管理</el-breadcrumb-item>
            <el-breadcrumb-item>故障统计</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card>
            <el-row :gutter="5">
                <el-form :model="searchProblem"  ref="problemForm" >
                    <el-col :span="4">
                        <el-form-item prop="axleNumber">
                            <el-input v-model="searchProblem.axleNumber" placeholder="轴号" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item prop="axleType">
                            <el-select v-model="searchProblem.axleType" placeholder="轴型">
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
                        <el-form-item prop="problemFinder">
                            <el-input v-model="searchProblem.problemFinder" placeholder="发现人" clearable></el-input>
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
                    <el-col :span="6">
                        <el-button  type="primary" @click="searchforProblem('problemForm')" >查询</el-button>
                        <el-button  @click="resetSearchProblemCond('problemForm')" >重置</el-button>
                        <el-button  @click="exportToExcel" >导出</el-button>
                    </el-col>
                </el-form>
            </el-row>
            <el-table :data="problemList" style="width: 100%" height="600" :default-sort = "{prop: 'findTime', order: 'descending'}" border stripe>
                <el-table-column type="index" label="序号" width="50"></el-table-column>
                <el-table-column prop="axleNumber" label="轴号" width="50"></el-table-column>
                <el-table-column prop="axleType" label="轴型" width="50"></el-table-column>
                <el-table-column prop="processBelong" label="部位" width="80" >
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
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="pagesInfo.page"
                    :page-sizes="[10,15,20,25]"
                    :page-size="pagesInfo.size"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="total">
            </el-pagination>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "information",
        components:{
        },
        data(){
            return {
                problemList:[],
                exportList:[],
                total:100,
                pagesInfo:{
                    page:1,
                    size:10
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
            searchforProblem(searchForm){
                this.searchProblemCond(this.pagesInfo.page,this.pagesInfo.size);
            },
            async searchProblemCond(page,size){
                var result = await this.$http.post(
                    "/quality/findProblemCondPage?page="
                    +page+"&size="+size,
                    this.searchProblem);
                if (result.data.code != 100){
                    alert("修改失败");
                    return ;
                }
                this.problemList = result.data.object.list;
                this.total = result.data.object.total;
            },
            async searchProblemCondWithOutPage(){
                var result = await this.$http.post(
                    "/quality/findProblemCond",
                    this.searchProblem);
                if (result.data.code != 100){
                    alert("修改失败");
                    return [];
                }
                this.exportList = result.data.object;
                console.log(this.exportList);
                return result.data.object;
            },
            resetSearchProblemCond(searchForm){
                this.$refs[searchForm].resetFields();
            },
            //每页显示数目改变
            handleSizeChange(val){
                this.pagesInfo.size = val;
                this.searchProblemCond(this.pagesInfo.page, this.pagesInfo.size);
            },
            handleCurrentChange(val){
                this.pagesInfo.page = val;
                this.searchProblemCond(this.pagesInfo.page, this.pagesInfo.size);
            },
            exportToExcel(){
                this.searchProblemCondWithOutPage();
                require.ensure([], () => {
                    const { export_json_to_excel } = require('../../excel/Export2Excel.js');
                    const tHeader = [
                        '轴号',
                        '轴型',
                        '部位',
                        '简介',
                        '问题',
                        '责任人',
                        '发现人',
                        '发现时间',
                        '整改情况',
                        '整改时间',
                        '消耗情况',
                        '消耗时间'
                    ];
                    const filterVal = [
                        'axleNumber',
                        'axleType',
                        'processBelong',
                        'problemDescription',
                        'problemDetails',
                        'worker',
                        'problemFinder',
                        'findTime',
                        'problemStatus',
                        'correctTime',
                        'confirm',
                        'confirmTime'
                    ];
                    const list = this.exportList;
                    console.log(list);
                    const data = this.formatJson(filterVal, list);
                    export_json_to_excel(tHeader, data, '故障列表');
                })
            },
            formatJson(filterVal, jsonData) {
                return jsonData.map(v => filterVal.map(j => v[j]))
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
        mounted() {
            this.searchProblemCond(this.pagesInfo.page, this.pagesInfo.size);
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
</style>
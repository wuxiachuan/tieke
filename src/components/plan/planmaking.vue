<template>
    <div>
        <!--        面包屑导航条-->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>生产计划</el-breadcrumb-item>
            <el-breadcrumb-item>制定计划</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card>
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
                                <el-option label="GQ70" value="GQ70"></el-option>
                                <el-option label="G60" value="G60"></el-option>
                                <el-option label="NX70" value="NX70"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item prop="isFinish">
                            <el-select v-model="searchVehicle.isFinish" placeholder="是否完工" clearable>
                                <el-option label="完工" value="1"></el-option>
                                <el-option label="未完工" value="0"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="4">
                        <el-form-item prop="RepairDateFrom">
                            <el-date-picker
                                    type="date"
                                    placeholder="检修日期起"
                                    v-model="searchVehicle.RepairDateFrom"
                                    format="yyyy 年 MM 月 dd 日"
                                    value-format="yyyy-MM-dd"
                                    style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item prop="RepairDateTo">
                            <el-date-picker
                                    type="date"
                                    placeholder="检修日期止"
                                    v-model="searchVehicle.RepairDateTo"
                                    format="yyyy 年 MM 月 dd 日"
                                    value-format="yyyy-MM-dd"
                                    style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>

                    <el-col :span="4">
                        <el-form-item prop="finishTimeFrom">
                            <el-date-picker
                                    type="date"
                                    placeholder="完工日期起"
                                    v-model="searchVehicle.finishTimeFrom"
                                    format="yyyy 年 MM 月 dd 日"
                                    value-format="yyyy-MM-dd"
                                    style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item prop="finishTimeTo">
                            <el-date-picker
                                    type="date"
                                    placeholder="完工日期止"
                                    v-model="searchVehicle.finishTimeTo"
                                    format="yyyy 年 MM 月 dd 日"
                                    value-format="yyyy-MM-dd"
                                    style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>

                    <el-col :span="12">
                        <el-button  type="primary" @click="searchforvehicle('vehicleForm')" >查询</el-button>
                        <el-button  @click="resetSearchVehicleCond('vehicleForm')" >重置</el-button>
                        <el-button  @click="exportExcle" >导出数据</el-button>
                        <el-button  @click="addVehicle" >添加</el-button>
                        <el-upload
                            :show-file-list="false"
                            :before-upload="beforeUpload"
                            :on-success="onSuccess"
                            :on-error="onError"
                            :disabled="importDataDisabled"
                            style="display: inline-flex;margin-right: 8px"
                            action="http://localhost:8081/plan/import">
                          <el-button :disabled="importDataDisabled" type="success" :icon="importDataBtnIcon" style="margin-left: 10px">
                            {{importDataBtnText}}
                          </el-button>
                        </el-upload>
                    </el-col>
                </el-form>
            </el-row>
            <el-table :data="vehicleList" style="width: 100%" height="600" :default-sort = "{prop: 'id', order: 'descending'}" border stripe>
                <el-table-column type="index" label="序号" width="50"></el-table-column>
                <el-table-column prop="location" label="台位" width="80" sortable></el-table-column>
                <el-table-column prop="sequence" label="入线次数" width="100" sortable></el-table-column>
                <el-table-column prop="vehicleNumber" label="车号" width="120" sortable></el-table-column>
                <el-table-column prop="vehicleType" label="车型" width="90"sortable></el-table-column>
                <el-table-column prop="axleType" label="轴型"  sortable></el-table-column>
                <el-table-column prop="preOverhaul" label="上次厂修"  sortable></el-table-column>
                <el-table-column prop="nextOverhaul" label="下次厂修"  sortable></el-table-column>
                <el-table-column prop="repairDate" label="检修日期" sortable></el-table-column>
                <el-table-column prop="preOverhaul" label="完工日期"  sortable></el-table-column>
                <el-table-column prop="isFinish" label="完工状态" sortable>
                    <template slot-scope="scope">
                        <span v-if="scope.row.isFinish!='1'" >未完工</span>
                        <span v-if="scope.row.isFinish=='1'" >已完工</span>
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
        </el-card>
        <el-dialog
                title="添加计划"
                :visible.sync="addVehicleVisible"
                width="90%"
                :before-close="handleClose"
        >
            <el-card>
                <el-row>
                    <el-table :data="submitVehicleInfo" style="width: 100%">
                        <el-table-column  label="台位">
                            <template  slot-scope="scope">
                                <el-select v-model="scope.row.location" placeholder="请选择" clearable>
                                    <el-option label="1-1" value="1-1"></el-option>
                                    <el-option label="1-2" value="1-2"></el-option>
                                    <el-option label="1-3" value="1-3"></el-option>
                                    <el-option label="2-1" value="2-1"></el-option>
                                    <el-option label="2-2" value="2-2"></el-option>
                                    <el-option label="2-3" value="2-3"></el-option>
                                </el-select>
                            </template>
                        </el-table-column>
                        <el-table-column  label="次数">
                            <template  slot-scope="scope">
                                <el-select v-model="scope.row.sequence" placeholder="请选择" clearable>
                                    <el-option label="1次" value="1"></el-option>
                                    <el-option label="2次" value="2"></el-option>
                                    <el-option label="3次" value="3"></el-option>
                                </el-select>
                            </template>
                        </el-table-column>
                        <el-table-column  label="车号" width="150">
                            <template  slot-scope="scope">
                                <el-input v-model="scope.row.vehicleNumber"></el-input>
                            </template>
                        </el-table-column>
                        <el-table-column label="车型" >
                            <template  slot-scope="scope">
                                <el-select v-model="scope.row.vehicleType" placeholder="请选择" clearable>
                                    <el-option label="C70" value="C70"></el-option>
                                    <el-option label="C64" value="C64"></el-option>
                                    <el-option label="P64" value="P64"></el-option>
                                    <el-option label="P70" value="P70"></el-option>
                                    <el-option label="GQ70" value="GQ70"></el-option>
                                    <el-option label="G60" value="G60"></el-option>
                                    <el-option label="NX70" value="NX70"></el-option>
                                </el-select>
                            </template>
                        </el-table-column>
                        <el-table-column  label="轴型" >
                            <template  slot-scope="scope">
                                <el-select v-model="scope.row.axleType" placeholder="请选择" clearable>
                                    <el-option label="RE2B" value="RE2B"></el-option>
                                    <el-option label="RD2" value="RD2"></el-option>
                                </el-select>
                            </template>
                        </el-table-column>
                        <el-table-column  label="上次厂修" width="230">
                            <template  slot-scope="scope">
                                <el-date-picker
                                        type="date"
                                        placeholder="选择时间"
                                        v-model="scope.row.preOverhaul"
                                        format="yyyy 年 MM 月 dd 日"
                                        value-format="yyyy-MM-dd"
                                        style="width: 100%;"></el-date-picker>
                            </template>
                        </el-table-column>
                        <el-table-column  label="下次厂修" width="230">
                            <template  slot-scope="scope">
                                <el-date-picker
                                        type="date"
                                        placeholder="选择时间"
                                        v-model="scope.row.nextOverhaul"
                                        format="yyyy 年 MM 月 dd 日"
                                        value-format="yyyy-MM-dd"
                                        style="width: 100%;"></el-date-picker>
                            </template>
                        </el-table-column>
                        <el-table-column  label="检修日期" width="230">
                            <template  slot-scope="scope">
                                <el-date-picker
                                        type="date"
                                        placeholder="选择时间"
                                        v-model="scope.row.repairDate"
                                        format="yyyy 年 MM 月 dd 日"
                                        value-format="yyyy-MM-dd"
                                        style="width: 100%;"></el-date-picker>
                            </template>
                        </el-table-column>
                        <el-table-column  label="操作" width="100">
                            <template  slot-scope="scope">
                                <el-button @click="deleteData(scope.$index)" size="small">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-row>
                <el-row>
                    <el-col :offset="20">
                        <el-button @click="confirmForm" size="small">确认</el-button>
                        <el-button @click="cancelmodForm" size="small">取消</el-button>
                        <el-button @click="addNew" size="small">添加</el-button>
                    </el-col>
                </el-row>
            </el-card>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "information",
        components:{
        },
        data(){
            return {
                vehicleList:[],
                submitVehicleInfo:[{}],
                total:100,
                pagesInfo:{
                    page:1,
                    size:10
                },
                ruleForm:{},
                searchVehicle:{
                    Id:'',
                    vehicleNumber:'',
                    vehicleType:'',
                    RepairDateFrom:null,
                    RepairDateTo:null,
                    finishTimeFrom:null,
                    finishTimeTo:null,
                    isFinish:'',
                },
                addVehicleVisible:false,
                importDataBtnText: '导入数据',
                importDataBtnIcon: 'el-icon-upload2',
                importDataDisabled: false
            };
        },
        computed: {

        },
        methods: {
            searchforvehicle(searchForm){
                this.searchVehicleCond(this.pagesInfo.page,this.pagesInfo.size);
            },
            async searchVehicleCond(page,size){
                var result = await this.$http.post(
                    "/plan/getVehicleInfoByCond?page="
                    +page+"&size="+size,
                    this.searchVehicle);
                if (result.data.code != 100){
                    alert("修改失败");
                    return ;
                }
                this.vehicleList = result.data.object.list;
                this.total = result.data.object.total;
            },
            resetSearchVehicleCond(searchForm){
                this.$refs[searchForm].resetFields();
            },
            addVehicle(){
              this.addVehicleVisible = true;
            },
            confirmForm(){
                this.submit(this.submitVehicleInfo);
            },
            cancelmodForm(){
                this.addVehicleVisible = false;
            },
           async submit(data){
                var result = await this.$http.post(
                    "/plan/addPlan",
                    data);
                if (result.data.code != 100){
                    alert("修改失败");
                    return ;
                }
               alert("添加成功");
               this.submitVehicleInfo = [{}];
            },
            cancel(){
                this.searchforvehicle("vehicleForm");
                this.addVehicleVisible = false;
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
            handleClose(done){
                this.$confirm('确认关闭？')
                    .then(()=>{
                        done();
                    })
                    .catch();
                this.searchforvehicle("vehicleForm");
            },
            deleteData(index){
                this.submitVehicleInfo.splice(index,1);
            },
            addNew(){
                this.submitVehicleInfo.push({});
            },
            exportExcle(){
              window.open("http://localhost:8081/plan/export","parent");
            },
            onError(err, file, fileList) {
            this.importDataBtnText = '导入数据';
            this.importDataBtnIcon = 'el-icon-upload2';
            this.importDataDisabled = false;
            },
            onSuccess(response, file, fileList) {
            this.importDataBtnText = '导入数据';
            this.importDataBtnIcon = 'el-icon-upload2';
            this.importDataDisabled = false;
            this.searchVehicleCond(this.pagesInfo.page, this.pagesInfo.size);
            alert("导入成功");
            },
            beforeUpload() {
            this.importDataBtnText = '正在导入';
            this.importDataBtnIcon = 'el-icon-loading';
            this.importDataDisabled = true;
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
            this.searchVehicleCond(this.pagesInfo.page, this.pagesInfo.size);
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
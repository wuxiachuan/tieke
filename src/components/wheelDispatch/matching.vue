<template>
    <div>
        <!--        面包屑导航条-->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>轮对支出</el-breadcrumb-item>
            <el-breadcrumb-item>轮对选配</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card>
            <el-row>
                <el-row :gutter="5">
                    <el-form :model="search" ref="searchForm" >
                        <el-col :span="4">
                            <el-form-item prop="vehicleNum">
                                <el-input v-model="search.vehicleNum" placeholder="请输入车号" clearable></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item prop="takeInDateFrom">
                                <el-date-picker
                                        type="date"
                                        placeholder="请选择起始日期"
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
                                        placeholder="请选择终止日期"
                                        v-model="search.takeInDateTo"
                                        format="yyyy 年 MM 月 dd 日"
                                        value-format="yyyy-MM-dd"
                                        style="width: 100%;"></el-date-picker>
                            </el-form-item>
                        </el-col>

                        <el-col :span="4">
                            <el-button type="primary" @click="searchVehicle('searchForm')" >查询</el-button>
                            <el-button  @click="resetSearchInfo('searchForm')" >重置</el-button>
                        </el-col>
                    </el-form>
                </el-row>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12" class="card">
                    <el-card>
                        <el-transfer v-model="choosenNum"
                                     :props="{
                                          key: 'vehicleNumber',
                                          label: 'vehicleType'+'vehicleNumber'
                                        }"
                                     :titles="['可选', '已选']"
                                     :data="vehicleNum">
                            <el-button class="transfer-footer" slot="left-footer" size="small" @click="">操作</el-button>
                            <el-button class="transfer-footer" slot="right-footer"
                                       size="small" @click="addOffset"
                                       :disabled="this.choosenNum.length == 0"
                            >
                                调整
                            </el-button>
                            <el-button class="transfer-footer" slot="right-footer"
                                       size="small" @click="sendToDispatch"
                                       :disabled="this.choosenNum.length == 0||this.offsetAdded==false"
                            >
                                匹配
                            </el-button>
                        </el-transfer>
                    </el-card>
                </el-col>
                <el-col :span="12">
                    <el-card>
                        <el-row>
                            <el-button @click="handDispatch">手动匹配</el-button>
                            <el-button @click="submitDispatch">确认提交</el-button>
                        </el-row>
                        <div class="item head hee">
                            <span class="he1">序</span>
                            <span class="he2">车型</span>
                            <span class="he3">车号</span>
                            <span class="he4">轮径L</span>
                            <span class="he5">轮径H</span>
                            <span class="he6">轴承寿命</span>
                            <span class="he7">轮对寿命</span>
                        </div>
                        <ul class="container" >
                            <li v-for="(item,index) in data">
                                <div class="item head hev" @click="showitem(item,index,$event)">
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
                                    <span class="he2">{{subitem.axleType}}</span>
                                    <span class="he3">{{subitem.axleNumber}}</span>
                                    <span class="he4">{{subitem.wheelDiameterLeft}}</span>
                                    <span class="he5">{{subitem.wheelDiameterRight}}</span>
                                    <span class="he6">{{subitem.bearingAssembleDateLeft}}</span>
                                    <span class="he7">{{subitem.bearingAssembleDateRight}}</span>
                                    <span class="he8">{{subitem.axleMadeDate}}</span>
                                </div>
                            </li>
                        </ul>
                    </el-card>
                </el-col>
            </el-row>

            <el-dialog
                    title="手动匹配"
                    :visible.sync="matchTableVisible"
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
                                            <span class="he2">{{subitem.axleType}}</span>
                                            <span class="he3">{{subitem.axleNumber}}</span>
                                            <span class="he4">{{subitem.wheelDiameterLeft}}</span>
                                            <span class="he5">{{subitem.wheelDiameterRight}}</span>
                                            <span class="he6">{{subitem.bearingAssembleDateLeft}}</span>
                                            <span class="he7">{{subitem.bearingAssembleDateRight}}</span>
                                            <span class="he8">{{subitem.axleMadeDate}}</span>
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
                                        <span class="he2">{{item.axleType}}</span>
                                        <span class="he3">{{item.axleNumber}}</span>
                                        <span class="he4">{{item.wheelDiameterLeft}}</span>
                                        <span class="he5">{{item.wheelDiameterRight}}</span>
                                        <span class="he6">{{item.bearingAssembleDateLeft}}</span>
                                        <span class="he7">{{item.bearingAssembleDateRight}}</span>
                                        <span class="he8">{{item.axleMadeDate}}</span>
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
                search:{
                    takeInDateFrom:null,
                    takeInDateTo:null,
                    vehicleNum:''
                },
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
            showitem2(item,index,e){
                item.isShow = !item.isShow;
                if (this.curIndex != index){
                    this.curIndex = index;
                    this.curItem = item;
                    this.findMatch(this.data[this.curIndex]);
                }
                this.$forceUpdate();
            },
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
                    this.findMatch(this.data[this.curIndex]);
                    this.curItem = this.data[this.curIndex];
                }
                this.x = index;
                this.y = index2;
            },
            showchangeitem(item,index,e){
                e.currentTarget.parentElement.childNodes.forEach(function (child,index) {
                    child.classList.remove("choosen");
                });
                e.currentTarget.classList.add("choosen");
                this.cx = index;
                // this.target = item;
            },
            changeitem(){
                console.log(this.data[this.x].axleOut[this.y]);
                if (this.data[this.x].axleOut[this.y].axleNumber != 'null'){
                    alert("请先移除目标轮对！");
                    return;
                }
                var temp = JSON.parse(JSON.stringify(this.changeData[this.cx]));
                this.data[this.x].axleOut[this.y] = temp;
                this.changeData.splice(this.cx,1);
                this.$forceUpdate();
            },
            moveitem(){
                if (this.data[this.x].axleOut[this.y].axleNumber == 'null'){
                    alert("轮对已移除！");
                    return;
                }
                var temp = JSON.parse(JSON.stringify(this.data[this.x].axleOut[this.y]));
                this.data[this.x].axleOut[this.y] = this.nullobj;
                this.changeData.push(temp);
                this.$forceUpdate();
            },
            async searchVehicle(form){
                var result = await this.$http.post(
                    "/wheelDispatch/getvehicleNum",
                    this.search);
                if (result.data.code != 100){
                    alert("添加失败");
                    return ;
                }
                this.vehicleNum = result.data.object;
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
            }
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


</style>


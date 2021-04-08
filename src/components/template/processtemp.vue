<template>
    <div>
        <!--        面包屑导航条-->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{navhead1}}</el-breadcrumb-item>
            <el-breadcrumb-item>{{navhead2}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card>
            <el-row :gutter="5">
                <QueryCondition
                    v-bind:index="index"
                    v-bind:search="search"
                    v-on:searchWheel="searchWheelInfo"
                    v-on:creatNew="creatNewWheelInfo"
                    v-on:getUnFinish="searchUnFinish"
                ></QueryCondition>
            </el-row>
            <el-row>
                <el-col>
                    <InfoTable
                            v-bind:index="index"
                            v-bind:wheelList="wheelList"
                            v-bind:issaved="issaved"
                            v-bind:finishFlag="finishFlag"
                            v-on:capture="captureitem"
                            v-on:show="showitem"
                            v-on:qrcode="creatQrcode"
                    ></InfoTable>
                </el-col>
            </el-row>
        </el-card>
        <el-dialog
                :title="title"
                :visible.sync="operateTableVisible"
                width="80%"
                :before-close="handleProblemTable"
        >
            <informationTable v-if="index=='0'"
                          v-on:sendwheeldata="handledata"
                          v-bind:showinfo="ruleForm"
                          v-bind:wheelInfo="wheelInfo"
                          v-bind:disableForm="disableForm"
                          v-bind:addbtnstatus="addbtnstatus"
                          v-bind:savebtnstatus="savebtnstatus"
                          v-bind:modbtnstatus="modbtnstatus"
                          v-bind:cancelbtnstatus="cancelbtnstatus"></informationTable>
            <measureTable v-if="index=='1'"
                          v-on:sendwheeldata="handledata"
                          v-bind:showinfo="ruleForm"
                          v-bind:wheelInfo="wheelInfo"
                          v-bind:disableForm="disableForm"
                          v-bind:addbtnstatus="addbtnstatus"
                          v-bind:savebtnstatus="savebtnstatus"
                          v-bind:modbtnstatus="modbtnstatus"
                          v-bind:cancelbtnstatus="cancelbtnstatus"></measureTable>
            <bearingTestTable  v-if="index=='8'"
                          v-on:sendwheeldata="handledata"
                          v-bind:showinfo="ruleForm"
                          v-bind:wheelInfo="wheelInfo"
                          v-bind:disableForm="disableForm"
                          v-bind:addbtnstatus="addbtnstatus"
                          v-bind:savebtnstatus="savebtnstatus"
                          v-bind:modbtnstatus="modbtnstatus"
                          v-bind:cancelbtnstatus="cancelbtnstatus"></bearingTestTable>
            <bearingRepair  v-if="index=='2'"
                               v-on:sendwheeldata="handledata"
                               v-bind:showinfo="ruleForm"
                               v-bind:wheelInfo="wheelInfo"
                               v-bind:disableForm="disableForm"
                               v-bind:addbtnstatus="addbtnstatus"
                               v-bind:savebtnstatus="savebtnstatus"
                               v-bind:modbtnstatus="modbtnstatus"
                               v-bind:cancelbtnstatus="cancelbtnstatus"></bearingRepair>
            <bearingLoadTable  v-if="index=='6'"
                               v-on:sendwheeldata="handledata"
                               v-bind:showinfo="ruleForm"
                               v-bind:wheelInfo="wheelInfo"
                               v-bind:disableForm="disableForm"
                               v-bind:addbtnstatus="addbtnstatus"
                               v-bind:savebtnstatus="savebtnstatus"
                               v-bind:modbtnstatus="modbtnstatus"
                               v-bind:cancelbtnstatus="cancelbtnstatus"
                               v-bind:enableLeft="disableLeft"
                               v-bind:enableRight="disableRight"
                               v-bind:origindata="originBearingNeckMeasure"></bearingLoadTable>
            <magneticInspectionTable  v-if="index=='3'"
                               v-on:sendwheeldata="handledata"
                               v-bind:showinfo="ruleForm"
                               v-bind:wheelInfo="wheelInfo"
                               v-bind:disableForm="disableForm"
                               v-bind:addbtnstatus="addbtnstatus"
                               v-bind:savebtnstatus="savebtnstatus"
                               v-bind:modbtnstatus="modbtnstatus"
                               v-bind:cancelbtnstatus="cancelbtnstatus"></magneticInspectionTable>
            <ultrasonicInspectionTable  v-if="index=='4'"
                              v-on:sendwheeldata="handledata"
                              v-bind:showinfo="ruleForm"
                              v-bind:wheelInfo="wheelInfo"
                              v-bind:disableForm="disableForm"
                              v-bind:addbtnstatus="addbtnstatus"
                              v-bind:savebtnstatus="savebtnstatus"
                              v-bind:modbtnstatus="modbtnstatus"
                              v-bind:cancelbtnstatus="cancelbtnstatus"></ultrasonicInspectionTable>
            <remeasureTable  v-if="index=='9'"
                              v-on:sendwheeldata="handledata"
                              v-bind:showinfo="ruleForm"
                              v-bind:wheelInfo="wheelInfo"
                              v-bind:disableForm="disableForm"
                              v-bind:addbtnstatus="addbtnstatus"
                              v-bind:savebtnstatus="savebtnstatus"
                              v-bind:modbtnstatus="modbtnstatus"
                              v-bind:cancelbtnstatus="cancelbtnstatus"></remeasureTable>
            <bearingCapTable  v-if="index=='7'"
                              v-on:sendwheeldata="handledata"
                              v-bind:showinfo="ruleForm"
                              v-bind:wheelInfo="wheelInfo"
                              v-bind:disableForm="disableForm"
                              v-bind:addbtnstatus="addbtnstatus"
                              v-bind:savebtnstatus="savebtnstatus"
                              v-bind:modbtnstatus="modbtnstatus"
                              v-bind:cancelbtnstatus="cancelbtnstatus"></bearingCapTable>
            <wheelRoundTable  v-if="index=='5'"
                              v-on:sendwheeldata="handledata"
                              v-bind:showinfo="ruleForm"
                              v-bind:wheelInfo="wheelInfo"
                              v-bind:disableForm="disableForm"
                              v-bind:addbtnstatus="addbtnstatus"
                              v-bind:savebtnstatus="savebtnstatus"
                              v-bind:modbtnstatus="modbtnstatus"
                              v-bind:cancelbtnstatus="cancelbtnstatus"
                              v-bind:enableLeft="disableLeft"
                              v-bind:enableRight="disableRight"
                              v-bind:origindata="originwheeldata"></wheelRoundTable>
            <bearingUncapTable  v-if="index=='10'"
                              v-on:sendwheeldata="handledata"
                              v-bind:showinfo="ruleForm"
                              v-bind:wheelInfo="wheelInfo"
                              v-bind:disableForm="disableForm"
                              v-bind:addbtnstatus="addbtnstatus"
                              v-bind:savebtnstatus="savebtnstatus"
                              v-bind:modbtnstatus="modbtnstatus"
                              v-bind:cancelbtnstatus="cancelbtnstatus"
                              v-bind:origindata="originwheeldata"></bearingUncapTable>
            <bearingUnloadTable  v-if="index=='11'"
                                v-on:sendwheeldata="handledata"
                                v-bind:showinfo="ruleForm"
                                v-bind:wheelInfo="wheelInfo"
                                v-bind:disableForm="disableForm"
                                v-bind:addbtnstatus="addbtnstatus"
                                v-bind:savebtnstatus="savebtnstatus"
                                v-bind:modbtnstatus="modbtnstatus"
                                v-bind:cancelbtnstatus="cancelbtnstatus"
                                v-bind:enableLeft="disableLeft"
                                v-bind:enableRight="disableRight"
                                v-bind:origindata="originwheeldata"></bearingUnloadTable>
            <bearingNeckTable  v-if="index=='12'"
                                v-on:sendwheeldata="handledata"
                                v-bind:showinfo="ruleForm"
                                v-bind:wheelInfo="wheelInfo"
                                v-bind:disableForm="disableForm"
                                v-bind:addbtnstatus="addbtnstatus"
                                v-bind:savebtnstatus="savebtnstatus"
                                v-bind:modbtnstatus="modbtnstatus"
                                v-bind:cancelbtnstatus="cancelbtnstatus"
                                v-bind:enableLeft="disableLeft"
                                v-bind:enableRight="disableRight"
                                v-bind:origindata="originwheeldata"></bearingNeckTable>
            <reinspectionTable  v-if="index=='13'"
                                v-on:sendwheeldata="handledata"
                                v-bind:showinfo="ruleForm"
                                v-bind:wheelInfo="wheelInfo"
                                v-bind:disableForm="disableForm"
                                v-bind:addbtnstatus="addbtnstatus"
                                v-bind:savebtnstatus="savebtnstatus"
                                v-bind:modbtnstatus="modbtnstatus"
                                v-bind:cancelbtnstatus="cancelbtnstatus"
                                v-bind:origindata="originwheeldata"></reinspectionTable>
        </el-dialog>
        <el-dialog
                title="二维码"
                :visible.sync="QRcodeVisible"
                width="30%">
            <div class="QRimg">
                <img  :src="QRimgpath">
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import informationTable from "./informationTable";
    import measureTable from "./measureTable";
    import bearingTestTable from "./bearingTestTable"
    import bearingRepair from "./bearingRepairTable";
    import bearingLoadTable from "./bearingLoadTable";
    import bearingCapTable from "./bearingCapTable";
    import magneticInspectionTable from "./magneticInspectionTable";
    import ultrasonicInspectionTable from "./ultrasonicInspectionTable";
    import remeasureTable from "./remeasureTable";
    import wheelRoundTable from "./wheelRoundTable";
    import bearingNeckTable from "./bearingNeckTable";
    import bearingUncapTable from "./bearingUncapTable";
    import bearingUnloadTable from "./bearingUnloadTable";
    import reinspectionTable from "./reinspectionTable";
    import QueryCondition from "./QueryCondition";
    import InfoTable from "./InfoTable";
    export default {
        name: "information",
        components: {
            InfoTable,
            QueryCondition,
            informationTable,
            measureTable,
            bearingTestTable,
            bearingRepair,
            bearingLoadTable,
            bearingCapTable,
            magneticInspectionTable,
            ultrasonicInspectionTable,
            remeasureTable,
            wheelRoundTable,
            bearingNeckTable,
            bearingUncapTable,
            bearingUnloadTable,
            reinspectionTable
        },
        props:{
            finishFlag:String,
            requestURL:String,
            index:String,
            title:String,
            navhead1:String,
            navhead2:String
        },
        data(){
            return {
                dialogVisible:false,
                addbtnstatus:true,
                savebtnstatus:true,
                modbtnstatus:false,
                cancelbtnstatus:false,
                disableForm:true,
                disableLeft:false,
                disableRight:false,
                itemUnderMod:{},
                savedInfo:[],
                wheelList:[],
                URL:'',
                resourceURL:this.$GLOBAL.resourceURL,

                operateTableVisible:false,
                issaved:'0',
                hassaved:false,
                istableshow:false,
                QRcodeVisible:false,
                QRimgpath:'',

                wheelInfo:{},
                savedInfoHeads:[],
                ruleForm:{},
                originwheeldata:{},
                originBearingNeckMeasure:{},
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
            //刷新表单
            flushRuleForm(){
                this.addbtnstatus = true;
                this.savebtnstatus = true;
                this.modbtnstatus = false;
                this.cancelbtnstatus = false;
                this.ruleForm = {};
                this.wheelInfo = {};
                this.disableForm = true;
            },
            handledata(e){
               var flag = e.flag;
               var data = e.data;
               if(flag=='0') this.addWheel(data);
               if(flag=='1') this.saveForm(data);
               if(flag=='2') this.modifyForm(data);
            },
            //添加新wheel
            async addWheel(ruleForm) {
                        ruleForm.worker = sessionStorage.getItem("name");
                        ruleForm.isFinish = '1';
                        ruleForm.finishTime = this.dateFormate(new Date(),'');
                        var result = await this.$http.post(
                            this.URL+"/add",
                            ruleForm);
                        if (result.data.code != 100){
                            if(this.index !='0') {
                                this.turnBack(ruleForm.wheelId);
                            }
                            alert("添加失败");
                            return ;
                        }
                        alert("添加成功");
                        this.hassaved = true;
                        //设置保存按钮
                            //this.hassaved = true;
                        //检查保存列表如有相同的从保存列表删除
                            //var id = ruleForm.wheelId;
                            //this.deleteFromSaveInfo(id);
                        //添加完成获取今日的数据
                        if(this.index=='0') {
                            this.searchToday();
                        }else {
                            //获取未完成列表
                            this.searchUnFinish();
                            //清空列表
                            this.flushRuleForm();
                        }
            },
            //保存未完成RuleForm
            saveForm(ruleForm){
                var id = ruleForm.wheelId;
                if (id==''||id==null||id==undefined) {
                    alert("请选择保存项");
                    return ;
                }
                //如果已存在替换
                for (var i=0;i<this.savedInfo.length;i++){
                    if (this.savedInfo[i].wheelId==id){
                        this.savedInfo[i] = JSON.parse(JSON.stringify(ruleForm));
                        this.savedInfoHeads[i] = JSON.parse(JSON.stringify(this.wheelInfo));
                        this.saveToSession(this.savedInfo,this.savedInfoHeads);
                        alert("已保存");
                        return;
                    }
                }
                //保存新
                ruleForm.worker = sessionStorage.getItem("name");
                ruleForm.isFinish = '0';
                var saved = JSON.parse(JSON.stringify(ruleForm));
                this.savedInfo.push(saved);
                this.savedInfoHeads.push(this.wheelInfo);
                this.saveToSession(this.savedInfo,this.savedInfoHeads);
                alert("已保存");
            },
            //修改wheel
            async modifyForm(ruleForm){
                var result = await this.$http.post(
                    this.URL+"/modify",
                    ruleForm);
                if (result.data.code != 100){
                    alert("修改失败");
                    return ;
                }
                console.log(ruleForm);
                //重置表单
                this.flushRuleForm();
                alert("修改成功");
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
                        this.saveToSession(this.savedInfo,this.savedInfoHeads);
                    }
                }
            },
            async saveToSession(info,heads){
                var wheelInfo = {
                    data:info,
                    heads:heads
                }
                var name = sessionStorage.getItem("name");
                var data = JSON.stringify(wheelInfo);
                var result = await this.$http.post(
                    this.URL+"/savedWheelInfo",
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
                var result = await this.$http.get(this.URL+"/getSavedWheelInfo?name="+name);
                if (result.data.code != 100){
                    alert("查询失败");
                    return ;
                }
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
                    this.URL+"/unFinish",
                    this.ruleForm);
                if (result.data.code != 100){
                    alert("查询失败");
                    return ;
                }
                this.wheelList = result.data.object;
                this.flushRuleForm();
            },
            //从数据库查找今日的wheel
            async searchToday(){
                this.issaved = '0';
                var result = await this.$http.get(
                    this.URL+"/today");
                if (result.data.code != 100){
                    alert("查询失败");
                    return ;
                }
                this.wheelList = result.data.object;
                this.flushRuleForm();
            },
            //取消修改
            cancelmodForm(formName){
                //重置表单
                this.flushRuleForm();
                alert("取消修改");
            },
            //多条件查找wheel
            async searchWheelInfo(searchForm){
                this.issaved = '2';
                //保证至少一个查找条件
                if(this.search.wheelId==''&&this.search.takeInDateFrom==null&&this.search.takeInDateTo==null&&this.search.axleNumber==''&&
                    this.search.vehicleNumber==''&&this.search.infoTakeFinishTimeFrom==null&&this.search.infoTakeFinishTimeTo==null){
                    this.wheelList = [];
                    return;
                }
                var result = await this.$http.post(
                    this.URL+"/searchBycondition",
                    this.search);
                if (result.data.code != 100){
                    alert("添加失败");
                    return ;
                }
                this.wheelList = result.data.object;
                this.flushRuleForm();
            },
            async captureitem(e){
                var index = e.index;
                var item = e.item;
                //重置保存按钮
                this.hassaved = false;
                //如果已提交屏蔽 创建 按钮，提供修改和取消按钮
                this.flushRuleForm();
                //显示基本信息
                this.wheelInfo = item;
                const id = item.wheelId;
                //设置压装轴承的位置
                this.setBearingPosition();
                //如果旋面获取原始值
                if(this.index=='5') this.getoriginwheelround(id);
                //如果压装获取轴颈测量
                if(this.index=='6') this.getoriginBearingNeckMeasure(id);
                //未完成给个空值和表单id
                if (item[this.finishFlag] === '0'||item[this.finishFlag] === '5'||item[this.finishFlag] === '2'||item[this.finishFlag] === '3') {
                    //从候选set中删除
                    var result = await this.$http.get(
                        this.URL + "/chooseWheel?id=" + id);
                    if (result.data.code != 100) {
                        //获取未完成列表
                        this.searchUnFinish();
                        alert("捕获失败");
                        //关闭操作面板
                        this.operateTableVisible = false;
                        return;
                    }
                    this.ruleForm = {};
                    this.ruleForm.wheelId = id;
                }
                //开放表单
                this.disableForm = false;
                //显示操作面板
                this.operateTableVisible = true;
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
                //如果旋面获取原始值
                if(this.index=='5') this.getoriginwheelround(id);
                //如果压装获取轴颈测量
                if(this.index=='6') this.getoriginBearingNeckMeasure(id);
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
            async showitem(e){
                var index = e.index;
                var item = e.item;
                //重置保存按钮
                this.hassaved = true;
                //禁止表单
                this.disableForm = true;
                //如果已提交,屏蔽"创建"按钮，提供"修改"和"取消"按钮
                this.flushRuleForm();
                //显示基本信息
                this.wheelInfo = item;
                const id = item.wheelId;
                //如果旋面获取原始值
                if(this.index=='5') this.getoriginwheelround(id);
                //如果压装获取轴颈测量
                if(this.index=='6') this.getoriginBearingNeckMeasure(id);
                //是否完成
                this.addbtnstatus = false;
                this.savebtnstatus = false;
                this.modbtnstatus = true;
                this.cancelbtnstatus = true;
                this.isModify = true;
                //已完成从数据库内查找，提交到显示表单
                var result = await this.$http.get(
                    this.URL+"/findById?id="+id);
                if (result.data.code != 100){
                    alert("添加失败");
                    return ;
                }
                this.ruleForm = result.data.object;
                //开放表单
                this.disableForm = false;
                //显示操作面板
                this.operateTableVisible = true;
            },
            async turnBack(id){
                var result = await this.$http.get(
                    this.URL+"/turnBack?id="+id);
                if (result.data.code != 100){
                    alert("添加失败");
                    return ;
                }
                //删除本地保存
                //this.deleteFromSaveInfo(id);
                //搜索保存的
                //this.searchSavedInfo();
                //获取未完成列表
                this.searchUnFinish();
            },
            //关闭
            async handleProblemTable(done){
                if(this.hassaved == false){
                    var res = await  this.$confirm('是否提交?', '提示', {
                        confirmButtonText: '提交',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).catch(err=>{
                        return err;
                    });
                    if (res == "confirm"){
                        this.addWheel('ruleForm');
                    }else {
                        if (this.issaved == false){
                            if(this.index !='0') {
                                this.turnBack(this.wheelInfo.wheelId);
                            }
                        }
                    }
                }
                done();
                this.hassaved = false;
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
                    var result = await this.$http.get(this.URL+'/delete?id=' + id);
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
            //获取车轮旋面前原始数据
            async getoriginwheelround(wheelId){
                var result = await this.$http.get(
                    "/wheelRound/getoriginwheelround?id="+wheelId);
                if (result.data.code != 100){
                    alert("添加失败");
                    return ;
                }
                this.originwheeldata = result.data.object;
                if (this.originwheeldata==null) this.originwheeldata = {};
            },
            //获取车轮旋面前原始数据
            async getoriginBearingNeckMeasure(wheelId){
                var result = await this.$http.get(
                    "/bearingLoad/getoriginBearingNeckMeasure?id="+wheelId);
                if (result.data.code != 100){
                    alert("添加失败");
                    return ;
                }
                this.originBearingNeckMeasure = result.data.object;
                if(this.originBearingNeckMeasure==null) this.originBearingNeckMeasure = {};
            },
            setBearingPosition(){
                if(this.wheelInfo.isbearingLoadFinish =="2") this.disableLeft = false;
                if(this.wheelInfo.isbearingLoadFinish =="3") this.disableRight = false;
                if(this.wheelInfo.isbearingLoadFinish =="5") {this.disableLeft = false;this.disableRight = false;}
            },
            creatNewWheelInfo(){
                //重置保存按钮
                this.hassaved = false;
                //显示操作面板
                this.operateTableVisible = true;
                //如果已提交屏蔽 创建 按钮，提供修改和取消按钮
                this.flushRuleForm();
                this.ruleForm = {};
                //开放表单
                this.disableForm = false;
            },
            //创建二维码
            creatQrcode(e){
                var index = e.index;
                var item = e.item;
                this.QRcodeVisible = true;
                const wheelId = item.wheelId;
                this.getQRcode(wheelId);
            },
            //生成二维码
            async getQRcode(wheelId){
                var result = await this.$http.get(
                    "/wheelTakein/getQRcode?id="+wheelId);
                if (result.data.code != 100){
                    alert("二维码生成失败");
                    return ;
                }
                this.QRimgpath = this.resourceURL + '/wheelqrcode/'+result.data.object;
                console.log(this.QRimgpath);
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
            this.URL = this.requestURL;
            if(this.index!='0'){
                //获取未完成列表
                //this.getSavedWheelInfoFromSession();
                //获取未完成列表
                this.searchUnFinish();
            }
        },
        watch:{
            requestURL:function (val) {
                this.URL = val;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .status{
        font-size: 14px;
        margin: 0 0 10px 20px;
        span{
            margin-left: 20px;
            font-size: 16px;
        }
    }
    .listContainer{
        text-align: center;
        line-height: 40px;
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
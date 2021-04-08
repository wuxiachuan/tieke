<template>
    <div>
        <!--        面包屑导航条-->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>轮对收入</el-breadcrumb-item>
            <el-breadcrumb-item>信息采集</el-breadcrumb-item>
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
                    <el-col :span="8">
                        <el-button type="primary" @click="searchWheelInfo('searchForm')" size="small">查询</el-button>
                        <el-button  @click="searchSavedInfo" size="small">未完成</el-button>
                        <el-button  @click="creatNewWheelInfo" size="small">新建</el-button>
                        <el-button  @click="creatQrcode" size="small">二维码</el-button>
                    </el-col>
                </el-form>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="7">
                    <el-card class="wheelInfo-Container">
                        <div class="wheelInfoHead">
                            <span class="wheelInfoList1">序</span>
                            <span class="wheelInfoList2">轴号</span>
                            <span class="wheelInfoList3">轴型</span>
                            <span class="wheelInfoList4">车型车号</span>
                            <span class="wheelInfoList5">轴位</span>
                            <span class="wheelInfoList6">收入日期</span>
                        </div>
                        <ul class="wheelInfo-list" ref="infolist">
                            <li :class="['wheelInfo-list-item',item.infoTakeFinish=='0'?'notfinish':'']" v-for="(item,index) in wheelList" :ref="'li'+index"
                                :key="item.wheelId" @click="showitem(item,index,$event)">
                                <span class="wheelInfoList1">{{ index+1 }}</span>
                                <span class="wheelInfoList2">{{item.axleNumber}}</span>
                                <span class="wheelInfoList3">{{item.axleType}}</span>
                                <span class="wheelInfoList4">{{item.vehicleType}} {{item.vehicleNumber}}</span>
                                <span class="wheelInfoList5">{{item.axlePosition}}</span>
                                <span class="wheelInfoList6">{{item.takeInDate}}</span>
                            </li>
                        </ul>
                    </el-card>
                </el-col>
                <el-col :span="17">
                    <el-card>
                        <el-row class="status">
                            <span>当前状态：</span> <span v-text="isModify ?'修改':'新建'"></span>
                        </el-row>
                        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
                            <el-row>
                                <el-col :span="8">
                                    <el-form-item label="收入单位" prop="takeInDepot">
                                        <el-input v-model="ruleForm.takeInDepot"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="收入日期" prop="takeInDate">
                                        <el-date-picker
                                                type="date"
                                                placeholder="选择日期"
                                                v-model="ruleForm.takeInDate"
                                                format="yyyy 年 MM 月 dd 日"
                                                value-format="yyyy-MM-dd"
                                                style="width: 100%;"></el-date-picker>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="8">
                                    <el-form-item label="收入原因" prop="takeInReason">
                                        <el-select v-model="ruleForm.takeInReason" placeholder="请选择">
                                            <el-option label="段修" value="duanxiu"></el-option>
                                            <el-option label="站修调入" value="zhanxiu"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="收入车型" prop="vehicleType">
                                        <el-input v-model="ruleForm.vehicleType"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="收入车号" prop="vehicleNumber">
                                        <el-input v-model="ruleForm.vehicleNumber"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                            <el-row>
                                <el-col :span="8">
                                    <el-form-item label="轴号" prop="axleNumber">
                                        <el-input v-model="ruleForm.axleNumber"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="轴型" prop="axleType">
                                        <el-select v-model="ruleForm.axleType" placeholder="请选择轴型">
                                            <el-option label="RE2B" value="RE2B"></el-option>
                                            <el-option label="RD2" value="RD2"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="材质" prop="axleMaterial">
                                        <el-select v-model="ruleForm.axleMaterial" placeholder="请轴材质">
                                            <el-option label="LZ50" value="LZ50"></el-option>
                                            <el-option label="LZ45CrV" value="LZ45CrV"></el-option>
                                            <el-option label="LZ40" value="LZ40"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="8">
                                    <el-form-item label="车轴制造" prop="axleMadeDate">
                                        <el-date-picker
                                                type="month"
                                                placeholder="选择日期"
                                                v-model="ruleForm.axleMadeDate"
                                                format="yyyy 年 MM 月 "
                                                value-format="yyyy-MM"
                                                style="width: 100%;"></el-date-picker>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="制造单位" prop="axleMadeIn">
                                        <el-input v-model="ruleForm.axleMadeIn"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="轴位" prop="axlePosition">
                                        <el-select v-model="ruleForm.axlePosition" placeholder="请选择轴位">
                                            <el-option label="1位" value="1"></el-option>
                                            <el-option label="2位" value="2"></el-option>
                                            <el-option label="3位" value="3"></el-option>
                                            <el-option label="4位" value="4"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="8">
                                    <el-form-item label="轮型" prop="wheelType">
                                        <el-select v-model="ruleForm.wheelType" placeholder="请选择轮型">
                                            <el-option label="HESA" value="HESA"></el-option>
                                            <el-option label="HEZB" value="HEZB"></el-option>
                                            <el-option label="HDSA" value="HDSA"></el-option>
                                            <el-option label="HDZA" value="HDZA"></el-option>
                                            <el-option label="HDZB" value="HDZB"></el-option>
                                            <el-option label="HDZC" value="HDZC"></el-option>
                                            <el-option label="HDZD" value="HDZD"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="材质" prop="wheelMaterial">
                                        <el-select v-model="ruleForm.wheelMaterial" placeholder="请选择轮材质">
                                            <el-option label="辗钢" value="辗钢"></el-option>
                                            <el-option label="铸钢" value="铸钢"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="制造单位" prop="wheelMadeIn">
                                        <el-input v-model="ruleForm.wheelMadeIn"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="12">
                                    <el-form-item label="首次组装" prop="wheelAssemblefirstDate">
                                        <el-date-picker
                                                type="date"
                                                placeholder="选择日期"
                                                v-model="ruleForm.wheelAssemblefirstDate"
                                                format="yyyy 年 MM 月 dd 日 "
                                                value-format="yyyy-MM-dd"
                                                style="width: 100%;"></el-date-picker>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="组装单位" prop="wheelAssemblefirstIn">
                                        <el-input v-model="ruleForm.wheelAssemblefirstIn"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="12">
                                    <el-form-item label="末次组装" prop="wheelAssemblelastDate">
                                        <el-date-picker
                                                type="date"
                                                placeholder="选择日期"
                                                v-model="ruleForm.wheelAssemblelastDate"
                                                format="yyyy 年 MM 月 dd 日"
                                                value-format="yyyy-MM-dd"
                                                style="width: 100%;"></el-date-picker>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="组装单位" prop="wheelAssemblelastIn">
                                        <el-input v-model="ruleForm.wheelAssemblelastIn"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="12">
                                    <el-form-item label="车轮标记左" prop="wheelMarkLeft">
                                        <el-input v-model="ruleForm.wheelMarkLeft"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="车轮标记右" prop="wheelMarkRight">
                                        <el-input v-model="ruleForm.wheelMarkRight"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                            <el-form-item>
                                <el-button type="primary" @click="submitForm('ruleForm')"  v-show="addbtnstatus" size="small">创建</el-button>
                                <el-button @click="resetForm" size="small">重置</el-button>
                                <el-button @click="saveForm('ruleForm')" v-show="savebtnstatus" size="small">保存</el-button>
                                <el-button @click="modifyForm('ruleForm')" v-show="modbtnstatus" size="small">修改</el-button>
                                <el-button @click="cancelmodForm('ruleForm')" v-show="cancelbtnstatus" size="small">取消</el-button>
                                <el-button @click="deleteForm('ruleForm')" size="small" type="warring">删除</el-button>
                            </el-form-item>
                        </el-form>
                    </el-card>
                </el-col>
            </el-row>
        </el-card>
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
    export default {
        name: "information",
        data(){
            //校验制造单位
            var checkMadePlant = (rule,value,callback)=>{
                var plants=[];
                // if (plants.indexOf(value)==-1) {
                //     return callback(new Error("输入合法的单位"));
                // }
                callback();
            };
            //校验车型
            var checkvehicleTypes = (rule,value,callback)=>{
                var vehicleTypes = ["P70","P62NK","P64GK","P64K","P62K",
                "C64K","C64","C70","C70E","C64H","G70","G70K","G70H","GQ70",
                "NX70","NX70A","X70"];
                if (vehicleTypes.indexOf(value.toUpperCase())==-1) {
                    return callback(new Error("输入合法的车型"));
                }
                callback();
            };
            return {
                count:30,
                isModify:false,
                dialogVisible:false,
                addbtnstatus:true,
                savebtnstatus:true,
                modbtnstatus:false,
                cancelbtnstatus:false,
                itemUnderMod:{},
                savedInfo:[],
                saveIndex:1,
                QRcodeVisible:false,
                QRimgpath:'',
                ruleForm: {
                    wheelId:'',
                    takeInDate: '',
                    takeInDepot: '',
                    takeInReason: '',
                    vehicleType: '',
                    vehicleNumber: '',
                    axleNumber:'',
                    axleType: '',
                    axleMaterial: '',
                    axleMadeDate:'',
                    axleMadeIn:'',
                    axlePosition:'',
                    wheelType:'',
                    wheelMaterial:'',
                    wheelMadeIn:'',
                    wheelAssemblefirstDate:'',
                    wheelAssemblefirstIn:'',
                    wheelAssemblelastDate:'',
                    wheelAssemblelastIn:'',
                    wheelMarkLeft:'',
                    wheelMarkRight:'',
                    worker:'',
                    infoTakeFinish:'0',
                    infoTakeFinishTime:'',
                    isMeasureFinish:'0',
                    other:'',
                    saveNumer:0
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
                wheelList:[
                    {
                        axleNumber:"00001"
                    }
                ],
                rules: {
                    takeInDepot: [
                        { required: true, message: '请输入收入单位', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    vehicleType: [
                        { required: true, message: '请输入车型', trigger: 'blur' },
                        { validator:checkvehicleTypes,trigger: 'blur'}
                     ],
                    vehicleNumber: [
                        { required: true, message: '请输入车号', trigger: 'blur' },
                        { min: 7, max: 7, message: '长度 7 个字符', trigger: 'blur' }
                    ],
                    axleNumber: [
                        { required: true, message: '请输入轴号', trigger: 'blur' },
                        { min:3, max:5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    axleMadeIn: [
                        { required: true, message: '请输入制造单位', trigger: 'blur' },
                        { validator:checkMadePlant,trigger: 'blur'}
                    ],
                    wheelMadeIn: [
                        { required: true, message: '请输入制造单位', trigger: 'blur' },
                        { validator:checkMadePlant,trigger: 'blur'}
                    ],
                    wheelAssemblefirstIn: [
                        { required: true, message: '请输入制造单位', trigger: 'blur' },
                        { validator:checkMadePlant,trigger: 'blur'}
                    ],
                    wheelAssemblelastIn: [
                        { required: true, message: '请输入制造单位', trigger: 'blur' },
                        { validator:checkMadePlant,trigger: 'blur'}
                    ],
                    wheelMarkLeft: [
                        { message: '请填写活动形式', trigger: 'blur' }
                    ],
                    wheelMarkRight: [
                        { message: '请填写活动形式', trigger: 'blur' }
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
            //刷新表单
            flushRuleForm(){
                this.resetForm();
                this.addbtnstatus = true;
                this.savebtnstatus = true;
                this.modbtnstatus = false;
                this.cancelbtnstatus = false;
                this.isModify = false;
                this.ruleForm = {};
            },
            //创建新表
            creatNewWheelInfo(){
                this.$refs['infolist'].childNodes.forEach(function (child,index) {
                    child.classList.remove("choosen");
                });
                this.flushRuleForm();
            },
            //添加新wheel
           submitForm(formName) {
                this.$refs[formName].validate(async (valid) => {
                    if (valid) {
                        this.ruleForm.worker = sessionStorage.getItem("name");
                        this.ruleForm.infoTakeFinish = '1';
                        this.ruleForm.isMeasureFinish = '0';
                        this.ruleForm.infoTakeFinishTime = this.dateFormate(new Date(),'');
                        var result = await this.$http.post(
                            "/wheelTakein/addWheel",
                            this.ruleForm);
                        if (result.data.code != 100){
                            alert("添加失败");
                            return ;
                        }
                        //从保存列表删除
                        var saveNum = this.ruleForm.saveNumer;
                        if(saveNum!=0){
                            this.deleteFromSaveInfo(saveNum);
                            this.searchSavedInfo();
                        }
                        this.flushRuleForm();
                        alert("创建成功");
                      } else {
                        alert('信息不完整！');
                        return false;
                    }
                });
            },
            //重置表单内容
            resetForm() {
                this.$refs['ruleForm'].resetFields();
            },
            //保存未完成wheel
            saveForm(formName){
               var num = this.ruleForm.saveNumer;
               //如果已存在替换
               for (var i=0;i<this.savedInfo.length;i++){
                   if (this.savedInfo[i].saveNumer==num){
                       this.savedInfo[i] = JSON.parse(JSON.stringify(this.ruleForm));
                       this.saveToSession(this.savedInfo,this.saveIndex);
                       this.creatNewWheelInfo();
                       alert("已保存");
                       return;
                   }
               }
               //保存新
                this.ruleForm.worker = sessionStorage.getItem("name");
                this.ruleForm.infoTakeFinish = '0';
                this.ruleForm.saveNumer = this.saveIndex++;
                var saved = JSON.parse(JSON.stringify(this.ruleForm));
                this.savedInfo.push(saved);
                this.saveToSession(this.savedInfo,this.saveIndex);
                this.creatNewWheelInfo();
                alert("已保存");
            },
            saveToSession(data,index){
                var wheelInfo = {
                    data:data,
                    index:index
                }
                sessionStorage.setItem("wheelInfo",JSON.stringify(wheelInfo));
            },
            getSavedWheelInfoFromSession(){
                var wheelInfo = JSON.parse(sessionStorage.getItem("wheelInfo"));
                if (wheelInfo!=null){
                    this.savedInfo = wheelInfo.data;
                    this.saveIndex = wheelInfo.index;
                }
            },
            searchSavedInfo(){
               this.wheelList = this.savedInfo;
                this.flushRuleForm();
            },
            //修改wheel
           async modifyForm(formName){
                var result = await this.$http.post(
                    "/wheelTakein/modifyWheel",
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
               //保证至少一个查找条件
               // if(this.search.wheelId==''&&this.search.takeInDate==null&&this.search.axleNumber==''&&
               //     this.search.vehicleNumber==''&&this.search.infoTakeFinishTime==null){
               //     alert("请输入查找内容");
               //     return;
               // }
                this.$refs[searchForm].validate(async (valid) => {
                    if (valid) {
                        var result = await this.$http.post(
                            "/wheelTakein/sesrchinfo",
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
            //显示wheel信息
            showitem(item,index,e){
               //如果已提交屏蔽 创建 按钮，提供修改和取消按钮
               this.flushRuleForm();
               if (item.infoTakeFinish == '1'){
                   this.addbtnstatus = false;
                   this.savebtnstatus = false;
                   this.modbtnstatus = true;
                   this.cancelbtnstatus = true;
                   this.isModify = true;
               }
               //深拷贝
                this.ruleForm = JSON.parse(JSON.stringify(item));
               //保存修改item的index，便于修改后刷新
                this.itemUnderMod = index;
                //清除choosen类
                e.currentTarget.parentElement.childNodes.forEach(function (child,index) {
                    child.classList.remove("choosen");
                });
                //添加choosen类
                e.currentTarget.classList.add("choosen");
                // console.log(this.$refs['li'+index]);
                // console.log(e.currentTarget.parentElement);
          },
           async deleteForm(formName){
                   var res = await this.$confirm('此操作将永久删除, 是否继续?', '提示', {
                       confirmButtonText: '确定',
                       cancelButtonText: '取消',
                       type: 'warning'
                   }).catch(err=>{
                       return err;
                   });
                   if (res == "confirm") {
                       var finishNum = this.ruleForm.infoTakeFinish;
                       //从数据库删除
                       if (finishNum == '1') {
                           var id = this.ruleForm.wheelId;
                           console.log(id);
                           var result = await this.$http.get('/wheelTakein/deleteWheel?id=' + id);
                           if (result.data.code != 100) {
                               alert("删除失败");
                               return;
                           }
                           this.searchSavedInfo();
                           alert("已删除");
                       }
                       //从保存列表删除
                       if (finishNum == '0') {
                           //从保存列表删除
                           var saveNum = this.ruleForm.saveNumer;
                           this.deleteFromSaveInfo(saveNum);
                           this.searchSavedInfo();
                           alert("已删除");
                       }
                   } else {
                       // alert("取消删除");
                   }
             },
            //从保存列表删除
            deleteFromSaveInfo(saveNum){
                for (var i=0;i<this.savedInfo.length;i++){
                    if (this.savedInfo[i].saveNumer==saveNum){
                        this.savedInfo.splice(i,1);
                        this.saveToSession(this.savedInfo,this.saveIndex);
                    }
                }
            },
            creatQrcode(){
                this.QRcodeVisible = true;
                this.getQRcode(this.ruleForm.wheelId);
            },
            //生成二维码
            async getQRcode(wheelId){
                var result = await this.$http.get(
                    "/wheelTakein/getQRcode?id="+wheelId);
                if (result.data.code != 100){
                    alert("二维码生成失败");
                    return ;
                }
                this.QRimgpath = '/wheelqrcode/'+result.data.object;
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
            this.getSavedWheelInfoFromSession();
            this.wheelList = this.savedInfo;
        }
    }
</script>

<style lang="scss" scoped>
    .status{
        font-size: 14px;
        margin: 0 0 10px 20px;
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
<template>
    <div>
        <!--        面包屑导航条-->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>综合管理</el-breadcrumb-item>
            <el-breadcrumb-item>轮对管理</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card>
            <el-row>
                <el-tabs tab-position="left" style="height:1000px;">
                    <el-tab-pane label="0-2股道">
                        <div class="container">
                            <span :class="['item',item == 'null'?'vacancy':'']"  v-for="(item,index) in wheellist.qualified0"
                                    @click="showDetail(item)">
                                         {{item == 'null'?'':item}}
                            </span>
                        </div>
                        <div class="container">
                            <span :class="['item',item == 'null'?'vacancy':'']"  v-for="(item,index) in wheellist.qualified1"
                                  @click="showDetail(item)">
                                         {{item == 'null'?'':item}}
                            </span>
                        </div>
                        <div class="container">
                            <span :class="['item',item == 'null'?'vacancy':'']"  v-for="(item,index) in wheellist.qualified2"
                                  @click="showDetail(item)">
                                         {{item == 'null'?'':item}}
                            </span>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="3-5股道">
                        <div class="container">
                            <span :class="['item',item == 'null'?'vacancy':'']"  v-for="(item,index) in wheellist.qualified3"
                                  @click="showDetail(item)">
                                         {{item == 'null'?'':item}}
                            </span>
                        </div>
                        <div class="container">
                            <span :class="['item',item == 'null'?'vacancy':'']"  v-for="(item,index) in wheellist.qualified4"
                                  @click="showDetail(item)">
                                         {{item == 'null'?'':item}}
                            </span>
                        </div>
                        <div class="container">
                            <span :class="['item',item == 'null'?'vacancy':'']"  v-for="(item,index) in wheellist.qualified5"
                                  @click="showDetail(item)">
                                         {{item == 'null'?'':item}}
                            </span>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="6-9股道">
                        <div class="container">
                            <span :class="['item',item == 'null'?'vacancy':'']"  v-for="(item,index) in wheellist.qualified6"
                                  @click="showDetail(item)">
                                         {{item == 'null'?'':item}}
                            </span>
                        </div>
                        <div class="container">
                            <span :class="['item',item == 'null'?'vacancy':'']"  v-for="(item,index) in wheellist.qualified7"
                                  @click="showDetail(item)">
                                         {{item == 'null'?'':item}}
                            </span>
                        </div>
                        <div class="container">
                            <span :class="['item',item == 'null'?'vacancy':'']"  v-for="(item,index) in wheellist.qualified8"
                                  @click="showDetail(item)">
                                         {{item == 'null'?'':item}}
                            </span>
                        </div>
                        <div class="container">
                            <span :class="['item',item == 'null'?'vacancy':'']"  v-for="(item,index) in wheellist.qualified9"
                                  @click="showDetail(item)">
                                         {{item == 'null'?'':item}}
                            </span>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="报废股道">
                        <div class="container">
                            <span :class="['item2',item == 'null'?'vacancy':'']"  v-for="(item,index) in wheellist.discard0"
                                  @click="showDetail(item)">
                                         {{item == 'null'?'':item}}
                            </span>
                        </div>
                        <div class="container">
                            <span :class="['item2',item == 'null'?'vacancy':'']"  v-for="(item,index) in wheellist.discard1"
                                  @click="showDetail(item)">
                                         {{item == 'null'?'':item}}
                            </span>
                        </div>
                        <div class="container">
                            <span :class="['item2',item == 'null'?'vacancy':'']"  v-for="(item,index) in wheellist.discard2"
                                  @click="showDetail(item)">
                                         {{item == 'null'?'':item}}
                            </span>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </el-row>
        </el-card>
        <el-dialog
                title="信息"
                :visible.sync="dialogVisible"
                width="60%">
            <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="轴型:">
                    <span>{{ data.axleType }}</span>
                </el-form-item>
                <el-form-item label="轴号:">
                    <span>{{ data.axleNumber }}</span>
                </el-form-item>
                <el-form-item label="轴制造日期:">
                    <span>{{ data.axleMadeDate }}</span>
                </el-form-item>
                <el-form-item label="收入车型/车号:">
                    <span>{{ data.vehicleType +" "+ data.vehicleNumber }}</span>
                </el-form-item>
                <el-form-item label="轴位">
                    <span>{{ data.axlePosition }}</span>
                </el-form-item>
                <el-form-item label="收入日期">
                    <span>{{ data.takeInDate }}</span>
                </el-form-item>
                <el-form-item label="完成日期">
                    <span>{{ data.takeInDate }}</span>
                </el-form-item>
                <el-form-item label="送厂原因" v-if="data.discardReason">
                    <span>{{ data.discardReason }}</span>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "matching",
        data(){
            return{
                dialogVisible:false,
                wheellist: {},
                data:''
            }
        },
        methods:{
                async getWheelList(){
                    var result = await axios.post(
                        "/wheelManage/getWheels");
                    if (result.data.code != 100){
                        alert("添加失败");
                        return ;
                    }
                    this.wheellist = result.data.object;
                },
                async showDetail(item){
                    if (item == 'null'){
                        alert("该位置空闲");
                        return ;
                    }
                    var result = await axios.get(
                        "/wheelManage/getWheelsDetails?id="+item);
                    if (result.data.code != 100){
                        alert("查询失败");
                        return ;
                    }
                    this.data = result.data.object;
                    this.dialogVisible = true;
                }
            },
        created() {
            this.getWheelList();
        }
    }

</script>

<style lang="scss" scoped>
    .el-tag{
        margin: 3px;
    }
    .container{
        width: 100%;
        margin-bottom: 30px;
        overflow: auto;
    }
    .item{
        width: 70px;
        text-align: center;
        margin:3px 3px;
        float: left;
        background-color: #ecf5ff;
        border-color: #d9ecff;
        display: inline-block;
        height: 32px;
        padding: 0 10px;
        line-height: 30px;
        font-size: 12px;
        color: #409EFF;
        border-width: 1px;
        border-style: solid;
        border-radius: 4px;
        box-sizing: border-box;
        cursor: pointer;
    }
    .item2{
        width: 70px;
        text-align: center;
        margin:3px 3px;
        float: left;
        background-color: #ecf5ff;
        border-color: #d9ecff;
        display: inline-block;
        height: 32px;
        padding: 0 10px;
        line-height: 30px;
        font-size: 12px;
        color: red;
        border-width: 1px;
        border-style: solid;
        border-radius: 4px;
        box-sizing: border-box;
        cursor: pointer;
    }
    .vacancy{
      //  border-color:#71C671;
    }
</style>


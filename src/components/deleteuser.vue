<template>
    <div>
        <!--        面包屑导航条-->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>用户管理</el-breadcrumb-item>
            <el-breadcrumb-item>在线用户</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card class="box-card">
            <!--            搜索框-->
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-input clearable placeholder="请输入查询用户名" v-model="queryInfo.query">
                        <el-button slot="append" icon="el-icon-search" @click="searchuser"></el-button>
                    </el-input>
                </el-col>
                <el-col :span="4">
                    <span>
                        <el-select v-model="queryInfo.isonline" slot="prepend" placeholder="请选择登录情况">
                            <el-option label="登录" value="1"></el-option>
                            <el-option label="未登录" value="0"></el-option>
                            <el-option label="全部" value=""></el-option>
                        </el-select>
                    </span>
                </el-col>
                <el-col :span="4">
                    <span>
                        <el-select v-model="queryInfo.ismobile" v-show="queryInfo.isonline=='1'" slot="prepend" placeholder="请选择登录终端">
                            <el-option label="PC端" value="1"></el-option>
                            <el-option label="移动端" value="0"></el-option>
                        </el-select>
                    </span>
                </el-col>
                <el-col :span="1">
                    <el-button type="primary" @click="showAllUser">查找</el-button>
                </el-col>
            </el-row>
            <!--            用户展示列表-->
            <el-table :data="userlist" style="width: 100%" :default-sort = "{prop: 'id', order: 'ascending'}" border stripe>
                <el-table-column type="index" label="序号" width="50"></el-table-column>
                <el-table-column prop="id" label="ID" width="80" sortable></el-table-column>
                <el-table-column prop="username" label="用户名" width="150" sortable></el-table-column>
                <el-table-column label="角色" width="400">
                    <template slot-scope="scope">
                        <el-tag  v-for="(item,index) in scope.row.roles">{{item.roleName}}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="状态">
                    <template slot-scope="scope">
                        {{scope.row.isOnline == '1'?'登录':'退出'}}
                        <el-switch
                                v-model="scope.row.isOnline"
                                active-value= "1"
                                inactive-value= "0"
                                :disabled="scope.row.isOnline == '0'"
                                @change="onLineChange(scope.row)"
                        >
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column prop="loginTime" label="登录时间"  sortable></el-table-column>
                <el-table-column prop="ipAddr" label="IP地址" ></el-table-column>
                <el-table-column label="操作" fixed="right" width="120">
                    <template slot-scope="scope">
                        <el-button
                                icon="el-icon-edit"
                                size="mini"
                                @click="handle4Log(scope.$index, scope.row)">登录记录</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!--            分页显示-->
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="queryInfo.currentPage"
                    :page-sizes="[5,10,15,20]"
                    :page-size="queryInfo.pagesize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="total">
            </el-pagination>
        </el-card>
        <el-dialog
                title="登录记录"
                :visible.sync="LogDialogVisible"
                width="60%">
            <span>{{currentUser.username}}</span><span>的登录记录</span>
            <el-table :data="log" style="width: 100%" height="600" :default-sort = "{prop: 'id', order: 'ascending'}" border stripe>
                <el-table-column type="index" label="序号" width="50"></el-table-column>
                <el-table-column prop="url" label="请求路径" width="300" sortable></el-table-column>
                <el-table-column prop="time" label="请求时间" width="300" sortable></el-table-column>
                <el-table-column prop="ip" label="用户ip" width="300" sortable></el-table-column>
            </el-table>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "adduser",
        components:{
        },
        data(){
            return{
                LogDialogVisible:false,
                //用户列表
                userlist:[],
                //用户日志
                log:[],
                //当前用户
                currentUser:'',
                //显示用户条数
                total:100,
                //查询页码参数
                queryInfo:{
                    isonline:'1',
                    ismobile:'1',
                    query:'',
                    currentPage:1,
                    pagesize:5
                },
            }
        },
        methods:{
            //获取用户列表
            async getusers(){
                var result = await this.$http.post(
                    "/userManage/getusersWithLog",
                    this.queryInfo);
                if (result.data.code == 100){
                    this.userlist = result.data.object.list;
                    this.total = result.data.object.total;
                    console.log(this.userlist);
                }
            },
            //修改用户
            async handle4Log(index, row) {
                this.currentUser = row;
                this.LogDialogVisible = true;
                var result = await this.$http.post(
                    "/userManage/getusersLog?ismobile="+this.queryInfo.ismobile+"&isonline="+this.queryInfo.isonline,
                    row);
                if (result.data.code != 100){
                    alert("日志获取失败！")
                }
                this.log = result.data.object.logMap;
            },

            //每页显示数目改变
            handleSizeChange(val) {
                this.queryInfo.pagesize = val;
                this.getusers();
            },
            //当前页改变
            handleCurrentChange(val) {
                this.queryInfo.currentPage = val;
                this.getusers();
            },
            //强制用户下线
            async onLineChange(row){
                var result = await this.$http.post(
                    "/userManage/onLineChange",
                    row);
                if (result.data.code != 100){
                    alert("日志获取失败！")
                }
                alert("已强制下线！")
            },
            //查询用户
            async searchuser(){
                if (this.queryInfo.query.trim() == '') {
                    alert("查询内容为空");
                    return ;
                }
                var result = await this.$http.post(
                    "/userManage/searchusers",
                    {
                        username:this.queryInfo.query
                    }
                );
                if (result.data.code == 100){
                    this.userlist = result.data.object;
                    this.total = this.userlist.length;
                }
            },
            //显示所有用户
            showAllUser(){
                this.getusers();
            }
        },
        created() {
            this.getusers();
        }
    }
</script>

<style lang="scss" scoped>
    .box-card {
        position: relative;
    }
    .el-tag{
        margin:0 10px 5px 0;
    }
    .el-switch{
        margin-left: 10px;
    }
    .el-row{
        margin-bottom: 20px;
    }

</style>
<template>
    <div>
<!--        面包屑导航条-->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>用户管理</el-breadcrumb-item>
            <el-breadcrumb-item>添加用户</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card class="box-card">
<!--            搜索框-->
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-input clearable placeholder="请输入查询用户名" v-model="queryInfo.query">
                        <el-button slot="append" icon="el-icon-search" @click="searchuser"></el-button>
                    </el-input>
                </el-col>
                <el-col :span="1">
                    <el-button type="primary" @click="showAllUser">显示所有用户</el-button>
                </el-col>
                <el-col :span="1" :offset="14">
                    <el-button type="primary" @click="dialogVisible = true">添加用户</el-button>
                </el-col>
            </el-row>
<!--            用户展示列表-->
            <el-table :data="userlist" style="width: 100%" :default-sort = "{prop: 'id', order: 'ascending'}" border stripe>
                <el-table-column type="index" label="序号" width="50"></el-table-column>
                <el-table-column prop="id" label="ID" width="80" sortable></el-table-column>
                <el-table-column prop="username" label="用户名" width="150" sortable></el-table-column>
                <el-table-column prop="email" label="Email"  sortable></el-table-column>
                <el-table-column prop="phoneNum" label="电话" ></el-table-column>
                <el-table-column label="状态">
                    <template slot-scope="scope">
                        {{scope.row.status == '1'?'正常':'禁用'}}
                        <el-switch
                                v-model="scope.row.status"
                                active-value= "1"
                                inactive-value= "0"
                                @change="statusChange(scope.row)"
                        >
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="角色" width="400">
                    <template slot-scope="scope">
                        <el-tag  v-for="(item,index) in scope.row.roles">{{item.roleName}}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="操作" fixed="right" width="200">
                    <template slot-scope="scope">
                        <el-button
                                icon="el-icon-edit"
                                size="mini"
                                @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                        <el-button
                                icon="el-icon-delete"
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
<!--        添加用户对话框-->
        <el-dialog
                title="添加用户"
                :visible.sync="dialogVisible"
                width="50%"
                :before-close="handleClose"
                @close="closeForm"
        >
            <!--    新增用户对话框模块-->
            <newuser @send="getinfo" ref="newuser"></newuser>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
        <!--        修改用户对话框-->
        <el-dialog
                title="修改用户"
                :visible.sync="modydialogVisible"
                v-if="modydialogVisible"
                width="50%"
                :before-close="handleClose"
                @close="closeForm"
        >
            <!--    修改用户对话框模块-->
            <modyuser @send="getmodyinfo" ref="modyuser" :user="modyuserinfo"></modyuser>
            <span slot="footer" class="dialog-footer">
                <el-button @click="modydialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="modydialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import newuser from "./newuser";
    import modyuser from "./modyuser";
    export default {
        name: "adduser",
        components:{
            newuser:newuser,
            modyuser:modyuser
        },
        data(){
            return{
                //用户列表
                userlist:[],
                //显示用户条数
                total:100,
                //查询页码参数
                queryInfo:{
                    isonline:'',
                    query:'',
                    currentPage:1,
                    pagesize:5
                },
                //添加用户对话框显示
                dialogVisible: false,
                //修改用户对话框显示
                modydialogVisible: false,
                //修改用户信息
                modyuserinfo:{}
            }
        },
        methods:{
            //获取用户列表
           async getusers(){
              var result = await this.$http.post(
                  "/userManage/getusers",
                  this.queryInfo);
               if (result.data.code == 100){
                   this.userlist = result.data.object.list;
                   this.total = result.data.object.total;
               }
            },
            //修改用户
            handleEdit(index, row) {
                console.log(index, row);
                var roles = row.roles;
                var roleId = [];
                for(var i = 0;i<roles.length;i++){
                    roleId.push(roles[i].id);
                }
                console.log(roleId);
                this.modyuserinfo.info = row;
                this.modyuserinfo.roleid = roleId;
                //this.$refs.modyuser.modymethod();
                this.modydialogVisible = true;
            },
            //删除用户
           async handleDelete(index, row) {
             var res = await this.$confirm('此操作将永久删除用户, 是否继续?', '提示', {
                   confirmButtonText: '确定',
                   cancelButtonText: '取消',
                   type: 'warning'
               }).catch(err=>{
                   return err;
               });
              if (res == "confirm"){
                  var {data:res} = await this.$http.post("/userManage/deleteuser",{id:row.id});
                  if (res.code == 101){
                      alert("删除失败");
                      return ;
                  }
                  alert("删除成功");
                  this.getusers();
              }else {
                  alert("取消删除");
              }
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
            //改变用户状态
           async statusChange(info){
             await this.$http.post("/userManage/moduser",info)
                   .then(resp =>{
                       alert(resp.data.message);
                   })
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
            },
            //添加用户对话框
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(()=>{
                        done();
                    })
                    .catch();
            },
            //添加用户
           async getinfo(userinfo){
               console.log(userinfo);
                var result = await this.$http.post(
                       "/userManage/adduser",
                       {
                           userinfo:userinfo
                       });
                if (result.data.code != 100){
                    alert("用户添加失败");
                    return ;
                }
                alert("用户添加成功");
               this.getusers();
            },
            //修改用户
            async getmodyinfo(userinfo){
                console.log(userinfo);
                var result = await this.$http.post(
                    "/userManage/modyuser",
                    {
                        userinfo:userinfo
                    });
                if (result.data.code != 100){
                    alert("用户修改失败");
                    return ;
                }
                alert("用户修改成功");
                this.getusers();
            },
            //关闭表单重置
            closeForm(){
                this.$refs.newuser.resetForm('ruleForm');
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
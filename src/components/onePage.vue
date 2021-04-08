<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>用户管理</el-breadcrumb-item>
            <el-breadcrumb-item>添加用户</el-breadcrumb-item>
        </el-breadcrumb>

            <div class="box">
                <el-input clearable placeholder="请输入内容" v-model="userinfo" style="width: 300px">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>

                <el-button type="primary">显示所有用户</el-button>

                <el-button type="primary">添加用户</el-button>
            </div>


            <el-table :data="userlist" style="width: 100%" :default-sort = "{prop: 'id', order: 'ascending'}" border stripe>
                <el-table-column type="index" label="序号" width="50"></el-table-column>
                <el-table-column prop="id" label="ID" width="80" sortable></el-table-column>
                <el-table-column prop="username" label="用户名" width="200" sortable></el-table-column>
                <el-table-column prop="email" label="Email"  sortable></el-table-column>
                <el-table-column prop="phoneNum" label="电话" ></el-table-column>
                <el-table-column label="状态">
                    <template slot-scope="scope">
                        {{scope.row.status==1?'正常':'禁用'}}
                        <el-switch
                                v-model="scope.row.status"
                                active-color="#13ce66"
                                inactive-color="#ff4949"
                                active-value= "1"
                                inactive-value= "0">
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="角色" width="300">
                    <template slot-scope="scope">
                        <el-tag v-for="(item,index) in scope.row.roles">{{item.roleName}}</el-tag>
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
    </div>
</template>

<script>
    export default {
        name: "adduser",
        data(){
            return{
                userinfo:"",
                userlist:[]
            }
        },
        methods:{
            async getusers(){
                var result = await axios.post("/userManage/getusers");
                if (result.data.code == 100){
                    this.userlist = result.data.object;
                }
            },
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            }
        },

    }
</script>

<style lang="scss" scoped>
    .el-breadcrumb{
        margin-bottom: 15px;
        font-size: 12px;
    }
    .box-card {
        position: relative;
        padding: 0;
    }
    .el-tag{
        margin-right: 10px;
    }
    .el-switch{
        margin-left: 10px;
    }
    .box{
        background-color: #42b983;
        height: 40px;
    }

</style>
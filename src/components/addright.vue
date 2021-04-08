<template>
    <div>
        <!--        面包屑导航条-->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>权限管理</el-breadcrumb-item>
            <el-breadcrumb-item>添加权限</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card>
            <el-table :data="rightslist" style="width: 100%" stripe border>
                <el-table-column type="index" label="序号" width="50"></el-table-column>
                <el-table-column prop="permissionName" label="权限名"></el-table-column>
                <el-table-column prop="url" label="路径"></el-table-column>
                <el-table-column prop="level" label="级别">
                    <template slot-scope="scope">
                        <el-tag v-if="scope.row.level==1" >一级</el-tag>
                        <el-tag v-if="scope.row.level==2" type="info">二级</el-tag>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "rightmanage",
        data(){
            return {
                rightslist:[]
            }
        },
        methods:{
          async getrights(){
             var result = await this.$http.get("/rightManage/rightlist");
              if (result.data.code != 100){
                  alert("权限列表获取失败");
                  return ;
              }
             this.rightslist = result.data.object;
            }
        },
        created() {
            this.getrights();
        }
    }
</script>

<style lang="scss" scoped>

</style>
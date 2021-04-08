<template>
   <div>
       <!--        面包屑导航条-->
       <el-breadcrumb separator-class="el-icon-arrow-right">
           <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
           <el-breadcrumb-item>权限管理</el-breadcrumb-item>
           <el-breadcrumb-item>分配权限</el-breadcrumb-item>
       </el-breadcrumb>
       <el-card>
           <el-table :data="roleslist" style="width: 100%" stripe border>
               <el-table-column type="expand">
                   <template slot-scope="scope">
                       <el-row :class="['bdbottom',index==0?'bdtop':'']" v-for="(item,index) in scope.row.rights" :key="index">
<!--                           一级权限-->
                           <el-col :span="5">
                               <el-tag
                                       closable
                                       type=""
                                       @close="handleClose(scope.row,item.id)">
                                   {{item.permissionName}}</el-tag>
                               <i class="el-icon-caret-right"></i>
                           </el-col>
<!--                           二级权限-->
                           <el-col :span="15">
                               <el-tag
                                   closable
                                   type="success" v-for="(item2,index2) in item.subRight" :key="index2"
                                   @close="handleClose2(scope.row,item.id,item2.id)">
                               {{item2.permissionName}}</el-tag>
                           </el-col>
                       </el-row>
                   </template>
               </el-table-column>
               <el-table-column type="index" label="序号" width="50"></el-table-column>
               <el-table-column prop="roleName" label="角色名"></el-table-column>
               <el-table-column prop="roleDesc" label="角色描述"></el-table-column>
               <el-table-column label="操作" fixed="right" width="400">
                   <template slot-scope="scope">
                       <el-button
                               icon="el-icon-edit"
                               size="mini"
                               @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                       <el-button
                               icon="el-icon-delete"
                               size="mini"
                               type="danger"
                               @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                       <el-button
                               icon="el-icon-setting"
                               size="mini"
                               type="primary"
                               @click="handleAssignment(scope.$index, scope.row)">分配权限</el-button>
                   </template>
               </el-table-column>
           </el-table>
       </el-card>
<!--       分配权限对话框-->
       <el-dialog
               title="分配权限"
               :visible.sync="dialogVisible"
               v-if="dialogVisible"
               width="50%"
               :before-close="beforeClose"
               @close="closeDialog"
       >
           <!--    显示权限子组件-->
           <assignmentRight :rights="modyrolerights" :roleid="modroleid" ref="assignmentRight"></assignmentRight>
           <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="assigRight">确 定</el-button>
            </span>
       </el-dialog>
   </div>
</template>

<script>
    import assignmentRight from "./assignmentRight";
    export default {
        name: "modifyright",
        components:{
            assignmentRight:assignmentRight
        },
        data(){
            return{
                roleslist:[],
                modroleid:'',
                modyrolerights:[],
                dialogVisible:false,
                //保存当期修改权限的角色
                currentModRole:{}
            }
        },
        methods:{
            //获取角色信息
            async getroles(){
                var result = await this.$http.get("/rightManage/modrolerights");
                if (result.data.code != 100){
                    alert("权限列表获取失败");
                    return ;
                }
                this.roleslist = result.data.object;
            },
            handleEdit(index, row){
                console.log(row);
            },
            handleDelete(index, row){
                console.log(row);
            },
            //分配权限
            handleAssignment(index, row){
                this.dialogVisible = true;
                this.modroleid = row.id;
                this.modyrolerights = row.rights;
                this.currentModRole = row;
            },
            //提交确认分配权限
          async assigRight(){
               this.dialogVisible = false;
               var checkedrights = this.$refs.assignmentRight.getCheckedRights();
               console.log(checkedrights);
                var result = await this.$http.post("/rightManage/assignmentRight",checkedrights);
                if (result.data.code != 100){
                    alert("权限分配失败");
                    return ;
                }
                //刷新该角色权限
               this.currentModRole.rights = result.data.object;
               alert("权限分配成功");
            },
            beforeClose(done){
                this.$confirm('确认关闭？')
                    .then(()=>{
                        done();
                    })
                    .catch();
            },
            closeDialog(){
                this.dialogVisible = false;
            },
            //删除一级权限
           async handleClose(role,id1){
                var res = await this.$confirm('此操作将永久删除, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).catch(err=>{
                    return err;
                });
                if (res == "confirm"){
                    var result =await this.$http.post(
                        "/rightManage/delright",
                        {
                            roleid:role.id,
                            rightid:id1,
                        });
                    if (result.data.code != 100){
                        alert("删除失败");
                        return ;
                    }
                    //刷新该角色权限
                    role.rights = result.data.object;
                    alert("删除成功");
                }else {
                    alert("取消删除");
                }
            },
            //删除二级权限
            async handleClose2(role,id1,id2){
                var res = await this.$confirm('此操作将永久删除, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).catch(err=>{
                    return err;
                });
                if (res == "confirm"){
                    var result =await this.$http.post(
                        "/rightManage/delright",
                        {
                            roleid:role.id,
                            rightid:id1,
                            subrightid:id2
                        });
                    if (result.data.code != 100){
                        alert("删除失败");
                        return ;
                    }
                    role.rights = result.data.object;
                    alert("删除成功");
                }else {
                    alert("取消删除");
                }
            }
        },
        created() {
            this.getroles();
        }
    }
</script>

<style lang="scss" scoped>
    .el-col{
        margin: 7px;
    }
    .el-tag{
        margin-left:30px;
    }
    .bdtop{
        border-top: 1px solid #eeeeee;
    }
    .bdbottom{
        border-bottom: 1px solid #eeeeee;
    }
</style>
<template>
    <div>
        <el-tree
                :data="orginrights"
                show-checkbox
                node-key="id"
                default-expand-all
                :default-checked-keys="checkedKeys"
                :props="defaultProps"
                ref="tree"
        >
        </el-tree>
    </div>
</template>

<script>
    export default {
        name: "assignmentRight",
        props:{
            rights:Array,
            roleid:''
        },
        data(){
            return {
                orginrights:[],
                defaultProps:{
                    children: 'subRight',
                    label: 'permissionName'
                }
            }
        },
        methods:{
          async getorginright(){
                var result = await this.$http.get("/rightManage/allright");
                if (result.data.code != 100){
                    alert("权限列表获取失败");
                    return ;
                }
                this.orginrights = result.data.object;
            },
            getCheckedRights(){
               var result = {
                   roleid:'',
                   rights: []
               }
               result.roleid = this.roleid;
               result.rights = this.$refs.tree.getCheckedKeys(true);
               return result;
            }
        },
        created() {
            this.getorginright();
        },
        computed:{
            rightsUsedtoSend:function () {
                 return JSON.parse(JSON.stringify(this.rights));
            },
            checkedKeys:function () {
                var arr = [];
                for(var i=0;i<this.rights.length;i++){
                    var subRight = this.rights[i].subRight;
                    for(var j=0;j<subRight.length;j++){
                        var id = subRight[j].id;
                        arr.push(id);
                    }
                }
                console.log(arr);
                return arr;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .el-tree {
        padding: 0px 20px;
    }
</style>
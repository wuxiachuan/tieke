<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="name">
            <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="name">
            <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="name">
            <el-input v-model="ruleForm.phoneNum"></el-input>
        </el-form-item>
        <el-form-item label="角色" prop="type">
            <el-checkbox-group v-model="ruleForm.role">
                <el-checkbox :label="item" name="role" :key="index"  v-for="(item,index) in roles"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="状态" prop="resource">
            <el-radio-group v-model="ruleForm.status">
                <el-radio label="1">正常</el-radio>
                <el-radio label="0">禁用</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">添加</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        data() {
            return {
                roles:[],
                ruleForm: {
                    name: '',
                    password: '',
                    email: '',
                    phoneNum: '',
                    status:'',
                    role: [],
                },
                rules: {
                    name: [
                        { required: true, message: '请输入活动名称', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    email: [
                        { type: 'email', required: true, message: '请选择日期', trigger: 'change' }
                    ],
                    phoneNum: [
                        { type: 'phone', required: true, message: '请选择时间', trigger: 'change' }
                    ],
                    status: [
                        { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                    ],
                    roles: [
                        { required: true, message: '请选择活动资源', trigger: 'change' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
          async getroles(){
              var result = await axios.get("http://localhost:8081/spt2/rolenames");
              if (result.data.code == 100){
                  this.roles = result.data.object;
                  console.log(this.roles);
              }
            }
        },
        created() {
            this.getroles();
        }
    }
</script>
<style lang="scss" scoped>

</style>
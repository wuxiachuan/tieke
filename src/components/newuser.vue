<template>
<!--    新增用户对话框模块-->
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
            <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="phoneNum">
            <el-input v-model="ruleForm.phoneNum"></el-input>
        </el-form-item>
        <el-form-item label="角色" prop="role">
            <el-checkbox-group v-model="ruleForm.role">
                <el-checkbox :label="item.id" name="role" :key="index"  v-for="(item,index) in roles">{{item.roleName}}</el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="状态" prop="status">
            <el-radio-group v-model="ruleForm.status">
                <el-radio label="1">正常</el-radio>
                <el-radio label="0">禁用</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item class="btns">
            <el-button type="primary" @click="submitForm('ruleForm')" round size="mini">添加</el-button>
            <el-button @click="resetForm('ruleForm')" round  type="warning" size="mini">重置</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        props:{
        },
        data() {
            var checkPhoneNum = (rule,value,callback)=>{
                var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
                if (!myreg.test(value)) {
                    return callback(new Error("输入合法的手机号码"));
                }
                callback();
            };
            var checkEmail = (rule,value,callback)=>{
                var myreg= /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
                if (!myreg.test(value)) {
                    return callback(new Error("输入合法的邮箱"));
                }
                callback();
            };
            return {
                roles:[],
                ruleForm: {
                    username: '',
                    password: '',
                    email: '',
                    phoneNum: '',
                    status:'',
                    role: []
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 3, message: '长度至少 3 个字符', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ],
                    email: [
                        { required: true, message: '请输入邮箱', trigger: 'blur' },
                        {  validator: checkEmail, trigger: 'blur'}
                    ],
                    phoneNum: [
                        { required: true, message: '请输入电话', trigger: 'blur' },
                        {  validator: checkPhoneNum, trigger: 'blur'}
                    ],
                    status: [
                        { required: true, message: '请选择用户状态', trigger: 'change' }
                    ],
                    role: [
                        { required: true, message: '请至少选择一个角色', trigger: 'change' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$emit('send',this.ruleForm);
                    } else {
                        alert("用户信息不正确！");
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            async getroles(){
                var result = await this.$http.get("/userManage/rolenames");
                if (result.data.code == 100){
                    this.roles = result.data.object;
                }
            }
        },
        created() {
            this.getroles();
        }
    }
</script>
<style lang="scss" scoped>
    .el-form{
        width: 90%;
    }
    .btns{
        display: flex;
        justify-content: flex-start;
    }
</style>
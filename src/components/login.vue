<template>
    <div class="login-container">
        <div class="login-box">
            <div class="avatar-box">
                <img src="../assets/logo.png" alt="pic">
            </div>
            <el-form class="login-form" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" >
                <el-form-item  prop="name">
                    <el-input v-model="ruleForm.name" prefix-icon="iconfont icon-user" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" v-model="ruleForm.password" prefix-icon="iconfont icon-3702mima" placeholder="请输入密码"></el-input>
                </el-form-item>

                <el-form-item class="btns">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                    <el-button type="info" @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ruleForm: {
                    name: '',
                    password: '',
                },
                rules: {
                    name: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 6,message: '长度在6个字符', trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                //验证输入合法性
                this.$refs[formName].validate(async (valid) => {
                    if (valid) {
                        //访问服务器登录
                       //var result1 = await this.$http.post("/login?name="+this.ruleForm.name+"&password="+this.ruleForm.password);
                        if (true){
                            var result = await this.$http.post("/userManage/login",this.ruleForm);
                            //如果登录成功，将token、一级权限、二级权限、用户名储存到sessionStorage，否则提示错误原因
                            if (result.data.code === 100){
                                var token = result.data.object.token;
                                //store里储存菜单
                                this.$store.commit("initMenus",result.data.object.menus);
                                sessionStorage.setItem("logintoken",token);
                                sessionStorage.setItem("name",result.data.object.username);
                                this.$router.push("/home");
                            }else{
                                alert(result.data.message);
                                console.log("登录失败");
                            }
                        }
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style lang="scss" scoped>
.login-container{
    height: 100%;
    background-color: #2b4b6b;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-box{
        width: 450px;
        height: 300px;
        background-color: #fff;
        border-radius: 3px;
        position: relative;
        .avatar-box{
            height: 130px;
            width: 130px;
            border: 1px solid #eee;
            border-radius: 50%;
            padding: 10px;
            box-shadow: 0 0 10px #ddd;
            position: absolute;
            left: 50%;
            transform: translate(-50%,-50%);
            background-color: #fff;
            img{
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background-color: #eee;
            }
        }
    }
}
.btns{
    display: flex;
    justify-content: flex-end;
}
.login-form{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
}
</style>
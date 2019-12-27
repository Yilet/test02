<template>
  <!-- 登录组件的容器 -->
  <div class="login_container">
    <!-- 头像区域 -->
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/logo.png" />
      </div>
      <!-- 登录表单区域 -->
      <el-form ref="loginFormRef" :model="loginForm" :rules="rules" class="login_form">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="el-icon-search"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" type="password" prefix-icon="el-icon-search"></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="submitForm">登录</el-button>
          <el-button type="info" @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: 'zs123',
        password: '1234567'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    resetForm() {
      this.$refs['loginFormRef'].resetFields()
    },
    submitForm() {
      //出发表单验证
      this.$refs['loginFormRef'].validate(async valid => {
        if (valid) {
          //执行ajax请求
          // alert('submit!')
          // var res = this.$http.get('user/1', this.loginForm)
          //将返回数据的 data属性赋给 res
          //ajax请求
          // var { data: res } = await this.$http.get(
          //   '/api/user/1',
          //   this.loginForm
          // )
          // console.log(this.loginForm)
          // console.log(res)
          //window.sessionStorage.setItem('token', '123')
          // this.$router.push('/home')
          this.$message({
            message: '恭喜你，这是一条成功消息',
            type: 'success'
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

//  需要安装less-load 的开发依赖
<style lang="less" scoped>
.login_container {
  height: 100%;
  background-color: #2b4b6b;
  position: relative;
}
.login_box {
  width: 450px;
  height: 300px;
  border-radius: 3px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.avatar_box {
  width: 130px;
  height: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  padding: 10px;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px #eee;
  background-color: #fff;
  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
}
.login_form {
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  padding: 0 10px;
  bottom: 0;
  .btns {
    text-align: right;
  }
}
</style>

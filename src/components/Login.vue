<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/logo.png" />
      </div>
      <el-form ref="form" :model="form" class="login_form" label-width="40px">
        <el-form-item label="账号" class="item" prop="username">
          <el-input
            prefix-icon="el-icon-user-solid"
            v-model="form.username"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" class="item" prop="password">
          <el-input
            v-model="form.password"
            prefix-icon="el-icon-s-cooperation"
          ></el-input>
        </el-form-item>
        <el-form-item class="btn">
          <el-button type="primary" @click="login">登录</el-button>
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
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    resetForm() {
      console.log(this.$refs.form)
      this.$refs.form.resetFields()
    },
    login() {
      this.$refs.form.validate(async valid => {
        if (!valid) return
        console.log(this.form)
        const data = await this.$http.post('login', this.form)
        console.log(data.data.code)
        if (data.data.code == 500) return this.$message.error('账号或密码错误')
        this.$message.success('登录成功')

        //将token保存到本地浏览器
        // window.sessionStorage.setItem("token",data.data.token);
        this.$router.push('/home')
      })
    }
  }
}
</script>
<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}
.item {
  font-size: 10px;
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.btn {
  display: flex;
  justify-content: flex-end;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 60%;
    padding: 10px;
    position: absolute;
    box-shadow: 0 0 10px #ddd;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      height: 100%;
      width: 100%;
      border-radius: 60%;
      background-color: #eee;
    }
  }
}
</style>
<style>
.item .el-form-item__label {
  color: #000;
}
</style>

<template>
<div class="user-login">
  <h1 class="user-title">登录</h1>
  <el-input v-model="userName" placeholder="请输入用户名" clearable class="margin5"></el-input>
  <el-input v-model="passWord" placeholder="请输入密码" maxlength=5 clearable></el-input>
  <router-link tag="div" class="btn-wrapper" to="/user-info">
    <el-button type="success" @click="handlleUserLogin">登陆</el-button>
    <el-button type="info">注册</el-button>
  </router-link>
</div>

</template>
<script>
import {mapMutations} from 'vuex'
export default {
  data () {
    return {
      userName: '',
      passWord: ''
    }
  },
  methods: {
    handlleUserLogin () {
      let user = {
        'userName': this.userName,
        'passWord': this.passWord
      }
      this.setUser(user)
    },
    ...mapMutations({
      setUser: 'SET_USER'
    })
  }
}
</script>
<style lang="less" scoped>
.user-login{
  width:500px;
  float: left;
  padding: 10px;
  margin-left:20px;
  border:1px solid #ddd;
  background-color:#409EFF;
  .user-title{
    width:100px;
    height:40px;
    line-height: 40px;
    margin:0 auto;
    color:#fff;
    background-color:#409EFF;
  }
  .el-input{
    margin-top:40px;
  }
  .margin5{
    margin-top:5px;
  }
  .btn-wrapper{
    margin-top:20px;
    width:100%;
    display: flex;
    justify-content: space-around;
  }
 }
</style>

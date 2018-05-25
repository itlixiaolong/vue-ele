<template>
  <div class="user-info">
    <h3>您好,<span class="user-name">{{user.userName}}</span>欢迎回来,以下是您所购买的商品</h3>
    <el-button type="danger" @click="handleLoginOut">登出</el-button>
    <el-table
    :data="goods"
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="商品编号"
      width="299px"
      align="center">
    </el-table-column>
    <el-table-column
      prop="goodName"
      label="商品名称"
      width="299px"
      align="center">
    </el-table-column>
  </el-table>
  </div>
</template>
<script>
import {getGoodsDate} from '../../../api/user/getGoodsDate'
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'UserInfo',
  components: {
    // 这里声明引入的组件
  },
  computed: {
    ...mapGetters([
      'user',
      'goods'
    ])
  },
  data () {
    return {
      // 这里定义当前组件需要vue实时追踪的数据 如
    }
  },

  created () {
    // 这里调用methods里定义的方法,如 this._getUserData()
    console.log(this.user)
    this._getGoodsDate(this.user.userName)
  },
  methods: {
    // 这是定义当前组件的方法,如果是私有方法,我们以_开头命名
    // 命名规范驼峰命名（good: getListData）（bad: get_list_data、getlistData）,做到见名知义
    handleLoginOut () {
      this.logOutUser()
      if (!this.user.userName) {
        this.$router.push('/user-login')
      }
    },
    _getGoodsDate (userName) {
      // 调接口的相关操作
      if (!userName) {
        this.$router.push('/user-login')
        return
      }
      // getGoodsDate(userName).then(function (response) {
      //   // console.log(response.data.data)
      //   this.goods = response.data.data //这种方式有问题,因为this会找不到
      //   this.importGoodsData(this.goods)
      // }).catch(function (error) {
      //   console.log(`这是catch捕获的数据${error}`)
      // })
      const self = this
      getGoodsDate(userName).then(function (response) {
        // console.log(response.data.data)
        self.importGoodsData(response.data.data)
      }).catch(function (error) {
        console.log(`这是catch捕获的数据${error}`)
      })
    },
    ...mapActions([
      'importGoodsData',
      'logOutUser'

    ])

  },
  watch: {
    // 这里定义需要检测变化的数据以及对应的回调处理函数如
    user () {

    },
    length () {

    }
  }
}
</script>
<style lang="less" scoped>
 @color:#ddd;
.user-info{
  width:600px;
  height:40px;
  margin:0 auto;
  position: relative;
  line-height: 40px;
  background-color: @color;
  h3{
    width:50%;
    height:40px;
    margin:0 auto;
    font-size: 16px;
    color:#444;
    .user-name{
      color:rgb(42, 27, 248);
      padding:0 5px;
    }
  }
  .el-button{
    position: absolute;
    top:0px;
    right:0px;
  }
  .user-wrapper{
    width:50%;
    margin:0 auto;
    .user-item{
      width:100%;
      height:60px;
      .user-name,.user-password{
        font-size:20px;
        color:blue;
      }
    }
  }
}

</style>

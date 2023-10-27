<template>
  <div class="login-pach">
    <el-card class="box-card">
      <template #header>
        <span>黑马面经运营后台</span>
      </template>
      <div>
        <el-form ref='formRef' :model='form' :rules='rules'>
           <el-form-item label='用户名' prop='username'>
             <el-input v-model="form.username" placeholder='请输入用户名'> </el-input>
           </el-form-item>
           <el-form-item label='密码' prop='password'>
             <el-input v-model="form.password" placeholder='请输入密码' typr='password'> </el-input>
           </el-form-item>
           <el-form-item class="ct">
             <el-button type="primary" @click="btnLogin"> 登 录 </el-button>
             <el-button @click="refst"> 重置 </el-button>
           </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  name: 'LoginIndex',
  data(){
    return {
      form:{
        username:'',
        password:''
      },
    rules:{
      username :[
        { required: true, message: '请输入活动名称', trigger: ['blur','change'] },
        { min: 5, max: 12, message: '长度在 5 到 12 个用户名', trigger: ['blur','change'] }
      ],
      password :[
        { required: true, message: '请输入活动名称', trigger: ['blur','change'] },
        { min: 5, max: 12, message: '长度在 5 到 12 个密码', trigger: ['blur','change'] }
      ]
    }
    }
  },
  methods:{
    btnLogin(){
      this.$refs.formRef.validate( async(valid)=>{
        if(valid) {
          const res = await login(this.form)
          console.log(res);
          //  把参数 token传给 vuex仓库
          this.$store.commit('user/setToken',res.data.token)
          this.$message.success('登陆成功')
          this.$router.push('/')
        }
      })
    },
    //  清除表单内容
    refst(){
      this.$refs.formRef.resetFields()
    }

  }
}
</script>

<style lang="scss" scoped>
.login-pach{
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .box-card{
    width: 420px;

    ::v-deep .el-card__header{
      height: 80px;
      text-align: center;
      background: rgba(114,124,245,1);
      color: #fff;
      font-size: 18px;
      line-height: 40px;
    }
    .el-form{
      padding: 0px 20px;
    }
  }
}
.ct{
  text-align: center;
}
</style>

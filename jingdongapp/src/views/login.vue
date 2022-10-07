<template>
  <div class="login-box">
    <div class="head">
        <van-icon name="arrow-left" @click="goBack" class="back"/>
        <p>登录</p>
    </div>
    <div class="box" data-v-398cc221="">
        <div class="van-cell van-field" data-v-398cc221="">
            <div class="van-cell__value van-cell__value--alone van-field__value"><div class="van-field__body">
                <input type="text" id="van-field-8-input" class="van-field__control" placeholder="手机号/账户名/邮箱"></div></div></div>
                <div class="van-cell van-field" data-v-398cc221="">
                    <div class="van-cell__value van-cell__value--alone van-field__value">
                    <div class="van-field__body"><input type="password" id="van-field-9-input" class="van-field__control" placeholder="请输入密码"><!---->
                <div class="van-field__right-icon"><i class="van-badge__wrapper van-icon van-icon-closed-eye"><!----><!----><!----></i></div><!----></div><!----><!----></div><!----><!----></div>
            <button type="button" class="van-button van-button--default van-button--normal van-button--block van-button--round van-button--disabled" disabled="" data-v-398cc221="" style="color: white; background: linear-gradient(to right, rgb(255, 96, 52), rgb(238, 10, 36)); border: 0px;">
                <div class="van-button__content"><!----><span class="van-button__text"> 登录 </span><!----></div>
            </button>
        <p class="tip"><a href="#/reg">手机快速注册</a></p>
    </div>
  </div>
</template>

<script>
export default {
   name:"login",
   methods:{
    goBack(){
        this.$router.back();
    }
   }
}
</script>

<style scoped>
    .login-box{
        position: relative;
    }
   .head{
      width:100%;
      height: 3.125rem;
      text-align: center;
      position: relative;
      border-bottom: 1px rgb(175, 175, 175) solid;
   }
   .back{
    float: left;
    position: absolute;
    top: .9375rem;
    left: 0px;
   }
   .head p{
    padding-top: .9375rem;
   }
   .tip{
       position: absolute;
       right:0px;
       margin-top: .625rem;
   }
</style>
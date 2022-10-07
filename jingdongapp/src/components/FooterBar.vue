<template>
  <ul class="footer-box">
    <li>
        <span class="iconfont icon-yejikanban"></span><br>
        <router-link to="/" exact-active-class='active'>首页</router-link>
    </li>
    <li>
        <span class="iconfont icon-yejikanban"></span><br>
        <router-link to="/Category" exact-active-class='active'>分类</router-link>
    </li>
    <li>
        <span class="iconfont icon-yejikanban"></span><br>
        <router-link to="/ShoppingCar" exact-active-class='active'>购物车</router-link>
    </li>
    <li>
        <span class="iconfont icon-fenxiang"></span><br>
        <router-link to="/My" exact-active-class="active">我的</router-link>
    </li>
  </ul>
</template>

<script>
export default {
    name:"FooterBar"
}
</script>

<style scoped>
@import url(../assets/iconfonts/iconfont.css);
.footer-box{
   width: 100%;
   height: 3.125rem;
   display: flex;
   justify-content: space-around;
   align-items: center;
   border: 1px solid black;
}
.footer-box li{
    flex:1;
    text-align: center;
    margin-top: .625rem;
}
.active{
    color:red
}
</style>
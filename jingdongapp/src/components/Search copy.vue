<template>
  <div class="search-box">
    <div class="city">西安</div>
    <div class="search-input">
        <img src="../assets/logo.png" class="logo">
        <span class="shugang"></span>
        <span class="iconfont icon-fangdajing"></span>
        <input type="text" placeholder="立柜式空调">
    </div>
    <div class="login">登录</div>
  </div>
</template>

<script>
export default {
    name:"Search",
}
</script>

<style scoped>
    @import url(../assets/iconfonts/iconfont.css);
     .search-box{
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items:center;
        background-color:yellowgreen;
        box-sizing: border-box;
     }
     .search-box div{
        height: 100%;
        line-height: 50px;
        text-align: center;
        /* border: .0625rem solid black; */
     }
     .search-input{
        flex: 1;
        position: relative;
     }
     .search-input input{
        border: none;
        height: 30px;
        border-radius: 20px;
        box-sizing: border-box;
        padding-left:80px;
        width: 80%;
     }
     .city,.login {
        width: 60px;
     }
     .logo{
        position: absolute;
        left: 25px;
        top:50%;
        margin-top:-15px;
     }
     .shugang{
        border-left: 1px solid black;
        position: absolute;
        width: 0rem;
        height: 24px;
        top:15px;
        left: 70px;
     }
     .icon-fangdajing{
        position: absolute;
        font-size: 20px;
        left: 75px;
        top: 50%;
        margin-top: -20px;
     }
</style>
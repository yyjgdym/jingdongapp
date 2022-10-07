<template>
    <div class="rereg-box">
      <div class="header">
        <div class="van-nav-bar van-hairline--bottom">
          <div class="van-nav-bar__content">
            <div class="van-nav-bar__left van-haptics-feedback" @click="back">
              <i
                class="
                  van-badge__wrapper
                  van-icon van-icon-arrow-left
                  van-nav-bar__arrow
                "
                ><!----><!----><!----></i
              ><!---->
            </div>
            <div class="van-nav-bar__title van-ellipsis">注册</div>
            <!---->
          </div>
        </div>
      </div>
      <van-image class="yanz">
        <p>请设置登录密码</p>
      </van-image>
      <van-field v-model="password" type="password" placeholder="请设置至少6位登录密码"  @click="shu"/>
      <van-icon name="closed-eye"  class="close"/>
      <van-icon name="eye-o" class="open"/>
      <p>密码强度效验，</p>
      <van-button :disabled="disabled" type="primary" class="next" @click="next"
        >完成</van-button>
    </div>
  </template>
  
  <script>
 import axios from "axios";
  export default {
      name:"ReReg",
      data(){
          return{
              msg:"",
              disabled:true,
              password:"",
          }
      },
      methods:{
          back(){
              this.$router.go(-1);
          },
          send(){
             axios({
              url:"api/user/dosendmsgcode",
              method:"post",
              data:{
                  tel
              },
             })
             .then((res)=>{
              console.log('我是console',res.data);
              if(res.data.code==200){
                  localStorage.setItem("yzm",res.data.data);
                  console.log('我是console',res.data.data);
              }
             })
          },
          shu(){
                this.disabled=false;
             
          },
          next(){
            const reg = /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])\S*$/ ;
            if(reg.test(this.password)){
               localStorage.setItem("password",this.password);
            }else{
                alert("格式不对");
            }
            this.$service({
                url:"api/user/dofinishregister",
                method:"post",
                data:{
                    tel:localStorage.getItem("tel"),
                    password:localStorage.getItem("password")
                }
            })
            .then((res)=>{
                console.log('我是console',res.data);
                if(res.data.code==200){
                    alert("注册成功");
                    setTimeout(()=>{
                        this.$router.push("/login")
                    })
                }  
            })
          }
      },
  };
  </script>
  
  <style scoped>
  .yanz {
    width: 100%;
    height: 12.5rem;
    text-align: center;
  }
  .shuru {
    border-bottom: 1px gray solid;
  }
  .next {
    width: 100%;
    border-radius: 0.9375rem;
    margin-top: 1.5rem;
    background-color: orangered;
  }
  .close{
    position: absolute;
    right: 0;
    top: 17.8125rem;
  }
  .open{
    position: absolute;
    right: 0;
    top: 17.8125rem;
    display: none;
  }
  p{
    font-size: .75rem;
  }
  </style>

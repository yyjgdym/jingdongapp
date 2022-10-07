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
      <p>短信形式发送</p>
    </van-image>
    <van-field
      v-model="msg"
      placeholder="请输入验证码"
      class="shuru"
      @input="shu"
    />
    <van-button type="primary" class="send" @click="send">发送验证码</van-button>
    <van-button :disabled="disabled" type="primary" class="next" @click="next"
      >下一步</van-button>
  </div>
</template>

<script>
    import axios from "axios";
    let tel=localStorage.getItem("tel");
    let yzm=localStorage.getItem("yzm");
export default {
    name:"ReReg",
    data(){
        return{
            msg:"",
            disabled:true,
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
            let reg=/^\d{5}/;
            if(reg.test(this.msg)){
                this.disabled=false;
            }
        },
        next(){
             if(this.msg==yzm){
                this.$router.push("/Setpassword");
                console.log('我是console',this.msg);
                
             }
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
.send{
    position: absolute;
    right:0;
    top:16.875rem;
}
</style>

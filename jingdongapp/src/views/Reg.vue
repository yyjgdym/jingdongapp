<template>
  <div class="reg-box">
    <div class="container">
      <header class="header">
        <div class="van-nav-bar van-hairline--bottom">
          <div class="van-nav-bar__content">
            <div class="van-nav-bar__left van-haptics-feedback" @click="back">
              <i
                class="
                  van-badge__wrapper
                  van-icon van-icon-arrow-left
                  van-nav-bar__arrow
                "><!----><!----><!----></i><!---->
            </div>
            <div class="van-nav-bar__title van-ellipsis">注册</div>
            <!---->
          </div>
        </div>
      </header>
      <van-field
        v-model="tel"
        type="tel"
        placeholder="请输入手机号"
        class="shuru"
        @input="shu"
      />
    </div>
    <van-button :disabled="disabled" type="primary" class="next" @click="next"
      >下一步</van-button>
    <van-popup v-model="show" class="show">
      <p>该手机号已被注册，请直接登录</p>
      <van-button color="black" plain class="button" @click="quxiao">取消</van-button>
      <van-button color="red" class="button" plain @click="denglu">立即登录</van-button>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "Reg",
  data() {
    return {
      tel: "",
      disabled: true,
      show:false,
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    shu() {
      let reg = /^1[3-9]\d{9}$/;
      if (reg.test(this.tel)) {
        this.disabled = false;
        localStorage.setItem("tel", this.tel);
      }
    },
    next() {
      this.$service({
        url: "/api/user/docheckphone",
        method: "post",
        data: {
          tel: this.tel,
        },
      }).then((res) => {
        console.log(res.data);
        if (res.data.code == "10005") {
          this.show = true;
        }
        if (res.data.code == "200") {
          this.$router.push("/ReReg");
        }
      });
    },
    quxiao(){
        this.show=false;
    },
    denglu(){
        this.$router.push("/login");
    }
  },
};
</script>

<style scoped>
.reg-box {
  position: relative;
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
.show{
    width: 9.375rem;
    height: 6.25rem;
}
</style>
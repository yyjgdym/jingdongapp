<template>
    <div class="box">
      <div class="content">
        ShoppingCar
        <van-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
        >
  <template #tags>
    <van-tag plain type="danger">标签</van-tag>
    <van-tag plain type="danger">标签</van-tag>
  </template>
  <template #footer>
    <van-button size="mini">按钮</van-button>
    <van-button size="mini">按钮</van-button>
  </template>
</van-card>
      </div>
      
      <FooterBarVue  class="footer"></FooterBarVue>
    </div>
  </template>

<script>
      import FooterBarVue from '@/components/FooterBar.vue';
export default {
    name:"ShoppingCar",
    components:{
        FooterBarVue
    }
}
</script>


<style scoped>
  .box{
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .content{
    flex:1;
    overflow: auto;
  }
</style>
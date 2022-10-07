<template>
   <van-list
    class="detail-box"
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    offset="0"
    @load="onLoad"
  >
  <div v-for="item in goodslist" :key="item.proid" 
  @click="goGoodsDetail(item.proid)">
    <img :src="item.img1">
    <p class="title">{{item.proname}}</p>
    <p class="price">￥{{item.originprice}}</p>
  </div>
  </van-list>
</template>

<script>
import axios from 'axios'
export default {
  name:"Detail",
  data(){
    return{
      pageIndex:1,
      loading:false,
      finished:false,
      goodslist:[]
    }
  },
  methods:{
    onLoad(){
      // console.log('onLoad');
      axios({
        url:"api/pro/list",
        params:{
          count:this.pageIndex,
          limitNum:60,
        },
      })
      .then((res)=>{
        if(res.data.code==200){
          // console.log('我是console',"res.data.data.length",res.data.data);
          this.goodslist=[...this.goodslist,...res.data.data];
          this.loading=false;
          this.pageIndex++;
        }
      })
      .catch((res)=>{
        console.log('err',err);
        
      })
    },
    goGoodsDetail(id){
      this.$router.push("/GoodsDetail/"+id)
    }
  },
}
</script>

<style scoped>
.detail-box {
  width: 100%;
  font-size: 14px;
  column-count: 2;
  column-gap: 5px;
}

.detail-box div {
  width: 100%;
  text-align: center;
  break-inside: avoid;
}

.detail-box div img {
  width: 90%;
}

.title {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
}

.price {
  text-align: left;
}
</style>
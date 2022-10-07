<template>
  <div class="secondskill-box">
    <div class="miao">
      <p class="sha">京东秒杀</p>
      <p class="shijian">12:00点场距结束</p>
    <van-count-down :time="time">
  <template #default="timeData" class="daojishi">
    <span class="block">{{ timeData.hours }}</span>
    <span class="colon">:</span>
    <span class="block">{{ timeData.minutes }}</span>
    <span class="colon">:</span>
    <span class="block">{{ timeData.seconds }}</span>
  </template>
</van-count-down>
</div>
  <div class="shangpin">
    <ul>
      <li v-for="item in secondskillgoods" :key="item.proid" @click="goGoodsDetail(item.proid)">
        <img :src="item.img1">
        <p class="title">{{item.proname}}</p>
        <p class="price">￥{{item.originprice}}</p>
      </li>
    </ul>
  </div>
  </div>
</template>

<script>
  import axios from 'axios'
export default {
    name:"SecondsKill",
    data() {
      return {
        time: 10 * 60 * 60 * 1000,
        pageIndex:1,
        loading:false,
        finished:false,
        secondskillgoods:[],
      };
    },
    created(){
      axios({
        url:"api/pro/seckilllist",
        params:{
          count:this.pageIndex,
          limitNum:6,
        }
      }).then((res)=>{
        //  console.log('我是console',res.data.data);
        if(res.data.code==200){
           this.secondskillgoods=[...this.secondskillgoods,...res.data.data];
           this.pageIndex++;
           this.loading=false;
        }
      })
      .catch((res)=>{
        console.log('err',err); 
      });
   
    },
    methods:{
      goGoodsDetail(id){
      this.$router.push("/GoodsDetail/"+id)
    }
    }
  };
  </script>
  <style scoped>
    .miao{
      text-align: center;
      box-sizing: border-box;
      /*  */
      color: #fff;
      font-size: 1.25rem;
      width: 6.25rem;
      height: 100%;
      background-color: red;
      float: left;
      display: flex;
      flex-direction: column;
    }
    .sha{
      padding-top: 1.25rem;
      font-size: 1.5rem;
    }
    .secondskill-box{
      background-color: bisque;
      width: 100%;
      height: 9.375rem;
      /* display: flex; */
    }
    .colon {
    display: inline-block;
    margin: 0 4px;
    color: white;
  }
  .block {
    display: inline-block;
    width: 22px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background-color: black;
    border-radius: .3125rem;
  }
  .van-count-down{
    padding-top: 1.25rem;
  }
  .shangpin{
    display: flex;
    justify-content: space-between;
  }
  .shijian{
    font-size: 1rem;
    padding-top: .625rem;
  }
  .title{
    font-size: 12px;
    font-size: 12px;
    color: #c81623;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  ul{
    /* flex: 1; */
    display: flex;
    overflow: auto;
  }
  li{
    width: 7.5rem;
    height: 100%;
    padding: .3125rem;
  }
  li img{
    width: 7.25rem;
    height: 6.25rem;
  }
  ::-webkit-scrollbar{
    display: none;
  }
</style>
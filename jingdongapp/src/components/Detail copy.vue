<template>
  <ul class="detail-box">
     <li v-for="goods in goodslist" :key="goods.id">
      <img :src="goods.img" />
      <p class="title">{{goods.name}}</p>
      <p class="price">${{goods.price}}</p>
     </li>
  </ul>
</template>

<script>
  import axios from 'axios';
export default {
    name:"Detail",
    data(){
      return{
        goodslist:[],
      }
    },
    created(){
       axios({
        url:"http://localhost:3000/goods",
       })
       .then(res=>{
        this.goodslist=res.data
       })
    }
}
</script>

<style>
 .detail-box{
  width:100%;
  font-size: .75rem;
  column-count: 2;
  column-gap: .3125rem;
 }
 .detail-box li{
  width: 100%;
  text-align: center;
  break-inside: avoid;
 }
 .detail-box li img{
  width: 90%;
 }
 .title{
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
 }
 .price{
  color: red;
  font-size: .875rem;
  text-align: left;
 }
</style>
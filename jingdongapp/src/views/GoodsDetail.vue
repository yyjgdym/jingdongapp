<template>
  <div class="goodsdetail-box">
    <div class="biaoti">
      <van-icon name="arrow-left" @click="goBack" class="back" />
      <img :src="goodslistdetail.img1" />
      <p class="price">￥{{ goodslistdetail.originprice }}</p>
      <p class="title">{{ goodslistdetail.proname }}</p>
    </div>
    <br />
    <div class="size">
      <p>选择<span>颜色分类/尺码</span></p>
      <p>发货<span>快递：免运费</span></p>
      <p>保障<span>7天无理由·运费险</span></p>
      <p>参数<span>品牌</span></p>
    </div>
    <div class="tuijian">
      <ul>
        <li class="qita" v-for="item in goodslist" :key="item.proid" 
  @click="goGoodsDetail(item.proid)">
      <img :src="item.img1">
      <p class="title">{{item.proname}}</p>
      <p class="price">￥{{item.originprice}}</p></li>
      </ul>
    </div>
    <van-goods-action class="dibu">
      <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>

    <!-- 商品评论 -->
    <!-- <ul>
        <li v-for="item in comments" :key="item.id">
            <p>{{item.content}}</p>
            <p>评论人：{{item.username}}</p>
            <p>评论时间：{{item.time}}</p>
        </li>
    </ul> -->
  </div>
</template>

<script>
 import axios from "axios";

export default {
  name: "GoodsDetail",
  data() {
    return {
      goods: {},
      //   comments:[],
      goodslistdetail: {},
       pageIndex:1,
       goodslist:[],
    };
  },
  methods: {
    goBack() {
      this.$router.back();
      // this.$router.replace("/Reg");
    },
    goGoodsDetail(id){
      this.$router.push("/GoodsDetail/"+id)
    }
  },
  created() {
    let proid = this.$route.params.goodsid;
    this.$service
      .get("api/pro/detail/" + proid)
      .then((res) => {
        if (res.data.code == 200) {
          // console.log('我是console',res.data.data);
          this.goodslistdetail = res.data.data;
        }
      })
      .catch((res) => {
        console.log("err", err);
      });
    axios({
      url: "api/pro/recommendlist",
      params: {
        count:this.pageIndex,
          limitNum:60,
      },
    })
    .then((res) =>{
        if(res.data.code==200){
           console.log('我是console',res.data.data);  
           this.goodslist=[...this.goodslist,...res.data.data];
           this.loading=false;
           this.pageIndex++;  
        }
      })
      .catch((res)=>{
        console.log('err',err);
      })
  },
     
};
//       let  getComments =()=>{
//           return this.$service.get("/comments",{
//               params:{
//                   goodsid:"01001"
//               }
//           });
//       }

//     this.$service.all([getGoodsDetail(),getComments()])
//     .then(this.$service.spread((detailRes,commentsRes)=>{
//         this.goods=detailRes.data[0];
//         this.comments=commentsRes.data;
//     }))
</script>

<style scoped>
.goodsdetail-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
img {
  height: 25rem;
}

.biaoti {
  border-radius: 0.625rem;
  width: 100%;
  height: 31.25rem;
  background-color: rgb(238, 238, 236);
}
.title {
  font-weight: 700;
  font-size: 1.125rem;
  margin-left: 0.625rem;
}
.price {
  color: red;
  font-weight: 700;
  font-size: 1.125rem;
  margin-left: 0.625rem;
}
.size {
  border-radius: 0.625rem;
  height: 9.375rem;
  line-height: 2.1875rem;
  background-color: rgb(238, 238, 236);
}
.size p {
  margin-left: 0.625rem;
  color: gray;
}
.size span {
  font-weight: 700;
  margin-left: 1.25rem;
  color: black;
}
::-webkit-scrollbar {
  width: 0 !important;
}
.qita {
  flex: 1;
  overflow: auto;
}
.back {
  position: absolute;
}
.tuijian{
  width: 100%;
  font-size: 14px;
  column-count: 2;
  column-gap: 5px;
}

.tuijian div {
  width: 100%;
  text-align: center;
  break-inside: avoid;
}

.tuijian  img {
  width: 100%;
  height: 100%;
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
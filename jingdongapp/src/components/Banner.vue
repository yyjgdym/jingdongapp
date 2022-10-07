<template>
  <van-swipe class="my-swipe" 
  :autoplay="3000" 
  indicator-color="pink" 
  duration="200" 
  initial-swipe="2" 
  @change="changeFn"
  >
  <van-swipe-item v-for="obj in imglist" :key="obj.bannerid">
    <img :src="obj.img" >
  </van-swipe-item>
  <template #indicator>
    <div class="custom-indicator">{{ current + 1 }}/4</div>
  </template>
</van-swipe>

</template>

<script>
  import axios from 'axios';
export default {
  name:"Banner",
  data() {
    return {
      imgs:[],
      current: 0,
    };
  },
  created(){
      axios({
        url:"/api/banner/list",
      }).then((res)=>{
        //  console.log('我是console',res.data);
        // this.imgs=res.data.data;
        // if(res.data.code==200){
        //   this.imgs=res.data.data
        // }
        let data = res.data;
      if(data.code==200){
        this.imgs = data.data
      }
      })
  },
  computed:{
    imglist:function(){
      return this.imgs.filter(item=>item.flag)
    }
  },
  methods: {
    changeFn(index){
    //  console.log('我是console',index);  
    this.current=index;
    },
    // item1(){
    //   location.href='https://www.baidu.com'
    // },
  },
};
</script>

<style scoped>
  .my-swipe{
  width: 100%;
  height: 9.375rem;
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}

.custom-indicator {
    position: absolute;
    left:50%;
    transform: translateX(-50%);
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    color:white;
    width: 50px;
    text-align: center;

  }
  img{
    width: 100%;
    height: 100%;
  }
</style>
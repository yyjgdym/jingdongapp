<template>
  <div class="box">
    <div class="content">
      <van-sidebar v-model="activeKey" class="left">
        <van-sidebar-item
          :title="item"
          v-for="(item, index) in categorylist"
          :key="index"
        />
      </van-sidebar>
      <div class="right" v-for="item in brandlist" :key="item.brand">
        <div class="right-content">
          <i class="van-badge__wrapper van-icon van-icon-photo-o van-grid-item__icon"></i><br />{{item.brand}}</div>
      </div>
    </div>
    <FooterBarVue></FooterBarVue>
  </div>
</template>
 
<script>
import axios from "axios";
import FooterBarVue from "@/components/FooterBar.vue";
export default {
  name: "Category",
  components: { FooterBarVue },
  data() {
    return {
      activeKey: 0,
      categorylist: [],
      brandlist:[],
    };
  },
  created() {
    function getlist() {
      return axios.get("api/pro/categorylist");
    }
    function getbrandlist(params) {
      return axios.get("api/pro/categorybrandlist", {
        params: {
           category: "手机",
          //  category:"{{list.data.data}}",
        },
      });
    }

    axios.all([getlist(), getbrandlist()]).then(
      axios.spread((list, brandlist) => {
        if (list.data.code == 200) {
          // console.log(list.data.data);
          this.categorylist = list.data.data;
        }

        if (brandlist.data.code == 200) {
          console.log(brandlist.data.data);
          if(brandlist.data.code==200){
           this.brandlist=brandlist.data.data;
          }
        }
      })
    );
  },
};
</script>

<style scoped>
.box {
  width: 100%;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.content {
  flex: 1;
  overflow: auto;
}
::-webkit-scrollbar {
  width: 0 !important;
}
.left{
  float: left;
}
.right{
 float: left;
}
.right-content{
 width: 4.125rem;
 height:4.125rem;
 padding-top: .625rem;
 text-align: center;
}
</style>
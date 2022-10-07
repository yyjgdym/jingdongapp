<template>
<van-search class="search-box"      
      v-model="value"
      shape="round"
      background="#4fc08d"
      placeholder="请输入搜索关键词"
      show-action="true"
    >
<template #left>
      <div @click="getCity">西安</div>
    </template>
    <template #action>
      <div @click="onSearch">搜索</div>
    </template>
    </van-search>
</template>

<script>
export default {
    name:"Search",
    data(){
      return{
         value:""
      }
    },
    methods:{
      getCity(){

      },
      onSearch(){

      }
    },
  
    }
</script>

<style scoped>
  .search-box {
  width: 100%;
  height: 3.75rem;
  display: flex;
  justify-content: space-around;
  background-color: #f66;
  align-items: center;
  color: white;
}
</style>
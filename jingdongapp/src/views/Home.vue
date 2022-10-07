<template>
  <div class="box">
      <SearchVue class="search"></SearchVue>
      <div class="content">
        <BannerVue></BannerVue>
        <NavBarVue></NavBarVue>
        <SecondsKillVue></SecondsKillVue>
        <DetailVue></DetailVue>
      </div>
      <FooterBarVue class="footer"></FooterBarVue>
  </div>
</template>


<script>
import SearchVue from '@/components/Search.vue';
import BannerVue from '@/components/Banner.vue';
import NavBarVue from '@/components/NavBar.vue';
import SecondsKillVue from '@/components/SecondsKill.vue';
import DetailVue from '@/components/Detail.vue';
import FooterBarVue from '@/components/FooterBar.vue';
export default {
    name:"Home",
    components:{
    SearchVue,
    BannerVue,
    NavBarVue,
    SecondsKillVue,
    DetailVue,
    FooterBarVue
}
}
</script>

<style scoped>
    .box{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

    }
    ::-webkit-scrollbar{
    width: 0!important;
    }
    .content{
      flex: 1;
      overflow: auto;
    }
</style>
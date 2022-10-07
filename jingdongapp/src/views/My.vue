<template>
  <div class="box">
    <div class="geren"><p>个人中心</p><span @click="goLogin" class="zhuce">注册</span></div>
    <div class="content"> 
      <div class="login">
        <div class="photo">
          <img src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" class="van-image__img">
        </div>
          <a href=""><router-link to="/login"><p>请点击登录</p></router-link></a>
      </div>
      <div class="van-grid van-hairline--top" data-v-1d30e905="">
        <div class="van-grid-item" data-v-1d30e905="" style="flex-basis: 25%;">
          <div class="van-grid-item__content van-grid-item__content--center van-hairline">
            <i class="van-badge__wrapper van-icon van-icon-refund-o van-grid-item__icon"></i>
            <span class="van-grid-item__text">待付款</span>
          </div>
        </div>
        <div class="van-grid-item" data-v-1d30e905="" style="flex-basis: 25%;">
          <div class="van-grid-item__content van-grid-item__content--center van-hairline">
            <i class="van-badge__wrapper van-icon van-icon-shop-o van-grid-item__icon"></i>
            <span class="van-grid-item__text">待收货</span>
          </div>
        </div>
        <div class="van-grid-item" data-v-1d30e905="" style="flex-basis: 25%;">
          <div class="van-grid-item__content van-grid-item__content--center van-hairline">
            <i class="van-badge__wrapper van-icon van-icon-thumb-circle-o van-grid-item__icon"></i>
            <span class="van-grid-item__text">待评价</span>
          </div>
        </div>
        <div class="van-grid-item" data-v-1d30e905="" style="flex-basis: 25%;">
          <div class="van-grid-item__content van-grid-item__content--center van-hairline">
            <i class="van-badge__wrapper van-icon van-icon-orders-o van-grid-item__icon"></i>
            <span class="van-grid-item__text">全部订单</span>
          </div>
        </div>
      </div>
      <div class="van-cell van-cell--clickable" role="button" tabindex="0" data-v-1d30e905="">
        <div class="van-cell__title"><span>地址管理</span></div><i class="van-badge__wrapper van-icon van-icon-arrow van-cell__right-icon"></i>
      </div>
      <div class="van-cell van-cell--clickable" role="button" tabindex="0" data-v-1d30e905="">
        <div class="van-cell__title"><span>我的收藏夹</span></div><i class="van-badge__wrapper van-icon van-icon-arrow van-cell__right-icon"></i>
      </div>
      <div class="van-cell van-cell--clickable" role="button" tabindex="0" data-v-1d30e905="">
        <div class="van-cell__title"><span>关于我们</span></div><i class="van-badge__wrapper van-icon van-icon-arrow van-cell__right-icon"></i>
      </div>
        <div class="logo" data-v-1d30e905=""><div class="van-image" data-v-1d30e905="">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAYAAABe3VzdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDRBMkU5MkUzQkJEMTFFRDlERTZGNzhCRThDRkU0QjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDRBMkU5MkYzQkJEMTFFRDlERTZGNzhCRThDRkU0QjMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NEEyRTkyQzNCQkQxMUVEOURFNkY3OEJFOENGRTRCMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NEEyRTkyRDNCQkQxMUVEOURFNkY3OEJFOENGRTRCMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ps/3P5gAAAJuSURBVHja7FjRUQIxEAWHGX+xAqGDowOsQKxArECoAKngsAKgArECsQLPCtQKuF+/cNd5yzzXBAI46gc7c5OQXJKXt293T6vL5bLyn+2o8s/tAHBfq+2z+D3LGtLUj4uicOOZNKWMvybu0ZZH21Keiawrbb66a5DIxrrpA362DKSMd6S5A8CTDXvk0vTcsII7s/32YfCa+sxUHhjzwOq4XEagCjCpc2O99M4ahFs6+LlyCdhrYPx2zRY5gdP1J/KcSX+EsWzfIOlSn4FcEiOzNdLoErgr0m3bs7+TBmWzBVwxx82N1Rd/MOa6cFuqXcn6SbIGcbi5znSiVoARZk/tWRmh6D5PBKbM9WXdbCODuPW5A7StfUY3gsJ0ZZGvDE3pXT3n1ZiLAoQWxizUHW0uzwXnNC8PnUc/p6BrcV6tBVhjreht7tWVmnRlfkwCb1oilvEnXGhj7sOePTC2iLj5eyUBczlFod5+7nKXgZsRuIxTRgKzQ7zfDoH3jHOaGZDWvoALpJZpILVYcLQRVEEDAAXZR8uXevPrPzUIdozuVepw7n9BJKuQmzT+EGDjm6shn+tEba/W13zmFnuMJNdYhRhiruF0FitrKTZZ9zVzGqibY9LmxLlMpdBcc9gdgZvjghZ0xn6JoCv94lWaofCvIFmOoAU+YCjjN1tUHF33FKku0coTCxJ2XS4bLLFBRtq82TIXdqjfd3ODyNlhgDh8FHlvhKT6IwZmu3TxIvZuqJLYp1TdvkpSvowTPmoLsNhAvq2HKsdGgD9tkTRUYa3/9R9NF4EKU6aA+xUGXbrKKDUlWfXwn4UDwD+2DwEGADLQOVGk3wbqAAAAAElFTkSuQmCC" class="van-image__img"></div></div>
    </div>
    <FooterBarVue  class="footer"></FooterBarVue>
  </div>
</template>

<script>
import FooterBarVue from '@/components/FooterBar.vue';
export default {
  name:"My",
  components:{
    FooterBarVue
  },
  methods:{
     goLogin(){
      this.$router.push("/Reg")
     }
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
    position: relative;
  }
  .content{
    flex:1;
    overflow: auto;
  }
  .zhuce{
    position: absolute;
    right: .3125rem;
    top: .3125rem;
  }
  .geren{
    width: 100%;
    height: 3.75rem;
    text-align: center;
    border-bottom: 1px solid black;
  }
  .geren p{
    line-height: 3.75rem;
  }
  .login{
    width: 100%;
    height:6.25rem;
    background-color:pink;
    float: left;
  }
  .photo{
    margin-top: .625rem;
    margin-left: .625rem;
    width:5rem;
    height:5rem;   
    float: left;
  }
  .photo img{
    border-radius: 50%;
  }
  .login p{
    margin-left: 6.5rem;
    margin-top: 35px;
  }
  .van-grid {
    display: flex;
    flex-wrap: wrap;
    width:100%;
    height: 6.25rem;
  }
.van-hairline, .van-hairline--top, .van-hairline--left, .van-hairline--right, .van-hairline--bottom, .van-hairline--surround, .van-hairline--top-bottom {
    position: relative;
}

element.style {
    flex-basis: 25%;
}
.van-grid-item {
    position: relative;
    box-sizing: border-box;
}
.logo img{
    margin-top: 3.125rem;
    margin-left: 9.375rem;
    width: 3.125rem;
}
</style>
<template>
  <div class="home-container">
    <!-- <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in banners" :key="index">
        <img :src="item.img" alt>
      </mt-swipe-item>
    </mt-swipe> -->
    <swiper :banners="banners" fullsec="true"></swiper>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link  to="/home/newsList">
          <img src="../../assets/menu1.png" alt>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link href="#" to="/home/photoList">
      	<img src="../../assets/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link href="#" to="home/goodList">
         	<img src="../../assets/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
    	<img src="../../assets/menu4.png" alt="">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
         	<img src="../../assets/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
         	<img src="../../assets/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      banners: []
    };
  },
  created() {
    this.getBanner();
  },
  methods: {
    getBanner() {
      this.$http.get("http://www.lovegf.cn:8899/api/getlunbo").then(result => {
        console.log(result.body);
        this.banners = result.body.message;
      });
    }
  }
};
</script>
<style lang="less">
.home-container {
  .mint-swipe {
    height: 200px;
    .mint-swipe-item {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .mui-table-view{
 .mui-table-view-cell{
     border: none;
       img{
      width: 80%;
      height: 100%;
    }
      .mui-media-body{
      font-size: 13px  !important;
    }
 }
    
  
  }
}
</style>
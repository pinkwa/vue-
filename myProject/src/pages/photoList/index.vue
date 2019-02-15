<template>
  <div class="photoList-containt">
    <div class="mui-content">
      <div id="slider">
        <div
          id="sliderSegmentedControl"
          class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
        >
          <div class="mui-scroll">
            <a
              :class="['mui-control-item',{'mui-active':item.id==0}]"
              href="#item1mobile"
              data-wid="tab-top-subpage-1.html"
              v-for="item in categories"
              :key="item.id"
              @click="getList(item.id)"
            >{{item.title}}</a>
          </div>
        </div>
      </div>
    </div>

    <!-- 图文列表区域 -->
    <div class="photo-list">
      <ul>
        <router-link v-for="item in  photoList" :key="item.id" tag="li" :to="'/home/photoInfo/'+item.id">
          <img v-lazy="item.img_url">
          <div class="list-info">
            <div class="list-title">{{item.title}}</div>
            <div
              class="list-body"
            >{{item.zhaiyao}}</div>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
import mui from "@/libs/mui/js/mui.js";
// 导入之后报错是因为在严格模式下不支持mui里面相应的方法，需要在bable下取消相应的严格模式
mui(".mui-scroll-wrapper").scroll({
  deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
export default {
  data() {
    return {
      categories: [],
      photoList:[],

    };
  },
  created() {
    this.getCategories();
    this.getList(0)

  },
  methods: {
    getCategories() {
      this.$http.get("getimgcategory").then(result => {
        this.categories = result.body.message;
        this.categories.unshift({
          id: 0,
          title: "全部"
        });
      });
    },
    getList(cateid){
        this.$http.get('getimages/'+cateid).then(result=>{
        console.log(result.body)
        this.photoList=result.body.message
        })
    }
  }
};
</script>
<style lang="less">
.photoList-containt {
  .photo-list {
    ul {
      li {
          background: #ccc;
          margin: 5px;
          position: relative;
          box-shadow: 0,0,9,#999;
        img {
          width: 100%;
          height: 100%;
        }
        image[lazy="loading"] {
          width: 40px;
          height: 300px;
          margin: auto;
        }
        .list-info{
           max-height: 80px;
            position: absolute;
            bottom: 0;
            color: white;
            text-align: left;
            background: rgba(0, 0,0, 0.4)
        }
        .list-title{
            font-size: 14px
        }
        .list-body{
            font-size: 13px
        }
      }
    }
  }
}
</style>;
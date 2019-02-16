<template>
  <div class="photointo-contain">
    <h3>{{photoInfo.title}}</h3>
    <p>
      <span>发表时间：{{photoInfo.add_time |dateFormat}}</span>
      <span>点击次数：{{photoInfo.click}}</span>
    </p>
    <!-- 缩略图区域 -->
    <div class="thumbs">
      <img
        class="preview-img"
        v-for="(item, index) in list"
        :key="index"
        :src="item.src"
        height="100"
        @click="$preview.open(index, list)"
      >
    </div>
    <div v-html="photoInfo.content" class="content"></div>
     <!-- <mt-button type="danger" size="large" @click="addMore">加载更多</mt-button>  -->
    <!-- <mt-button type="danger" size="large">发表评论</mt-button> -->
    <p>发表评论</p>
    <br>
    <comment :id="id"></comment>
  </div>
   <!-- <comment> -->
    
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id, //从路由中获取图片的id
      photoInfo: {},
      list: []
    };
  },
  created() {
    this.photoInfoList();
    this.photoImg();
  },
  methods: {
    photoInfoList() {
      this.$http.get("getimageInfo/" + this.id).then(result => {
        console.log(result.body);
        this.photoInfo = result.body.message[0];
      });
    },
    photoImg() {
      this.$http.get("getthumimages/" + this.id).then(result => {
        if (result.body.status == 0) {
          result.body.message.forEach(item => {
            item.w = 600;
            item.h = 400;
          });
          this.list = result.body.message;
        }
      });
    }
  }
};
</script>
<style lang="less">
.photointo-contain {
  h3 {
    font-size: 14px;
    color: #26a2ff;
    text-align: center;
    margin: 15px 0;
  }
  p {
    display: flex;
    justify-content: space-between;
  }
  .content{
      font-size: 14px;
      line-height: 30px;
  }
  p{
      font-size: 18px;
      margin: 5px;
      line-height: 1;
      
  }
}
</style>

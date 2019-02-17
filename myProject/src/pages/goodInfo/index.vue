<template>
  <div class="good-info-cointain">
    <!-- 小球动画 -->
    <transition 
    v-on:before-enter="beforeEnter" 
    v-on:enter="enter"
     v-on:after-enter="afterEnter">
      <div class="ball" ref="ball" v-show="isBall"></div>
    </transition>
    <!-- 轮播图 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :banners="goodInfo"></swiper>
        </div>
      </div>
    </div>
    <!-- 商品详情 -->
    <div class="mui-card">
      <div class="mui-card-header">{{goodShop.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="price">
            <span>市场价：￥{{goodShop.market_price}}</span>
            <span>销售价：￥{{goodShop.sell_price}}</span>
          </div>
          <div class="good-num">
            <span>购买数量:</span>
            <input type="button" value="-" @click="buyCount>1 &&buyCount--" :disabled="buyCount==1">
            <input type="text" value="1" v-model="buyCount" @change="getBuyTex">
            <input
              type="button"
              value="+"
              @click="buyCount<goodShop.stock_quantity &&buyCount++"
              :disabled="buyCount===goodShop.stock_quantity"
            >
          </div>
          <mt-button type="danger" size="small">立即购买</mt-button>
          <mt-button type="primary" size="small" @click="addShop">加入购物车</mt-button>
        </div>
      </div>
    </div>
    <!-- 商品购买 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号{{goodShop.goods_no}}</p>
          <p>库存情况:{{goodShop.stock_quantity}}</p>
          <p>上架时间{{goodShop.add_time|dateFormat}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
            <mt-button type="danger" size="large" plain @click="goodsDesc(id)">图文介绍</mt-button>
          <mt-button type="primary" size="large" plain @click="goodsComment(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      buyCount: 1,
      isBall:false,
      // id:this.$route.params.id,
      goodInfo: [],
      goodShop: {}
    };
  },
  created() {
    this.getgoodInfo();
    this.getgoodShop();
  },
  methods: {
    getgoodInfo() {
      this.$http.get("getthumimages/" + this.id).then(result => {
        this.goodInfo = result.body.message;
      });
    },
    getgoodShop() {
      this.$http.get("goods/getinfo/" + this.id).then(result => {
        this.goodShop = result.body.message[0];
      });
    },
    getBuyTex() {
      // console.log("我被修改了")
      if (this.buyCount > this.goodShop.stock_quantity) {
        this.buyCount = this.goodShop.stock_quantity;
      }
    },
    addShop(){
        this.isBall=!this.isBall
    },
    goodsDesc(id){
        console.log(111)
        this.$router.push("/home/goodsDesc/"+id)
    },
    goodsComment(id){
       this.$router.push("/home/goodsComment/"+id)
    },
      beforeEnter: function (el) {
    // ...开始的位置
    el.style.transform='translate(0,0)'
  },
  // 当与 CSS 结合使用时
  // 回调函数 done 是可选的
  enter: function (el, done) {

    //   这里动画的距离是固定的但是我们切换屏幕尺寸时会影响小球的滚动所以我们需要自己获得小球开始的offset和结束的offfset
    //   所以要用到domObject.getBoundingClientRect这里我们需要操作dom对象才能获距离
       

    // 小球开始的位置
    const ballPosition=this.$refs.ball.getBoundingClientRect()
    // 获得购物车的距离
    const carPosition=document.getElementById('badge').getBoundingClientRect()
    const xDlist=carPosition.left-ballPosition.left
    const yDlist=carPosition.top-ballPosition.top
    // ...
    el.offsetWidth
    //结束的位置
    el.style.transform=`translate(${xDlist}px,${yDlist}px)`;
    el.style.transition = "all 0.6s cubic-bezier(.4,-0.3,1,.68)";
    done()
  },
  afterEnter: function (el) {
    // ...
    this.isBall=!this.isBall;
  },
  }
};
</script>
<style lang="less">
.good-info-cointain {
  //  position: relative;
  background-color: #eee;
  overflow: hidden;
  .mui-card-content-inner {
    background: #fff;
   
  }
  .mui-card {
    margin: 0;
    padding: 0;
    .mui-card-header {
    }
    .good-num {
      display: flex;
      align-items: center;
      height: 50px;
      input {
        font-size: 12px;
        color: gray;
        width: 30px;
        height: 30px;
        text-align: center;
        margin: 0;
        padding: 0;
      }
    }
    .mui-card-footer{
        display: block;
     button{
         margin: 15px 0;
     }
    }
  }
  .ball {
    position: absolute;
    z-index: 99;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: red;
    top: 390px;
    left: 146px;
  }
}
</style>

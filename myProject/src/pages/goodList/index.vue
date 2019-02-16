<template>
  <div class="good-list">
    <router-link class="good-item" :to="'/home/goodInfo/'+item.id" v-for="item in getDoodList" :key="item.id">
      <img :src="item.img_url" alt>
      <h3>{{item.title}}</h3>
      <div class="good-info">
        <div class="good-sprice">
          <span class="new">{{item.sell_price}}</span>
          <span class="old">{{item.market_price}}</span>
        </div>
        <div class="good-sell">
          <span class="hoot">热卖中</span>
          <span class="numCount">剩余：{{item.stock_quantity}}</span>
        </div>
      </div>
    </router-link>
    <mt-button type="danger" size="large" @click="getMore()">加载更多</mt-button> 
  </div>
</template>
<script>
export default {
  data() {
      return {
          pageindex:1,
          getDoodList:[],
      }
  },
  created() {
      this.goodList()
    //   this.getMore()
  },
  methods: {
      goodList(){
        this.$http.get("getgoods?pageindex="+this.pageindex).then(result=>{
            // console.log(result)
            this.getDoodList=this.getDoodList.concat(result.body.message)
            console.log(this.goodList)
        })
      },
      getMore(){
        this.pageindex++
        this.goodList()
      }
  },
    
};
</script>
<style lang="less">
.good-list {
  padding: 7px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .good-item {
    border: 1px solid #ccc;
    padding: 2px;
    margin: 4px 0;
    width: 49%;
    box-shadow: 0, 0, 8, #ccc;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
      width: 100%;
    }
    h3 {
      line-height: 1;
      margin-top: 5px;
      margin-bottom: 5px;
      font-size: 14px;
    }
    .good-info {
      background: #eee;
    .new {
      font-size: 16px;
      font-weight: bold;
      color: red;
      margin: 0 2px;
    }
    .old {
      text-decoration: line-through;
      font-size: 12px;
      margin: 8px;
      color: #8f8f94;
    }
    }
  .good-sell{
      margin-top: 10px;
      font-size: 12px;
      color: #8f8f94;
      display: flex;
      justify-content: space-between;
       .hoot{

       }
  }
  
  }
}
</style>


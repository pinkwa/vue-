<template>
    <div class="cmt-containt">
        <h3>发表评论</h3>
        <br>
        <textarea v-model="commontContent" placeholder="请输入你要bb的内容(最多不能超过120字) " maxlength="120"></textarea>
        <mt-button type="primary" size="large" @click="postCommont">发表评论</mt-button>
        <div class="cmt-list">
          <div class="cmt-item" v-for="(item,i) in getCommon" :key="i">
           <div class="cmt-title">
               第{{i+1}}楼 &nbsp;&nbsp;用户：{{item.user_name}} 发表时间:{{item.add_time |dateFormat}}
           </div>
           <div class="cmt-body">
          {{ item.content===''?'此用户很懒，什么都没写':item.content}}
           </div>
          </div>
        </div>
        <mt-button type="danger" size="large" @click="addMore">加载更多</mt-button> 
    </div>
</template>
<script>
import {Toast}from 'mint-ui'
export default {
    data(){
        return {
         getCommon:[],
          pageIndex:1,
          commontContent:''
        }
    },
    created() {
         this.getList()
    },
 
    methods: {
        getList(){
          this.$http.get("getcomments/" + this.id + "?pageindex=" + this.pageIndex).then(result=>{
            //   console.log(result.body.message,)
              this.getCommon=this.getCommon.concat(result.body.message)
          })
        },
        addMore(){
            this.pageIndex++;
            this.getList()
        },
    postCommont(){
      if(this.commontContent.trim().length===0) return Toast("不能输入空奥")

        this.$http.post('postcomment/'+this.id,{content:this.commontContent})
        .then(result=>{
            console.log(result.body)
            Toast(result.body.message)
            this.getCommon=[]
           this.getList()
           this.pageIndex=1
           this.commontContent=''

        })
    }
    },
       props:['id']
}
</script>
<style lang="less">
 .cmt-containt{

 textarea{
     font-size: 14px;
 }
     .cmt-list{
         padding: 5px;
      .cmt-item{
          font-size: 13px;
      .cmt-title{
          background: #ccc;
          line-height: 35px
      }
      .cmt-body{
         text-indent:2em;
         line-height: 30px;

      }
      }

     }
 }
</style>

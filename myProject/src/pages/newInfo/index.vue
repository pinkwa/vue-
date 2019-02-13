<template>
    <div class="new-info-content">
        <!-- <p>{{id}}</p> -->
           <h1>{{newInfo.title}}</h1>
                <p class='mui-ellipsis'>
                    <span>发表时间：{{newInfo.add_time | dateFormat}}</span>
                    <span>点击：{{newInfo.click}}</span>
                </p>
             <br>
    <div v-html="newInfo.content"></div>
    </div>
</template>
<script>
export default {
    data(){
        return {
              id: this.$route.params.id,
            newInfo:{}
        }
    },
    created() {
      this.getNewInfo()  
    },
    methods: {
        getNewInfo(){
            this.$http.get('getnew/' +this.id).then(result=>{
                console.log(result.body.message)
                this.newInfo=result.body.message[0]
            })
        }
    },
}
</script>
<style lang="less">
.new-info-content{
    h1{
        font-size: 14px;
        text-align: center;
        color: red;
    }
    .mui-ellipsis{
        padding: 0 4px;
        display: flex;
        font-size: 12px;
        justify-content: space-between;
    }
}
</style>

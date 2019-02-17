 <template>
    <div class="goodsDesc-containt">
        <h3>{{getgoodsDesc.title}}</h3>
        <br>

        <div v-html="getgoodsDesc.content" class="content">

        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
                // id: this.$route.params.id,
                getgoodsDesc:{}
        }
    },
    created() {
        this.goodsDesc()
    },
    methods: {
        goodsDesc(){
            this.$http.get('goods/getdesc/'+this.$route.params.id).then(result=>{
              this.getgoodsDesc=result.body.message[0]
            })
        }
    },
    
}
</script>
<style lang="less">
.goodsDesc-containt{
    padding: 5px;
    h3{
        font-size: 16px;
        color: #226aff;
        text-align: center;

    }
    .content{
        img{
            width: 100%;
            height: 100%。。。。。。。。。。;
        }
    }
}
</style>

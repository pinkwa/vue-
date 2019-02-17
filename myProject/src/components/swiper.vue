<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in banners" :key="index">
       <a :href="item.url">
          <img :class="{full:fullsrc}" :src="item.img || item.src">
        </a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
 props:['banners','fullsrc']
}
</script>
<style lang="less" scoped>
.mint-swipe {
    height: 200px;
    .mint-swipe-item {
      text-align: center;
      img {
        height: 100%;
      }
      img.full{
        width: 100%
      }
    }
}
</style>
<template>
  <div class="goods-row">
    <div class="goods-img">
      <img :src="goodsRow.cover" alt="" />
    </div>
    <div class="goods-next">
      <div class="goods-title">
        {{ goodsRow.title }}
      </div>
      <div class="goods-buy">
        <div class="goods-price">
          <span>¥</span>
          {{ ((goodsRow.price || 0) / 100)?.toFixed(2) }}
        </div>
        <div class="goods-tobuy" @click="onTapBuyGoods">
          {{ $t('common.立即购买') }}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  goodsRow: {
    type: Object,
    default: () => ({}),
  },
})
const onTapBuyGoods = () => {
  let param = {
    timestamp: Date.now(),
    type: 'buyGoods',
    data: {
      // 商品id 可为空
      id: props.goodsRow.id,
      /// 商品 url 地址
      url: props.goodsRow.url,
      goods: props.goodsRow,
    },
  }
  let paramString = JSON.stringify(param)
  //@ts-ignore
  JSCallNative.postMessage(paramString)
}
</script>
<style lang="scss" scoped>
.goods-row {
  box-shadow: 0px 4px 12px 0px #0000000f, 0px -4px 12px 0px #0000000f;
  width: 100%;
  height: 7rem;
  border-radius: 12px;
  padding: 12px 10px;
  display: flex;
  .goods-next {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .goods-img {
    width: 5.5rem;
    height: 5.5rem;
    overflow: hidden;
    border-radius: 0.5rem;
    margin-right: 14px;
    > img {
      width: 100%;
      object-fit: cover;
    }
  }
  .goods-title {
    font-size: 14px;
    font-weight: 500;
    color: #4f4f4f;
    line-height: 22px;
    margin-bottom: 14px;
  }
  .goods-buy {
    width: 100%;
    height: 26px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .goods-price {
      color: #ff6b17;
      font-size: 24px;
      font-weight: 500;
      > span {
        font-size: 14px;
        margin-right: 2px;
      }
    }
    .goods-tobuy {
      width: 88px;
      height: 26px;
      border-radius: 35px;
      text-align: center;
      line-height: 26px;
      color: white;
      background: #ff6b17;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
    }
  }
}
</style>

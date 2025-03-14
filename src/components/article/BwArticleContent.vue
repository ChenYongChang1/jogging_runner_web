<template>
  <div class="article-content-box" v-html="content"></div>
</template>

<script lang="ts" setup>
defineProps({
  content: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss">
.article-content-box {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  li,
  ol,
  p,
  span {
    font-size: revert;
    margin: revert;
    padding: revert;
    font-weight: revert;
  }
  ul,
  ol,
  li {
    list-style: revert;
  }
}
</style>

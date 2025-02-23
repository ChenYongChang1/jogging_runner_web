<template>
  <img
    v-if="mediaType === MediaType.image"
    src="@/assets/images/image.png"
    class="tw-w-full tw-object-contain"
    alt=""
  />
</template>

<script lang="ts" setup>
defineOptions({ name: "BwMedia" });
const props = defineProps({
  src: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "",
  },
});
enum MediaType {
  "image" = "image",
  "video" = "video",
}
const mediaTypeEnum: { [k: string]: string[] } = {
  [MediaType.image]: ["jpg", "png", "jpeg", "svg", "gif"],
  [MediaType.video]: ["mp4"],
};
const mediaType = computed(() => {
  const [srcContent = ""] = props.src.split("?");
  const pointSplit = srcContent.split(".");
  const suffix = pointSplit.pop() || "";
  const type = Object.keys(mediaTypeEnum).find((index) => {
    const medias = mediaTypeEnum[index] || [];
    return medias.includes(suffix);
  });
  return props.type || type;
});
</script>

<style lang="scss" scoped></style>

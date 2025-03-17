<template>
  <div class="tw-overflow-hidden">
    <img
      v-if="mediaType === MediaType.image"
      :src="src"
      loading="lazy"
      class="tw-w-full tw-object-contain tw-rounded-[8px] common-media hover:tw-scale-[1.1]"
      :alt="alt"
    />
    <img
      v-else-if="mediaType === MediaType.video"
      :src="src"
      loading="lazy"
      class="tw-w-full tw-object-contain tw-rounded-[8px] video common-media hover:tw-scale-[1.1]"
      :alt="alt"
    />
  </div>
  <!-- <video
    v-else-if="mediaType === MediaType.video"
    class="tw-w-full tw-object-contain tw-rounded-[8px]"
    controls
  >
    <source :src="src" type="video/mp4" />
  </video> -->
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
  alt: {
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

<style lang="scss" scoped>
.common-media {
  transition: transform 0.3s;
  transform-origin: center;
}
</style>

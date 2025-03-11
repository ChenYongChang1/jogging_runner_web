<template>
  <div class="bwList tw-mx-auto">
    <div
      class="bw-list-main dd-container-list"
      v-loading="loading"
    >
      <bw-list-main :tableList="tableList" />
    </div>
    <div class="tw-flex tw-justify-end tw-mt-[42px] max-md:tw-mt-[24px]">
      <BwPagination
        :current-page="currentPage"
        :page-count="totalPage"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, defineExpose, ref } from "vue";
import { getSearchInfo } from "~/composables/api/home";
interface TableListItem {
  id: string;
  cover: string;
  isVideo: number;
  visitNum?: number;
  title?: string;
  desc?: string;
  [key: string]: string | number | undefined; // 添加number类型到索引签名
}
const props = defineProps({
  searchValue: {
    type: String,
    required: false,
    default: "",
  },
});
const tableList = ref<TableListItem[]>([]);
const totalPage = ref<number>(0); // 总页数
const currentPage = ref<number>(1);
const loading = ref<boolean>(false); // 添加 loading 状态

const getList = async () => {
  loading.value = true; // 请求开始时设置 loading

  try {
    const data = await getSearchInfo({
      page: currentPage.value,
      alias: "",
      keyword: props.searchValue,
    }, { ssr: typeof window !== "undefined" });

    totalPage.value = data?.totalPage;
    currentPage.value = data?.page;
    tableList.value = data?.list;
  } catch (e) {
    console.log(e);
  } finally {
    loading.value = false; // 请求结束后关闭 loading
  }
};

// 处理页码变化
const handleCurrentChange = (newPage: number) => {
  currentPage.value = newPage;
  getList();
};
const router = useRouter();
const linkToInfo = (item: TableListItem) => {
  const href = getRouteLink(`/post/${item.id}.html`);
  navigateTo(href);
};
// useFetch()
getList();
// 暴露getList方法供父组件调用
// defineExpose({
//   getList,
// });
</script>

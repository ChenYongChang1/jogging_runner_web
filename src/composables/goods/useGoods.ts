import { render, createVNode } from "vue";
import BwGoodsRow from "./BwGoodsRow.vue";
export const genreContent = (text: string, goodsList: any[]) => {
  const goodsMap: { [k: string]: any } = {};
  let count = 0;
  const content = text.replace(/##insert_goods##/g, () => {
    const className = `goods-${count}`;
    goodsMap[className] = goodsList[count++];
    if (count > goodsList.length) {
      count = 0;
    }
    return `<div class="${className}"></div>`;
  });
  setTimeout(() => {
    for (const className in goodsMap) {
      const dom = document.querySelector(`.${className}`);
      const instance = createVNode(BwGoodsRow, {
        goodsRow: goodsMap[className],
      });
      render(instance, dom!);
    }
  });
  return content;
};

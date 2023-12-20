<template lang="pug">
q-page(padding)
  q-table(:rows="processedCartItems" :columns="columns")
</template>

<script>
import { computed } from "vue";
import { useMeta } from "quasar";
import { useI18n } from "vue-i18n";

export default {
  name: "CartPage",
  props: {
    courseItems: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    cartItems: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  setup(props) {
    const { t } = useI18n();

    // 處理購物車項目，加入來自 courseItems 的額外信息
    const processedCartItems = computed(() => {
      return props.cartItems.map((item) => {
        const course = props.courseItems[item.cid];
        return {
          ...item,
          name: course ? t(course.title) : t("unknownProduct"), // 使用 t 函數翻譯商品名稱
          price: course ? course.max_price : 0, // 使用 course 的 max_price
          total: course ? course.max_price * item.count : 0, // 計算總價
        };
      });
    });

    // 定義表格的列
    const columns = [
      { name: "name", align: "left", label: t("productName"), field: "name" },
      { name: "price", align: "left", label: t("unitPrice"), field: "price" },
      { name: "quantity", align: "left", label: t("quantity"), field: "count" },
      {
        name: "total",
        align: "left",
        label: t("totalPrice"),
        field: "total",
      },
    ];

    useMeta(() => {
      return {
        title: t("cartTitle"),
      };
    });

    return {
      processedCartItems,
      columns,
    };
  },
};
</script>

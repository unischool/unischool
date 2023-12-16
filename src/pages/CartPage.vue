<template lang="pug">
q-page(padding)
  q-table
    <!--  https://quasar.dev/vue-components/table -->
</template>

<script>
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
      type: [Object], // [ {cid: "death_and_life", price: 250, count: 1}, ...
      required: true,
      default: () => ({}),
    },
  },
  setup() {
    const { t } = useI18n();
    useMeta(() => {
      return {
        title: "至青宇宙学校 - " + t("cart"),
      };
    });
  },
};
</script>

<template>
  <q-page padding>
    <!-- content -->
  </q-page>
</template>

<script>
import { useMeta } from "quasar";
import { useI18n } from "vue-i18n";
export default {
  name: "CartPage",
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

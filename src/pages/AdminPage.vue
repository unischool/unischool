<template lang="pug">
q-page.flex.flex-start-center(padding)
  q-btn(color="positive", size="xl", icon="account_circle", @click="$emit('try-login')") Login
</template>

<script>
import { useMeta } from "quasar";
import { useI18n } from "vue-i18n";
export default {
  name: "AdminPage",
  setup() {
    const { t } = useI18n();
    useMeta(() => {
      return {
        title: "至青宇宙学校 - " + t("admin"),
      };
    });
  },
};
</script>

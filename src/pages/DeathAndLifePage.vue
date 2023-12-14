<template lang="pug">
q-page.flex.flex-center(padding)
  .text-h6 {{ $t(courseItems[cid].title) }}
  p(v-html="$t(courseItems[cid].description)", v-if="courseItems[cid].useHTML")
  p(v-else) {{ $t(courseItems[cid].description) }}
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "IndexPage",
  props: ["courseItems"],
  setup() {
    return {
      cid: ref("death_and_life"),
    };
  },
});
</script>

<style scoped></style>

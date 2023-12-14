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
      cid: ref("life_art_elem"),
    };
  },
});
</script>

<style scoped></style>

<template>
  <q-page class="flex flex-center" padding>
    <div class="text-h6">{{ $t(courseItems[cid].title) }}</div>
    <p
      v-html="$t(courseItems[cid].description)"
      v-if="courseItems[cid].useHTML"
    ></p>
    <p v-else>
      {{ $t(courseItems[cid].description) }}
    </p>
  </q-page>
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

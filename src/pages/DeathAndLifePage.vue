<template>
  <q-page class="flex flex-center" padding>
    <div class="text-h6">{{ $t(courseItems[cid].title) }}</div>
    <p>
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
      cid: ref("death_and_life"),
    };
  },
});
</script>

<style scoped></style>

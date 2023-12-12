<template>
  <q-page class="flex flex-center" padding>
    <div class="text-h6 red">{{ $t(courseItems[cid].title) }}</div>
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
import { watch } from "vue";
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

export default defineComponent({
  name: "IndexPage",
  props: ["courseItems"],
  setup() {
    return {
      cid: ref('')),
    };
  },
  watch: {
    watch(
      () => route.params.cid,
      async newId => {
      this.cid = to.params.cid;
    },
  },
});
</script>

<style scoped>
.red {
  color: red;
}
</style>

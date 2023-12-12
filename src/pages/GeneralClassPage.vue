<template>
  <q-page class="flex flex-center" padding>
    <div class="text-h6 red">
      {{ $t(courseItems && courseItems[cid] && courseItems[cid].title) }}
    </div>
    <p v-if="courseItems && courseItems[cid] && !courseItems[cid].useHTML">
      {{ $t(courseItems && courseItems[cid] && courseItems[cid].description) }}
    </p>
    <p v-else v-html="$t(courseItems[cid].description)"></p>
  </q-page>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "IndexPage",
  props: ["courseItems"],
  setup() {
    const route = useRoute();
    const cid = computed(() => route.params.cid);
    return {
      cid,
    };
  },
  methods: {},
});
</script>

<style scoped>
.red {
  color: red;
}
</style>

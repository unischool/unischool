<template>
  <q-page id="c-page" class="flex flex-center">
    <div class="row">
      <div class="col-12">
        <div id="header" class="text-h6">
          {{ $t(courseItems && courseItems[cid] && courseItems[cid].title) }}
        </div>
        <p
          class="p-text"
          v-if="courseItems && courseItems[cid] && !courseItems[cid].useHTML"
        >
          {{
            $t(courseItems && courseItems[cid] && courseItems[cid].description)
          }}
        </p>
        <p v-else v-html="$t(courseItems[cid].description)"></p>
      </div>
    </div>
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
#header {
  color: rgb(68, 68, 68);
  font-weight: bold;
  font-size: 35px;
  margin: 0.6em 0;
  text-align: center;
}
</style>

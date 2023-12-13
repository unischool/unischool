<template>
  <q-page id="c-page" class="flex flex-start-center">
    <div class="fluid row">
      <q-tabs
        v-model="tab"
        dense
        align="justify"
        class="fluid bg-secondary text-white shadow-2"
        :breakpoint="0"
      >
        <q-tab name="info" icon="info" />
        <q-tab name="join" icon="shopping_cart" />
      </q-tabs>
    </div>
    <div class="row" v-show="tab == 'join'">
      <!--
        https://quasar.dev/vue-components/form
      -->
    </div>
    <div class="row" v-show="tab == 'info'">
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
import { defineComponent, computed, ref } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "IndexPage",
  props: ["courseItems"],
  setup() {
    const route = useRoute();
    const cid = computed(() => route.params.cid);
    return {
      cid,
      tab: ref("info"),
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

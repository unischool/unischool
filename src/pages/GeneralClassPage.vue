<template lang="pug">
q-page#c-page.flex.flex-start-center
  .fluid.row
    q-tabs.fluid.bg-secondary.text-white.shadow-2(v-model="tab", dense, align="justify", :breakpoint="0")
      q-tab(name="info", icon="info")
      q-tab(name="join", icon="shopping_cart")
  .row(v-show="tab == 'join'")
  .row(v-show="tab == 'info'")
    .col-12
      #header.text-h6 {{ $t(courseItems &amp;&amp; courseItems[cid] &amp;&amp; courseItems[cid].title) }}
      p.p-text(v-if="courseItems && courseItems[cid] && !courseItems[cid].useHTML")
        | {{
        | $t(courseItems &amp;&amp; courseItems[cid] &amp;&amp; courseItems[cid].description)
        | }}
      p(v-else, v-html="$t(courseItems[cid].description)")
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

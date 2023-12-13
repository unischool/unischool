<template lang="pug">
q-page#c-page.flex.flex-start-center
  .fluid.row
    q-tabs.fluid.bg-secondary.text-white.shadow-2(v-model="tab", dense, align="justify", :breakpoint="0")
      q-tab(name="info", icon="info")
      q-tab(name="join", icon="shopping_cart")
  .row.fluid(v-show="tab == 'join'")
    .col-12
      q-form.padding
        q-input(v-model="name", :placeholder="$t('enter_your_name')")
        q-input(v-model="phone", :placeholder="$t('enter_your_phone')")
        q-input(v-model="email", :placeholder="$t('enter_your_email')")
        q-input(type="number", v-model="price")
      .row
        .col-6
          q-btn.fluid(size="lg" color="negative", icon="arrow_back_ios", @click="tab='info'")
            | {{$t('goback')}} &nbsp;&nbsp;
          .col-6
  .row(v-show="tab == 'info'")
    .col-12
      #header.text-h6 {{ $t(courseItems &amp;&amp; courseItems[cid] &amp;&amp; courseItems[cid].title) }}
      p.p-text(v-if="courseItems && courseItems[cid] && !courseItems[cid].useHTML")
        | {{
        | $t(courseItems &amp;&amp; courseItems[cid] &amp;&amp; courseItems[cid].description)
        | }}
      p(v-else, v-html="$t(courseItems[cid].description)")
      .row
          .col-8
          .col-4
            q-btn.fluid(size="lg" color="positive", icon-right="send", @click="tab='join'")
             | {{$t('join')}} &nbsp;&nbsp;
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
      name: ref(""),
      phone: ref(""),
      email: ref(""),
      price: ref(1500),
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

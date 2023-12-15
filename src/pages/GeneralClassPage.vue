<template lang="pug">
q-page#c-page.flex.flex-col.flex-start-center.full-height
  .fluid.row
    q-tabs.fluid.bg-secondary.shadow-2(v-model="tab", dense, align="justify", :breakpoint="0")
      q-tab.text-accent.bigger(name="info", icon="info")
      q-tab.text-primary(name="join", icon="shopping_cart")
  .row.fluid(v-if="courseItems[cid]", v-show="tab == 'join'")
    .col-12
      q-form.padding.shadow
        q-input.required(rounded, outlined, v-model="name", :placeholder="$t('enter_your_name')")
        .small-space
        q-input.required(rounded, outlined, v-model="wechat", :placeholder="$t('enter_your_wechat')")
        .small-space
        q-input.required(rounded, outlined, v-model="phone", :placeholder="$t('enter_your_phone')")
        .small-space
        q-input.optional(rounded, outlined, v-model="email", :placeholder="$t('enter_your_email')")
        .small-space
        q-input.optional(rounded, outlined, v-model="address", :placeholder="$t('enter_your_address')")
        .small-space
        q-select.required(rounded, outlined v-model="group" :options="group_options" :label="$t('enter_your_group')")
        .small-space
        q-input.required(rounded, outlined, readonly, type="number", v-model="courseItems[cid].price")
        .small-space
        q-input.optional(rounded, outlined, v-model="comment", :placeholder="$t('enter_your_comment')")
  .filler(v-show="tab == 'join'")
  .row.fluid(v-if="courseItems[cid]", v-show="tab == 'join'")
      q-btn-group.flex.flex-rwd.flex-rwd-reverse.fluid
        q-btn.fluid(size="lg" inversed  color="primary", icon="arrow_back_ios", @click="tab='info'")
          | {{$t('go_back')}} &nbsp;&nbsp;
        q-btn.fluid(size="lg" inversed color="accent", icon-right="shopping_cart", to="/cart")
          | {{$t('add_to_cart')}} &nbsp;&nbsp;
  .filler(v-show="tab == 'info'")
  .row(v-show="tab == 'info'")
    .col-12
      #header.text-h6 {{ $t(courseItems && courseItems[cid] && courseItems[cid].title) }}
      p.p-text(v-if="courseItems && courseItems[cid] && !courseItems[cid].useHTML")
        | {{
        | $t(courseItems && courseItems[cid] && courseItems[cid].description)
        | }}
      p.p-text(v-else, v-html="$t(courseItems[cid].description)")
      .row
        .col-12
          q-btn.fluid(size="lg" color="positive", icon-right="send", @click="tab='join'")
            | {{$t('join_us')}} &nbsp;&nbsp;
</template>

<script>
import { defineComponent, computed, ref } from "vue";
import { useRoute } from "vue-router";
import { useMeta } from "quasar";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "IndexPage",
  props: {
    courseItems: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  setup(props) {
    const { t } = useI18n();
    const route = useRoute();
    const cid = computed(() => route.params.cid);
    useMeta(() => {
      console.log(cid.value);
      console.log(props.courseItems[cid.value]);
      // compute or reference other stuff
      // in your component
      // then return:
      if (!props.courseItems || !props.courseItems[cid.value]) {
        return {
          title: "至青宇宙学校",
          /* meta config */
        };
      } else {
        return {
          title: "至青宇宙学校" + " - " + t(props.courseItems[cid.value].title),
          /* meta config */
        };
      }
    });
    return {
      cid,
      tab: ref("info"),
      name: ref(""),
      wechat: ref(""),
      phone: ref(""),
      email: ref(""),
      price: ref(1500),
      address: ref(""),
      comment: ref(""),
      group: ref(""),
      group_options: ref([
        { label: "Group 1", value: "group1" },
        { label: "Group 2", value: "group2" },
        { label: "Group 3", value: "group3" },
        { label: "Group 4", value: "group4" },
        { label: "Group 5", value: "group5" },
        { label: "Group 6", value: "group6" },
        { label: "Group 7", value: "group7" },
        { label: "Group 8", value: "group8" },
        { label: "Group 9", value: "group9" },
        { label: "Group 10", value: "group10" },
      ]),
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
  line-height: 1.62em;
  text-align: center;
}
.shadow {
  background-color: white;
  /* border-radius: 10px; */
  box-shadow: 5px 5px 5px rgb(187, 187, 187);
}

.bigger {
  font-size: 3rem !important;
}
</style>

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
      // console.log(cid.value);
      // console.log(props.courseItems[cid.value]);
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
      customPrice: ref(
        (props.courseItems &&
          props.courseItems[cid.value] &&
          props.courseItems[cid.value].max_price) ||
          350
      ),
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

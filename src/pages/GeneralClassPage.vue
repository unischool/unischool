<template>
  <q-page class="flex flex-center" padding>
    <div class="text-h6">
      {{ $t(courseItems && courseItems[cid] && courseItems[cid].title) }}
    </div>
    <p
      class="p-text"
      v-if="courseItems && courseItems[cid] && !courseItems[cid].useHTML"
    >
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
.text-h6 {
  color: rgb(68, 68, 68);
  font-weight: bold;
  font-size: 35px;
  margin: 20px;
}
.flex {
  background: linear-gradient(to bottom, #fff2c0, #ffd9d9);
}
.p-text {
  background-color: #fcffed;
  border-radius: 10px;
  padding: 10px;
  padding-top: 0px;
  line-height: 35px;
  box-shadow: 5px 5px 5px rgb(187, 187, 187);
}
</style>
